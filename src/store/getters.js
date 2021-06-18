import dayjs from 'dayjs';

export default {
    getPlantCount(state) {
        let array = [];
        for (let i = state.plant[0].plantId; i <= 15; i++) {
            let name = i > 0 && i < 10 ? 'Plant 0' + i : 'Plant ' + i;
            array.push(name);
        }

        return array;
    },

    getUsername(state) {
        return state.account[0].username;
    },

    getMeterDetails(state) {
        return state.account[0].location;
    },

    getMachineOperation(state) {
        let array = [];
        array.push(state.overallMachineCalculation.machineInOperation);
        array.push(
            state.overallMachineCalculation.totalMachines -
                state.overallMachineCalculation.machineInOperation
        );
        return array;
    },

    getTotalMachine(state) {
        return state.overallMachineCalculation.totalMachines;
    },

    getMachineStatus(state) {
        let array = [];
        array.push(state.overallMachineCalculation.totalPlantNormalMachines);
        array.push(state.overallMachineCalculation.totalPlantCriticalMachines);
        array.push(state.overallMachineCalculation.totalPlantWarningMachines);
        return array;
    },

    getCurrentSelectedPlant(state) {
        return state.selectedPlant;
    },

    getCurrentSelectedPlantMachine(state) {
        return state.selectedPlantMachine_HeatMap;
    },

    getPlantMachineData(state) {
        return state.plant[0].data;
    },
    getPlantMachineID(state) {
        let machineId = [],
            normalPath = state.plant[0].data[0].machineData,
            warningPath = state.plant[0].data[1].machineData,
            criticalPath = state.plant[0].data[2].machineData;
        for (let i = 0; i < normalPath.length; i++) {
            let data =
                normalPath[i].id > 0 && normalPath[i].id < 10
                    ? '0' + normalPath[i].id
                    : normalPath[i].id;
            machineId.push('Machine ' + data);
        }
        for (let i = 0; i < warningPath.length; i++) {
            let data =
                warningPath[i].id > 0 && warningPath[i].id < 10
                    ? '0' + warningPath[i].id
                    : warningPath[i].id;
            machineId.push('Machine ' + data);
        }
        for (let i = 0; i < criticalPath.length; i++) {
            let data =
                criticalPath[i].id > 0 && criticalPath[i].id < 10
                    ? '0' + criticalPath[i].id
                    : criticalPath[i].id;
            machineId.push('Machine ' + data);
        }
        return machineId;
    },

    getPredictFactorKeys(state) {
        return Object.keys(state.plant[0].predictiveFactor);
    },

    getPredictedFactor(state) {
        return [
            {
                text: 'Machine ID',
                align: 'center',
                sortable: false,
                value: 'id',
                width: '7rem',
            },
            {
                text: state.plant[0].predictiveFactor['Vibrate'],
                value: 'vibrate',
                align: 'center',
                width: '5rem',
            },
            {
                text: state.plant[0].predictiveFactor['Temperature'],
                value: 'temp',
                align: 'center',
                width: '5rem',
            },
            {
                text: state.plant[0].predictiveFactor['Normalization Hit Count'],
                value: 'normalize',
                align: 'center',
                width: '5rem',
            },
            {
                text: state.plant[0].predictiveFactor['Energy Usage'],
                value: 'energy',
                align: 'center',
                width: '5rem',
            },
            // {
            //     text: state.plant[0].predictiveFactor['Energy Usage'],
            //     value: 'temporary',
            //     align: 'center',
            //     width: '5rem',
            // },
        ];
    },

    getPredictPlantMachine(state) {
        let arr = [];

        const getPath = (status) => {
            return state.plant[0].data
                .filter((data) => data.name === status)
                .map((data) => {
                    data.machineData.map((machine) => {
                        arr.push({
                            id:
                                machine.id > 0 && machine.id < 10
                                    ? 'Machine 0' + machine.id
                                    : 'Machine ' + machine.id,
                            vibrate:
                                machine.data.vibration != null &&
                                machine.data.vibration.percentage != null
                                    ? machine.data.vibration.percentage
                                    : '-',
                            temp:
                                machine.data.temperature != null &&
                                machine.data.temperature.percentage != null
                                    ? machine.data.temperature.percentage
                                    : '-',
                            normalize:
                                machine.data.normalize != null &&
                                machine.data.normalize.percentage != null
                                    ? machine.data.normalize.percentage
                                    : '-',
                            energy:
                                machine.data.electric != null &&
                                machine.data.electric.percentage != null
                                    ? machine.data.electric.percentage
                                    : '-',
                            temporary:
                                machine.data.temporary != null &&
                                machine.data.temporary.percentage != null
                                    ? machine.data.temporary.percentage
                                    : '-',
                        });
                    });
                });
        };

        getPath('Normal');
        getPath('Warning');
        getPath('Critical');

        return arr;
    },

    getMachineHeatmapData(state) {
        return (machine) => {
            let machineId = parseInt(machine.substr(8, 2)),
                timestamp,
                health,
                path = state.plant[0].data,
                machineData = {};

            for (let i = 0; i < path.length; i++) {
                for (let j = 0; j < path[i].machineData.length; j++) {
                    if (path[i].machineData[j].id === machineId) {
                        machineData = path[i].machineData[j].data.predictHealth;
                    }
                }
            }

            timestamp = machineData.timestamp * 1000;
            health = machineData.predictHealthScore;
            const date = dayjs(timestamp);
            const loopStart = date.subtract(1, 'year').startOf('month');

            // { 'Jan': [], 'Feb': [] ... 'Dec': [] }
            const dataObj = {};

            for (let current = loopStart; current.isBefore(date); current = current.add(1, 'day')) {
                const month = current.format('MMMM');
                if (!dataObj[month]) {
                    dataObj[month] = [];
                }
                const dow = current.isoWeekday() - 1; // monday is start of the week
                const x = current.startOf('isoWeek').valueOf(); // get monday time
                dataObj[month].push([x, dow, health, current.format('MMMM D, YYYY')]);
                health -= 0.07;
            }

            let v = Object.keys(dataObj).map((month) => ({
                month,
                data: dataObj[month],
            }));

            return Object.keys(dataObj).map((month) => ({
                month,
                data: dataObj[month],
            }));
        };
    },
    getFirstMachineCompare(state) {
        return state.firstMachineCompare;
    },
    getSecondMachineCompare(state) {
        return state.secondMachineCompare;
    },
    getComparisonData(state) {
        return (machineID, factor) => {
            let obj = {},
                arr = [];

            if (machineID.substr(0, 5) === 'Machine') {
                machineID = parseInt(machineID.substr(8, 2));

                let path = state.plant[0].data;
                for (let i = 0; i < path.length; i++) {
                    for (let j = 0; j < path[i].machineData.length; j++) {
                        if (path[i].machineData[j].id === machineID) {
                            obj = path[i].machineData[j].data;
                        }
                    }
                }
                switch (factor) {
                    case 1: //health
                        arr.push(obj.predictHealth.benchmark);
                        arr.push(obj.predictHealth.ytdScore);
                        break;
                    case 2: //vibration
                        arr.push(obj.vibration.benchmark);
                        arr.push(obj.vibration.ytdScore);
                        break;
                    case 3: //temp
                        arr.push(obj.temperature.benchmark);
                        arr.push(obj.temperature.ytdScore);
                        break;
                    case 4: //normalization
                        arr.push(obj.normalize.benchmark);
                        arr.push(obj.normalize.ytdScore);
                        break;
                    case 5: //electric
                        arr.push(obj.electric.benchmark);
                        arr.push(obj.electric.ytdScore);
                        break;
                }
            }
            return arr;
        };
    },
    getMachineSortByCategory(state) {
        return (category) => {
            let path = state.plant[0].data,
                arr = [];
            for (let i = 0; i < path.length; i++) {
                if (path[i].name === category) {
                    for (let j = 0; j < path[i].machineData.length; j++) {
                        let id =
                            path[i].machineData[j].id > 0 && path[i].machineData[j].id < 10
                                ? 'Machine 0' + path[i].machineData[j].id
                                : 'Machine ' + path[i].machineData[j].id;
                        arr.push(id);
                    }
                }
            }
            return arr;
        };
    },
    getCategoryThemeColor(state) {
        return (plantId, category) => {
            let path = state.plant[0],
                color = '';

            plantId = parseInt(plantId.substr(6, 2));

            if (path.plantId === plantId) {
                for (let i = 0; i < path.data.length; i++) {
                    if (path.data[i].name === category) {
                        color = path.data[i].themeColor;
                    }
                }
            }
            return color;
        };
    },
    getSelectedPlantMachine_GraphPage(state) {
        return state.selectedPlantMachine_GraphPage;
    },
    getDailyLineChart(state) {
        return (machine, graphName) => {
            let path = state.plant[0].data,
                machineId = parseInt(machine.substr(8, 2)),
                obj,
                xAxis = [],
                benchmark = [],
                yesterday = [],
                current = [];

            for (let i = 0; i < 24; i++) {
                if (i < 10) {
                    xAxis.push('0' + i + ':00');
                } else {
                    xAxis.push(i + ':00');
                }
            }

            graphName =
                graphName === 'Predicted Health'
                    ? 'predictHealth'
                    : graphName === 'Vibration'
                    ? 'vibration'
                    : graphName === 'Temperature'
                    ? 'temperature'
                    : graphName === 'Normalization Hit Count'
                    ? 'normalize'
                    : 'electric';

            for (let i = 0; i < path.length; i++) {
                for (let j = 0; j < path[i].machineData.length; j++) {
                    if (path[i].machineData[j].id === machineId) {
                        obj = path[i].machineData[j].data[graphName];
                    }
                }
            }

            for (let i = 0; i < xAxis.length; i++) {
                benchmark.push(obj.benchmark);
                yesterday.push(obj.ytdScore - (Math.floor(Math.random() * 401) + i));
                current.push(obj.ytdScore + (Math.floor(Math.random() * 401) + i));
            }

            return {
                benchmark: benchmark,
                yesterday: yesterday,
                current: current,
                xAxis: xAxis,
            };
        };
    },
    getWeeklyScatterLineChart(state) {
        return (machine, graphName) => {
            let path = state.plant[0].data,
                machineId = parseInt(machine.substr(8, 2)),
                obj,
                xAxis = [],
                x = 0,
                currentData = {},
                benchmark = [],
                current = [];
            // weekNo = 0;

            graphName =
                graphName === 'Predicted Health'
                    ? 'predictHealth'
                    : graphName === 'Vibration'
                    ? 'vibration'
                    : graphName === 'Temperature'
                    ? 'temperature'
                    : graphName === 'Normalization Hit Count'
                    ? 'normalize'
                    : 'electric';

            for (let i = 0; i < path.length; i++) {
                for (let j = 0; j < path[i].machineData.length; j++) {
                    if (path[i].machineData[j].id === machineId) {
                        obj = path[i].machineData[j].data[graphName];
                    }
                }
            }

            for (let i = 0; i < 53; i++) {
                benchmark.push(obj.benchmark);
                xAxis.push('Week ' + (i + 1));
                // for (let j = 0; j < 4; j++) {
                // weekNo += 1;
                currentData = {
                    x: x,
                    y: obj.ytdScore + (Math.floor(Math.random() * 100) + i),
                };
                x = Math.round((x + 1) * 10) / 10;
                // if (j === 3) x = Math.round((x + 0.2) * 10) / 10;

                current.push(currentData);
                // }
            }

            return {
                benchmark: benchmark,
                current: current,
                xAxis: xAxis,
            };
        };
    },
    getMonthlyHeatmapChart(state) {
        return (machine, graphName) => {
            let machineId = parseInt(machine.substr(8, 2)),
                obj = {},
                timestamp,
                percentage,
                path = state.plant[0].data;

            graphName =
                graphName === 'Predicted Health'
                    ? 'predictHealth'
                    : graphName === 'Vibration'
                    ? 'vibration'
                    : graphName === 'Temperature'
                    ? 'temperature'
                    : graphName === 'Normalization Hit Count'
                    ? 'normalize'
                    : 'electric';

            for (let i = 0; i < path.length; i++) {
                for (let j = 0; j < path[i].machineData.length; j++) {
                    if (path[i].machineData[j].id === machineId) {
                        obj = path[i].machineData[j].data[graphName];
                    }
                }
            }

            timestamp = obj.timestamp * 1000;
            percentage = (obj.ytdScore / obj.benchmark) * 100;

            const date = dayjs(timestamp);
            const loopStart = date.subtract(1, 'year').startOf('month');

            const dataObj = {};

            for (let current = loopStart; current.isBefore(date); current = current.add(1, 'day')) {
                const month = current.format('MMMM');
                if (!dataObj[month]) {
                    dataObj[month] = [];
                }
                const dow = current.isoWeekday() - 1; // monday is start of the week
                const x = current.startOf('isoWeek').valueOf(); // get monday time
                dataObj[month].push([x, dow, percentage, current.format('MMMM D, YYYY')]);
                percentage -= 0.07;
            }

            return Object.keys(dataObj).map((month) => ({
                month,
                data: dataObj[month],
            }));
        };
    },
};

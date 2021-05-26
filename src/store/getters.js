import dayjs from 'dayjs';

export default {
    getPlantCount(state) {
        let array = [];
        for (let i = state.plant[0].plantId; i <= 50; i++) array.push('Plant ' + i);

        return array;
    },

    getUsername(state) {
        return state.account[0].username;
    },

    getMeterDetails(state) {
        return state.account[0].location;
    },

    getMotorOperation(state) {
        let array = [];
        array.push(state.overallMotorCalculation.motorInOperation);
        array.push(
            state.overallMotorCalculation.totalMotors -
                state.overallMotorCalculation.motorInOperation
        );
        return array;
    },

    getTotalMotor(state) {
        return state.overallMotorCalculation.totalMotors;
    },

    getMotorStatus(state) {
        let array = [];
        array.push(state.overallMotorCalculation.totalPlantNormalMotor);
        array.push(state.overallMotorCalculation.totalPlantCriticalMotor);
        array.push(state.overallMotorCalculation.totalPlantWarningMotor);
        return array;
    },

    getCurrentSelectedPlant(state) {
        return state.selectedPlant;
    },

    getCurrentSelectedPlantMotor(state) {
        return state.selectedPlantMotor;
    },

    getPlantMotorData(state) {
        return state.plant[0].data;
    },
    getPlantMotorID(state) {
        let motorId = [],
            normalPath = state.plant[0].data[0].motorData,
            warningPath = state.plant[0].data[1].motorData,
            criticalPath = state.plant[0].data[2].motorData;
        for (let i = 0; i < normalPath.length; i++) {
            let data =
                normalPath[i].id > 0 && normalPath[i].id < 10
                    ? '0' + normalPath[i].id
                    : normalPath[i].id;
            motorId.push('Motor ' + data);
        }
        for (let i = 0; i < warningPath.length; i++) {
            let data =
                warningPath[i].id > 0 && warningPath[i].id < 10
                    ? '0' + warningPath[i].id
                    : warningPath[i].id;
            motorId.push('Motor ' + data);
        }
        for (let i = 0; i < criticalPath.length; i++) {
            let data =
                criticalPath[i].id > 0 && criticalPath[i].id < 10
                    ? '0' + criticalPath[i].id
                    : criticalPath[i].id;
            motorId.push('Motor ' + data);
        }
        return motorId;
    },

    getPredictedFactor(state) {
        return state.plant[0].predictiveFactor;
    },

    getPredictPlantMotor(state) {
        let arr = [],
            motorId,
            dataName,
            vibration,
            temp,
            normalize,
            electric;

        let normalPath = state.plant[0].data[0].motorData,
            warningPath = state.plant[0].data[1].motorData,
            criticalPath = state.plant[0].data[2].motorData;

        for (let i = 0; i < normalPath.length; i++) {
            dataName =
                normalPath[i].id > 0 && normalPath[i].id < 10
                    ? '0' + normalPath[i].id
                    : normalPath[i].id;

            motorId = 'Motor ' + dataName;
            vibration = normalPath[i].data.vibration.condition;
            temp = normalPath[i].data.temperature.condition;
            normalize = normalPath[i].data.normalize.condition;
            electric = normalPath[i].data.electric.condition;

            arr.push([motorId, vibration, temp, normalize, electric]);
        }
        for (let i = 0; i < warningPath.length; i++) {
            dataName =
                warningPath[i].id > 0 && warningPath[i].id < 10
                    ? '0' + warningPath[i].id
                    : warningPath[i].id;

            motorId = 'Motor ' + dataName;
            vibration = warningPath[i].data.vibration.condition;
            temp = warningPath[i].data.temperature.condition;
            normalize = warningPath[i].data.normalize.condition;
            electric = warningPath[i].data.electric.condition;

            arr.push([motorId, vibration, temp, normalize, electric]);
        }
        for (let i = 0; i < criticalPath.length; i++) {
            dataName =
                criticalPath[i].id > 0 && criticalPath[i].id < 10
                    ? '0' + criticalPath[i].id
                    : criticalPath[i].id;

            motorId = 'Motor ' + dataName;
            vibration = criticalPath[i].data.vibration.condition;
            temp = criticalPath[i].data.temperature.condition;
            normalize = criticalPath[i].data.normalize.condition;
            electric = criticalPath[i].data.electric.condition;

            arr.push([motorId, vibration, temp, normalize, electric]);
        }
        return arr;
    },

    getMotorHeatmapData(state) {
        return (motor) => {
            let motorId = parseInt(motor.substr(6, 2)),
                timestamp,
                timestamp_dayOfWeek,
                health,
                path = state.plant[0].data,
                dataObj = [],
                x = 0,
                y = 0;

            for (let i = 0; i < path.length; i++) {
                for (let j = 0; j < path[i].motorData.length; j++) {
                    if (path[i].motorData[j].id === motorId){
                        timestamp = path[i].motorData[j].heatmapData.timestamp * 1000;
                        timestamp_dayOfWeek = parseInt(dayjs(timestamp).format('d'));
                        health = path[i].motorData[j].heatmapData.predictHealthScore;
                    }
                }
            }

            if (timestamp_dayOfWeek !== 1) {
                let data = [];
                for (let j = 0; j < timestamp_dayOfWeek - 1; j++) {
                    data.push([x, y, null]);
                    y++;
                }
                dataObj.push({
                    month: 'NONE',
                    data: data,
                });
            }

            for (let i = 1; i <= 12; i++) {
                let daysInMonth = new Date(
                    parseInt(dayjs(timestamp).format('YYYY')),
                    i,
                    0
                ).getDate();

                let data = [];
                for (let j = 0; j < daysInMonth; j++) {
                    data.push([x, y, health]);
                    if (y === 6) {
                        x += 1;
                        y = 0;
                    } else {
                        y++;
                    }
                    health -= 0.0007;
                    timestamp += 86400000;
                }
                dataObj.push({
                    month: dayjs(timestamp - 86400000).format('MMMM'),
                    data: data,
                });
            }
            return dataObj;
        };
    },
    getFirstMotorCompare(state) {
        return state.firstMotorCompare;
    },
    getSecondMotorCompare(state) {
        return state.secondMotorCompare;
    },
    getComparisonData(state) {
        return (motorID, factor) => {
            motorID = parseInt(motorID.substr(6, 2));
            console.log(motorID, factor);
            let path = state.plant[0].motorData;
            for (let i = 0; i < path.length; i++) {
                if (path[i].id === motorID) {
                    let arr = [];
                    switch (factor) {
                        case 1: //health
                            arr.push(path[i].data.predictHealth.benchmark);
                            arr.push(path[i].data.predictHealth.ytdScore);
                            break;
                        case 2: //vibration
                            arr.push(path[i].data.vibration.benchmark);
                            arr.push(path[i].data.vibration.ytdScore);
                            break;
                        case 3: //temp
                            arr.push(path[i].data.temperature.benchmark);
                            arr.push(path[i].data.temperature.ytdScore);
                            break;
                        case 4: //normalization
                            arr.push(path[i].data.normalize.benchmark);
                            arr.push(path[i].data.normalize.ytdScore);
                            break;
                        case 5: //electric
                            arr.push(path[i].data.electric.benchmark);
                            arr.push(path[i].data.electric.ytdScore);
                            break;
                    }
                    return arr;
                }
            }
        };
    },
};

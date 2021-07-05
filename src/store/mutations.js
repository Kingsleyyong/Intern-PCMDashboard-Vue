export default {
    currentPlantSelected(state, plant) {
        state.selectedPlant = plant;
    },

    currentPlantMachineSelected(state, plant) {
        state.selectedPlantMachine_HeatMap = plant;
    },

    compareColumn1(state, plant) {
        state.firstMachineCompare = plant;
    },

    compareColumn2(state, plant) {
        state.secondMachineCompare = plant;
    },

    currentPlantMachineSelected_GraphPage(state, plant) {
        state.selectedPlantMachine_GraphPage = plant;
    },

    settingsData(state, data) {
        let path = state.plant[0].maintenanceSchedule,
            pushArr = data;
        path.map((pathItem, pathIndex) => {
            data.map((dataItem, dataIndex) => {
                if (pathItem.part === dataItem.part && pathItem.machine === dataItem.machine) {
                    state.plant[0].maintenanceSchedule[pathIndex] = dataItem;
                    pushArr.splice(dataIndex, 1);
                }
            });
        });

        pushArr.map((m) => {
            state.plant[0].maintenanceSchedule.push(m);
        });
    },
    SET_CONFIG(state, data) {
        const { location, longitude, latitude } = data;
        state.account[0].location.name = location;
        state.account[0].location.lon = longitude;
        state.account[0].location.lat = latitude;
        let newPlantList = [];
        data.groupIds.forEach((item) => {
            const lastChar = item.slice(-1);
            newPlantList[lastChar - 1] = { plantId: item, data: state.plant[0].data };
        });
        state.plant = newPlantList;
    },
    // SET_BENCHMARK(data){
    //     console.log(data);
    // },
};

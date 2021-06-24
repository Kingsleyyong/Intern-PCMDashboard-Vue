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
};

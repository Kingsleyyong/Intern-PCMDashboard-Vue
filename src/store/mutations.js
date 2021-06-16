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
};

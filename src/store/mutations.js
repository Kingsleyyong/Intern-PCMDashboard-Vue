export default {
    currentPlantSelected(state, plant) {
        state.selectedPlant = plant;
    },

    currentPlantMotorSelected(state, plant) {
        state.selectedPlantMotor_HeatMap = plant;
    },

    compareColumn1(state, plant) {
        state.firstMotorCompare = plant;
    },

    compareColumn2(state, plant) {
        state.secondMotorCompare = plant;
    },

    currentPlantMotorSelected_GraphPage(state, plant) {
        state.selectedPlantMotor_GraphPage = plant;
    },
};

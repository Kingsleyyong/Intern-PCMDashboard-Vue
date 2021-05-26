export default {
    currentPlantSelected(state, plant) {
        state.selectedPlant = plant;
    },

    currentPlantMotorSelected(state, plant) {
        state.selectedPlantMotor = plant;
    },

    compareColumn1(state, plant) {
        state.firstMotorCompare = plant;
    },

    compareColumn2(state, plant) {
        state.secondMotorCompare = plant;
    },
};

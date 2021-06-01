export default {
    async currentPlant({ commit }, plant) {
        console.log(plant);
        commit('currentPlantSelected', plant);
    },

    async currentPlantMotor({ commit }, plant) {
        console.log(plant);
        commit('currentPlantMotorSelected', plant);
    },

    async compareColumn1({ commit }, plant) {
        console.log(plant);
        commit('compareColumn1', plant);
    },

    async compareColumn2({ commit }, plant) {
        console.log(plant);
        commit('compareColumn2', plant);
    },

    async currentPlantMotor_GraphPage({ commit }, plant) {
        console.log(plant);
        commit('currentPlantMotorSelected_GraphPage', plant);
    },
};

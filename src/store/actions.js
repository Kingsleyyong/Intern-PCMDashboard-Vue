export default {
    async currentPlant({ commit }, plant) {
        console.log(plant);
        commit('currentPlantSelected', plant);
    },

    async currentPlantMachine({ commit }, plant) {
        console.log(plant);
        commit('currentPlantMachineSelected', plant);
    },

    async compareColumn1({ commit }, plant) {
        console.log(plant);
        commit('compareColumn1', plant);
    },

    async compareColumn2({ commit }, plant) {
        console.log(plant);
        commit('compareColumn2', plant);
    },

    async currentPlantMachine_GraphPage({ commit }, plant) {
        console.log(plant);
        commit('currentPlantMachineSelected_GraphPage', plant);
    },
};

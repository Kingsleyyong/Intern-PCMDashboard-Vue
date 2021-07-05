import axios from 'axios';

const api = axios.create({
    baseURL: process.env.VUE_APP_API_END_POINT,
    timeout: 0, // default is `0` (no timeout)
});

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

    async savingSettingsData({ commit }, data) {
        let obj = [];
        data.map((machine) => {
            machine.data.map((part) => {
                if (isNaN(part.pcm)) {
                    obj.push({
                        machine: machine.machine,
                        part: part.name,
                        pcm: part.pcm,
                        lastHP: null,
                        currentHP: null,
                        lastUpdateDate: null,
                        recentUpdateDate: null,
                        status: null,
                        remark: null,
                    });
                } else {
                    obj.push({
                        machine: machine.machine,
                        part: part.name,
                        maintenanceHr: part.maintenanceHr,
                        runHour: null,
                        lastRunHour: part.lastRunHour,
                        lastHP: null,
                        currentHP: null,
                        lastUpdateDate: null,
                        recentUpdateDate: null,
                        status: null,
                        remark: null,
                    });
                }
            });
        });
        commit('settingsData', obj);
    },
    async getConfig({ commit }) {
        api.get('/config').then((response) => {
            commit('SET_CONFIG', response.data.data);
        });
    },
    // async getBenmarkData({ commit }, data) {
    //     console.log(data);
    //     commit('SET_BENCHMARK', data);
    // },
};

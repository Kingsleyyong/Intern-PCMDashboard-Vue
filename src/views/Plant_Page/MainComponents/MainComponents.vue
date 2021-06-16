<template>
    <span>
        <span class="pa-1 pl-6 pr-6 subtitle-1 font-weight-regular rounded-t-lg blue">{{
            getCurrentSelectedPlant
        }}</span>
        <h1 class="pa-0 ma-0">Predictive Maintenance Dashboard</h1>
        <v-row class="ma-1 d-flex justify-space-between">
            <MachinePercentage
                v-for="(machine, index) in getPlantMachineData"
                :key="index"
                :data-obj="machine"
                :plant="getCurrentSelectedPlant"
            />
        </v-row>
        <v-row class="ma-1 mt-2 d-flex justify-space-between">
            <PredictiveMaintenance />
            <PredictiveMachineHealthHeatMap />
        </v-row>
    </span>
</template>

<script>
import MachinePercentage from './Cards/machinesPercentage';
import PredictiveMaintenance from './Cards/PredictiveMaintenance';
import PredictiveMachineHealthHeatMap from './Cards/predictedHeatMap';
import { mapGetters } from 'vuex';

export default {
    name: 'MainComponents',

    computed: {
        ...mapGetters(['getCurrentSelectedPlant', 'getPlantMachineData']),
    },

    components: {
        MachinePercentage,
        PredictiveMaintenance,
        PredictiveMachineHealthHeatMap,
    },
};
</script>

<template>
    <span>
        <span class="pa-0 subtitle-1 font-weight-light">{{ getCurrentSelectedPlant }}</span>
        <h1 class="pa-0 ma-0">Motor Predictive Maintenance Dashboard</h1>
        <v-row class="ma-1 d-flex justify-space-between">
            <MotorPercentage
                v-for="(motor, index) in getPlantMotorData"
                :key="index"
                :data-obj="motor"
                :plant="getCurrentSelectedPlant"
            />
        </v-row>
        <v-row class="ma-1 mt-2 d-flex justify-space-between">
            <PredictiveMaintenance />
            <PredictiveMotorHealthHeatMap />
        </v-row>
    </span>
</template>

<script>
import MotorPercentage from './Cards/motorsPercentage';
import PredictiveMaintenance from './Cards/maintenance';
import PredictiveMotorHealthHeatMap from './Cards/predictedHeatMap';
import { mapGetters } from 'vuex';

export default {
    name: 'MainComponents',

    computed: {
        ...mapGetters(['getCurrentSelectedPlant', 'getPlantMotorData']),
    },

    components: {
        MotorPercentage,
        PredictiveMaintenance,
        PredictiveMotorHealthHeatMap,
    },
};
</script>

<template>
    <v-card width="66.5%">
        <v-card-title class="grey darken-3 pa-2 d-flex justify-space-between">
            Predictive Health Score / {{ getCurrentSelectedPlantMotor }}
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn elevation="0" small icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-arrow-down-drop-circle-outline</v-icon>
                    </v-btn>
                </template>
                <v-list style="width: 7rem; height: 10rem; overflow-y: auto">
                    <v-list-item
                        v-for="(item, index) in getPlantMotorID"
                        :key="index"
                        @click="currentPlantMotor(item)"
                    >
                        <v-list-item-title>{{ item }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-card-title>

        <v-main>
            <HeatMap :chartData="getMotorHeatmapData(getCurrentSelectedPlantMotor)" />
        </v-main>
    </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import HeatMap from '../Chart/predictedHealthScoreHeatmap';

export default {
    components: {
        HeatMap,
    },
    watch: {
        getCurrentSelectedPlantMotor(newVal) {
            this.renewHeatMap(newVal);
        },
    },
    computed: {
        ...mapGetters(['getPlantMotorID', 'getCurrentSelectedPlantMotor', 'getMotorHeatmapData']),
    },

    methods: {
        ...mapActions(['currentPlantMotor']),

    },
};
</script>

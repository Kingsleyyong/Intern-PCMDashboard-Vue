<template>
    <v-card width="58.7%">
        <v-card-title class="grey darken-3 pa-2 d-flex justify-space-between">
            Predictive Health Score / {{ getCurrentSelectedPlantMachine }}
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn elevation="0" small icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-arrow-down-drop-circle-outline</v-icon>
                    </v-btn>
                </template>
                <v-list style="width: auto; height: 10rem; overflow-y: auto">
                    <v-list-item
                        v-for="(item, index) in getPlantMachineID"
                        :key="index"
                        @click="currentPlantMachine(item)"
                    >
                        <v-list-item-title>{{ item }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-card-title>

        <v-main>
            <HeatMap :chartData="getMachineHeatmapData(getCurrentSelectedPlantMachine)" />
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
    // watch: {
    //     getCurrentSelectedPlantMachine(newVal) {
    //         this.renewHeatMap(newVal);
    //     },
    // },
    computed: {
        ...mapGetters(['getPlantMachineID', 'getCurrentSelectedPlantMachine', 'getMachineHeatmapData']),
    },

    methods: {
        ...mapActions(['currentPlantMachine']),

    },
};
</script>

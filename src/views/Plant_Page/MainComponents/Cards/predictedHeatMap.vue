<template>
    <v-card :height="height" width="58.7%">
        <v-card-title class="grey darken-3 pa-1 d-flex justify-space-between text-sm-subtitle-2">
            Predictive Health Score / {{ getCurrentSelectedPlantMachine }}
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" elevation="0" icon small>
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

        <HeatMap :chartData="getMachineHeatmapData(getCurrentSelectedPlantMachine)" :height="height-30"/>
    </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import HeatMap from '../../../../components/Charts/HeatMap';

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
        ...mapGetters([
            'getPlantMachineID',
            'getCurrentSelectedPlantMachine',
            'getMachineHeatmapData',
        ]),
        height() {
            switch (this.$vuetify.breakpoint.name) {
                case 'md':
                    return 335;
                case 'lg':
                    return 400;
                case 'xl':
                    return 800;
            }
        },
    },

    methods: {
        ...mapActions(['currentPlantMachine']),
    },
};
</script>
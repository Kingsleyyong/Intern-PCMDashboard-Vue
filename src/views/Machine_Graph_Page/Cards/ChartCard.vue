<template>
    <v-card class="ma-2 mt-5 rounded">
        <LineChart
            :chartName="chartTitle"
            :chartData="getDailyLineChart(getSelectedPlantMachine_GraphPage, chartTitle)"
            v-if="line"
        />
        <ScatterLine
            :chartData="getWeeklyScatterLineChart(getSelectedPlantMachine_GraphPage, chartTitle)"
            :chartName="chartTitle"
            v-if="bubbleLine"
        />
        <HeatMap
            :chartName="chartTitle"
            :chartData="getMonthlyHeatmapChart(getSelectedPlantMachine_GraphPage, chartTitle)"
            v-if="heatmap"
        />
        <v-row class="col-4 align-center d-flex justify-end">
            <v-btn-toggle rounded group>
                <v-btn @click="setGraph('day')">Daily</v-btn>
                <v-btn @click="setGraph('week')" class="ml-2">Weekly</v-btn>
                <v-btn @click="setGraph('month')" class="ml-2">Monthly</v-btn>
            </v-btn-toggle>
        </v-row>
    </v-card>
</template>

<script>
import LineChart from '../../../components/Charts/Line';
import ScatterLine from '../../../components/Charts/ScatterLine';
import HeatMap from '../../../components/Charts/HeatMap';

import { mapGetters } from 'vuex';

export default {
    props: ['chartTitle'],

    components: {
        LineChart,
        ScatterLine,
        HeatMap,
    },

    computed: {
        ...mapGetters([
            'getSelectedPlantMachine_GraphPage',
            'getMachineHeatmapData',
            'getDailyLineChart',
            'getWeeklyScatterLineChart',
            'getMonthlyHeatmapChart',
        ]),
    },

    data() {
        return {
            line: true,
            bubbleLine: false,
            heatmap: false,
            deviceId: '',
        };
    },

    methods: {
        setGraph(criteria) {
            this.line = criteria === 'day';
            this.bubbleLine = criteria === 'week';
            this.heatmap = criteria === 'month';
        },
    },
    // mounted() {
    //     this.deviceId = this.getSelectedPlantMachine_GraphPage
    //     this.$store.dispatch('getBenmarkData', { deviceId: this.deviceId });
    // },
};
</script>

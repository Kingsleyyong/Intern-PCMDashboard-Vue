<template>
    <v-card class="ma-2 mt-5 rounded">
        <LineChart
            :chartName="chartTitle"
            :chartData="getDailyLineChart(getSelectedPlantMotor_GraphPage, chartTitle)"
            v-if="line"
        />
        <ScatterLine
            :chartData="getWeeklyScatterLineChart(getSelectedPlantMotor_GraphPage, chartTitle)"
            :chartName="chartTitle"
            v-if="bubbleLine"
        />
        <HeatMap
            :chartName="chartTitle"
            :chartData="getMonthlyHeatmapChart(getSelectedPlantMotor_GraphPage, chartTitle)"
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
import LineChart from '../Charts/Line';
import ScatterLine from '../Charts/ScatterLine';
import HeatMap from '../Charts/HeatMap';

import { mapGetters } from 'vuex';

export default {
    components: {
        LineChart,
        ScatterLine,
        HeatMap,
    },

    computed: {
        ...mapGetters([
            'getSelectedPlantMotor_GraphPage',
            'getMotorHeatmapData',
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

            chartTitle: 'Normalization Hit Count',
        };
    },

    methods: {
        setGraph(criteria) {
            switch (criteria) {
                case 'day':
                    this.line = true;
                    this.bubbleLine = false;
                    this.heatmap = false;
                    break;

                case 'week':
                    this.line = false;
                    this.bubbleLine = true;
                    this.heatmap = false;
                    break;

                case 'month':
                    this.line = false;
                    this.bubbleLine = false;
                    this.heatmap = true;
                    break;
            }
        },
    },
};
</script>

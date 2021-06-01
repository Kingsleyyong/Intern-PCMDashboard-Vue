<template>
    <!-- Bubble chart -->
    <div class="chartElem">
        <highcharts class="chart" :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { Chart } from 'highcharts-vue';
import Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more';

highchartsMore(Highcharts);

export default {
    props: ['chartData', 'chartName'],

    components: {
        highcharts: Chart,
    },
    watch: {
        data: function () {
            // this.data = newVal;
            this.redraw();
        },
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    marginLeft: 250,
                },

                title: {
                    widthAdjust: -1200,
                    text: this.chartName,
                },

                xAxis: {
                    gridLineWidth: 2,
                    gridLineColor: '#454545',
                    tickColor: '#454545',
                    categories: this.chartData.xAxis,
                },

                yAxis:{
                    title: {
                      enabled: false
                    }
                },

                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: false,
                        },
                        enableMouseTracking: true,

                    },
                    scatter: {
                        dataLabels: {
                            enabled: true,
                            y: 10,
                            format: '{point.y}',
                        },
                        marker: {
                            radius: 10,
                        },
                        states: {
                            hover: {
                                marker: {
                                    enabled: false,
                                },
                            },
                        },
                    },
                },

                series: [
                    {
                        type: 'scatter',
                        data: this.chartData.current,
                    },
                    {
                        type: 'line',
                        name: 'Benchmark',
                        color: 'red',
                        marker: {
                            enabled: false,
                        },
                        data: this.chartData.benchmark,
                    },
                ],
            },
        };
    },
    methods: {
        redraw() {
            this.$set(this.options.series[0], 'data', this.data);
        },
    },
};
</script>

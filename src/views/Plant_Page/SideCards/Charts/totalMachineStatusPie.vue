<template>
    <div>
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { Chart } from 'highcharts-vue';

export default {
    props: ['chartData', 'totalMachine'],
    components: { highcharts: Chart },
    data() {
        return {
            chartOptions: {
                chart: {
                    marginTop: 0,
                    type: 'pie',
                    backgroundColor: 'transparent',
                    height: 70 + '%',
                },

                credits: { enabled: false },

                title: null,

                exporting: { enabled: false },

                plotOptions: {
                    pie: {
                        shadow: true,
                        borderColor: null,
                        center: ['50%', '50%'],
                        dataLabels: {
                            enabled: false,
                        },
                        colors: ['#00FF43', '#F60000', '#FF9200'],
                    },
                },
                tooltip: {
                    enabled: true,
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
                },
                series: [
                    {
                        name: 'Machine Status',
                        colorByPoint: true,
                        data: [
                            {
                                name: 'Normal Machine',
                                y: this.chartData[0],
                            },
                            {
                                name: 'Critical Machine',
                                y: this.chartData[1],
                            },
                            {
                                name: 'Warning Machine',
                                y: this.chartData[2],
                            },
                        ],
                        size: '100%',
                    },
                ],
            },
        };
    },
};
</script>

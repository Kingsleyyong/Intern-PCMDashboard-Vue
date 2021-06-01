<template>
    <div>
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
export default {
    props: ['chartName', 'chartData'],

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

                yAxis: {
                    title: {
                        enabled: false,
                        text: null,
                    },
                },

                xAxis: {
                    categories: this.chartData.xAxis,
                },

                plotOptions: {
                    series: {
                        marker: {
                            enabled: false,
                        },
                        label: {
                            connectorAllowed: false,
                        },
                    },
                },
                series: [
                    {
                        color: 'red',
                        name: 'Benchmark',
                        data: this.chartData.benchmark,
                    },
                    {
                        color: 'yellow',
                        name: 'Yesterday',
                        data: this.chartData.yesterday,
                    },
                    {
                        color: 'green',
                        name: 'Current',
                        data: this.chartData.current,
                    },
                ],
            },
        };
    },
};
</script>

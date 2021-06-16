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
                    height: 83 + '%',
                },

                credits: { enabled: false },

                exporting: { enabled: false },

                title: {
                    text: this.chartData[0] + '/' + this.totalMachine,
                    align: 'center',
                    verticalAlign: 'middle',
                    x: 0,
                    y: 15,
                    style: {
                        color: '#ffffff',
                        fontSize: '28px',
                    },
                },

                subtitle: {
                    text: (this.chartData[0] / this.totalMachine) * 100 + '%',
                    align: 'center',
                    verticalAlign: 'middle',
                    x: 0,
                    y: 40,
                    style: {
                        color: '#ffffff',
                        fontSize: '20px',
                        fontWeight: 'bold',
                    },
                },
                plotOptions: {
                    pie: {
                        shadow: true,
                        borderColor: null,
                        center: ['50%', '50%'],
                        dataLabels: { enabled: false },
                        colors: ['#F26F21', '#707070'],
                    },
                },
                tooltip: {
                    enabled: false,
                },
                series: [
                    {
                        data: this.chartData,
                        size: '100%',
                        innerSize: '80%',
                    },
                ],
            },
        };
    },
};
</script>

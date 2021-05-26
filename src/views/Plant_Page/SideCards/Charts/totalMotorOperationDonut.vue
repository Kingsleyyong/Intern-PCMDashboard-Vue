<template>
    <div>
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>
<script>
import { Chart } from 'highcharts-vue';

export default {
    props: ['chartData', 'totalMotor'],
    components: { highcharts: Chart },
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'pie',
                    backgroundColor: 'transparent',
                    height: 83 + '%',
                },

                credits: { enabled: false },

                title: {
                    text: this.chartData[0] + '/' + this.totalMotor,
                    align: 'center',
                    verticalAlign: 'middle',
                    y: 15,
                    style: {
                        color: '#ffffff',
                        fontSize: '28px',
                    },
                },

                subtitle: {
                    text: (this.chartData[0] / this.totalMotor) * 100 + '%',
                    align: 'center',
                    verticalAlign: 'middle',
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

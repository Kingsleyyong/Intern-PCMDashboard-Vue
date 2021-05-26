<template>
    <div>
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import Highcharts from 'highcharts';
import heatmap from 'highcharts/modules/heatmap';

heatmap(Highcharts);

export default {
    props: ['chartData'],

    watch: {
        series(newVal) {
            console.log(this.series);
            this.series = newVal;
            this.redraw();
        },
    },

    methods: {
        redraw() {
            this.$set(this.options.yAxis, 'categories', this.series.yAxisCategories);
            this.$set(this.options, 'xAxis', this.series.xAxis);
            this.$set(this.options, 'series', this.series.series);
        },
    },

    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'heatmap',
                    backgroundColor: 'transparent',
                },

                credits: { enabled: false },
                title: { style: { color: 'transparent' } },

                xAxis: {
                    enabled: false,
                },

                yAxis: {
                    categories: [
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                        'Sunday',
                    ],
                    title: null,
                    reversed: true,
                },

                colorAxis: {
                    dataClasses: [
                        {
                            to: 0.74,
                            color: '#03a9f4', // blue
                        },
                        {
                            from: 0.74,
                            to: 0.9,
                            color: '#28a745', // green
                        },
                        {
                            from: 0.9,
                            color: '#ea232a', // red
                        },
                    ],
                },

                legend: {
                    marginTop: 5,
                    padding: 10,
                    backgroundColor: '#303030',
                    itemStyle: {
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '15px',
                        fontWeight: 'bold',
                    },
                },

                tooltip: {
                    formatter: function () {
                        let month = '';

                        function getPointCategoryName(point, dimension) {
                            let series = point.series,
                                isY = dimension === 'y',
                                axis = series[isY ? 'yAxis' : 'xAxis'];
                            month = series.name;
                            return axis.categories[point[isY ? 'y' : 'x']];
                        }

                        let /*xName = getPointCategoryName(this.point, 'x'),*/
                            yName = getPointCategoryName(this.point, 'y'),
                            data = (this.point.value * 100).toFixed(2) + '%';
                        return yName + ' ' + month + ': ' + data;
                    },
                },

                series: [
                    {
                        name: 'None',
                        borderWidth: 0,
                        borderColor: 'gray',
                        data: this.chartData[0].month === 'None' ? this.chartData[0].data : [],
                    },
                    {
                        name: 'January',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[1].month === 'January'
                                ? this.chartData[1].data
                                : this.chartData[0].data,
                    },
                    {
                        name: 'February',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[2].month === 'February'
                                ? this.chartData[2].data
                                : this.chartData[1].data,
                    },
                    {
                        name: 'March',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[3].month === 'March'
                                ? this.chartData[3].data
                                : this.chartData[2].data,
                    },
                    {
                        name: 'April',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[4].month === 'April'
                                ? this.chartData[4].data
                                : this.chartData[3].data,
                    },
                    {
                        name: 'May',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[5].month === 'May'
                                ? this.chartData[5].data
                                : this.chartData[4].data,
                    },
                    {
                        name: 'June',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[6].month === 'June'
                                ? this.chartData[6].data
                                : this.chartData[5].data,
                    },
                    {
                        name: 'July',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[7].month === 'July'
                                ? this.chartData[7].data
                                : this.chartData[6].data,
                    },
                    {
                        name: 'August',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[8].month === 'August'
                                ? this.chartData[8].data
                                : this.chartData[7].data,
                    },
                    {
                        name: 'September',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[9].month === 'September'
                                ? this.chartData[9].data
                                : this.chartData[8].data,
                    },
                    {
                        name: 'October',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[10].month === 'October'
                                ? this.chartData[10].data
                                : this.chartData[9].data,
                    },
                    {
                        name: 'November',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[11].month === 'November'
                                ? this.chartData[11].data
                                : this.chartData[10].data,
                    },
                    {
                        name: 'December',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[11].month === 'November'
                                ? this.chartData[12].data
                                : this.chartData[11].data,
                    },
                ],
            },
        };
    },
};
</script>

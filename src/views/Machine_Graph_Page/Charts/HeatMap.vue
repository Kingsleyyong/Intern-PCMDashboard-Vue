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
    props: ['chartData', 'chartName'],

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
                    marginLeft: 250,
                },

                title: {
                    widthAdjust: -1200,
                    text: this.chartName,
                },

                xAxis: {
                    type: 'datetime',
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
                            to: 74,
                            color: '#03a9f4', // blue
                        },
                        {
                            from: 74,
                            to: 90,
                            color: '#28a745', // green
                        },
                        {
                            from: 90,
                            color: '#ea232a', // red
                        },
                    ],
                },

                legend: {
                    labelFormatter: function () {
                        return this.name + ' %';
                    },
                },

                tooltip: {
                    formatter: function () {
                        function getPointCategoryName(point, dimension) {
                            let series = point.series,
                                isY = dimension === 'y',
                                axis = series[isY ? 'yAxis' : 'xAxis'];

                            return axis.categories[point[isY ? 'y' : 'x']];
                        }

                        let /*xName = getPointCategoryName(this.point, 'x'),*/
                            yName = getPointCategoryName(this.point, 'y'),
                            data = this.point.value.toFixed(2) + '%',
                            date =
                                yName + ', ' + this.point.date + ': <strong>' + data + '</strong>';

                        return date;
                    },
                },

                plotOptions: {
                    heatmap: {
                        colsize: 7 * 24 * 36e5, // one week
                        rowsize: 1,
                        borderWidth: 1,
                        borderColor: 'gray',
                        keys: ['x', 'y', 'value', 'date'],
                    },
                },

                series: [
                    {
                        name: 'January',
                        data:
                            this.chartData[1].month === 'January'
                                ? this.chartData[1].data
                                : this.chartData[0].data,
                    },
                    {
                        name: 'February',
                        data:
                            this.chartData[2].month === 'February'
                                ? this.chartData[2].data
                                : this.chartData[1].data,
                    },
                    {
                        name: 'March',
                        data:
                            this.chartData[3].month === 'March'
                                ? this.chartData[3].data
                                : this.chartData[2].data,
                    },
                    {
                        name: 'April',
                        data:
                            this.chartData[4].month === 'April'
                                ? this.chartData[4].data
                                : this.chartData[3].data,
                    },
                    {
                        name: 'May',
                        data:
                            this.chartData[5].month === 'May'
                                ? this.chartData[5].data
                                : this.chartData[4].data,
                    },
                    {
                        name: 'June',
                        data:
                            this.chartData[6].month === 'June'
                                ? this.chartData[6].data
                                : this.chartData[5].data,
                    },
                    {
                        name: 'July',
                        data:
                            this.chartData[7].month === 'July'
                                ? this.chartData[7].data
                                : this.chartData[6].data,
                    },
                    {
                        name: 'August',
                        data:
                            this.chartData[8].month === 'August'
                                ? this.chartData[8].data
                                : this.chartData[7].data,
                    },
                    {
                        name: 'September',
                        data:
                            this.chartData[9].month === 'September'
                                ? this.chartData[9].data
                                : this.chartData[8].data,
                    },
                    {
                        name: 'October',
                        data:
                            this.chartData[10].month === 'October'
                                ? this.chartData[10].data
                                : this.chartData[9].data,
                    },
                    {
                        name: 'November',
                        data:
                            this.chartData[11].month === 'November'
                                ? this.chartData[11].data
                                : this.chartData[10].data,
                    },
                    {
                        name: 'December',
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

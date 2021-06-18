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

        getChartTitleOption(chartName) {
            if (!chartName) {
                return { text: null };
            } else {
                return {
                    widthAdjust: -1200,
                    text: chartName,
                };
            }
        },

        getChartLegendOption(chartName) {
            if (!chartName) {
                return {
                    marginTop: 5,
                    padding: 10,
                    backgroundColor: '#303030',
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    labelFormatter: function () {
                        return this.name + ' %';
                    },
                };
            } else {
                return {
                    labelFormatter: function () {
                        return this.name + ' %';
                    },
                };
            }
        },

        getChart(chartName) {
            if (!chartName) {
                return {
                    type: 'heatmap',
                };
            } else {
                return {
                    type: 'heatmap',
                    marginLeft: 250,
                };
            }
        },
    },

    data() {
        return {
            chartOptions: {
                chart: this.getChart(this.chartName),

                title: this.getChartTitleOption(this.chartName),

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

                legend: this.getChartLegendOption(this.chartName),

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
                        data: this.chartData.filter((index) => index.month === 'January')[0][
                            'data'
                        ],
                    },
                    {
                        name: 'February',
                        data: this.chartData.filter((index) => index.month === 'February')[0][
                            'data'
                        ],
                    },
                    {
                        name: 'March',
                        data: this.chartData.filter((index) => index.month === 'March')[0]['data'],
                    },
                    {
                        name: 'April',
                        data: this.chartData.filter((index) => index.month === 'April')[0]['data'],
                    },
                    {
                        name: 'May',
                        data: this.chartData.filter((index) => index.month === 'May')[0]['data'],
                    },
                    {
                        name: 'June',
                        data: this.chartData.filter((index) => index.month === 'June')[0]['data'],
                    },
                    {
                        name: 'July',
                        data: this.chartData.filter((index) => index.month === 'July')[0]['data'],
                    },
                    {
                        name: 'August',
                        data: this.chartData.filter((index) => index.month === 'August')[0]['data'],
                    },
                    {
                        name: 'September',
                        data: this.chartData.filter((index) => index.month === 'September')[0][
                            'data'
                        ],
                    },
                    {
                        name: 'October',
                        data: this.chartData.filter((index) => index.month === 'October')[0][
                            'data'
                        ],
                    },
                    {
                        name: 'November',
                        data: this.chartData.filter((index) => index.month === 'November')[0][
                            'data'
                        ],
                    },
                    {
                        name: 'December',
                        data: this.chartData.filter((index) => index.month === 'December')[0][
                            'data'
                        ],
                    },
                ],
            },
        };
    },
};
</script>

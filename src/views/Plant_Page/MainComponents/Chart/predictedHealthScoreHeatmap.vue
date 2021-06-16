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
                },

                title: { text: null },

                exporting: {
                    enabled: true,
                },

                xAxis: {
                    tickInterval: 5,
                    showFirstLabel: false,
                    labels: {
                        enabled: false,
                        y: 15,
                        x: 0,
                        format: 'Week {text}',
                    },
                    tickLength: 0,
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
                    marginTop: 5,
                    padding: 10,
                    backgroundColor: '#303030',
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    labelFormatter: function () {
                        return this.name + ' %';
                    },
                },

                tooltip: {
                    formatter: function () {
                        // let month = '';
                        //
                        function getPointCategoryName(point, dimension) {
                            let series = point.series,
                                isY = dimension === 'y',
                                axis = series[isY ? 'yAxis' : 'xAxis'];
                            // month = series.name;
                            return axis.categories[point[isY ? 'y' : 'x']];
                        }

                        let /*xName = getPointCategoryName(this.point, 'x'),*/
                            yName = getPointCategoryName(this.point, 'y'),
                            data = this.point.value.toFixed(2) + '%',
                            date = yName + ', ' +
                                this.point.date +
                                ': <strong>' +
                                data +
                                '</strong>';

                        return date;
                    },
                },

                series: [
                    {
                        name: 'None',
                        borderWidth: 0,
                        borderColor: 'gray',
                        data: this.chartData[0].month === 'None' ? this.chartData[0].data : [],
                        keys: ['x', 'y', 'value', 'date'],
                    },
                    {
                        name: 'January',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[1].month === 'January'
                                ? this.chartData[1].data
                                : this.chartData[0].data,
                        keys: ['x', 'y', 'value', 'date'],
                    },
                    {
                        name: 'February',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[2].month === 'February'
                                ? this.chartData[2].data
                                : this.chartData[1].data,
                        keys: ['x', 'y', 'value', 'date'],
                    },
                    {
                        name: 'March',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[3].month === 'March'
                                ? this.chartData[3].data
                                : this.chartData[2].data,
                        keys: ['x', 'y', 'value', 'date'],
                    },
                    {
                        name: 'April',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[4].month === 'April'
                                ? this.chartData[4].data
                                : this.chartData[3].data,
                        keys: ['x', 'y', 'value', 'date'],
                    },
                    {
                        name: 'May',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[5].month === 'May'
                                ? this.chartData[5].data
                                : this.chartData[4].data,
                        keys: ['x', 'y', 'value', 'date'],
                    },
                    {
                        name: 'June',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[6].month === 'June'
                                ? this.chartData[6].data
                                : this.chartData[5].data,
                        keys: ['x', 'y', 'value', 'date'],
                    },
                    {
                        name: 'July',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[7].month === 'July'
                                ? this.chartData[7].data
                                : this.chartData[6].data,
                        keys: ['x', 'y', 'value', 'date'],
                    },
                    {
                        name: 'August',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[8].month === 'August'
                                ? this.chartData[8].data
                                : this.chartData[7].data,
                        keys: ['x', 'y', 'value', 'date'],
                    },
                    {
                        name: 'September',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[9].month === 'September'
                                ? this.chartData[9].data
                                : this.chartData[8].data,
                        keys: ['x', 'y', 'value', 'date'],
                    },
                    {
                        name: 'October',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[10].month === 'October'
                                ? this.chartData[10].data
                                : this.chartData[9].data,
                        keys: ['x', 'y', 'value', 'date'],
                    },
                    {
                        name: 'November',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[11].month === 'November'
                                ? this.chartData[11].data
                                : this.chartData[10].data,
                        keys: ['x', 'y', 'value', 'date'],
                    },
                    {
                        name: 'December',
                        borderWidth: 1,
                        borderColor: 'gray',
                        data:
                            this.chartData[11].month === 'November'
                                ? this.chartData[12].data
                                : this.chartData[11].data,
                        keys: ['x', 'y', 'value', 'date'],
                    },
                ],
            },
        };
    },
};
</script>

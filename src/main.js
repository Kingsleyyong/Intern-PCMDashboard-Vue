import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import Highcharts from 'highcharts';
import HighchartsVue from 'highcharts-vue';
import exportingInit from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';
import offlineExporting from 'highcharts/modules/offline-exporting';
import noData from 'highcharts/modules/no-data-to-display';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import isoWeek from 'dayjs/plugin/isoWeek';
import DatetimePicker from 'vuetify-datetime-picker';

exportingInit(Highcharts);
exportData(Highcharts);
offlineExporting(Highcharts);
noData(Highcharts);
dayjs.extend(dayOfYear);
dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);
Vue.use(dayjs);
Vue.use(Highcharts);
Vue.use(HighchartsVue);
Vue.use(DatetimePicker);
Vue.config.productionTip = false;

Highcharts.setOptions({
    exporting: {
        buttons: {
            contextButton: {
                symbolStroke: '#f8f8f8',
                theme: {
                    fill: '#aeb1b5',
                },
                menuItems: ['downloadPNG', 'downloadPDF', 'downloadCSV'],
            },
        },
    },
    credits: { enabled: false },
    title: {
        align: 'left',
        style: { color: 'white', fontSize: '20px' },
        x: 10,
        y: 100,
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'middle',
        itemStyle: { color: 'white' },
        itemHoverStyle: { color: 'yellow' },
    },
    chart: {
        backgroundColor: 'transparent',
        marginTop: 35,
        style: {
            fontFamily: 'sans-serif',
        },
    },
    xAxis: {
        lineColor: 'grey',
        labels: {
            style: {
                color: 'white',
            },
        },
    },
    yAxis: {
        gridLineColor: 'grey',
        labels: {
            style: {
                color: 'white',
            },
        },
    },
});

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');

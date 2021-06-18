import Vue from 'vue';
import VueRouter from 'vue-router';
import Plant from "../views/Plant_Page/Plant";
import MachineGraph from "../views/Machine_Graph_Page/MachineGraph";
import MaintenanceSchedule from "../views/Maintenance_Schedule/MaintenanceSchedule";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Plant,
    },
    {
        path: '/graphPage/:plantId/:category',
        name: 'MachineGraph',
        component: MachineGraph,
        props: true
    },
    {
        path: '/MaintenanceSchedule',
        name: 'MaintenanceSchedule',
        component: MaintenanceSchedule,
        props: true
    }
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;

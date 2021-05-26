import Vue from 'vue';
import VueRouter from 'vue-router';
import Plant from "../views/Plant_Page/Plant";
import MotorGraph from "../views/Motor_Graph_Page/MotorGraph";

Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Plant,
    },
    {
        path: '/home/graphPage',
        name: 'MotorFraph',
        component: MotorGraph,
    },
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

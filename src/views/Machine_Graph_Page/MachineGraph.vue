<template>
    <v-main class="mb-3">
        <Header />
        <Toolbar
            :list="getMachineSortByCategory($route.params.category)"
            :themeColor="getCategoryThemeColor('Plant 1', $route.params.category)"
            :plantId="$route.params.plantId"
            v-on:setCurrentPlantORMachine="currentPlantMachine_GraphPage"
        />

        <ChartCard :chartTitle="'Predicted Health'" />

        <span v-for="(n, index) in getPredictFactorKeys" :key="index">
            <ChartCard :chartTitle="n" />
        </span>
    </v-main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from '../../components/Header';
import Toolbar from '../ToolBar/toolbar';
import ChartCard from './Cards/ChartCard';

export default {
    components: {
        Header,
        Toolbar,
        ChartCard,
    },

    computed: {
        ...mapGetters([
            'getMachineSortByCategory',
            'getCategoryThemeColor',
            'getSelectedPlantMachine_GraphPage',
            'getPredictFactorKeys',
        ]),
    },

    methods: {
        ...mapActions(['currentPlantMachine_GraphPage']),
    },
};
</script>

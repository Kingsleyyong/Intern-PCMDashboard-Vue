<template>
    <v-main class="mb-3">
        <Header />
        <Toolbar
            :list="getMachineSortByCategory($route.params.category)"
            :themeColor="getCategoryThemeColor('Plant 1', $route.params.category)"
            :plantId="$route.params.plantId"
            v-on:setCurrentPlantORMachine="currentPlantMachine_GraphPage"
        />

        <PredictHealth />
        <Vibration />
        <Temperature />
        <NormalizationHitCount />
        <EnergyUsage />
    </v-main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from '../../components/Header';
import Toolbar from '../ToolBar/toolbar';
import PredictHealth from './Cards/PredictedHealth';
import Vibration from './Cards/Vibration';
import Temperature from './Cards/Temperature';
import NormalizationHitCount from './Cards/NormalizationHitCount';
import EnergyUsage from './Cards/EnergyUsage';

export default {
    components: {
        Header,
        Toolbar,
        PredictHealth,
        Vibration,
        Temperature,
        NormalizationHitCount,
        EnergyUsage,
    },

    computed: {
        ...mapGetters([
            'getMachineSortByCategory',
            'getCategoryThemeColor',
            'getSelectedPlantMachine_GraphPage',
        ]),
    },

    methods: {
        ...mapActions(['currentPlantMachine_GraphPage']),
    },
};
</script>

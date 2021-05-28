<template>
    <v-main>
        <Header />
        <Toolbar
            :list="getMotorSortByCategory($route.params.category)"
            :themeColor="getCategoryThemeColor('Plant 1', $route.params.category)"
            :plantId="$route.params.plantId"

        />
        <PredictHealth />
    </v-main>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '../../components/Header';
import Toolbar from '../ToolBar/toolbar';
import PredictHealth from './Cards/PredictedHealth';

export default {
    components: {
        Header,
        Toolbar,
        PredictHealth,
    },

    computed: {
        ...mapGetters(['getMotorSortByCategory', 'getCategoryThemeColor']),

    },
};
</script>

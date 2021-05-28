<template>
    <v-main>
        <Header />
        <Toolbar :list="getPlantCount" v-on:setCurrentPlant="currentPlant" />
        <v-row class="ma-0">
            <v-col cols="2">
                <SideCard />
            </v-col>
            <v-col cols="10">
                <MainComponents />
            </v-col>
        </v-row>
    </v-main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from '@/components/Header';
import Toolbar from '@/views/ToolBar/toolbar';
import SideCard from '@/views/Plant_Page/SideCards/sideCard';
import MainComponents from '@/views/Plant_Page/MainComponents/MainComponents';

export default {
    components: {
        Header,
        Toolbar,
        SideCard,
        MainComponents,
    },
    computed: {
        ...mapGetters(['getPlantCount']),
    },

    methods: {
        ...mapActions(['currentPlant']),
    },
};
</script>

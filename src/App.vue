<template>
    <v-app>
        <v-main>
            <Header />
            <Toolbar />
            <SideCard />
            {{ getCount }}
        </v-main>
    </v-app>
</template>

<script>
import Header from '@/components/Header';
import Toolbar from '@/views/ToolBar/toolbar';
import SideCard from '@/views/Plant_Page/SideCards/sideCard';
import { mapGetters } from 'vuex';

export default {
    name: 'App',

    computed: {
        ...mapGetters(['getCount']),
    },

    components: {
        Header,
        Toolbar,
        SideCard,
    },

    data: () => ({
        //
    }),
};
</script>

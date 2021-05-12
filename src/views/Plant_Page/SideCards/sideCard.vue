<template>
    <v-card class="ma-3 pa-0" width="17rem" elevation="5" outlined>
        <Greeting_SideCard />
        <Detail_SideCard />
    </v-card>
</template>

<script>
import Greeting_SideCard from './Cards/greeting';
import Detail_SideCard from './Cards/details';

export default {
    name: 'SideCard',

    components: {
        Greeting_SideCard,
        Detail_SideCard,
    },
};
</script>

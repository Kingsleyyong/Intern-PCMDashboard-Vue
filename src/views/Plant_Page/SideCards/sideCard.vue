<template>
    <v-card color="transparent" class="pa-0">
        <Greeting_SideCard />

        <Detail_SideCard class="mt-3" />

        <TotalMotorOperation_SideCard class="mt-3" />

        <TotalMotorStatus_SideCard class="mt-3" />
    </v-card>
</template>

<script>
import Greeting_SideCard from './Cards/greeting';
import Detail_SideCard from './Cards/details';
import TotalMotorOperation_SideCard from './Cards/totalMotorOperation';
import TotalMotorStatus_SideCard from './Cards/totalMotorStatus';

export default {
    name: 'SideCard',

    components: {
        Greeting_SideCard,
        Detail_SideCard,
        TotalMotorOperation_SideCard,
        TotalMotorStatus_SideCard,
    },
};
</script>
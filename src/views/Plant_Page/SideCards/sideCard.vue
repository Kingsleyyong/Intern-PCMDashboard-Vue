<template>
    <v-card color="transparent" class="pa-0">
        <Greeting_SideCard />

        <Detail_SideCard class="mt-3" />

        <TotalMachineOperation_SideCard class="mt-3" />

        <TotalMachineStatus_SideCard class="mt-3" />
    </v-card>
</template>

<script>
import Greeting_SideCard from './Cards/greeting';
import Detail_SideCard from './Cards/details';
import TotalMachineOperation_SideCard from './Cards/totalMachineOperation';
import TotalMachineStatus_SideCard from './Cards/totalMachineStatus';

export default {
    name: 'SideCard',

    components: {
        Greeting_SideCard,
        Detail_SideCard,
        TotalMachineOperation_SideCard,
        TotalMachineStatus_SideCard,
    },
};
</script>
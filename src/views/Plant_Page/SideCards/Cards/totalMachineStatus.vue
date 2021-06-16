<template>
    <v-card elevation="5" outlined >
        <v-card-title class="pa-0 pt-4 text-h6 font-weight-bold subtitle-1 justify-center"
            >Total Machines Status
        </v-card-title>
        <v-main>
            <pie-chart :chartData="getMachineStatus" :totalMachine="getTotalMachine" />
        </v-main>
    </v-card>
</template>

<script>
import PieChart from '../Charts/totalMachineStatusPie';
import { mapGetters } from 'vuex';

export default {
    name: 'TotalMachineStatus_SideCard',

    components: { PieChart },

    computed: {
        ...mapGetters(['getMachineStatus', 'getTotalMachine']),
    },
};
</script>

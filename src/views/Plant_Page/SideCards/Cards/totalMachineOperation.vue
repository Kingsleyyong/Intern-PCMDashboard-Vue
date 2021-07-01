<template>
    <v-card elevation="5" outlined>
        <v-card-title
            class="
                pa-0
                pt-4
                font-weight-bold
                text-md-subtitle-1 text-lg-subtitle-2 text-xl-h6
                justify-center
            "
        >
            <span>Total Machines</span>
            <span> &nbsp;in Operation</span>
        </v-card-title>
        <v-main>
            <donut-chart :chartData="getMachineOperation" :totalMachine="getTotalMachine" />
        </v-main>
    </v-card>
</template>

<script>
import DonutChart from '../../../../components/Charts/totalMachineOperationDonut';
import { mapGetters } from 'vuex';

export default {
    name: 'TotalMachineOperation_SideCard',
    components: { DonutChart },

    computed: {
        ...mapGetters(['getMachineOperation', 'getTotalMachine']),
    },
};
</script>

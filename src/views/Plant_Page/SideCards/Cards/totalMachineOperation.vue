<template>
    <v-card :height="height" elevation="5" outlined>
        <v-card-title
            class="pa-0 pt-4 text-h6 font-weight-bold justify-center"
            style="font-size: 1vw"
            >Total Machines in Operation
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
        height() {
            switch (this.$vuetify.breakpoint.name) {
                case 'md':
                    return 250;
                case 'lg':
                    return 600;
                case 'xl':
                    return 800;
            }
        },
    },
};
</script>
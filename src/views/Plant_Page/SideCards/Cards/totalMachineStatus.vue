<template>
    <v-card :height="height" elevation="5" outlined>
        <v-card-title class="pa-0 pt-4 text-h6 font-weight-bold subtitle-1 justify-center"
            >Total Machines Status
        </v-card-title>
        <v-main>
            <pie-chart :chartData="getMachineStatus" :totalMachine="getTotalMachine" />
        </v-main>
    </v-card>
</template>

<script>
import PieChart from '../../../../components/Charts/totalMachineStatusPie';
import { mapGetters } from 'vuex';

export default {
    name: 'TotalMachineStatus_SideCard',

    components: { PieChart },

    computed: {
        ...mapGetters(['getMachineStatus', 'getTotalMachine']),
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
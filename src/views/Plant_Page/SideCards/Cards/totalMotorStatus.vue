<template>
    <v-card elevation="5" outlined >
        <v-card-title class="pa-0 pt-4 text-h6 font-weight-bold subtitle-1 justify-center"
            >Total Motors Status
        </v-card-title>
        <v-main>
            <pie-chart :chartData="getMotorStatus" :totalMotor="getTotalMotor" />
        </v-main>
    </v-card>
</template>

<script>
import PieChart from '../Charts/totalMotorStatusPie';
import { mapGetters } from 'vuex';

export default {
    name: 'TotalMotorStatus_SideCard',

    components: { PieChart },

    computed: {
        ...mapGetters(['getMotorStatus', 'getTotalMotor']),
    },
};
</script>

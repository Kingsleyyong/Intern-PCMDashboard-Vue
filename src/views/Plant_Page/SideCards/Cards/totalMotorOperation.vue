<template>
    <v-card elevation="5" outlined >
        <v-card-title class="pa-0 pt-4 text-h6 font-weight-bold justify-center" style="font-size: 1vw"
            >Total Motors in Operation</v-card-title
        >
        <v-main>
            <donut-chart :chartData="getMotorOperation" :totalMotor="getTotalMotor" />
        </v-main>
    </v-card>
</template>

<script>
import DonutChart from '../Charts/totalMotorOperationDonut';
import { mapGetters } from 'vuex';

export default {
    name: 'TotalMotorOperation_SideCard',
    components: { DonutChart },

    computed: {
        ...mapGetters(['getMotorOperation', 'getTotalMotor']),
    },
};
</script>

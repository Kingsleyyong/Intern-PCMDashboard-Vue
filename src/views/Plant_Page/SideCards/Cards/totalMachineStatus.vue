<template>
    <v-card elevation="5" outlined>
        <!--        <v-card-title-->
        <!--            v-show="$vuetify.breakpoint.lgAndUp"-->
        <!--            class="pa-0 pt-4 font-weight-bold text-lg-subtitle-2 text-xl-h6 justify-center"-->
        <!--        >-->
        <!--            <span>Total Machines in Operation</span>-->
        <!--        </v-card-title>-->

        <v-card-title
            class="
                pa-0
                pt-4
                text-md-subtitle-1 text-lg-subtitle-1 text-xl-h5
                font-weight-bold
                justify-center
            "
        >
            <span> Total Machines </span>
            <span> &nbsp;Status </span>
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
        // height() {
        //     switch (this.$vuetify.breakpoint.name) {
        //         case 'md':
        //             return 250;
        //         case 'lg':
        //             return 600;
        //         case 'xl':
        //             return 800;
        //     }
        // },
    },
};
</script>
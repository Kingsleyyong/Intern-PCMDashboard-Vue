<template>
    <v-card width="33%" height="25%" @click="goToGraph(dataObj, plant, dataObj.name)">
        <v-card-title class="pa-2 d-flex justify-space-between" :style="background_Theme">
            <h3 class="">{{ dataObj.name }}</h3>
            <v-dialog width="50%" overlay-color="grey lighten-3">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn elevation="0" small icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-scale-balance</v-icon>
                    </v-btn>
                </template>
                <MachineComparison :name="dataObj.name" />
            </v-dialog>
        </v-card-title>
        <v-card-text class="pa-5">
            <v-row class="title d-flex flex-row-reverse pr-1" :style="text_Theme">
                <span v-if="Math.sign(diferencePercentage) === -1">
                    <v-icon large :style="text_Theme">mdi-arrow-down</v-icon>
                    {{ Math.abs(diferencePercentage) }}
                </span>
                <span v-else>
                    <v-icon large :style="text_Theme">mdi-arrow-up</v-icon>
                    {{ diferencePercentage }}
                </span>
            </v-row>
            <v-row class="d-flex justify-center mt-12">
                <p class="font-weight-bold" style="font-size: 10vw" :style="text_Theme">
                    {{ dataObj.machineNum_Today }}
                </p>
            </v-row>
            <v-row class="d-flex justify-center mt-14">
                <p class="font-weight-light" style="font-size: 1vw">Machine</p>
            </v-row>
            <v-row class="d-flex justify-center ma-0">
                <caption class="font-italic font-weight-thin" style="font-size: 0.8vw">
                    Changes is compared to last month data.
                </caption>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import MachineComparison from './ComparisonDialog';

export default {
    name: 'MachinePercentage',

    props: ['dataObj', 'plant'],

    components: {
        MachineComparison,
    },

    computed: {
        text_Theme() {
            return {
                color: this.dataObj.themeColor,
            };
        },
        background_Theme() {
            return {
                background: this.dataObj.themeColor,
            };
        },
    },

    data() {
        return {
            diferencePercentage: (
                this.dataObj.machineNum_Today - this.dataObj.machineNum_Ytd)
        };
    },
    methods: {
        goToGraph(obj, plantId, category) {
            this.$router.push({ name: 'MachineGraph', params: { plantId, category } });
        },
    },
};
</script>

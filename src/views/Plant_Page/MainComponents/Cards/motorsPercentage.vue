<template>
    <v-card width="33%" height="25%" @click="goToGraph(dataObj, plant, dataObj.name)">
        <v-card-title class="pa-2 d-flex justify-space-between" :style="background_Theme">
            <h3 class="">{{ dataObj.name }} Motor</h3>
            <v-dialog width="50%" overlay-color="grey lighten-3">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn elevation="0" small icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-scale-balance</v-icon>
                    </v-btn>
                </template>
                <MotorComparison :name="dataObj.name" />
            </v-dialog>
        </v-card-title>
        <v-card-text class="pa-5">
            <v-row class="title d-flex flex-row-reverse" :style="text_Theme">
                <span v-if="Math.sign(diferencePercentage) === -1">
                    <v-icon large :style="text_Theme">mdi-arrow-down</v-icon>
                    {{ Math.abs(diferencePercentage) }}%
                </span>
                <span v-else>
                    <v-icon large :style="text_Theme">mdi-arrow-up</v-icon>
                    {{ diferencePercentage }}%
                </span>
            </v-row>
            <v-row class="d-flex justify-center mt-12">
                <p class="font-weight-bold" style="font-size: 10vw" :style="text_Theme">
                    {{ dataObj.motorNum_Today }}
                </p>
            </v-row>
            <v-row class="d-flex justify-center mt-14">
                <p class="font-weight-light" style="font-size: 1vw">Motor</p>
            </v-row>
            <v-row class="d-flex justify-center ma-0">
                <caption class="font-italic font-weight-thin" style="font-size: 0.8vw">
                    Charges in percentages (%) is compared to yesterday data.
                </caption>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import MotorComparison from './ComparisonDialog';

export default {
    name: 'MotorPercentage',

    props: ['dataObj', 'plant'],

    components: {
        MotorComparison,
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
                ((this.dataObj.motorNum_Today - this.dataObj.motorNum_Ytd) /
                    this.dataObj.motorNum_Ytd) *
                100
            ).toFixed(2),
        };
    },
    methods: {
        goToGraph(obj, plantId, category) {
            this.$router.push({ name: 'MotorGraph', params: { plantId, category } });
        },
    },
};
</script>

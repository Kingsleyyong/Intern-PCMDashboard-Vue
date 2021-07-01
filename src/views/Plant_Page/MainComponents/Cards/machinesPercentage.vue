<template>
    <v-card :height="height" width="33%" @click="goToGraph(dataObj, plant, dataObj.name)">
        <v-card-title
            :style="background_Theme"
            class="pa-1 d-flex justify-space-between text-md-subtitle-2 text-lg-h6"
        >
            <h3 class="">{{ dataObj.name }}</h3>
            <v-dialog overlay-color="grey lighten-3" width="50%">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" elevation="0" icon small>
                        <v-icon v-show="$vuetify.breakpoint.lgAndUp">mdi-scale-balance</v-icon>
                        <v-icon v-show="$vuetify.breakpoint.mdOnly" small>mdi-scale-balance</v-icon>
                    </v-btn>
                </template>
                <MachineComparison :name="dataObj.name" />
            </v-dialog>
        </v-card-title>
        <v-card-text class="pa-5">
            <v-row :style="text_Theme" class="title d-flex flex-row-reverse pr-1">
                <span v-if="Math.sign(differencePercentage) === -1">
                    <v-icon :style="text_Theme" large>mdi-arrow-down</v-icon>
                    {{ Math.abs(differencePercentage) }}
                </span>
                <span v-else>
                    <v-icon :style="text_Theme" large>mdi-arrow-up</v-icon>
                    {{ differencePercentage }}
                </span>
            </v-row>
            <v-row
                :style="text_Theme"
                class="d-flex justify-center font-weight-bold mt-9"
                style="font-size: 8vmax"
            >
                {{ dataObj.machineNum_Today }}
            </v-row>
            <v-row class="d-flex justify-center mt-15 font-weight-light text-lg-h6"> Machine</v-row>
            <v-row
                class="d-flex justify-center font-italic font-weight-thin text-md-caption text-lg-body-2"
            >
                Changes is compared to last month data.
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
        height() {
            switch (this.$vuetify.breakpoint.name) {
                case 'md':
                    return 230;
                case 'lg':
                    return 250;
                case 'xl':
                    return 300;
            }
        },
    },

    data() {
        return {
            differencePercentage: this.dataObj.machineNum_Today - this.dataObj.machineNum_Ytd,
        };
    },
    methods: {
        goToGraph(obj, plantId, category) {
            this.$router.push({ name: 'MachineGraph', params: { plantId, category } });
        },
    },
};
</script>
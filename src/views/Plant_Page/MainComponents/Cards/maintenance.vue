<template>
    <v-card width="33%" max-height="453" style="display: flex; flex-direction: column">
        <v-card-title class="grey darken-3 pa-2"> Predictive Maintenance List</v-card-title>
        <v-card-subtitle class="pa-2 mt-1 mr-3 d-flex justify-space-around">
            <div class="title">Motor ID</div>

            <v-tooltip top v-for="(symbol, key, index) in getPredictedFactor" :key="index">
                <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on"> {{ symbol }}</v-icon>
                </template>
                <span>{{ key }}</span>
            </v-tooltip>
        </v-card-subtitle>
        <v-card-text style="overflow-y: auto" class="pa-0 title font-weight-light">
            <v-row
                class="grey darken-2 ma-1 mb-3 pa-1 d-flex justify-space-around"
                v-for="(i, index) in getPredictPlantMotor"
                :key="index"
            >
                <span v-for="(element, index) in i" :key="index">
                    <span v-if="index === 0">{{ element }}</span>
                    <span v-else-if="index !== 0 && element === true">
                        <v-icon color="green">fa-check-circle</v-icon>
                    </span>
                    <span v-else-if="index !== 0 && element === false">
                        <v-icon color="red">fa-times-circle</v-icon>
                    </span>
                </span>
            </v-row>
        </v-card-text>
        <v-card-subtitle class="pa-2 caption font-weight-bold font-italic">
            *Health condition is by individual or combination of pump motor vibration, energy
            pattern, pressure and flow
        </v-card-subtitle>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getPredictedFactor', 'getPredictPlantMotor']),
    },
};
</script>

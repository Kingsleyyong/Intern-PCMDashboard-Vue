<template>
    <v-card width="40.7%" max-height="453" style="display: flex; flex-direction: column">
        <v-card-title class="grey darken-3 pa-2 d-flex justify-space-between">
            Predictive Maintenance List
            <v-menu v-model="menu" :close-on-content-click="false" offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                </template>

                <v-card class="pa-5 pt-1">
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-card>
            </v-menu>
        </v-card-title>

        <v-card-text style="overflow-y: auto" class="pa-0">
            <v-data-table
                :headers="getPredictedFactor"
                :items="getPredictPlantMachine"
                :search="search"
                multi-sort
                hide-default-footer
                disable-pagination
            >
                <template v-slot:header.vibrate="{ header }">
                    <v-icon>{{ header.text }}</v-icon>
                </template>
                <template v-slot:header.temp="{ header }">
                    <v-icon>{{ header.text }}</v-icon>
                </template>
                <template v-slot:header.normalize="{ header }">
                    <v-icon>{{ header.text }}</v-icon>
                </template>
                <template v-slot:header.energy="{ header }">
                    <v-icon>{{ header.text }}</v-icon>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getPredictedFactor', 'getPredictPlantMachine']),
    },
    data() {
        return {
            search: '',
        };
    },
};
</script>

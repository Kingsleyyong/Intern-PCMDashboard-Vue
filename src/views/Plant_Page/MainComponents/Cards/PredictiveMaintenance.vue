<template>
    <v-card :height="height" style="display: flex; flex-direction: column" width="40.7%">
        <v-card-title class="grey darken-3 pa-1 d-flex justify-space-between text-sm-subtitle-2">
            Predictive Maintenance List
            <v-menu :close-on-content-click="false" offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" icon>
                        <v-icon v-show="$vuetify.breakpoint.lgAndUp">mdi-magnify</v-icon>
                        <v-icon v-show="$vuetify.breakpoint.mdOnly" small>mdi-magnify</v-icon>
                    </v-btn>
                </template>

                <v-card class="pa-5 pt-1">
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        hide-details
                        label="Search"
                        single-line
                    ></v-text-field>
                </v-card>
            </v-menu>
        </v-card-title>

        <v-card-text class="pa-0" style="overflow-y: auto">
            <v-data-table
                :headers="getPredictedFactor"
                :items="getPredictPlantMachine"
                :search="search"
                disable-pagination
                hide-default-footer
                multi-sort
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
        height() {
            switch (this.$vuetify.breakpoint.name) {
                case 'md':
                    return 335;
                case 'lg':
                    return 400;
                case 'xl':
                    return 800;
            }
        },
    },

    data() {
        return {
            search: '',
        };
    },
};
</script>

<template>
    <v-card elevation="5" outlined >
        <v-card-text class="d-flex justify-space-around">
            <v-spacer />
            <div class="d-inline-flex justify-space-between">
                <div>
                    <v-icon small>mdi-map-marker-check-outline</v-icon>
                </div>
                <div>
                    <h4>Location:</h4>
                    <h6>{{ getMeterDetails.name }}</h6>
                    <h6>{{ getMeterDetails.lat }}</h6>
                    <h6>{{ getMeterDetails.lon }}</h6>
                </div>
            </div>
            <v-spacer />
            <div class="d-inline-flex">
                <div>
                    <v-icon small>mdi-pulse</v-icon>
                </div>
                <div>
                    <h4>Status:</h4>
                    <v-row v-if="getMeterDetails.meterStatus === 1" class="mt-1">
                        <v-icon small color="green">mdi-circle-medium </v-icon>
                        <h6>Online</h6>
                    </v-row>
                    <v-row class="mt-1" v-else-if="getMeterDetails.meterStatus === 0">
                        <v-icon small color="red">mdi-circle-medium</v-icon>
                        <h6>Offline</h6>
                    </v-row>
                </div>
            </div>
            <v-spacer />
        </v-card-text>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Details_SideCard',

    computed: {
        ...mapGetters(['getMeterDetails']),
    },
};
</script>

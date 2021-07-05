<template>
    <v-card elevation="5" outlined>
        <v-container class="d-flex justify-space-around">
            <div class="d-inline-flex justify-space-between">
                <div>
                    <v-icon v-show="$vuetify.breakpoint.md" small
                        >mdi-map-marker-check-outline
                    </v-icon>
                    <v-icon v-show="$vuetify.breakpoint.lg">mdi-map-marker-check-outline</v-icon>
                    <v-icon v-show="$vuetify.breakpoint.xl" large
                        >mdi-map-marker-check-outline
                    </v-icon>
                </div>
                <div>
                    <v-card-text
                        class="pa-1 font-weight-bold text-md-caption text-lg-subtitle-2 text-xl-h6"
                        >Location:
                    </v-card-text>
                    <div>
                        <h6>{{ getMeterDetails.name }}</h6>
                        <h6>{{ getMeterDetails.lat }}</h6>
                        <h6>{{ getMeterDetails.lon }}</h6>
                    </div>
                </div>
            </div>
            <div class="d-inline-flex">
                <div>
                    <v-icon v-show="$vuetify.breakpoint.md" small>mdi-pulse</v-icon>
                    <v-icon v-show="$vuetify.breakpoint.lg">mdi-pulse</v-icon>
                    <v-icon v-show="$vuetify.breakpoint.xl" large>mdi-pulse</v-icon>
                </div>
                <div>
                    <v-card-text
                        class="pa-1 font-weight-bold text-md-caption text-lg-subtitle-2 text-xl-h6"
                        >Status:
                    </v-card-text>
                    <v-row v-if="getMeterDetails.meterStatus === 1" class="mt-1">
                        <v-icon color="green" v-show="$vuetify.breakpoint.lgAndDown" x-small >mdi-circle-medium</v-icon>
                        <v-icon color="green" v-show="$vuetify.breakpoint.xl" large>mdi-circle-medium</v-icon>
                        <h6>Online</h6>
                    </v-row>
                    <v-row v-else-if="getMeterDetails.meterStatus === 0" class="mt-1">
                        <v-icon color="red">mdi-circle-medium</v-icon>
                        <h6>Offline</h6>
                    </v-row>
                </div>
            </div>
        </v-container>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Details_SideCard',

    computed: {
        ...mapGetters(['getMeterDetails']),
    },

    mounted() {
        this.$store.dispatch('getMeterDetail');
    },
};
</script>
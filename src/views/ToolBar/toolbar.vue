<template>
    <v-row class="ma-0">
        <v-tabs center-active v-model="getPlantCount[0].plantId">
            <div
                class="headline font-weight-black white--text ml-3 mr-3 ma-1 pa-1 pl-8 pr-8 rounded"
                :style="bg_Theme"
            >
                {{ getCurrentSelectedPlant }}
            </div>
            <v-tabs-slider :style="bg_Theme" />
            <v-tab
                v-for="plant of getPlantCount"
                :key="plant.plantId"
                v-on:click="$emit('setCurrentPlantORMachine', plant.plantId)"
                class="ml-2 mr-2"
                :style="text_Theme"
            >
                {{ plant.plantId }}
            </v-tab>
        </v-tabs>
    </v-row>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Toolbar',

    props: ['themeColor'],

    computed: {
        bg_Theme() {
            return {
                backgroundColor: this.themeColor,
            };
        },
        text_Theme() {
            return {
                color: this.themeColor,
            };
        },
        ...mapGetters(['getPlantCount', 'getCurrentSelectedPlant']),
    },
};
</script>

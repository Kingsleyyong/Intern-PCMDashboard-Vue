<template>
    <v-row class="ma-0">
        <v-tabs class="" center-active>
            <div
                class="headline font-weight-black white--text ml-3 mr-3 ma-1 pa-1 pl-8 pr-8 rounded"
                :style="bg_Theme"
            >
                {{ plantId }}
            </div>
            <v-tabs-slider :style="bg_Theme" />
            <v-tab
                v-for="tag in list"
                :key="tag"
                v-on:click="$emit('setCurrentPlant', tag)"
                class="ml-2 mr-2"
                :style="text_Theme"
            >
                {{ tag }}
            </v-tab>
        </v-tabs>
    </v-row>
</template>

<script>
export default {
    name: 'Toolbar',

    props: ['list', 'plantId', 'themeColor'],

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
    },
};
</script>

<template>
    <v-row class="ma-0">
        <v-tabs class="" fixed-tabs>
            <v-tab v-for="tag in getPlantCount.slice(0, 6)" :key="tag" @click="currentPlant(tag)">
                {{ tag }}
            </v-tab>

            <v-menu v-if="getPlantCount.length" class="mt-1" bottom left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn text class="align-self-center mr-4" v-bind="attrs" v-on="on">
                        More
                        <v-icon right> mdi-menu-down</v-icon>
                    </v-btn>
                </template>

                <v-list class="grey darken-3" style="width: 10rem; height: 30rem; overflow-y: auto">
                    <v-list-item
                        class="ml-4 mr-4"
                        v-for="item in getPlantCount.slice(6)"
                        :key="item"
                        @click="currentPlant(item)"
                    >
                        {{ item }}
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-tabs>
    </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Toolbar',

    computed: {
        ...mapGetters(['getPlantCount']),
    },

    data: () => ({
        //
    }),

    methods: {
        ...mapActions(['currentPlant']),
    },
};
</script>

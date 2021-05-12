<template>
    <v-row class="ma-0" style="background-color: #272726">
        <v-tabs class="" fixed-tabs>
            <v-tab v-for="tag in tags" :key="tag">
                {{ tag }}
            </v-tab>

            <v-menu v-if="tags.length" class="mt-1" bottom left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn text class="align-self-center mr-4" v-bind="attrs" v-on="on">
                        More
                        <v-icon right> mdi-menu-down</v-icon>
                    </v-btn>
                </template>

                <v-list class="grey darken-3">
                    <v-list-item class="ml-4 mr-4" v-for="item in tags" :key="item">
                        {{ item }}
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-tabs>
    </v-row>
</template>

<script>
export default {
    name: 'Toolbar',

    data() {
        return {
            tags: ['Plant1', 'Plant2', 'Plant3', 'Plant4', 'Plant5', 'Plant6'],
        };
    },
};
</script>

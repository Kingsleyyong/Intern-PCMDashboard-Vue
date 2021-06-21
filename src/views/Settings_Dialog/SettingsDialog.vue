<template>
    <v-card>
        <v-card-title class="d-flex justify-space-between">
            <div class="ml-10 teal lighten-1 pa-2 pl-8 pr-5 rounded-t-xl">
                {{ getCurrentSelectedPlant }}
                <v-menu offset-x allow-overflow max-height="300">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon>mdi-menu-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="(item, index) in getPlantCount" :key="index" link>
                            <v-list-item-title @click="currentPlant(item)"
                                >{{ item }}
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>

            <v-card-actions>
                <v-btn icon @click="close">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card-title>

        <div style="overflow-y: auto">
            <div
                @duplicate="duplicate"
                v-for="(group, index) in partsArray"
                :key="index"
                :is="group.type"
            />
        </div>

        <v-card-actions>
            <v-btn fab large right bottom fixed class="mr-4" color="orange darken-4">
                <v-icon>mdi-zip-disk</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MachineParts from './MachineParts/TableParts';

export default {
    components: {
        MachineParts,
    },

    computed: {
        ...mapGetters(['getCurrentSelectedPlant', 'getPlantCount']),
    },

    data() {
        return {
            partsArray: [{ type: 'MachineParts' }],
        };
    },

    methods: {
        close() {
            this.partsArray= [{ type: 'MachineParts' }] ;
            this.$emit('input');
        },
        ...mapActions(['currentPlant']),

        duplicate() {
            let item = { type: 'MachineParts' };
            this.partsArray.push(item);
        },
    },
};
</script>

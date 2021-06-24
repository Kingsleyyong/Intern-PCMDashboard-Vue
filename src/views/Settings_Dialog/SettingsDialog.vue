<template>
    <v-card>
        <v-card-title class="d-flex justify-space-between">
            <div class="ml-10 teal lighten-1 pa-2 pl-8 pr-5 rounded-t-xl">
                {{ getCurrentSelectedPlant }}
                <v-menu allow-overflow max-height="300" offset-x>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" icon>
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
            <MachineParts
                v-for="(group, index) in partsArray"
                :key="index"
                :data="group.data"
                :passing="saveEvent"
                @duplicate="duplicate"
                @tableData="storing"
            />
        </div>

        <v-card-actions>
            <v-btn
                bottom
                class="mr-4"
                color="orange darken-4"
                fab
                fixed
                large
                right
                @click="saveButton"
            >
                <v-icon>mdi-zip-disk</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MachineParts from './MachineParts/TableParts';
import Vue from 'vue';

export default {
    components: {
        MachineParts,
    },

    computed: {
        ...mapGetters(['getCurrentSelectedPlant', 'getPlantCount']),
    },

    data() {
        return {
            saveEvent: new Vue(),
            partsArray: [{ data: null }],
            fullData: [],
        };
    },

    methods: {
        ...mapActions(['savingSettingsData']),

        close() {
            if (confirm("Your settings won't be saved, are you sure to proceed?")) {
                this.$emit('input'); //close dialog
            }
        },

        duplicate(tableData) {
            this.partsArray.push({ data: tableData });
        },

        storing(tableData) {
            this.fullData.push(
                // this.fullData
                //     .filter((item) => item.machine === tableData.machine)
                //     .map((item) => ({
                //         machine: item.machine,
                //         data: {
                //             name: item.name,
                //             pcm: item.pcm,
                //             maintenanceHr: item.maintenanceHr,
                //             lastRuntimeHr: item.lastRuntimeHr,
                //         },
                //     }))
                tableData
            );
        },

        saveButton() {
            this.saveEvent.$emit('gettingData');
            this.savingSettingsData(this.fullData);
            console.log(this.fullData);
            alert('Saved successfully!');
            this.$emit('input'); //close dialog
        },
    },
};
</script>
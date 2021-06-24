<template>
    <div class="d-flex justify-center">
        <div>
            <v-row class="mt-5 mb-3">
                <div>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                v-bind="attrs"
                                v-on="on"
                                class="mt-4"
                                outlined
                                style="transform: rotate(90deg)"
                                @click="duplicate"
                            >
                                <v-icon style="transform: rotate(-90deg)">
                                    mdi-note-multiple-outline
                                </v-icon>
                            </v-btn>
                        </template>
                        Duplicate Table
                    </v-tooltip>
                </div>

                <MachinePartsTable ref="form" :rowData="data" pass="saveEvent" />
            </v-row>
        </div>
    </div>
</template>

<script>
import MachinePartsTable from './Table/machines_parts_table';
import Vue from 'vue';

export default {
    props: ['data', 'passing'],
    data() {
        return {
            childMethodsQueue: [],
            saveEvent: new Vue(),
        };
    },
    mounted() {
        this.passing.$on('gettingData', () => {
            this.$emit('tableData', this.$refs.form.getRowData());
        });
    },
    methods: {
        duplicate() {
            let tableData = this.$refs.form.getTableData();
            this.$emit('duplicate', tableData);
        },
        saving() {
            console.log('hi');
            // this.saveEvent.$emit('saveTrigger')
        },
    },

    components: {
        MachinePartsTable,
    },
};
</script>
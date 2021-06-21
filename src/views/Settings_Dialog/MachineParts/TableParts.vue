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

                <MachinePartsTable />
<!--                <Table />-->
            </v-row>
        </div>
    </div>
</template>

<script>
import MachinePartsTable from './Table/machines_parts_table';
import Table from "./Table/table";

export default {
    methods: {
        duplicate() {
            this.$emit('duplicate');
        },
    },

    components: {
        MachinePartsTable,
        Table
    },
};
</script>

<template>
    <v-data-table :headers="headers" :items="row" class="elevation-5" hide-default-footer>
        <template v-slot:top>
            <v-row class="pa-3">
                <v-select
                    v-model="machineSelected"
                    :items="getPlantMachineID"
                    auto
                    class="pl-3"
                    label="Please choose a Machine ID."
                ></v-select>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" class="ma-3" large @click="appendTableRow">
                            <v-icon> mdi-bookmark-plus-outline</v-icon>
                        </v-btn>
                    </template>
                    Add Row
                </v-tooltip>
            </v-row>
        </template>

        <template v-slot:item.name="{ item }">
            <v-combobox
                v-model="item.name"
                :items="parts"
                label="Please Write or Select"
            ></v-combobox>
        </template>

        <template v-slot:item.pcm="{ item }">
            <v-radio-group
                v-if="item.pcm === null"
                :return-value.sync="item.pcm"
                class="pl-8 d-flex justify-space-between"
                row
            >
                <v-radio label="Yes" @click="item.pcm = 'yes'"></v-radio>
                <v-radio label="No" @click="item.pcm = 'no'"></v-radio>
            </v-radio-group>

            <div
                v-if="item.pcm === 'yes' || getPredictFactorKeys.includes(item.pcm)"
                class="d-flex"
            >
                <v-select v-model="item.pcm" :items="getPredictFactorKeys"></v-select>
                <v-btn class="mt-5" icon @click="item.pcm = null">
                    <v-icon>mdi-close-outline</v-icon>
                </v-btn>
            </div>
            <div v-if="item.pcm === 'no'" class="d-flex">
                <span class="mt-2 ml-7">No PCM Required</span>
                <v-btn icon @click="item.pcm = null">
                    <v-icon>mdi-close-outline</v-icon>
                </v-btn>
            </div>
        </template>

        <template v-slot:item.maintenanceHr="{ item }">
            <div
                v-if="
                    item.pcm === 'yes' ||
                    item.pcm === null ||
                    getPredictFactorKeys.includes(item.pcm)
                "
            >
                -
            </div>
            <v-text-field
                v-if="item.pcm === 'no'"
                v-model="item.maintenanceHr"
                :rules="[numberRule]"
                label="Please enter number:"
                single-line
            >
            </v-text-field>
        </template>

        <template v-slot:item.lastRuntimeHr="{ item }">
            <div
                v-if="
                    item.pcm === 'yes' ||
                    item.pcm === null ||
                    getPredictFactorKeys.includes(item.pcm)
                "
            >
                -
            </div>
            <v-text-field
                v-if="item.pcm === 'no'"
                v-model="item.lastRuntimeHr"
                :rules="[numberRule]"
                label="Please enter number:"
                single-line
            >
            </v-text-field>
        </template>
    </v-data-table>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'MachinePartsTable',
    props: ['rowData', 'pass'],

    data() {
        return {
            machineSelected: null,

            parts: ['Bearing', 'Base Frame', 'Cooling Coil', 'Blower', 'Isolator'],
            numberRule: (num) => {
                if (!isNaN(num)) return true;
                return 'Please insert a valid number.';
            },
            headers: [
                {
                    text: null,
                    align: 'center',
                    sortable: false,
                    value: 'name',
                    width: '15rem',
                },
                {
                    text: 'PCM Required',
                    value: 'pcm',
                    width: '14rem',
                    sortable: false,
                    align: 'center',
                },
                {
                    text: 'Maintenance Cycle Hour',
                    value: 'maintenanceHr',
                    width: '16rem',
                    sortable: false,
                    align: 'center',
                },
                {
                    text: 'Last Runtime Hour',
                    value: 'lastRuntimeHr',
                    width: '16rem',
                    sortable: false,
                    align: 'center',
                },
            ],
            row:
                this.rowData !== null
                    ? this.rowData
                    : [
                          {
                              name: '',
                              pcm: null,
                              maintenanceHr: '',
                              lastRuntimeHr: '',
                          },
                      ],
        };
    },
    methods: {
        appendTableRow() {
            this.row.push({
                name: '',
                pcm: null,
                maintenanceHr: '',
                lastRuntimeHr: '',
            });
        },
        enterSelect(values) {
            console.log(values);
        },

        getTableData() {
            return this.row.map((element) => ({
                machine: this.machineSelected,
                name: element.name,
                pcm: element.pcm,
                maintenanceHr: element.maintenanceHr,
                lastRuntimeHr: element.lastRuntimeHr,
            }));
        },
        getRowData() {
            return {
                machine: this.machineSelected,
                data: this.row,
            };
        },
    },

    computed: {
        ...mapGetters(['getPlantMachineID', 'getPredictFactorKeys']),
    },
};
</script>
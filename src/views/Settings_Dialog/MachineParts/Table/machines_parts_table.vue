<template>
    <v-data-table
        class="elevation-5"
        hide-default-footer
        :headers="headers"
        :items="row"
        @input="enterSelect($event)"
    >
        <template v-slot:top>
            <v-row class="pa-3">
                <v-select
                    v-model="machineSelected"
                    :items="getPlantMachineID"
                    label="Please choose a Machine ID."
                    class="pl-3"
                ></v-select>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" @click="appendTableRow" large class="ma-3">
                            <v-icon> mdi-bookmark-plus-outline</v-icon>
                        </v-btn>
                    </template>
                    Add Row
                </v-tooltip>
            </v-row>
        </template>

        <template v-slot:item.name="{ item }">
            <v-combobox
                label="Please Write or Select"
                :items="parts"
                v-model="item.name"
            ></v-combobox>
        </template>

        <template v-slot:item.pcm="{ item }">
            <v-radio-group
                :return-value.sync="item.pcm"
                row
                class="pl-8 d-flex justify-space-between"
                v-if="item.pcm === null || item.pcm === 'no'"
            >
                <v-radio label="Yes" @click="item.pcm = 'yes'"></v-radio>
                <v-radio label="No" @click="item.pcm = 'no'"></v-radio>
            </v-radio-group>

            <div v-if="item.pcm === 'yes' || getPredictFactorKeys.includes(item.pcm)" class="d-flex">
                <v-select :items="getPredictFactorKeys" v-model="item.pcm"></v-select>
                <v-btn icon class="mt-5" @click="item.pcm = null"><v-icon>mdi-close-outline</v-icon></v-btn>
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
                label="Please enter number:"
                :rules="[numberRule]"
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
                label="Please enter number:"
                :rules="[numberRule]"
                single-line
            >
            </v-text-field>
        </template>
    </v-data-table>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: ['appendRow'],

    computed: {
        ...mapGetters(['getPlantMachineID', 'getPredictFactorKeys']),
    },

    data() {
        return {
            machineSelected: null,
            // partsSelected: null,
            pcmSelected: null,
            // maintenanceHr: 0,
            // lastRunHr: 0,

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
            row: [
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
        enterSelect(values){
            console.log(values);
        }
        // selectPCM(con) {
        //     this.pcmSelected = con;
        //     console.log(
        //         this.partsSelected,
        //         this.machineSelected,
        //         this.maintenanceHr,
        //         this.lastRunHr
        //     );
        // },
        // saveMaintenanceHr(hour) {
        //     if (isNaN(hour) === false) {
        //         this.maintenanceHr = hour;
        //     }
        // },
        // saveLastRunHr(hour) {
        //     if (isNaN(hour) === false) {
        //         this.lastRunHr = hour;
        //     }
        // },
    },
};
</script>

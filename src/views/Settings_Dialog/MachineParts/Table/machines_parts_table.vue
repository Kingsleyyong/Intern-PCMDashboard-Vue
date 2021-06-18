<template>
    <v-data-table class="elevation-5" hide-default-footer :headers="headers" :items="row">
        <template v-slot:top>
            <v-row class="pa-3">
                <v-select
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
                clearable
                hide-selected
                small-chips
                label="Please Write or Select"
                :items="item.name"
            ></v-combobox>
        </template>

        <template v-slot:item.pcm="props">
            <v-radio-group
                :return-value.sync="props.item.pcm"
                row
                class="pl-8 d-flex justify-space-between"
            >
                <v-radio label="Yes"></v-radio>
                <v-radio label="No"></v-radio>
            </v-radio-group>
        </template>

        <template v-slot:item.maintenanceHr="props">
            <v-edit-dialog
                :return-value.sync="props.item.maintenanceHr"
                persistent
                @save="saveMCH(props.item.maintenanceHr)"
                large
            >
                <!--                            @save="save"-->
                <!--                            @cancel="cancel"-->
                <!--                            @open="open"-->
                <!--                            @close="close"-->
                <!--                        >-->

                <div>{{ props.item.maintenanceHr }}</div>
                <!--                    <v-icon right x-small class="blue">mdi-circle-edit-outline</v-icon>-->
                <template v-slot:input>
                    <div class="mt-4 text-h6">Update Maintenance Cycle Hour</div>
                    <v-text-field
                        v-model="props.item.maintenanceHr"
                        :rules="[numberRule]"
                        label="Edit"
                        single-line
                        counter
                        autofocus
                    ></v-text-field>
                </template>
            </v-edit-dialog>
        </template>

        <template v-slot:item.name="{ item }">
            <v-combobox
                clearable
                hide-selected
                small-chips
                label="Please Write or Select"
                :items="item.name"
            ></v-combobox>
        </template>

        <template v-slot:item.lastRuntimeHr="props">
            <v-edit-dialog :return-value.sync="props.item.lastRuntimeHr" large persistent>
                <!--                            @save="save"-->
                <!--                            @cancel="cancel"-->
                <!--                            @open="open"-->
                <!--                            @close="close"-->
                <!--                        >-->
                <div>{{ props.item.lastRuntimeHr }}</div>
                <template v-slot:input>
                    <div class="mt-4 text-h6">Update Last Runtime Hour</div>
                    <v-text-field
                        v-model="props.item.lastRuntimeHr"
                        :rules="[numberRule]"
                        label="Edit"
                        single-line
                        counter
                        autofocus
                    ></v-text-field>
                </template>
            </v-edit-dialog>
        </template>
    </v-data-table>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: ['appendRow'],

    computed: {
        ...mapGetters(['getPlantMachineID']),
    },

    data() {
        return {
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
                    width: '14rem',
                    sortable: false,
                    align: 'center',
                },
                // { text: 'Iron (%)', value: 'iron', width: '10rem' },
            ],
            row: [
                {
                    name: ['Bearing', 'Base Frame', 'Cooling Coil', 'Blower', 'Isolator'],
                    pcm: ['Yes', 'No'],
                    maintenanceHr: '',
                    lastRuntimeHr: '',
                },
            ],
        };
    },
    methods: {
        appendTableRow() {
            this.row.push({});
        },
    },
};
</script>

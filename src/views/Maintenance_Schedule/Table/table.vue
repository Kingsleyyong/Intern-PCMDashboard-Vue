<template>
    <v-data-table
        :headers="headers"
        :items="data"
        :search="search"
        class="scheduleTable subtitle-1"
        multi-sort
    >
        <template v-slot:item.lastHP="{ item }">
            <div v-if="item.lastHP <= 50" class="title font-weight-black red--text text--accent-4">
                {{ item.lastHP }}%
            </div>
            <div
                v-else-if="item.lastHP > 50 && item.lastHP < 75"
                class="title font-weight-regular yellow--text text--accent-4"
            >
                {{ item.lastHP }}%
            </div>
            <div v-else class="title font-weight-thin green--text text--accent-4">
                {{ item.lastHP }}%
            </div>
        </template>

        <template v-slot:item.currentHP="{ item }">
            <div
                v-if="item.currentHP <= 50"
                class="title font-weight-black red--text text--accent-4"
            >
                {{ item.currentHP }}%
            </div>
            <div
                v-else-if="item.currentHP > 50 && item.currentHP < 75"
                class="title font-weight-regular yellow--text text--accent-4"
            >
                {{ item.currentHP }}%
            </div>
            <div v-else class="title font-weight-thin green--text text--accent-4">
                {{ item.currentHP }}%
            </div>
        </template>

        <template v-slot:item.differentHP="{ item }">
            <div
                v-if="item.differentHP <= 50"
                class="title font-weight-black red--text text--accent-4"
            >
                {{ item.differentHP }}%
            </div>
            <div
                v-else-if="item.differentHP > 50 && item.differentHP < 75"
                class="title font-weight-regular yellow--text text--accent-4"
            >
                {{ item.differentHP }}%
            </div>
            <div v-else class="title font-weight-thin green--text text--accent-4">
                {{ item.differentHP }}%
            </div>
        </template>

        <template v-slot:item.recentUpdateDate="{ item }">
            <template v-if="item.editing === false">
                {{ item.recentUpdateDate }}
            </template>

            <template v-else-if="item.editing === true">
                <v-datetime-picker v-model="item.recentUpdateDate">
                    <template slot="dateIcon">
                        <v-icon large>mdi-calendar-today</v-icon>
                    </template>
                    <template slot="timeIcon">
                        <v-icon large>mdi-clock-time-five-outline</v-icon>
                    </template>
                </v-datetime-picker>
            </template>
        </template>

        <template v-slot:item.status="{ item }">
            <template v-if="item.editing === false">
                <div v-if="item.status === 'PENDING'" class="title font-weight-black red accent-4">
                    {{ item.status }}
                </div>
                <div
                    v-else-if="item.status === 'ASSIGNED'"
                    class="title font-weight-medium yellow darken-3"
                >
                    {{ item.status }}
                </div>
                <div
                    v-else-if="item.status === 'COMPLETED'"
                    class="title font-weight-regular green accent-4"
                >
                    {{ item.status }}
                </div>
            </template>
            <template v-else-if="item.editing === true">
                <v-select
                    v-model="item.status"
                    :items="['PENDING', 'ASSIGNED', 'COMPLETED']"
                    label="Please select:"
                >
                </v-select>
            </template>
        </template>

        <template v-slot:item.remark="{ item }">
            <template v-if="item.editing === false">
                {{ item.remark }}
            </template>
            <template v-else-if="item.editing === true">
                <v-text-field v-model="item.remark" label="Please write: "></v-text-field>
            </template>
        </template>

        <template v-slot:item.btn="{ item }">
            <div v-if="item.editing === false">
                <v-btn icon @click="edit(true, item.rowNum)">
                    <v-icon>mdi-circle-edit-outline</v-icon>
                </v-btn>
            </div>

            <div v-if="item.editing === true" class="d-flex">
                <v-btn icon @click="saveData(item.rowNum)">
                    <v-icon>mdi-content-save-outline</v-icon>
                </v-btn>
                <v-btn icon @click="edit(false, item.rowNum)">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </div>
        </template>
    </v-data-table>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: ['search'],
    computed: {
        ...mapGetters(['getMaintenanceScheduleTableData']),
    },
    mounted: function () {
        this.getTableData();
    },

    methods: {
        setDate(){

        },
        getTableData() {
            this.data = this.getMaintenanceScheduleTableData;
        },
        edit(cond, rowNum) {
            this.data
                .filter((m) => m.rowNum === rowNum)
                .map((row) => {
                    row.editing = cond;
                });
        },
        saveData(rowNum) {
            this.data
                .filter((m) => m.rowNum === rowNum)
                .map((row) => {
                    // row.recentUpdateDate = dayjs(row.recentUpdateDate.getTime()).format(
                    //     'h:mma, DD MMM YYYY'
                    // );
                    row.recentUpdateDate = row.recentUpdateDate.getTime();
                    row.editing = false;
                });
        },
    },

    data() {
        return {
            date: null,
            headers: [
                {
                    text: 'No.',
                    align: 'center',
                    sortable: false,
                    value: 'rowNum',
                    width: '1rem',
                },
                {
                    text: 'Machines',
                    align: 'center',
                    sortable: true,
                    value: 'machine',
                    width: '7rem',
                },
                {
                    text: 'Parts',
                    align: 'center',
                    sortable: false,
                    value: 'part',
                    width: '7rem',
                },
                {
                    text: 'PCM / Maintenance Hour',
                    align: 'center',
                    sortable: false,
                    value: 'type',
                    width: '10rem',
                },
                {
                    text: 'Running Hours',
                    align: 'center',
                    sortable: true,
                    value: 'runHour',
                    width: '10rem',
                },
                {
                    text: 'Balance Hours',
                    align: 'center',
                    sortable: true,
                    value: 'balanceHr',
                    width: '10rem',
                },
                {
                    text: 'Last Health Point',
                    align: 'center',
                    sortable: true,
                    value: 'lastHP',
                    width: '8rem',
                },
                {
                    text: 'Current Health Point',
                    align: 'center',
                    sortable: true,
                    value: 'currentHP',
                    width: '8rem',
                },
                {
                    text: 'Different Health Point',
                    align: 'center',
                    sortable: true,
                    value: 'differentHP',
                    width: '8rem',
                },

                {
                    text: 'Last Service Update Date',
                    align: 'center',
                    sortable: false,
                    value: 'lastUpdateDate',
                    width: '13rem',
                },
                {
                    text: 'Recent Service Update Date',
                    align: 'center',
                    sortable: false,
                    value: 'recentUpdateDate',
                    width: '13rem',
                },
                {
                    text: 'Status',
                    align: 'center',
                    sortable: false,
                    value: 'status',
                    width: '10rem',
                },
                {
                    text: 'Remarks',
                    align: 'center',
                    sortable: false,
                    value: 'remark',
                    width: '10rem',
                },
                {
                    align: 'center',
                    value: 'btn',
                },
            ],
            data: [],
        };
    },
};
</script>

<style>
.scheduleTable table td {
    /*border-radius: 0.1rem;*/
    /*border-left: 0.5px solid #fff;*/
    border-right: 0.5px solid #808080;
}

.scheduleTable table tr:hover {
    background-color: #6b7371 !important;
}

.scheduleTable table td:hover {
    border: 2px solid #bfbfbf;
}

.scheduleTable table tr:nth-of-type(even) {
    background-color: #4f4f4f;
}
</style>
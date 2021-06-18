<template>
    <v-data-table
        :headers="headers"
        :search="search"
        multi-sort
    ></v-data-table>
</template>

<script>
export default {
    props: ['search'],
    data() {
        return {
            headers: [
                {
                    text: 'No.',
                    align: 'center',
                    sortable: false,
                    value: 'rowNum',
                    width: '1rem',
                },
                {
                    text: 'Machines ID',
                    align: 'center',
                    sortable: false,
                    value: 'machineID',
                    width: '7rem',
                },
                {
                    text: 'Parts',
                    align: 'center',
                    sortable: false,
                    value: 'parts',
                    width: '7rem',
                },
                {
                    text: 'PCM Type',
                    align: 'center',
                    sortable: false,
                    value: 'pcmType',
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
                    text: 'Last Parts health Point',
                    align: 'center',
                    sortable: true,
                    value: 'lastHP',
                    width: '11rem',
                },
                {
                    text: 'Current Health Point',
                    align: 'center',
                    sortable: true,
                    value: 'currentHP',
                    width: '11rem',
                },
                {
                    text: 'Different Health Point',
                    align: 'center',
                    sortable: true,
                    value: 'differentHP',
                    width: '11rem',
                },

                {
                    text: 'Last Service Update Date',
                    align: 'center',
                    sortable: false,
                    value: 'lastUpdateDate',
                    width: '11rem',
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
            ],
        };
    },
};
</script>

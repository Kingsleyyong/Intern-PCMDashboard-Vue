<template>
    <table>
        <thead>
            <tr>
                <th :key="`${column.value}`" v-for="column in header">
                    {{ column.text }}
                </th>
            </tr>
        </thead>
    </table>
</template>

<script>
export default {
    data() {
        return {
            header: [
                {
                    text: null,
                    value: 'name',
                },
                {
                    text: 'PCM Required',
                    value: 'pcm',
                },
                {
                    text: 'Maintenance Cycle Hour',
                    value: 'maintenanceHr',
                },
                {
                    text: 'Last Runtime Hour',
                    value: 'lastRuntimeHr',
                },
            ],
        };
    },
};
</script>

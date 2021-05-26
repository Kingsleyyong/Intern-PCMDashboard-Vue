<template>
    <v-card class="pa-0" color="grey darken-3">
        <v-card-title class="d-flex justify-space-between">
            <span>{{ getCurrentSelectedPlant }}'s {{ this.name }} Motor</span>
        </v-card-title>

        <v-card-text>
            <v-simple-table>
                <thead>
                    <th id="firstHeader"></th>
                    <th class="ma-10">
                        {{ getFirstMotorCompare }}
                        <span>
                            <v-menu offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn elevation="0" small icon v-bind="attrs" v-on="on">
                                        <v-icon>mdi-arrow-down-drop-circle-outline</v-icon>
                                    </v-btn>
                                </template>
                                <v-list style="width: 7rem; height: 10rem; overflow-y: auto">
                                    <v-list-item
                                        v-for="(item, index) in getPlantMotorID"
                                        :key="index"
                                        @click="compareColumn1(item)"
                                    >
                                        <v-list-item-title>{{ item }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </span>
                        <div class="font-weight-regular d-flex justify-space-around">
                            <span>Benchmark</span>
                            <span>Yesterday</span>
                        </div>
                    </th>
                    <th class="ma-10">
                        {{ getSecondMotorCompare }}
                        <span>
                            <v-menu offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn elevation="0" small icon v-bind="attrs" v-on="on">
                                        <v-icon>mdi-arrow-down-drop-circle-outline</v-icon>
                                    </v-btn>
                                </template>
                                <v-list style="width: 7rem; height: 10rem; overflow-y: auto">
                                    <v-list-item
                                        v-for="(item, index) in getPlantMotorID"
                                        :key="index"
                                        @click="compareColumn2(item)"
                                    >
                                        <v-list-item-title>{{ item }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </span>
                        <div class="font-weight-regular d-flex justify-space-around">
                            <span>Benchmark</span>
                            <span>Yesterday</span>
                        </div>
                    </th>
                </thead>

                <tbody>
                    <tr>
                        <td>Predicted Health Score</td>
                        <td>
                            <div class="d-flex justify-space-around">
                                <span
                                    v-for="(score, index) in getComparisonData(
                                        getFirstMotorCompare,
                                        1
                                    )"
                                    :key="index"
                                >
                                    {{ score }}
                                </span>
                            </div>
                        </td>
                        <td>
                            <div class="d-flex justify-space-around">
                                <span
                                    v-for="(score, index) in getComparisonData(
                                        getSecondMotorCompare,
                                        1
                                    )"
                                    :key="index"
                                >
                                    {{ score }}
                                </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Vibration</td>
                        <td>
                            <div class="d-flex justify-space-around">
                                <span
                                    v-for="(score, index) in getComparisonData(
                                        getFirstMotorCompare,
                                        2
                                    )"
                                    :key="index"
                                >
                                    {{ score }}
                                </span>
                            </div>
                        </td>
                        <td>
                            <div class="d-flex justify-space-around">
                                <span
                                    v-for="(score, index) in getComparisonData(
                                        getSecondMotorCompare,
                                        2
                                    )"
                                    :key="index"
                                >
                                    {{ score }}
                                </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Temperature</td>
                        <td>
                            <div class="d-flex justify-space-around">
                                <span
                                    v-for="(score, index) in getComparisonData(
                                        getFirstMotorCompare,
                                        3
                                    )"
                                    :key="index"
                                >
                                    {{ score }}
                                </span>
                            </div>
                        </td>
                        <td>
                            <div class="d-flex justify-space-around">
                                <span
                                    v-for="(score, index) in getComparisonData(
                                        getSecondMotorCompare,
                                        3
                                    )"
                                    :key="index"
                                >
                                    {{ score }}
                                </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Normalization Count</td>
                        <td>
                            <div class="d-flex justify-space-around">
                                <span
                                    v-for="(score, index) in getComparisonData(
                                        getFirstMotorCompare,
                                        4
                                    )"
                                    :key="index"
                                >
                                    {{ score }}
                                </span>
                            </div>
                        </td>
                        <td>
                            <div class="d-flex justify-space-around">
                                <span
                                    v-for="(score, index) in getComparisonData(
                                        getSecondMotorCompare,
                                        4
                                    )"
                                    :key="index"
                                >
                                    {{ score }}
                                </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Energy Usage</td>
                        <td>
                            <div class="d-flex justify-space-around">
                                <span
                                    v-for="(score, index) in getComparisonData(
                                        getFirstMotorCompare,
                                        5
                                    )"
                                    :key="index"
                                >
                                    {{ score }}
                                </span>
                            </div>
                        </td>
                        <td>
                            <div class="d-flex justify-space-around">
                                <span
                                    v-for="(score, index) in getComparisonData(
                                        getSecondMotorCompare,
                                        5
                                    )"
                                    :key="index"
                                >
                                    {{ score }}
                                </span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </v-simple-table>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    props: ['name'],
    computed: {
        ...mapGetters([
            'getCurrentSelectedPlant',
            'getPlantMotorID',
            'getFirstMotorCompare',
            'getSecondMotorCompare',
            'getComparisonData',
        ]),
    },

    methods: {
        ...mapActions(['compareColumn1', 'compareColumn2']),
    },
};
</script>

<style>
th {
    padding: 1%;
    background-color: grey;
    font-size: 150%;
    width: 40%;
}

#firstHeader {
    width: 15%;
}
</style>

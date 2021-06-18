<template>
    <span>
        <Header />
        <v-card>
            <v-card-title>
                <v-row>
                    <div class="ml-10 lime darken-3 pa-2 pl-8 pr-5 pb-0 rounded-t-xl">
                        {{ getCurrentSelectedPlant }}
                        <v-menu offset-x allow-overflow max-height="300">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn icon v-bind="attrs" v-on="on">
                                    <v-icon>mdi-menu-down</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item
                                    v-for="(item, index) in getPlantCount"
                                    :key="index"
                                    link
                                >
                                    <v-list-item-title @click="currentPlant(item)"
                                        >{{ item }}
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                    <h3 class="font-weight-medium ml-5 mt-3">Maintenance Schedule</h3>
                </v-row>

                <v-menu :close-on-content-click="false" offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="blue-grey darken-2" fab v-bind="attrs" v-on="on" class="ma-0 mt-2">
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>
                    </template>

                    <v-card class="pa-5 pt-1">
                        <v-text-field
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                            @input="search"
                        ></v-text-field>
                    </v-card>
                </v-menu>
            </v-card-title>

            <v-card-text>
                <MaintenanceTableSchedule :search="search" />
            </v-card-text>
        </v-card>
    </span>
</template>

<script>
import Header from '../../components/Header';
import MaintenanceTableSchedule from './Table/table';
import { mapGetters } from 'vuex';

export default {
    components: {
        Header,
        MaintenanceTableSchedule,
    },
    computed: {
        ...mapGetters(['getCurrentSelectedPlant', 'getPlantCount']),
    },
    data() {
        return {
            search: '',
        };
    },
};
</script>

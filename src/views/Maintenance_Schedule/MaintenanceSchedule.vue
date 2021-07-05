<template>
    <span>
        <Header />
        <v-card>
            <v-card-title>
                <v-row>
                    <div class="ml-10 lime darken-3 pa-2 pl-8 pr-5 pb-0 rounded-t-xl">
                        {{ getCurrentSelectedPlant }}
                        <v-menu allow-overflow max-height="300" offset-x>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn v-bind="attrs" v-on="on" icon>
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

                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    class="col-3"
                    hide-details
                    label="Search"
                    single-line
                ></v-text-field>
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
            componentKey: 0,
            search: '',
        };
    },

};
</script>

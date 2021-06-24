<template>
    <v-app-bar color="gray">
        <v-spacer />

        <v-dialog v-model="dialog" fullscreen>
            <!--            <v-tooltip bottom>-->
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon>
                    <v-icon>mdi-cog-outline</v-icon>
                </v-btn>
            </template>
            <!--            Settings Page-->
            <!--            </v-tooltip>-->
            <MaintenanceDialog v-if="dialog" @input="closeDialog" />
        </v-dialog>

        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon @click="goToMaintenanceSchedule">
                    <v-icon>mdi-note-text-outline</v-icon>
                </v-btn>
            </template>
            Maintenance Schedule Page
        </v-tooltip>

        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon>
                    <v-icon>mdi-bell-outline</v-icon>
                </v-btn>
            </template>
            Notification
        </v-tooltip>

        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon @click="goToHome">
                    <v-icon>mdi-home-outline</v-icon>
                </v-btn>
            </template>
            Home Page
        </v-tooltip>

        <v-img
            class="ml-3 mr-3"
            max-height="100"
            max-width="200"
            src="../assets/images/header-powered-by.png"
        />
    </v-app-bar>
</template>

<script>
import MaintenanceDialog from '../views/Settings_Dialog/SettingsDialog';

export default {
    name: 'Header',

    data() {
        return {
            dialog: false,
        };
    },

    components: {
        MaintenanceDialog,
    },

    methods: {
        goToHome() {
            this.$router.push({ name: 'Home' });
        },
        goToMaintenanceSchedule() {
            this.$router.push({ name: 'MaintenanceSchedule' });
        },
        closeDialog() {
            this.dialog = false;
            // this.$router.go();
        },
    },
};
</script>
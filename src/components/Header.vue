<template>
    <v-app-bar color="gray">
        <v-spacer />

        <v-dialog v-model="dialog" fullscreen>
            <template #activator="{ on: onDialog }">
                <v-tooltip bottom>
                    <template #activator="{ on: onTooltip }">
                        <v-btn v-on="{ ...onDialog, ...onTooltip }" icon>
                            <v-icon>mdi-cog-outline</v-icon>
                        </v-btn>
                    </template>
                    Settings Page
                </v-tooltip>
            </template>
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

        <v-menu offset-y>
            <template #activator="{ on: onMenu }">
                <v-tooltip bottom icon>
                    <template #activator="{ on: onTooltip }">
                        <v-btn v-on="{ ...onMenu, ...onTooltip }" icon>
                            <v-icon>mdi-bell-outline</v-icon>
                        </v-btn>
                    </template>
                    Notification
                </v-tooltip>
            </template>
            <Notification />
        </v-menu>

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
import Notification from '../views/notifications/noti-menu';

export default {
    name: 'Header',

    data() {
        return {
            dialog: false,
        };
    },

    components: {
        MaintenanceDialog,
        Notification,
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

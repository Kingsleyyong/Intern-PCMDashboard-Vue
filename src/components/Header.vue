<template>
    <v-app-bar color="gray">
        <v-spacer />

        <v-dialog v-model="dialog" fullscreen>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-cog-outline</v-icon>
                </v-btn>
            </template>
            <MaintenanceDialog v-if="dialog" @input="dialog = false" />
        </v-dialog>

        <v-btn icon @click="goToMaintenanceSchedule">
            <v-icon>mdi-note-text-outline</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
        <v-btn icon @click="goToHome">
            <v-icon>mdi-home-outline</v-icon>
        </v-btn>
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
    },
};
</script>
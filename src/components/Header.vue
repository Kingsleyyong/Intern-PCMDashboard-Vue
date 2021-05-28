<template>
    <v-app-bar color="gray">
        <v-spacer />

        <v-btn icon>
            <v-icon>mdi-cog-outline</v-icon>
        </v-btn>
        <v-btn icon>
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
export default {
    name: 'Header',

    data() {
        return {};
    },
    methods: {
        goToHome() {
            this.$router.push({name: 'Home'});
        },
    },
};
</script>
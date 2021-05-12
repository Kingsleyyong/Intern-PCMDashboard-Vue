<template>
    <v-app-bar color="gray">
        <v-spacer />
        <v-text-field
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            class="shrink mt-6 mr-3"
            filled
            rounded
            dense
        ></v-text-field>
        <v-btn icon>
            <v-icon>mdi-bell-outline</v-icon>
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
};
</script>

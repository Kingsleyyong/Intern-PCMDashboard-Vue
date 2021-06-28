<template>
    <v-list>
        <v-list-item v-for="(item, index) in [1, 2, 3]" :key="index">
            <v-list-item-title>{{ item }}</v-list-item-title>
            <v-divider></v-divider>
        </v-list-item>
    </v-list>
</template>

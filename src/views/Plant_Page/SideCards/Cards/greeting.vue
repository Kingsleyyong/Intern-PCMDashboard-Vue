<template>
    <v-card elevation="5" outlined >
        <v-card-title class="font-weight-bold text-md-subtitle-2 text-lg-h6  text-xl-h4">{{ greet }}</v-card-title>
        <!--        <v-card-subtitle :class="{ overline: $vuetify.breakpoint.md }">-->
        <!--            {{ getUsername }}-->
        <!--        </v-card-subtitle>-->
        <v-card-text class="d-flex justify-space-between">
            <div class="d-inline-flex">{{ time }}</div>
            <div class="d-inline-flex">{{ date }}</div>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import dayjs from 'dayjs';

export default {
    name: 'Greeting_SideCard',

    beforeMount() {
        setInterval(() => {
            this.time = this.getTime();
            this.date = this.getDate();
            this.greet = this.getGreet();
        }, 1000); // call the function every 1 second
    },

    data() {
        return {
            greet: 'Hello',
            date: dayjs().format('DD/MM/YY'),
            time: dayjs().format('HH:mm'),
        };
    },
    computed: {
        ...mapGetters(['getUsername']),
    },

    methods: {
        getTime() {
            return dayjs().format('HH:mm');
        },
        getDate() {
            return dayjs().format('DD/MM/YY');
        },
        getGreet() {
            const today = new Date();
            const h = today.getHours();

            if (h < 12) {
                return 'Good Morning';
            } else if (h >= 12 && h < 15) {
                return 'Good Afternoon';
            } else if (h >= 15 && h < 24) {
                return 'Good Evening';
            }
            return '-';
        },
    },
};
</script>
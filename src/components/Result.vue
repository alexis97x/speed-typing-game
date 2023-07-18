<script setup>

    import {useRoute, RouterLink} from 'vue-router'
    const route = useRoute()

</script>

<template>
    <v-container>
        <router-link to="/"><v-btn color="primary">back</v-btn></router-link>
        <h1> <v-icon>mdi-gauge</v-icon> Your Test score</h1>
        <h1>{{ route.params.correct/5 + ' WPM' }}</h1>

    </v-container>
</template>
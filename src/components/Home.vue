<script setup>

    import {RouterLink} from 'vue-router'

</script>

<template>
    <v-container align="center">
        <h1>Speed typing game</h1>
        <router-link to="/test1"> <v-btn size="large" color="primary" class="mt-5">Start Test 1</v-btn> </router-link>
        <br>
        <router-link to="/test2"> <v-btn size="large" color="primary" class="mt-5">Start Test 2</v-btn> </router-link>
    </v-container>
</template>
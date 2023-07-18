<script setup>

    import {ref, watch} from 'vue'
    import {RouterLink, useRouter} from 'vue-router'
    const s = `Medium ed typing game Speed type ambassing ambadebloww`
    const sentence = s.replaceAll('\n', '')
    const currentIndex = ref(0)
    const is_correct = ref(true)
    const time = ref(60)
    const router = useRouter()
    const correct = ref(0)
    const wrong = ref(0)

    setInterval(()=> {
        time.value--
    }, 1000)

    watch([time, currentIndex], () => {
        if(time.value == 0 || currentIndex.value >= sentence.length) {
            router.push(`/result/${correct.value}/${wrong.value}`)
        }
    })

    window.addEventListener('keyup', (event) => {
        if(event.key === sentence.charAt(currentIndex.value)) {
            currentIndex.value++
            correct.value++
            is_correct.value = true
        }
        else {
            wrong.value--
            is_correct.value = false
        }
    })
   

</script>

<template>
    <v-container>
        <v-row>
            <v-col>
                <router-link to="/"><v-btn color="primary">back</v-btn></router-link>
            </v-col>
            <v-col>
                <h2>Characters: {{ (currentIndex+1) }}/{{ sentence.length }}</h2>
            </v-col>
            <v-col>
                <h2>{{ 'time: '+time }}</h2>
            </v-col>
        </v-row>
        
        <v-row class="fill-height mt-5" justify="center">
            <!-- <v-col cols="1">
                <v-fade-transition hide-on-leave>
                    <v-card class="text-center" v-if="is_correct">
                        <h1 class="text-success">{{ sentence.charAt(currentIndex) === ' ' ? '&nbsp;' : sentence.charAt(currentIndex) }}</h1>
                    </v-card>
                    <v-card class="text-center" v-else>
                        <h1 class="text-red">{{ sentence.charAt(currentIndex) === ' ' ? '&nbsp;' : sentence.charAt(currentIndex) }}</h1>
                    </v-card>
                </v-fade-transition>
            </v-col> -->
            <v-col cols="1" v-for="n in sentence.length" :key="n">
                <v-fade-transition>
                    <v-card class="text-center">
                        <h1>
                            {{ sentence.charAt((currentIndex+n)-1) === ' ' ? '&nbsp;' : sentence.charAt((currentIndex+n)-1) }}
                        </h1>
                    </v-card>
                </v-fade-transition>
            </v-col>

        </v-row>
    </v-container>
</template>
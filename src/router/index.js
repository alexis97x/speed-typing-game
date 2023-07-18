    import { createRouter, createWebHistory } from "vue-router";
    import Home from '../components/Home.vue'
    import Test1 from '../components/Test.vue'
    import Test2 from '../components/Test2.vue'
    import Result from '../components/Result.vue'

    const router = createRouter({
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/home',
                redirect: '/'
            },
            {
                path: '/test1',
                name: 'Test',
                component: Test1
            },
            {
                path: '/test2',
                name: 'Test2',
                component: Test2
            },
            {
                path: '/result/:correct/:wrong',
                name: 'Result',
                component: Result
            }
        ]
    })

    export default router
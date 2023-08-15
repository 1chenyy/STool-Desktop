import {createRouter, createWebHashHistory} from "vue-router";
import NotFound from "../pages/NotFound.vue";
import Main from "../pages/Main.vue";
import BackendPage from "../pages/backend/BackendPage.vue";
import Link from "../pages/Link.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '/main',
            component: Main,
            redirect: '/main/link',
            children: [
                {
                    path: 'link',
                    component: Link
                },
                {
                    path: '404',
                    component: NotFound
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/main/404'
        },
        {
            path: '/backendPage',
            component: BackendPage
        }
    ]
})

export default router

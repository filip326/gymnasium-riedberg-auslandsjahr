import { createRouter, createWebHistory } from "vue-router";

// component imports
import Home from "../routes/Home.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/initial-form",
            component: () => import("../routes/InitForm.vue"),
        }
    ]
})
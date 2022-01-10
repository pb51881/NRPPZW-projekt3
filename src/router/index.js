import { createRouter, createWebHistory } from "vue-router";
import Interpolation from "../views/interpolation.vue";
import Two_way from "../views/two_way.vue";
import Methods from "../views/methods.vue";
import Computed_properties from "../views/computed_properties.vue";
import Scoped_style from "../views/scoped_style.vue";
import Lifecycle_hook from "../views/lifecycle_hook.vue";
import HelloWorld from "../components/HelloWorld.vue";
import NotFound from "../views/not_found.vue";


const routes = [
    {
        path: "/",
        component: HelloWorld,
    },
    {
        path: "/interpolation",
        name: "Interpolation",
        component: Interpolation,
    }, 
    {
        path: "/two_way_binding",
        name: "Two_way",
        component: Two_way,
    }, 
    {
        path: "/methods",
        name: "Methods",
        component: Methods,
    },
    {
        path: "/computed_properties",
        name: "Computed Properties",
        component: Computed_properties,
    },
    {
        path: "/scoped_style",
        name: "Scoped style",
        component: Scoped_style,
    },
    {
        path: "/lifecycle_hook",
        name: "Lifecycle hook",
        component: Lifecycle_hook,
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
    },
    
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;
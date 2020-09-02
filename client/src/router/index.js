import VueRouter from "vue-router"
// import view from "../views/name"

const routes = [
]

const router = new VueRouter({
    mode:"history",
    base: process.env.BASE_URL,
    routes // short for `routes: routes`
})

export default router
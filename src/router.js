import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/make_book",
      name: "MakeBook",
      component: () => import("./views/MakeBook.vue")
    },
    {
      path: "/sign_up",
      name: "SignUp",
      component: () => import("./views/SignUp.vue")
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/frame_select",
      name: "FrameSelect",
      component: () => import("./views/FrameSelect.vue")
    },
    {
      path: "/drag_demo",
      name: "DragDemo",
      component: () => import("./views/DragDemo.vue")
    }
  ]
});

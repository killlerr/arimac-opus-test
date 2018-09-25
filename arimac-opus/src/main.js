// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import VueRouter from 'vue-router';

// import App from './App'
// // These are the routes we're going to create.
// import { routes} from './routes';


import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
// These are the routes we're going to create.
import ourRoutes from './routes.js';

Vue.config.productionTip = false

Vue.use(VueRouter);

// We create the router instance here.
const router = new VueRouter({
  
  routes: ourRoutes
});

// The usual app stuff goes here.
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
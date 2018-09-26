import Vue from 'vue';
// register BootstrapVue plugin in your app entry point
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router';
import App from './App.vue';
// These are the routes we're going to create.
import ourRoutes from './routes.js';

//import Bootstrap and Bootstrap-Vue css files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue);

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
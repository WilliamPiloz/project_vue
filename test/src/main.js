import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './routes';
import store from "./store";
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({routes});
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

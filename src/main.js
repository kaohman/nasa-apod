import Vue from 'vue'
// import VueRouter from 'vue-router';
import App from './App.vue'

Vue.config.productionTip = false

// const routes = [
//   { path: '/', component: App },
// ]

// const router = new VueRouter({
//   routes
// })

// const app = new Vue({
//   router
// }).$mount('#app');

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Carousel3d from 'vue-carousel-3d';
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false
Vue.use(Carousel3d)
new Vue({
  router,
  store,
  vuetify,
  mounted() {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')

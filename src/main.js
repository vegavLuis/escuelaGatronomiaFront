import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Carousel3d from "vue-carousel-3d";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import VueAxios from "vue-axios";
import VueSimpleAlert from "vue-simple-alert";

axios.defaults.baseURL = "http://localhost:3000/api";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios)
Vue.use(VueSimpleAlert)
Vue.use(Carousel3d);
new Vue({
  router,
  store,
  vuetify,
  created() {
    AOS.init();
  },
  render: (h) => h(App),
}).$mount("#app");

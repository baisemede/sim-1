import Vue from "vue";
import App from "./App.vue";
import Axios from "axios";
import "./plugins/element.js";
import router from "./router";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import animated from "animate.css";

Vue.use(animated);

Vue.prototype.$http = Axios;
Vue.prototype.$dayjs = dayjs;
Vue.config.productionTip = false;
dayjs.locale("zh-cn");
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import Qs from 'qs'
import VueLazyload from 'vue-lazyload'

Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;


import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueLazyload);
Vue.use(Vant);
Vue.use(ElementUI);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// axios({
//   url: "/api/goods/getAllGoods", // 后端的接口地址
//   method: "get",
//   params: {
//     category:"clothes",
//   },
//   data: {
//     username: "hello",
//     password: "world",
    
//   },
//   transformRequest: [
//     function (data) {
//       data = Qs.stringify(data);
//       return data;
//     }
//   ],
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
//   },
//   dataType: "json"
// })
//   .then(res => {
//     console.log("连接成功"); // 这里多打印一句提示，只是为了更直观一点
//     console.log(res); // res 是后端回传的数据，如果连接成功，可以把res打印出来。
//   })
//   .catch(function (error) {
//     console.log("连接失败"); // 作用同上
//     console.log(error); // 如果连接失败，会抛出错误信息。
//   });



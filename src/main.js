import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/filters.js'
import './plugins/fetch.js';
import './plugins/api';
import './assets/css/index.less'
import VueQuillEditor from 'vue-quill-editor'
import _ from "lodash";

Vue.use(VueQuillEditor)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

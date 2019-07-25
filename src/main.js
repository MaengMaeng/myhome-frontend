import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


import axios from 'axios'
import VueAxios from 'vue-axios'

import { store } from './store'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(Vuetify)

new Vue({
  router,
	store,
  render: h => h(App),
}).$mount('#app')

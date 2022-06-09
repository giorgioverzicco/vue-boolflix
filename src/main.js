import Vue from 'vue'
import App from './App.vue'
import './index.css'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMagnifyingGlass, faStar)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
// /Font Awesome

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')

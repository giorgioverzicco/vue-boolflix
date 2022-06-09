import Vue from 'vue'
import App from './App.vue'
import './index.css'

// Font Awesome
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faUserSecret)

// Vue.component('FontAwesomeIcon', FontAwesomeIcon)
// /Font Awesome

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')

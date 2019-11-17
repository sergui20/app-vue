import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import routes from './routes';

// Vuex
import store from './store';

// plugins
import EventBus from './plugins/event-bus';

// filters
import msToMm from './filters/ms-to-mm';

// directives
import blur from './directives/blur';

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(msToMm)
Vue.use(blur)

Vue.config.productionTip = false

const router = new VueRouter({routes, mode: 'history'})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

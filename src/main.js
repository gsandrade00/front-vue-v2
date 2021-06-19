// Neste arquivo eu importo as minhas libs
import Vue from 'vue';
import VueSweetAlert2 from 'vue-sweetalert2';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

Vue.use(VueSweetAlert2);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

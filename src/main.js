// Neste arquivo eu importo as minhas libs
import Vue from 'vue';
import VueSweetAlert2 from 'vue-sweetalert2';
import Vuelidate from 'vuelidate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserPlus, faUserEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';

library.add(faUserPlus, faUserEdit, faTrash);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueSweetAlert2);
Vue.use(Vuelidate);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

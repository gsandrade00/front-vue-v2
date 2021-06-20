/**
 * file: assets/icons.js
 * date: 20/06/21
 * Description: arquivo por lidar com a lógica dos icones na aplicação - Testando
 * author: GSA <gsandrade.00@gmail.com>
 */

import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserPlus, faUserEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserPlus, faUserEdit, faTrash);

Vue.component('font-awesome-icon', FontAwesomeIcon);

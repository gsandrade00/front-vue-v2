// Neste arquivo eu direciono todas as minhas rotas para cada uma das telas criadas
import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Create New Employee',
    component: () => import('../components/pages/create-employee/CreateEmployeeComponent.vue'),
  },
  {
    path: '/list-employees',
    name: 'List Employees',
    component: () => import('../components/pages/list-employee/ListEmployeeComponent.vue'),
  },
  {
    path: '/edit-employee/:id',
    name: 'Create New Employee',
    component: () => import('../components/pages/edit-employee/EditEmployeeComponent.vue'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    // quando houver carregamento de uma pagina inicial, entao usar o Nprogress
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  NProgress.done();
});
export default router;

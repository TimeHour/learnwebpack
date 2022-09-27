import './style.scss';

import { createApp } from 'vue';

import * as VueRouter from 'vue-router';


import App from './App.vue';
import ToDoList from './ToDoList.vue';

const routes = [
    { path: '/', component: ToDoList },
  ]

  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
  })

let app = createApp(App)
app.use(router);

app.mount('#app');
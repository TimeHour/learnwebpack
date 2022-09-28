import './style.scss';

import './style.scss';

import { createApp } from 'vue';

import * as VueRouter from 'vue-router';


import App from './App.vue';
import ToDoList from './pages/ToDoList.vue';
import Modals from './pages/Modals.vue';
import Clicker from './pages/Clicker.vue';

const routes = [
    { path: '/', component: Clicker, name: 'Clicker' },
    { path: '/modal', component: Modals, name: 'Home' },
    { path: '/todolist', component: ToDoList, name: 'To-Do List' },
  ]

  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
  })

let app = createApp(App)
app.use(router);

app.mount('#app');
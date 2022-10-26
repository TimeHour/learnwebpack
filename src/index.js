import './style.scss';

import './style.scss';

import { createApp } from 'vue';

import * as VueRouter from 'vue-router';


import App from './App.vue';
import ToDoList from './pages/ToDoList.vue';
import Modals from './pages/Modals.vue';
import Clicker from './pages/Clicker.vue';
import Chuck from './pages/Chuck.vue';
import RickAndMorty from './pages/RickAndMorty.vue';
import corona from './pages/corona.vue';
import Country from './pages/Country.vue'
import Map from './pages/Map.vue'
import Game from './pages/Game.vue'
import Chat from './pages/Chat.vue'

const routes = [
    { path: '/', component: Chat, name: 'Chat' },
    { path: '/Game', component: Game, name: 'Game' },
    { path: '/Corona', component: corona, name: 'Corona' },
    { path: '/map', component: Map, name: 'Map' },
    { path: '/countries/:country', component: Country },  
    { path: '/rick and morty', component: RickAndMorty, name: 'Rick and Morty' },
    { path: '/Chuck', component: Chuck, name: 'Chuck' },
    { path: '/Clicker', component: Clicker, name: 'Clicker' },
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
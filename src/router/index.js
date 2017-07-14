import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import Game from '@/pages/Game'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    }
  ]
})

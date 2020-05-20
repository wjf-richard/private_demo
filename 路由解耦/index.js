/*
 * @Date: 2020-05-19 11:13:27
 * @LastEditors: Richard
 * @LastEditTime: 2020-05-19 11:13:27
 */ 
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const autoLoadRoutes = []
const reqRouter = require.context('./', true, /\.route\.js$/)
reqRouter.keys().forEach(name => {
  autoLoadRoutes.push(...reqRouter(name).default)
})

const routes = [
  ...autoLoadRoutes
]

console.log('routers', routes);

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
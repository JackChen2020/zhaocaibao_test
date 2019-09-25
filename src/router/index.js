
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)



import NotFound from '../views/404.vue'
import wechat from '../views/wechat/index'
import juli from '../views/juli/index'


let routes = [
  {
    path: '/',
    component: wechat,
    name: '傲银微信h5测试',
  },
  {
    path: '/juli',
    component: juli,
    name: '傲银(聚力)微信h5测试',
  },
  {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  }
]

export default new Router({
  routes: routes
})


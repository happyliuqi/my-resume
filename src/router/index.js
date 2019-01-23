import Vue from 'vue'
import Router from 'vue-router'
import PersonInfo from '@/components/PersonInfo/PersonInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PersonInfo',
      component: PersonInfo
    }
  ]
})

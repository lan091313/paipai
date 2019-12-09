/*
 * @Descripttion:
 * @Author: 张晓兰
 * @Date: 2019-11-19 23:20:56
 * @LastEditors: 司小哈
 * @LastEditTime: 2019-12-07 14:42:45
 * @version: v1.0.0
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Pages/Index'
import Evaluation from '@/Pages/Evaluation'
import Post from '@/Pages/Post'
import GoodsDeilPage from '@/Pages/GoodsDeilPage'
import IndexAll from '../components/IndexAll'
import IndexMachine from '../components/IndexMachine'
import IndexRecommend from '../components/IndexRecommend'
import IndexParts from '../components/IndexParts'

import Me from '@/Pages/Me'
import Login from '@/Pages/Login'
import Regainpage from '@/Pages/Regainpage'
import Logout from '@/Pages/Logout'
import Shopcar from '@/Pages/Shopcar'
import Ddmy from '@/Pages/Ddmy'
import CHangezl from '@/Pages/CHangezl'

import JiaHaoPage from '@/pages/JiaHaoPage'
import ZhuanPage from '@/pages/ZhuanPage'
import SearchPage from '@/pages/SearchPage'
import LiebiaoPage from '@/pages/LiebiaoPage'

import FenPage from '@/pages/FenPage'
import HphotoPage from '@/pages/HphotoPage'

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
            {
              path:"/",
              redirect:"IndexAll"
            },
            {
              path:"IndexAll",
              component:IndexAll
            },
            {
              path:"IndexMachine",
              component:IndexMachine
            },
            {
              path:"IndexParts",
              component:IndexParts
            },
            {
              path:"IndexRecommend",
              component:IndexRecommend
            }
        ]
    },
    {
      path: '/GoodsDeilPage/:id',
      name: 'GoodsDeilPage',
      component: GoodsDeilPage,
      props:true,
    },
    {
      path: '/Post/:id',
      name: 'Post',
      component: Post,
      props:true,
    },
    {
      path: '/Evaluation',
      name: 'Evaluation',
      component: Evaluation,
      props:true,
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Regainpage',
      name: 'Regainpage',
      component: Regainpage
    },
    {
      path: '/Logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/Shopcar',
      name: 'Shopcar',
      component: Shopcar
    },
    {
      path: '/Ddmy',
      name: 'Ddmy',
      component: Ddmy
    },
    {
      path: '/CHangezl',
      name: 'CHangezl',
      component: CHangezl
    },

    {
      path: '/JiaHaoPage',
      name: 'JiaHaoPage',
      component: JiaHaoPage
    },
    {
      path: '/ZhuanPage',
      name: 'ZhuanPage',
      component: ZhuanPage
    },
    {
      path: '/SearchPage',
      name: 'SearchPage',
      component: SearchPage
    },
    {
      path: '/LiebiaoPage:name',
      name: 'LiebiaoPage',
      component: LiebiaoPage,
      props:true
    },
    {
      path: '/LiebiaoPage',
      name: 'LiebiaoPage',
      component: LiebiaoPage
    },

    {
      path: '/FenPage',
      name: 'FenPage',
      component: FenPage
    },
    {
      path: '/HphotoPage',
      name: 'HphotoPage',
      component: HphotoPage
    }
  ]
})

router.beforeEach((to,from,next)=>{

    next();
});
router.afterEach((to,from)=>{

})

export default router;

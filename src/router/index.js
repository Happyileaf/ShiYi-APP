import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tabber from '@/components/Tabber'
import Issue from '@/pages/Issue'
import GoodsDetails from '@/pages/GoodsDetails'
import Index from '@/pages/Index'
import IndexContent from '@/components/IndexContent'
import SchoolSupply from '@/components/SchoolSupply'
import Clothing from '@/components/Clothing'
import Snack from '@/components/Snack'
import OtherGoods from '@/components/OtherGoods'

import login from '@/pages/login'
import register from '@/pages/register'
import my from '@/pages/my'
import myUpdata from '@/pages/myUpdata'
import returnMessage from '@/pages/returnMessage'
import changeInfo from '@/pages/changeInfo'
import ChangePassword from '@/pages/ChangePassword'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/issue',
      name: 'Issue',
      component: Issue
    },
    {
      path: '/goodsDetails',
      name: 'GoodsDetails',
      component: GoodsDetails
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
    },
    {
      path: '/indexContent',
      name: ' IndexContent',
      component: IndexContent
    },
    {
      path: '/tabber',
      name: 'Tabber',
      component: Tabber
    },
    {
      path: '/tabber',
      name: 'Tabber',
      component: Tabber
    },


    {
      path: '/login',
      name: 'login',
      component: login
    },

    {
      path: '/my',
      name: 'my',
      meta: {
        // requireAuth: true
      },
      component: my
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/myUpdata',
      name: 'myUpdata',
      component: myUpdata
    },
    {
      path: '/returnMessage',
      name: 'returnMessage',
      component: returnMessage
    },
    {
      path: '/changePassword',
      name: 'ChangePassword',
      component: ChangePassword
    },
    {
      path: '/changeInfo',
      name: 'ChangeInfo',
      component: changeInfo
    }

  ]
})

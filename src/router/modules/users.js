/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const userRouter = {
  path: '/user-data-query',
  component: Layout,
  redirect: '/user-data-query/all-users',
  name: 'UserDataQuery',
  meta: {
    title: 'User Data Query',
    icon: 'people'
  },
  children: [
    {
      path: 'all-users',
      component: () => import('@/views/users/all-users'),
      name: 'AllUsers',
      meta: { title: 'All Users' }
    },
    {
      path: 'query-users',
      component: () => import('@/views/users/query-users'),
      name: 'QueryUsers',
      meta: { title: 'Query Users' }
    },
    {
      path: 'blacklist',
      component: () => import('@/views/users/blacklist'),
      name: 'Blacklist',
      meta: { title: 'Blacklist' }
    },
    {
      path: 'login-record/:id',
      component: () => import('@/views/users/login-record'),
      name: 'LoginRecord',
      meta: { title: 'LoginRecord' },
      hidden: true
    }
  ]
}
export default userRouter

/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const gamerecordRouter = {
  path: '/gamerecord',
  component: Layout,
  redirect: '/gamerecord/income-record',
  name: 'Gamerecord',
  meta: {
    title: 'GameRecord',
    icon: 'chart'
  },
  children: [
    {
      path: 'income-record',
      component: () => import('@/views/gamerecord/income-record'),
      name: 'IncomeRecord',
      meta: { title: 'Income Record' }
    },
    {
      path: 'user-query',
      component: () => import('@/views/gamerecord/user-query'),
      name: 'UserQuery',
      meta: { title: 'User Query' }
    }
  ]
}
export default gamerecordRouter

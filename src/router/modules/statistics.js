/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const statisticsRouter = {
  path: '/statistic',
  component: Layout,
  redirect: '/statistic/user-active',
  name: 'Statistics',
  meta: {
    title: 'Statistics',
    icon: 'chart'
  },
  children: [
    {
      path: 'user-active',
      component: () => import('@/views/statistics/user-active'),
      name: 'UserActive',
      meta: { title: 'User Active' }
    },
    {
      path: 'user-online',
      component: () => import('@/views/statistics/user-online'),
      name: 'UserOnline',
      meta: { title: 'User Onlines' }
    },
    {
      path: 'user-retention',
      component: () => import('@/views/statistics/user-retention'),
      name: 'UserRetention',
      meta: { title: 'User Retention' }
    }
  ]
}
export default statisticsRouter

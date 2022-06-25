/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const redlimitRouter = {
  path: '/redlimit',
  component: Layout,
  redirect: '/redlimit/red-limit-record',
  name: 'Redlimit',
  meta: {
    title: 'Redlimit',
    icon: 'chart'
  },
  children: [
    {
      path: 'red-limit-record',
      component: () => import('@/views/redlimit/limit-red-record'),
      name: 'LimitedRecord',
      meta: { title: 'Channel Withdrawal History' }
    },
    {
      path: 'user-redemption',
      component: () => import('@/views/redlimit/user-redemption.vue'),
      name: 'UserRedemption',
      meta: { title: 'User Redemption List' }
    }
  ]
}
export default redlimitRouter

/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const templateRouter = {
  path: '/template',
  component: Layout,
  redirect: '/temlate/simple-table',
  name: 'Template',
  meta: {
    title: 'Template',
    icon: 'table'
  },
  children: [
    {
      path: 'simple-table',
      component: () => import('@/views/table/simple-table'),
      name: 'SimpleTable',
      meta: { title: 'Simple Table' }
    },
    {
      path: 'complex-details-table',
      component: () => import('@/views/table/complex-detail-table'),
      name: 'ComplexDetailsTable',
      meta: { title: 'Complex Detail Table' }
    },
    {
      path: 'complex-table',
      component: () => import('@/views/table/complex-table'),
      name: 'Complex-Table',
      meta: { title: 'Complex Table' }
    }
  ]
}
export default templateRouter

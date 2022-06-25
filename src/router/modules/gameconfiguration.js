/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const gameconfigurationRouter = {
  path: '/gameconfiguration',
  component: Layout,
  redirect: '/gameconfiguration/live-room',
  name: 'GameConfiguration',
  meta: {
    title: 'Game Configuration',
    icon: 'tree'
  },
  children: [
    {
      path: 'live-room',
      component: () => import('@/views/gameconfiguration/live-room'),
      name: 'LiveRoom',
      meta: { title: 'Live Room' }
    },
    {
      path: 'table-record',
      component: () => import('@/views/gameconfiguration/table-record'),
      name: 'Table Record',
      meta: { title: 'Table Record' }
    },
    {
      path: 'details-table-record/:id',
      component: () => import('@/views/gameconfiguration/details-table-record'),
      name: 'DetailsTableRecord',
      meta: { title: 'Details Table Record' },
      hidden: true
    },
    {
      path: 'table-configuration',
      component: () => import('@/views/gameconfiguration/table-configuration'),
      name: 'TableConfiguration',
      meta: { title: 'Table Configuration' }
    },
    {
      path: 'game-basic-configuration',
      component: () => import('@/views/gameconfiguration/game-configuration'),
      name: 'GameBasicConfiguration',
      meta: { title: 'Game Basic Configuration' }
    },
    {
      path: 'maintenance',
      component: () => import('@/views/gameconfiguration/maintenance'),
      name: 'MaintenanceNotification',
      meta: { title: 'Maintenance Notification' }
    },
    {
      path: 'marquee',
      component: () => import('@/views/gameconfiguration/marquee'),
      name: 'Marquee',
      meta: { title: 'Marquee' }
    }
  ]
}
export default gameconfigurationRouter

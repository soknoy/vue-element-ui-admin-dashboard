/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const accountsettingRouter = {
  path: '/accountsetting',
  component: Layout,
  redirect: '/accountsetting/role',
  name: 'AccountSetting',
  meta: {
    title: 'Account Setting',
    icon: 'chart'
  },
  children: [
    {
      path: 'role',
      component: () => import('@/views/accountsetting/role'),
      name: 'RoleManagement',
      meta: { title: 'Role Management' }
    },
    {
      path: 'permission',
      component: () => import('@/views/accountsetting/permission'),
      name: 'PermissionManagement',
      meta: { title: 'Permission Management' }
    },
    {
      path: 'operation-log',
      component: () => import('@/views/accountsetting/operation-log'),
      name: 'OperationLog',
      meta: { title: 'Operation Log' }
    }
  ]
}
export default accountsettingRouter

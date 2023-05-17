import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
          {
            path:'/sysUserList',
            name:'sysUserList',
            component: () => import('@/views/System/employee/employee.vue')
          },
          //"/sysRoleList"
          {
            path:'/sysRoleList',
            name:'sysRoleList',
            component: () => import('@/views/System/role/role.vue')
          },
          //"/sysMenuList"
          {
            path:'/sysMenuList',
            name:'sysMenuList',
            component: () => import('@/views/System/Permissions/Permissions.vue')
          },
          {
            path:'/houseBuilding',
            name:'houseBuilding',
            component: () => import('@/views/house/houseBuilding/houseBuilding.vue')
          },
          {
            path:'/houseUnit',
            name:'houseUnit',
            component: () => import('@/views/house/houseUnit/houseUnit.vue')
          },
          {
            path:'/sysHouseList',
            name:'sysHouseList',
            component: () => import('@/views/house/sysHouseList/sysHouseList.vue')
          },
          // "parkList"
          {
            path:'/parkList',
            name:'parkList',
            component: () => import('@/views/parkList/parkList.vue')
          },
          {
            path:'/liveUser',
            name:'liveUser',
            component: () => import('@/views/liveUser/liveUser.vue')
          },
          {
            path:'/userComplaintList',
            name:'userComplaintList',
            component: () => import('@/views/userComplaintList/userComplaintiList.vue')
          },
          {
            path:'/feePower',
            name:'feePower',
            component: () => import('@/views/feePower/feePower.vue')
          },
          {
            path:'/feeWater',
            name:'feeWater',
            component: () => import('@/views/feeWater/feeWater.vue')
          },
          {
            path:'/feePark',
            name:'feePark',
            component: () => import('@/views/feePark/feePark.vue')
          },
          {
            path:'/repairList',
            name:'repairList',
            component: () => import('@/views/repairList/repairList.vue')
          },
          {
            path:'/repairList',
            name:'repairList',
            component: () => import('@/views/repairList/repairList.vue')
          },
          {
            path:'/noticeList',
            name:'noticeList',
            component: () => import('@/views/noticeList/noticeList.vue')
          },
      ]
    }
  ]
})

export default router

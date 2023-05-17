<template>
  <BaseTable :getListName="getlistpoys" :tableConfig="prermissList">
    <template #menuType="scope">
      <el-tag v-if="scope.row.type == 0" type="primary">目录</el-tag>
        <el-tag v-if="scope.row.type == 1" type="success">菜单</el-tag>
        <el-tag v-if="scope.row.type == 2" type="danger">按钮</el-tag>
    </template>
    <template #action>
      <div style="padding: 5px 0">
        <el-button size="default" icon="EditPen" type="primary">编辑</el-button>
        <el-button size="default" icon="Delete" type="danger">删除</el-button>
      </div>
    </template>
  </BaseTable>
</template>

<script setup lang="ts">
import BaseTable from '@/baseul/table/src/table..vue'
import { getpoysList } from '@/ulite/api'
import { ref } from 'vue'
import { prermissList } from './config/table-config'
const getlistpoys = ref<any>([])
const getpoysRole = () => {
  getpoysList().then((res) => {
    console.log('权限管理', res)
    getlistpoys.value = res.data.data
  })
}
getpoysRole()

const menutypeFilter = (value: any) => {
  const menuType = [
    {
      0: '目录',
      1: '菜单',
      2: '按钮'
    }
  ]

  return menuType[value]
}
// defineProps({
//   getListName: {
//     type: Array ,
//     default: () => []
//   },
//   propList: {
//     type: Array as any,
//     default: () => []
//   }
// })
</script>

<style></style>

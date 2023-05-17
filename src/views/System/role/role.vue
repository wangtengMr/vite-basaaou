<template>
  <BaseTable :getListName="getlistrole" :tableConfig="tableConfig ">
    <template #action>
        <div>
          <el-button size="small" icon="EditPen" type="primary">编辑</el-button>
          <el-button size="small" icon="EditPen" type="success">分配角色</el-button>
          <el-button size="small" icon="Delete" type="danger">删除</el-button>
        </div>
      </template>
  </BaseTable>
</template>

<script setup lang="ts">
import BaseTable from '@/baseul/table/src/table..vue'
import { getlistRole } from '@/ulite/api'
import { ref } from 'vue'
import { tableConfig } from './config/table-config'
const getlistrole = ref<any>([])
const getRole = () =>{
  getlistRole().then(res => {
    console.log('角色列表', res);
    localStorage.setItem('getlistrole', JSON.stringify(res.data.data.records))
    getlistrole.value = res.data.data.records
  })
}
getRole()
</script>

<style></style>

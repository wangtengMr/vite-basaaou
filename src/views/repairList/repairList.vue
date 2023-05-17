<template>
    <div>
      <BaseTable :getListName="repairst" :tableConfig="repairlist">
        <template #status="scope">
          <el-tag v-if="scope.row.status == 0" type="danger">待处理</el-tag>
          <el-tag v-if="scope.row.status == 1" type="success">已处理</el-tag>
        </template>
        <template #action>
          <div>
            <el-button size="small" icon="EditPen" type="primary">处理</el-button>
          </div>
        </template>
      </BaseTable>
    </div>
  </template>
  
  <script setup lang="ts">
  import BaseTable from '@/baseul/table/src/table..vue'
  import { userRepair } from '@/ulite/api'
  //这对应这 你抽离的表格数据 :tableConfig = ""
  import { repairlist } from './config/repair.config'
  import { ref } from 'vue'
  const repairst = ref<any>([])
  const getNamedata = () => {
    userRepair().then((res) => {
      console.log('报修管理', res)
      localStorage.setItem('getlistName', JSON.stringify(res.data.data.records))
      repairst.value = res.data.data.records
    })
  }
  getNamedata()
  </script>
  
  <style></style>
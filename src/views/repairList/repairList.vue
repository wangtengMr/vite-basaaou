<template>
    <div>
      <div>
      <FromItup v-bind="repFromformConfig" v-model="repairform">
        <template #button>
          <el-button size="small" type="primary" plain>
            <el-icon> <Search /> </el-icon>查询</el-button
          >
          <el-button size="small" style="color: red">
            <el-icon> <Delete /> </el-icon>重置</el-button
          >
          <el-button size="small" type="primary">
            <el-icon> <Plus /> </el-icon>新增</el-button
          >
        </template>
      </FromItup>
    </div>
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
  import FromItup from '@/baseul/from/index'
  import { userRepair } from '@/ulite/api'
  //这对应这 你抽离的表格数据 :tableConfig = ""
  import { repairlist } from './config/repair.config'
  import {repFromformConfig} from './config/repFrom.config'
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
  const repairform = ref<any>({
    repairContent:""
  })
  </script>
  
  <style></style>
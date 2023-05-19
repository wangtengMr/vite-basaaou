<template>
    <div>
      <FromItup v-bind="USERformConfig" v-model="usercomplsit">
        <template #button>
          <el-button size="small">
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
      <BaseTable :getListName="userComplalist" :tableConfig="userCompla">
        <template #status="scope">
          <el-tag v-if="scope.row.status == 0" type="danger">待处理</el-tag>
          <el-tag v-if="scope.row.status == 1" type="success">已处理</el-tag>
        </template>
        <template #action>
          <div>
            <el-button size="small" type="primary">编辑</el-button>
            <el-button size="small" type="danger">删除</el-button>
          </div>
        </template>
      </BaseTable>
    </div>
  </template>
  
  <script setup lang="ts">
  import BaseTable from '@/baseul/table/src/table..vue'
  import FromItup from '@/baseul/from/index'
  import { userComplaint } from '@/ulite/api'
  //这对应这 你抽离的表格数据 :tableConfig = ""
  import { userCompla } from './config/user.config'
  import {USERformConfig} from './config/userFrom.cnofig'
  import { ref } from 'vue'
  const userComplalist = ref<any>([])
  const getNamedata = () => {
    userComplaint().then((res) => {
      console.log('投诉管理', res)
      localStorage.setItem('getlistName', JSON.stringify(res.data.data.records))
      userComplalist.value = res.data.data.records
    })
  }
  getNamedata()
  const usercomplsit = ref<any>({
    title:'',
    complaintContent:''
  })
  </script>
  
  <style></style>
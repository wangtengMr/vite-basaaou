<template>
    <div>
      <div>
      <FromItup v-bind="notisformConfig" v-model="notifrom">
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
    </div>
      <BaseTable :getListName="Noticelist" :tableConfig="noticelist">
        <template #action>
          <div>
            <el-button size="small" icon="EditPen" type="primary">编辑</el-button>
            <el-button size="small" icon="Delete" type="danger">删除</el-button>
          </div>
        </template>
      </BaseTable>
    </div>
  </template>
  
  <script setup lang="ts">
  import BaseTable from '@/baseul/table/src/table..vue'
  import FromItup from '@/baseul/from/index'
  import { sysNotice } from '@/ulite/api'
  //这对应这 你抽离的表格数据 :tableConfig = ""
  import { noticelist } from './config/noti.config'
  import {notisformConfig} from './config/notiFrom.config'
  import { ref } from 'vue'
  const   Noticelist = ref<any>([])
  const getNamedata = () => {
    sysNotice().then((res) => {
      console.log('公告管理', res)
      localStorage.setItem('getlistName', JSON.stringify(res.data.data.records))
      Noticelist.value = res.data.data.records
    })
  }
  getNamedata()
  const notifrom = ref<any>({
    title:''
  })
  </script>
  
  <style></style>
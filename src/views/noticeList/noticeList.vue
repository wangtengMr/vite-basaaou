<template>
    <div>
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
  import { sysNotice } from '@/ulite/api'
  //这对应这 你抽离的表格数据 :tableConfig = ""
  import { noticelist } from './config/noti.config'
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
  </script>
  
  <style></style>
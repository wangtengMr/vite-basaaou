<template>
  <div>
    <div>
      <FromItup v-bind="sysformConfig" v-model="sysHlist">
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
    <BaseTable :getListName="sysHoulist" :tableConfig="sysHouslist">
      <template #status="scope">
        <el-tag v-if="scope.row.status == 0" type="success">未使用</el-tag>
        <el-tag v-if="scope.row.status == 1" type="danger">已使用</el-tag>
      </template>
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
import { houseLists } from '@/ulite/api'
import { sysHouslist } from './config/sysHou.config'
import {sysformConfig} from './config/sysHouse.config'
import { ref } from 'vue'
const sysHoulist = ref<any>([])
const getNamedata = () => {
  houseLists().then((res) => {
    console.log('房间列表', res)
    localStorage.setItem('getlistName', JSON.stringify(res.data.data.records))
    sysHoulist.value = res.data.data.records
  })
}
getNamedata()
const sysHlist = ref({
  buildNme:'',
  status:'',
  unitName:'',
  houseNum:''
}) 
</script>

<style></style>

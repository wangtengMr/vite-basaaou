<template>
  <div>
    <div>
        <FromItup v-bind="parkiformConfig" v-model="parkfromlist">
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
    <BaseTable :getListName="parklists" :tableConfig="Parklist">
      <template #parkType="scope">
        <el-tag v-if="scope.row.parkType == 0" type="success">地下</el-tag>
        <el-tag v-if="scope.row.parkType == 1" type="danger">地上</el-tag>
      </template>
      <template #parkStatus="scope">
        <el-tag v-if="scope.row.parkStatus == 0" type="success">未使用</el-tag>
        <el-tag v-if="scope.row.parkStatus == 1" type="danger">已使用</el-tag>
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
import { parkList } from '@/ulite/api'
import { Parklist } from './config/park.config'
import {parkiformConfig} from './config/par.config'
import { ref } from 'vue'
const parklists = ref<any>([])
const getNamedata = () => {
  parkList().then((res) => {
    console.log('车辆管理', res)
    localStorage.setItem('getlistName', JSON.stringify(res.data.data.records))
    parklists.value = res.data.data.records
  })
}
getNamedata()
const parkfromlist = ref<any>({
  parkName:'',
  parkStatus:'',
  parkType:''
})
</script>

<style></style>

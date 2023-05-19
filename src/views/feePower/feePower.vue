<template>
  <div>
    <FromItup v-bind="feefformConfig" v-model="feelist">
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
    <BaseTable :getListName="feePower" :tableConfig="feepowerlist">
      <template #payPowerStatus="scope">
        <el-tag v-if="scope.row.payPowerStatus == 0" type="danger">未缴费</el-tag>
        <el-tag v-if="scope.row.payPowerStatus == 1" type="success">已缴费</el-tag>
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
import { feePowers } from '@/ulite/api'
//这对应这 你抽离的表格数据 :tableConfig = ""
import { feepowerlist } from './config/feepower.config'
import {feefformConfig} from './config/feefrom.config'
import { ref } from 'vue'
const feePower = ref<any>([])
const getNamedata = () => {
  feePowers().then((res) => {
    console.log('收费管理', res)
    localStorage.setItem('getlistName', JSON.stringify(res.data.data.records))
    feePower.value = res.data.data.records
  })
}
getNamedata()
const feelist = ref<any>({
  userName:'',
  houseNum:''
})
</script>

<style></style>

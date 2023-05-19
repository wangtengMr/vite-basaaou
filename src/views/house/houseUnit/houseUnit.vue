<template>
  <div>
    <div>
      <FromItup v-bind="UnitformConfig" v-model="Unillist">
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
    <BaseTable :getListName="houseUing" :tableConfig="houseUist">
      <template #type="scope">
        <el-tag v-if="scope.row.type == 0" type="success">电梯房</el-tag>
        <el-tag v-if="scope.row.type == 1" type="danger">普通房</el-tag>
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
import { houseUnit } from '@/ulite/api'
import { houseUist } from './config/house.config'
import { UnitformConfig } from './config/Unit.config'
import { ref } from 'vue'
const houseUing = ref<any>([])
const getNamedata = () => {
  houseUnit().then((res) => {
    console.log('单元列表', res)
    localStorage.setItem('getlistName', JSON.stringify(res.data.data.records))
    houseUing.value = res.data.data.records
  })
}
getNamedata()
const Unillist = ref<any>({
  buildNme: '',
  unitName: ''
})
</script>

<style></style>

<template>
  <div>
    <FromItup v-bind="formConfig" v-model="formInline">
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
  <div class="table-top">
    <BaseTable :getListName="getListName" :tableConfig="tableconfig">
      <template #sex="scope">
        <el-tag :type="scope.row.sex == 1 ? '' : 'success'">
          {{ scope.row.sex == 1 ? '男' : '女' }}
        </el-tag>
      </template>
      <template #isUsed="scope">
        <el-switch :v-model="scope.row.isUsed" active-text="否" inactive-text="是"> </el-switch>
      </template>
      <template #status="scope">
        <el-switch v-model="scope.row.status" active-text="否" inactive-text="是"> </el-switch>
      </template>

      <template #action>
        <div>
          <el-button size="small" icon="EditPen" type="primary">编辑</el-button>
          <el-button size="small" icon="EditPen" type="success">分配角色</el-button>
          <el-button size="small" icon="Delete" type="danger">删除</el-button>
        </div>
      </template>
    </BaseTable>
  </div>
</template>

<script setup lang="ts">
import BaseTable from '@/baseul/table/src/table..vue'
import FromItup from '@/baseul/from/index'
import { getlistName } from '@/ulite/api'
import { reactive, ref } from 'vue'
import { tableconfig } from './config/table-config'
import { formConfig } from './config/from-config'
const getListName = ref<any>([])
const getNamedata = () => {
  getlistName().then((res) => {
    // console.log(res.data.data.records)
    localStorage.setItem('getlistName', JSON.stringify(res.data.data.records))
    getListName.value = res.data.data.records
  })
}
getNamedata()

const formInline = ref<any>({
  loginName: '',
  phone: '',
  type: ''
})

const handleDelete = () => {}
const handleEdit = () => {}
</script>

<style>
/* .table-top {
  width: 100%;
} */
</style>

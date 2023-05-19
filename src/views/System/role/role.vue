<template>
  <div>
      <FromItup v-bind="roleformConfig"  v-model="rloeformInline">
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
  <BaseTable :getListName="getlistrole" :tableConfig="tableConfig ">
    <template #action>
        <div>
          <el-button size="small" icon="EditPen" type="primary">编辑</el-button>
          <el-button size="small" icon="EditPen" type="success">分配角色</el-button>
          <el-button size="small" icon="Delete" type="danger">删除</el-button>
        </div>
      </template>
  </BaseTable>
</template>

<script setup lang="ts">
import BaseTable from '@/baseul/table/src/table..vue'
import FromItup from '@/baseul/from/index'
import { getlistRole } from '@/ulite/api'
import { ref,reactive } from 'vue'
import { tableConfig } from './config/table-config'
import {roleformConfig} from './config/form.config'
const getlistrole = ref<any>([])
const getRole = () =>{
  getlistRole().then(res => {
    console.log('角色列表', res);
    localStorage.setItem('getlistrole', JSON.stringify(res.data.data.records))
    getlistrole.value = res.data.data.records
  })
}
getRole()
const rloeformInline = reactive<any>({
  roleName:'',
  type: ''
})
</script>

<style></style>

<template>
  <div>
    <div>
      <FromItup v-bind="liveruserformConfig" v-model="liveUserlist">
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
    <BaseTable :getListName="liveuserlist" :tableConfig="livelist">
      <template #sex="scope">
        <el-tag v-if="scope.row.sex == 0" type="success">女</el-tag>
        <el-tag v-if="scope.row.sex == 1" type="danger">男</el-tag>
      </template>
      <template #status="scope">
        <el-tag v-if="scope.row.status == 0" type="success">禁用</el-tag>
        <el-tag v-if="scope.row.status == 1" type="danger">启用</el-tag>
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
import { liveUser } from '@/ulite/api'
import { livelist } from './config/liveUser.config'
import {liveruserformConfig} from './config/livs.config'
import { ref } from 'vue'
const liveuserlist = ref<any>([])
const getNamedata = () => {
  liveUser().then((res) => {
    console.log('业主数据', res)
    localStorage.setItem('getlistName', JSON.stringify(res.data.data.records))
    liveuserlist.value = res.data.data.records
  })
}
getNamedata()
const liveUserlist = ref<any>({
  loginName: '',
  phone: ''
})
</script>

<style></style>

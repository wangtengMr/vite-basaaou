<template>
  <div>
    <BaseTable :getListName="houseding" :tableConfig="houselist">
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
import { houseBuilding } from '@/ulite/api'
import {houselist} from './config/honse.config'
import { ref } from 'vue';
const houseding = ref<any>([])
const getNamedata = () => {
  houseBuilding().then((res) => {
    console.log('房屋列表',res)
    localStorage.setItem('getlistName', JSON.stringify(res.data.data.records))
    houseding.value = res.data.data.records
  })
}
getNamedata()
</script>

<style></style>

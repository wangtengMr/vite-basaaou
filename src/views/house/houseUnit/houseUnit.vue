<template>
  <div>
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
import { houseUnit } from '@/ulite/api'
import { houseUist} from './config/house.config'
import { ref } from 'vue';
const houseUing = ref<any>([])
const getNamedata = () => {
  houseUnit().then((res) => {
    console.log('单元列表',res)
    localStorage.setItem('getlistName', JSON.stringify(res.data.data.records))
    houseUing.value = res.data.data.records
  })
}
getNamedata()
</script>

<style></style>
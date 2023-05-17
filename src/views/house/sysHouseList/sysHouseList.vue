<template>
  <div>
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
import { houseLists } from '@/ulite/api'
import { sysHouslist} from './config/sysHou.config'
import { ref } from 'vue';
const sysHoulist = ref<any>([])
const getNamedata = () => {
  houseLists().then((res) => {
    console.log('房间列表',res)
    localStorage.setItem('getlistName', JSON.stringify(res.data.data.records))
    sysHoulist.value = res.data.data.records
  })
}
getNamedata()
</script>

<style></style>
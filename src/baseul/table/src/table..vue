<template>
  <div>
    <el-table row-key="menuId" :data="getListName" border  style="width: 100%;">
      <el-table-column
          v-if="showIndexColumn"
          label="序号"
          type="index"
          width="60"
        ></el-table-column>
        <el-table-column v-if="showExpandColumn" type="expand" width="60"></el-table-column>
        <el-table-column v-if="showSelectionColumn" type="selection" width="60"></el-table-column>
      <template v-for="(item, index) in tableConfig" :key="index">
      
       
        <el-table-column  v-bind="item" >
          <template #default="scope" v-bind="item">
            <slot :name="item.slotName" :row="scope.row">{{ scope.row[item.prop] }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script setup lang="ts">
defineProps({
  getListName: {
    type: Array,
    default: () => []
  },
  propList: {
    type: Array as any,
    default: () => []
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectionColumn: {
    type: Boolean,
    default: false
  },
  showExpandColumn: {
    type: Boolean,
    default: false
  },
  tableConfig: {
    type: Array as any,
    default: () => []
  },
})
const handleEdit = () => {}
const handleDelete = () => {}
</script>

<style>
  .el-table{
    max-width: 100%;
  }
</style>

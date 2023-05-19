<template>
  <el-form :inline="true" ref="form" :model="formData" label-width="70px" style="width: 100%">
    <template v-for="(item, index) in fromtiem" :key="index">
      <el-form-item :label="item.label">
        <el-input
          size="small"
          v-bind="item"
          v-if="item.type === 'input'"
          v-model="formData[item.field]"
        ></el-input>
      </el-form-item>
      <el-form-item v-if="item.type === 'select'">
        <el-select v-model="formData[item.field]" class="m-2">
          <el-option
            v-for="ele in item.options"
            :key="ele.value"
            :label="ele.label"
            :value="ele.value"
          /> </el-select>
        </el-form-item>
      <el-form-item v-if="item.type === 'slot'">
        <slot :name="item.slotName"></slot>
      </el-form-item>
    </template>
  </el-form>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
const prop = defineProps({
  modelValue: {
    type: Object,
    default: () => ({})
  },
  fromtiem: {
    type: Array as any,
    default: () => []
  },
  rloeformInline: {
    type: Array as any,
    default: () => ({})
  }
})
const emits = defineEmits(['update:modelValue'])
const formData = ref({ ...prop.modelValue })
watch(
  formData,
  (newValue) => {
    emits('update:modelValue', newValue)
    console.log(newValue)
  },
  {
    deep: true
  }
)
</script>

<style>
.el-form-item asterisk-left {
  margin-right: 0px !important;
}
.el-form--inline .el-form-item {
  margin-right: 5px !important;
}
.el-form-item__label{
  font-weight: 800;
  color: #606266;
}
.el-form-item__label{
  width: 50px;
}
</style>

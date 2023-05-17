<template>
  <div>
    <el-col>
      <el-menu
        active-text-color="#409eff"
        background-color="#304156"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#bfcbd9"
        router
      >
        <template v-for="item in getMenulists" :key="item.path">
          <el-sub-menu :index="item.path">
            <template #title>
                <el-icon><HomeFilled /></el-icon>
              <span>{{ item.meta.title }}</span>
            </template>
            <template v-for="ele in item.children" :key="ele.path">
              <el-menu-item :index="ele.path">
                <el-icon><Link /></el-icon>
                <span>{{ ele.meta.title }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </el-col>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getMenuList } from '@/ulite/api'
const getMenulists = ref<any>([])
const getMenudata = () => {
  getMenuList().then((res: any) => {
    getMenulists.value = res.data.data
    console.log(getMenulists.value)
  })
}
getMenudata()
</script>

<style></style>

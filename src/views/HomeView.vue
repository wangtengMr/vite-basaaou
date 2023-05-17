<template>
  <div class="main">
    <el-container>
      <el-aside width="200px">
        <asidess></asidess>
        <navSubmenu></navSubmenu>
      </el-aside>
      <el-container>
        <el-header>Header </el-header>
        <el-main>
          <div class="hader-top"></div>
          <RouterView />
          </el-main
        >
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import asidess from '@/views/aside/aside.vue'
import navSubmenu from '@/components/nav-submenu/nav-submenu.vue'
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  background-color: aquamarine;
}
.el-header {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #304156;
  color: #cccc;
  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  width: 100%;
  padding: 0px;
}
.hader-top {
  width: 100%;
  height: 30px;
  box-shadow: 1px 1px 1px #ccc;
  background-color: #ffffff;
  margin-top: 2px;
}
</style>

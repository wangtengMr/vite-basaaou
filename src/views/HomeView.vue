<template>
  <div class="main">
    <el-container>
      <el-aside width="200px">
        <asidess></asidess>
        <navSubmenu></navSubmenu>
      </el-aside>
      <el-container>
        <el-header>
          <div>
            <el-icon :size="20">
              <Edit />
            </el-icon>
          </div>
          <div class="tags-view-container"></div>
        </el-header>
        <el-main>
          <RouterView />
        </el-main>
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
  height: 84px;
  line-height: 60px;
  padding: 0;
}
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  background-color: #ccc;
}

.el-aside {
  background-color: #304156;
  color: #cccc;
  width: 210px;
  height: 100vh;
}

.el-main {
  background-color: #ffff;
  height: 100vh;
  color: #333;
  width: 100%;
  padding: 20px;
}
</style>

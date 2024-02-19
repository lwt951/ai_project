<template>
  <div class="layout">
    <el-container>
      <el-header
        ><el-row :span="12" class="left-header"
          ><el-icon :size="30" @click="expandMenu" v-show="!isCollapse"
            ><Expand
          /></el-icon>
          <el-icon :size="30" @click="foldMen" v-show="isCollapse"
            ><Fold /></el-icon
          ><img class="logo" src="" alt="" />
        </el-row>
        <el-row :span="12">
          <div class="user-box">
            <el-avatar icon="UserFilled" />
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                Admin
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item icon="InfoFilled"
                    >User Info</el-dropdown-item
                  >
                  <el-dropdown-item icon="Management"
                    >Repositories</el-dropdown-item
                  >
                  <el-dropdown-item :divided="true" icon="CloseBold"
                    >Logout</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div></el-row
        >
      </el-header>
      <el-container>
        <el-aside width="auto">
          <el-menu
            default-active="1"
            :collapse="isCollapse"
            text-color="#7c7c7c"
            :collapse-transition="false"
          >
            <el-menu-item index="1">
              <el-icon :size="30"><Clock /></el-icon>
              <template #title>Recent</template>
            </el-menu-item>
            <el-menu-item index="2">
              <el-icon :size="30"><User /></el-icon>
              <template #title>My own</template>
            </el-menu-item>
            <el-menu-item index="3">
              <el-icon :size="30"><Share /></el-icon>
              <template #title>Public</template>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon :size="30"><CopyDocument /></el-icon>
              <template #title>Templates</template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main><router-view /></el-main>
        </el-container>
      </el-container>
    </el-container>
    <AiBox></AiBox>
  </div>
</template>
<script setup>
import AiBox from './views/AiBox.vue'
import { ref } from 'vue';
const isCollapse = ref(true);
function expandMenu() {
  isCollapse.value = true;
}
function foldMen() {
  isCollapse.value = false;
}
</script>
<style scoped>
.layout,
.el-container {
  height: 100%;
}
.el-header {
  background-color: #242f42;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
.el-avatar {
  background-color: #51575c;
}
.user-box {
  display: flex;
  align-items: center;
}
.user-box .el-dropdown {
  color: #fff;
  margin-left: 0.5rem;
  cursor: pointer;
}
.el-aside {
  background: #f0f2f5;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
}
.el-main {
  background-color: #f0f2f5;
}
.el-menu {
  margin-top: 2.2rem;
  height: 93%;
  border-radius: 0.5rem;
}
.el-menu:not(.el-menu--collapse) {
  width: 210px;
}
.el-menu-item {
  font-size: 1.1rem;
}
.el-menu-item .el-icon {
  margin-right: 0.5rem;
}
.left-header {
  align-items: center;
}
.left-header .el-icon {
  color: #fff;
  margin-right: 1rem;
  cursor: pointer;
}
</style>

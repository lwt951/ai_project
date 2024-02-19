<template>
  <el-header>
    <transition>
      <el-row :span="12" class="left-header" v-if="showLeft"
        ><el-icon
          :size="30"
          @click="previewStore.toggleCollapse"
          v-show="!previewStore.previewCollapse"
          ><Expand
        /></el-icon>
        <el-icon
          :size="30"
          @click="previewStore.toggleCollapse"
          v-show="previewStore.previewCollapse"
          ><Fold
        /></el-icon>
        <h3 class="title">{{ props.data.title }}</h3>
      </el-row>
    </transition>
    <transition>
      <el-row :span="12" v-if="showRight">
        <div class="user-box">
          <el-avatar icon="UserFilled" />
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              User
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item icon="InfoFilled">User Info</el-dropdown-item>
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
    </transition>
  </el-header>
</template>
<script setup>
import { ref, defineProps } from 'vue';
import { usePreviewStore } from '../store';
const props = defineProps(['data']);
const previewStore = usePreviewStore();
const showLeft = ref(false)
const showRight = ref(false)

setHeadAnimation(1200)

function setHeadAnimation(speed = 1000) {
  setTimeout(() => {showLeft.value = true}, speed)
  setTimeout(() => {showRight.value = true}, speed * 2)
}
</script>
<style scoped>
.el-header {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  z-index: 1;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  border-top-right-radius: 0.25rem;
}
.left-header {
  align-items: center;
}
.left-header .el-icon {
  color: #8b8b8b;
  margin-right: 1rem;
  cursor: pointer;
}
.title {
  font-size: 1.3rem;
  color: #304156;
}
.user-box {
  display: flex;
  align-items: center;
}
.el-avatar {
  background-color: #304156;
}
.user-box .el-dropdown {
  color: #304156;
  margin-left: 0.5rem;
  cursor: pointer;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

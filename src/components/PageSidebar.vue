<template>
  <el-aside>
    <el-menu
      default-active="1"
      active-text-color="#409EFF"
      background-color="#304156"
      text-color="#BFCBD9"
      :collapse="previewStore.previewCollapse"
      :collapse-transition="false"
    >
      <transition v-for="(config, index) in props.data" :key="index">
        <el-menu-item
          :index="(index + 1).toString()"
          v-if="menuAnimationQueue[index]"
          @click="pageCreater.renderPage(config.pageConfig)"
        >
          <el-icon :size="30"
            ><component :is="config.icon"></component
          ></el-icon>
          <template #title>{{ config.name }}</template>
        </el-menu-item>
      </transition>
    </el-menu>
  </el-aside>
</template>
<script setup>
import { ref, defineProps, onMounted } from 'vue';
import { usePreviewStore } from '../store';
import PageCreater from '@/assets/js/pageCreater';
const previewStore = usePreviewStore();
const props = defineProps(['data']);
const menuAnimationQueue = ref([]);
const pageCreater = new PageCreater({ id: 'root' });
onMounted(() => {
  pageCreater.init();
});
setMenuAnimation();

function setMenuAnimation(speed = 1000) {
  const menuInterval = setInterval(() => {
    menuAnimationQueue.value.push(true);
    if (menuAnimationQueue.value.length === props.data.length) {
      clearInterval(menuInterval);
      if (
        document.querySelector('.preview-container') &&
        document
          .querySelector('.preview-container')
          .querySelector('.el-menu-item.is-active')
      ) {
        document
          .querySelector('.preview-container')
          .querySelector('.el-menu-item.is-active')
          .click();
      }
    }
  }, speed);
}
</script>
<style scoped>
.el-aside {
  width: auto;
  box-shadow: rgba(50, 50, 105, 0.2) 0px 2.5px 0px 0px,
    rgba(0, 0, 0, 0.5) 0px 1px 10px 0px;
}
.el-menu {
  height: 100%;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.el-menu:not(.el-menu--collapse) {
  min-width: 200px;
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

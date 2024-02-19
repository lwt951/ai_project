import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia'
import './assets/css/style.css';

import 'reset-css';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/display.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'dayjs/locale/zh-tw';


const pinia = createPinia()
const app = createApp(App);
app.use(router);
app.use(pinia)
app.use(ElementPlus);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount('#app');

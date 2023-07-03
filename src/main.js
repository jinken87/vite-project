import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import dayjs from 'dayjs';
import { Popup } from 'vant'
import {Button} from 'vant'
import { createI18n } from 'vue-i18n'
import zh from './locales/zh-TW.json'
import cn from './locales/zh-cn.json'
import en from './locales/en.json'
import th from './locales/th-th.json'
import vi from './locales/vi-vh.json'
import Google from "./components/Google.vue";

import App from './App.vue'
// import router from './'
import 'vant/lib/index.css'
import './styles/style.css'

const i18n = createI18n({
  legacy: false, // 啟用新的 Vue3 選項
  locale: 'en', // 設置默認語言
  // globalInjection:true,
  // fallbackLocale:"zh-TW",
  messages: {
    en,
    'zh-TW':zh, // 引入 zh-TW.json 文件
    vi,
    th,
    cn
  }
})
const router = createRouter({
  history : createWebHistory(),
  routes:[
    {path:'/', component:Google},
    // {path:'/happy'}
  ]
})
const app = createApp(App);
// createApp(App).mount('#app')
app.use(i18n);
// app.config.globalProperties.$i18n = i18n;
app.use(router)
app.use(Popup);
app.use(Button);
app.mount('#app');




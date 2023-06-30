<template>
  <div class="lan">
    <h1>This is About page.</h1>
    <!-- <router-link to="/">Home</router-link> -->
    <!-- <router-link to="/about">About</router-link> -->
    <div class="btn">
      <button @click="switchToEnglish">English</button>
      <button @click="switchToChinese">中文</button>
      <button @click="switchToCn">簡體中文</button>
      <button @click="switchToVi">越南文</button>
      <button @click="switchToTh">泰文</button>
    </div>
    <div class="text">
      <h1>{{ $t('menu.aboutUs') }}</h1>
      <h1>{{ $t('menu.productContent') }}</h1>
      <h1>{{ $t('menu.blog') }}</h1>
      <h1>{{ $t('menu.faq') }}</h1>
    </div>
  </div>
</template>
<script>
// import { ref } from 'vue'
// import { useI18n } from 'vue-i18n';

export default {
  methods: {
    switchToEnglish () {
      this.$i18n.locale = 'en'
    },
    switchToChinese () {
      this.$i18n.locale = 'zh-TW'
    },
    switchToCn(){
      this.$i18n.locale = 'cn'
    },
    switchToTh(){
      this.$i18n.locale ='th'
    },
    switchToVi(){
      this.$i18n.locale = 'vi'
    }
  }
}
</script>

<style scoped>
</style>
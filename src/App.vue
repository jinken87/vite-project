<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Nav from "./components/Nav.vue";
import Google from "./components/Google.vue";
import Input from "./components/Input.vue";
import Clock from "./components/Clock.vue";
import Lan from './components/Lan.vue'
</script>

<script>
export default {
  setup() {
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    return {
      show,
      showPopup,
    };
  },
  data() {
    return {
      // abc:"",
    };
  },
  // components: {
  //   Clock,
  // },
};
</script>

<template>
  <div>
    <!-- <HelloWorld /> -->
    <Nav />
    <Google />
    <Input />
    <Clock />
    <Lan />

    <!-- <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div> -->
    <!-- <HelloWorld msg="Vite + Vue" /> -->
  </div>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<template>
  <div class="clock">
    <h1>時間</h1>
    <div>
      <p>{{ time }}</p>
    </div>
    <div>
      <p>{{ time2 }}</p>
    </div>
    <div>
      {{ timeY }}
    </div>
  </div>
</template>

<script>

import dayjs from "dayjs";
export default {
  data() {
    return {
      time:dayjs(),
      time2:dayjs().format("YYYY-MM-DD HH:mm:ss"),
      timeY:dayjs().year(100),
    };
  },
  created(){
    this.refleshTime();
  },
  methods:{
    refleshTime(){
      this.time = dayjs();
      this.time2 = dayjs().format("YYYY-MM-DD HH:mm:ss");
      this.timeY = dayjs().year(3066);
    }
  },
  mounted(){
    setInterval(()=>{
      this.refleshTime();
    },1000);
  }
};
</script>

<style>
</style>

<template>
  <div class="input">
    <form action="">
      <div class="form">
        <div class="all-input">
          <div class="text">
            <img class="magnifier" src="../assets/search (1).png" alt="" />
            <input type="text" placeholder="搜尋 Google 或是輸入網址" />
            <img class="mic" src="../assets/mic.png" alt="" />
          </div>
        </div>
        <div class="option">
          <a
            v-for="icon in iconList"
            :key="icon.name"

            class="title"
          >
            <div class="more" @click="showEditPopup">
              <img src="../assets/more.png" alt="" >
            </div>
            <div class="title-icon">
              <img  alt="titleTitle" :src = "icon.url+'/favicon.ico'"/>
            </div>
            <div class="title-text">
              <span>{{ icon.name }}</span>
            </div>
          </a>

          <a class="title" @click="showPopup">
            <div class="title-icon">
              <img src="../assets/smallPlus.png" alt="a" />
            </div>
            <div class="title-text">
              <span>新增捷徑</span>
            </div>
          </a>
        </div>
      </div>
    </form>
    <!-- <van-cell title="展示弹出层" is-link @click="showPopup" /> -->
    <!-- eslint-disable -->
    <van-popup
      v-model:show = " show " 
      :style="{}"
      round
      closeable
      duration="0"
      close-icon="close"
    >
    <!-- eslint-disable  -->

      <p>新增捷徑</p>
      <label for="">名稱</label>
      <input
        v-model="iconTitle"
        type="text"
        name=""
        id=""
        placeholder="輸入捷徑名稱"
      />
      <label for="">網址</label>
      <input
        v-model="iconUrl"
        @focus="urlForSure"
        type="text"
        name=""
        id=""
        placeholder="輸入捷徑網址"
      />
      <p>{{ iconTitle }}</p>
      <p>{{ iconUrl }}</p>
      <div class="btn-container">
        <van-button plain hairline type="primary" @click="show = false"
          >取消</van-button
        >
        <van-button @click="createIcon()" hairline type="primary"
          >完成</van-button
        >
      </div>
    </van-popup>
    <van-popup
      v-model:show="showEdit" 
      :style="{width:'200px',height:'100px'}"
      round
      duration="0"
    >
    <div style="display: flex; flex-direction: column;
    justify-content: center;align-items: center; margin: 16px 0 0 0;">
    <button>123</button>
    <button>456</button>
    </div>
    </van-popup>
    <!-- <van-button type="primary">主要按钮</van-button> -->
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    const showEdit = ref(false);
    const showEditPopup = () => {
      showEdit.value = true;
    };
    return {
      show,
      showPopup,
      showEdit,
      showEditPopup,
    };
  },
  data() {
    return {
      iconList: [
        { name: "google", url: "https://www.google.com/" },
        { name: "youtube", url: "https://www.youtube.com" },
      ],
      iconTitle: "",
      iconUrl: "",
    };
  },
  methods: {
    createIcon() {
      this.iconList.push({ name: this.iconTitle, url: this.iconUrl });
      this.show = false;
      this.iconTitle = "";
      this.iconUrl = "";
    },
    editIcon(){
      
    },
    urlForSure() {
      this.iconUrl = "https://";
    },
    func(){
      alert("跳出編輯")
    },
    goToHref(e){
      e.href({iconUrl})
    }
  },
};
</script>

<style>
</style>
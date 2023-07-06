
<template>
  <div class="input">
    <form action="">
      <div class="form">
        <div class="all-input">
          <div class="text">
            <img class="magnifier" src="../assets/search.png" alt="" />
            <input type="text" placeholder="搜尋 Google 或是輸入網址" />
            <img class="mic" src="../assets/mic.png" alt="" />
          </div>
        </div>
        <div class="option">
          <!-- :href="icon.url" -->
          <a
            v-for="icon in iconList"
            :title="icon.name"
            :key="icon.name"
            class="title"
            @click="goToHref(icon.url)"
          >
            <div class="more" @click.stop="showEditPopup" @mousedown="trace">
              <img src="../assets/more.png" alt="" />
            </div>
            <div class="title-icon">
              <img alt="titleTitle" :src="icon.url + '/favicon.ico'" />
            </div>
            <div class="title-text">
              <span>{{ icon.name }}</span>
            </div>
          </a>

          <a class="title" title="增加捷徑" @click="showiconPopup">
            <div class="title-icon">
              <img src="../assets/smallPlus.png" alt="增加捷徑" />
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
      v-model:show="showicon"
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
        <van-button plain hairline type="primary" @click="closeIcon()"
          >取消</van-button
        >
        <van-button @click="createIcon()" hairline type="primary"
          >完成</van-button
        >
      </div>
    </van-popup>
    <van-popup
      class="moreDialog"
      v-model:show="showEdit"
      :style="{
        margin: 0,
        width: '150px',
        height: '100px',
        left: this.showX,
        top: this.showY,
      }"
      :overlay="true"
      :overlay-style="{ backgroundColor: 'white', opacity: 0.1 }"
      round
      duration="0"
    >
      <div
        style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 14px 0px;
        "
      >
        <button class="moreBtn" @click="showEditPopup(), (showicon = true)">
          編輯捷徑
        </button>
        <button class="moreBtn" @click="showEditPopup(), deleteIcon(this.icon)">
          移除
        </button>
      </div>
    </van-popup>
    <!-- <van-button type="primary">主要按钮</van-button> -->
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const showicon = ref(false);
    const showiconPopup = () => {
      showicon.value ? (showicon.value = false) : (showicon.value = true);
    };
    const showEdit = ref(false);
    const showEditPopup = () => {
      showEdit.value ? (showEdit.value = false) : (showEdit.value = true);
    };
    const goToHref = (url) => {
      window.location.href = url;
    };
    return {
      showicon,
      showiconPopup,
      showEdit,
      showEditPopup,
      goToHref,
    };
  },
  data() {
    return {
      iconList: [
        { name: "google", url: "https://www.google.com" },
        { name: "youtube", url: "https://www.youtube.com" },
      ],
      iconTitle: "",
      iconUrl: "",
      showX: "",
      showY: "",
    };
  },
  methods: {
    createIcon() {
      if (
        this.iconTitle &&
        this.iconUrl !== "https://" &&
        this.iconUrl !== ""
      ) {
        this.iconList.push({ name: this.iconTitle, url: this.iconUrl });
        this.showicon = false;
        this.iconTitle = "";
        this.iconUrl = "";
      } else {
        alert("請輸入名稱及連結");
      }
    },
    closeIcon() {
      this.iconTitle = "";
      this.iconUrl = "";
      this.showicon = false;
    },
    trace(e) {
      this.showX = e.clientX - 100 + "px";
      this.showY = e.clientY + 25 + "px";
    },
    urlForSure() {
      this.iconUrl = "https://";
    },
    editIcon() {},
    deleteIcon(key) {
      console.log(key);
      for (let i = 0; i < this.iconList.length; i++) {
        console.log(this.iconList[i].name)
        if (this.iconList[i].name ==key ) {
          console.log("ininin");
          this.iconList.splice(i, 1);
        }
      }
    },
    func() {
      alert("跳出編輯");
    },
  },
};
</script>

<style>
</style>
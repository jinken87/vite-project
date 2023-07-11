
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
            <div class="more" @click.stop="showEditPopup(icon)" @mousedown="trace">
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
    <!--新增icon-->
    <van-popup
      v-model:show="showicon"
      :style="{}"
      round
      duration="0"
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
        <van-button plain hairline type="primary" @click="closeAddIcon()"
          >取消</van-button
        >
        <van-button @click="createIcon()" hairline type="primary"
          >完成</van-button
        >
      </div>
    </van-popup>
    <!--編輯icon-->
    <van-popup
      v-model:show="showChangeIcon"
      :style="{}"
      round
      duration="0"
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
        <van-button plain hairline type="primary" @click="closeChangeIcon()"
          >取消</van-button
        >
        <van-button @click="changeIcon()" hairline type="primary"
          >完成</van-button
        >
      </div>
    </van-popup>
    <!--編輯小彈窗-->
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
        <button class="moreBtn" @click="editIcon()">
          編輯捷徑
        </button>
        <button class="moreBtn" @click=" deleteIcon()">
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
    const currentIconName = ref("");
    const showicon = ref(false);
    const showEdit = ref(false);
    const showChangeIcon =ref(false);

    //打開新增捷徑
    const showiconPopup = () => {
      showicon.value = !showicon.value;
    };

    //編輯小視窗
    const showEditPopup = (icon) => {
      currentIconName.value = icon.name;
      showEdit.value = !showEdit.value;
    };
    //編輯icon
    const showChangeIconPopup =(icon)=>{
      currentIconName.value = icon.name;
      showChangeIcon.value = !showChangeIcon.value;
      
    }

    const goToHref = (url) => {
      window.location.href = url;
    };

    return {
      showicon,
      showiconPopup,
      showEdit,
      showEditPopup,
      goToHref,
      currentIconName,
      showChangeIconPopup,
      showChangeIcon,
    };
  },
  data() {
    return {
      currentIconName:'',
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
        this.closeAddIcon()
      } else {
        alert("請輸入名稱及連結");
      }
    },
    changeIcon() {
      if (
        this.iconTitle &&
        this.iconUrl !== "https://" &&
        this.iconUrl !== ""
      ) {
        const index =this.iconList.findIndex(icon => icon.name === this.currentIconName)
        this.iconList[index].name = this.iconTitle
        this.iconList[index].url  =this.iconUrl
        this.iconTitle = ""
        this.iconUrl = ""

        this.showChangeIcon = false;

      } else {
        alert("請輸入名稱及連結");
      }
    },
    closeAddIcon() {
      this.iconTitle = "";
      this.iconUrl = "";
      this.showicon = false;
    },
    closeChangeIcon(){
      this.iconTitle = "";
      this.iconUrl = "";
      this.showChangeIcon = false ;
    },
    trace(e) {
      this.showX = e.clientX - 100 + "px";
      this.showY = e.clientY + 25 + "px";
    },
    urlForSure() {
      this.iconUrl = "https://";
    },
    resetIcon() {
      this.iconList=[]
    },
    editIcon(){
      this.showEdit=false;
      this.showChangeIcon =true
      const index =this.iconList.findIndex(icon => icon.name === this.currentIconName)
      if(index !== -1){
        this.iconTitle=this.iconList[index].name
        this.iconUrl=this.iconList[index].url
      }
    },
    deleteIcon() {
      const index =this.iconList.findIndex(icon => icon.name === this.currentIconName);
      if(index !== -1){
        this.iconList.splice(index, 1)
      }
      this.showEdit = false;
    },
    func() {
      alert("跳出編輯");
    },
  },
};
</script>

<style>
</style>
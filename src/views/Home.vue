<template>
  <div class="home-page">
    <el-row>
      <img
        src="../assets/logo.png"
        alt=""
      />
    </el-row>
    <el-row>
      <el-button
        type="primary"
        round
        @click="goMakeBook"
      >成册Demo</el-button>
      <el-button
        type="primary"
        round
        @click="goFrameSelect"
      >框选Demo</el-button>
      <el-button
        type="primary"
        round
        @click="goJsPdf"
      >jsPdf</el-button>
      <el-button
        type="primary"
        round
        @click="goDragDemo"
      >拖拽Demo</el-button>
      <el-button
        type="success"
        round
        @click="goRegiste"
      >注册</el-button>
      <el-button
        type="info"
        round
        @click="goLogin"
      >登录</el-button>
      <el-button
        type="primary"
        round
        @click="fullScreenLoading"
      >全屏加载</el-button>
      <el-button
        type="primary"
        round
        @click="goTable"
      >表格</el-button>
      <el-button
        type="primary"
        round
        @click="goTable2"
      >表格2</el-button>
      <el-button
        type="warning"
        round
      >警告按钮</el-button>
      <el-button
        type="danger"
        round
      >危险按钮</el-button>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  components: {

  },
  methods: {
    goMakeBook() {
      this.$router.push({ path: "/make_book" });
    },
    goRegiste() {
      this.$router.push({ path: "/sign_up" });
    },
    goLogin() {
      this.$router.push({ path: "/login" });
    },
    goFrameSelect() {
      this.$router.push({ path: "/frame_select" });
    },
    goDragDemo() {
      this.$router.push({ path: "/drag_demo" });
    },
    goJsPdf() {
      this.$router.push({ path: "/to_pdf" });
    },
    fullScreenLoading() {
      document.documentElement.scrollTop = 0
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
    goTable() {
      this.$router.push({ path: "/table" });
    },
    goTable2() {
      this.$router.push({ path: "/table2" });
    }
  }
}
</script>

<style scoped lang="scss">
.home-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

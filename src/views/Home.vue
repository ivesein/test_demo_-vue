<template>
  <div class="home-page">
    <el-row>
      <img src="../assets/logo.png" alt="" />
    </el-row>
    <el-row>
      <el-button type="primary" round @click="goMakeBook">成册Demo</el-button>
      <el-button type="success" round @click="goRegiste">注册</el-button>
      <el-button type="info" round @click="goLogin">登录</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
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
  padding: 60px 100px;
}
</style>

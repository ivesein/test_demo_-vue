<template>
  <div class="sing-up-page">
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
    >
      <el-form-item label="用户名:">
        <el-input v-model="formLabelAlign.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.passWord"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
import { login } from "../service/api";
export default {
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        userName: '',
        passWord: '',
      }
    }
  },
  components: {

  },
  methods: {
    async onSubmit() {
      let params = {
        username: this.formLabelAlign.userName,
        password: this.formLabelAlign.passWord
      };
      let res = await login(params);
      console.log("res>>>", res)
    }
  }
}
</script>

<style scoped lang="scss">
.sing-up-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

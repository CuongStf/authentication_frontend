<template>
  <div>
    <el-form
      :model="loginInfo"
      status-icon
      ref="ruleForm2"
      label-position="top"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="Username">
        <el-input
          type="text"
          v-model="loginInfo.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input
          type="password"
          v-model="loginInfo.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          size="mini"
          type="primary"
          plain
          @click="signUp"
        >
          Sign up
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { signup, loginFb } from '@/api/user'
export default {
  name: 'loginDialog',

  data () {
    return {
      loginInfo: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signUp () {
      // signup(this.loginInfo).then(res => {
      //   console.log(res)
      // })
      loginFb().then(res => {
        console.log(res)
      })
    }
  }
}

</script>
<style lang="css" scoped>
</style>

<template>
  <div id="app">
    <router-view />
    <el-dialog  :visible.sync="openDialogLogin" modal-append-to-body lock-scroll 
    :close-on-click-modal=false :close-on-press-escape=false :show-close=false width="50%" center>
      <h3>Form Login</h3>
      <loginForm />
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      openDialogLogin: false
    }
  },
  components: {
    loginForm: () => import('./components/loginDialog.vue')
  },
  computed: {
    ...mapGetters(['logged'])
  },
  mounted() {
    if(this.logged == false) {
      this.openDialogLogin = true
    }
  }
}

</script>
<style>


</style>

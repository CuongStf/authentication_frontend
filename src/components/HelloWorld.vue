<template>
  <div class="hello">
    <el-form
      :model="form"
      class="style-fullWidth"
    >
      <el-form-item label="Tên sách">
        <el-input
          v-model="form.name"
          size="medium"
        ></el-input>
      </el-form-item>
      <el-form-item label="Tên tác gỉa">
        <el-input
          v-model="form.author"
          size="medium"
        ></el-input>
      </el-form-item>
      <el-form-item label="Năm xuất bản">
        <el-input
          v-model="form.year_publish"
          size="medium"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          @click="createBook"
          size="medium"
        >Create</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
import { createBook, listBook } from '../api/book.js'
export default {
  props: ['createBook', 'form'],
  name: 'HelloWorld',
  data () {
    return {
      // form: {}
    }
  },
  methods: {},
  mounted () { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

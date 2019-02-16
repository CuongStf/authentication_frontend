<template>
  <div class="listBook">
    <div class="flex_horizontal between">
      <p>List Book</p>
      <el-button
        size="mini"
        icon="el-icon-plus"
        plain
        @click="openDialogCreate"
      >
        Create
      </el-button>
    </div>
    <el-row :gutter="12">
      <el-col
        v-for="item in listBook"
        :key="item._id"
        :span="6"
        class="book_item"
      >
        <el-card
          class="box-card"
          shadow="hover"
        >
          <div class="info">
            <h5>{{item.name}}</h5>
            <div>
              <span v-if="item.author">{{item.author}}</span>
              <span v-else>---</span>
            </div>
            <div>
              <span v-if="item.year_publish">{{item.year_publish}}</span>
              <span v-else>---</span>
            </div>
          </div>
          <div class="action">
            <el-button
              size="mini"
              icon="el-icon-edit"
              @click="editBook(item._id)"
              circle
              plain
            ></el-button>
            <el-button
              size="mini"
              icon="el-icon-delete"
              circle
              plain
              @click="deleteBook(item._id)"
            ></el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog
      :visible.sync="dialogCreate"
      width="40%"
      center
      lock-scroll
      modal-append-to-body
    >
      <hello-world
        :form="form"
        :createBook="createBook"
      />
    </el-dialog>
  </div>
</template>

<script>
import { listBook, createBook, editBook, deleteBook } from '../api/book.js'
import HelloWorld from './HelloWorld.vue'
export default {

  name: 'listBook',
  components: { HelloWorld },
  data () {
    return {
      listBook: [],
      dialogCreate: false,
      form: {}
    }
  },
  methods: {
    fetchData () {
      listBook().then(res => {
        if (res.status == 200) {
          this.listBook = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    },

    openDialogCreate () {
      this.dialogCreate = true
    },

    deleteBook (id) {
      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        deleteBook({ _id: id }).then(res => {
          if (res.status == 200) {
            this.$message({
              type: 'success',
              message: 'Delete success'
            })
            this.fetchData()
          } else {
            this.$message({
              message: 'Delete error',
              duration: 2000,
              type: 'error'
            })
          }
        }).catch(err => {
          this.$message({
            message: err,
            duration: 2000,
            type: 'error'
          })
        })
      }).catch(() => { }
      )
    },
    createBook () {
      createBook(this.form).then(res => {
        if (res.status == 200) {
          this.$message({
            message: 'Create success',
            duration: 2000,
            type: 'success'
          })
        } else {
          this.$message({
            message: 'Create error',
            duration: 2000,
            type: 'error'
          })
        }
        this.fetchData()
        this.dialogCreate = false
        this.form = {}
      }).catch(err => {
        this.$message({
          message: err,
          duration: 2000,
          type: 'error'
        })
      })
    },
    editBook (id) {
      console.log(id)
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style lang="css">
.listBook {
  padding: 12px;
}
</style>

<template>
  <el-row>
    <el-col />
  </el-row>
</template>

<script>
import { fetchList } from '@/api/repos'

// , createRepo, updateRepo, deleteRepo
import waves from '@/directive/waves' // Waves directive

export default {
  name: 'ReposManage',
  directives: { waves },
  filters: {},
  data() {
    return {}
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    }
  }
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>

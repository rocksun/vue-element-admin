<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.name" :placeholder="$t('collection.name')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        {{ $t('table.search') }}
      </el-button>
      <el-button v-print="'#cardlist'" class="filter-item" icon="el-icon-documentation">Print</el-button>

    </div>

    <div id="cardlist">
      <el-row :gutter="5">
        <el-col v-for="coll in list" :key="coll.ID" :span="8">
          <collection-card :collection="coll" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { fetchList } from '@/api/collections'
import CollectionCard from './card'
import print from 'vue-print-nb'

export default {
  name: 'CollectionCardList',
  components: { CollectionCard },
  directives: { print },
  filters: {
  },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        name: undefined
      }
    }
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
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
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

@media all {
    .page-break { display: none; }
}

@media print {
    .page-break { display: block; page-break-before: auto; }
}
</style>

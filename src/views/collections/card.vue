<template>
  <el-card class="box-card" :body-style="{ padding: '0px' }">
    <div slot="header" class="clearfix">
      <span>{{ collection.type }}</span>
      <span style="float: right; padding: 3px 0">{{ collection.code }}</span>
    </div>
    <el-row type="flex" justify="space-around">
      <barcode :value="collection.code" format="CODE128" height="70" text="">
        Show this if the rendering fails.
      </barcode>
    </el-row>
  </el-card>
</template>

<script>
import VueBarcode from 'vue-barcode'

export default {
  name: 'CollectionCard',
  components: {
    'barcode': VueBarcode
  },
  props: {
    collection: {
      required: true,
      type: Object
    }
  },
  computed: {
  },
  methods: {

  }
}
</script>

<style scoped>

</style>

<template>
  <tree v-bind:treeData="treeData"></tree>
</template>

<script>
import tree from "@/components/Tree/Tree.vue";

export default {
  name: "PageTree",
  components: {
    tree
  },
  data() {
    return {
      treeData:this.$store.getters.get_items
    }
  },
  mounted() {
    //console.log(this.$store.getters.get_items)
  }
}
</script>

<style scoped>

</style>
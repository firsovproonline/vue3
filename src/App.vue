<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <tree v-bind:treeData="treeData"></tree>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import tree from "./components/Tree/Tree.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

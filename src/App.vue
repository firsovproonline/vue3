<template>
  <div id="app">
    <b-navbar toggleable="sm" type="dark" variant="info">
      <router-link to="/">Вывод дерева</router-link>
      <router-link to="/array">Array</router-link>

    </b-navbar>
    <router-view></router-view>
    <div style="height: 180px"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

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

body {
  max-width: 1024px;
  margin: 0 auto !important;

}

html {
  background-image: url('assets/bgkl1.jpg');
}

nav a{
  margin-right: 8px;
  color: antiquewhite;
  font-weight: bolder;
  text-decoration: none;
}

nav a:hover{
  color: burlywood;
  text-decoration: none;
}

</style>

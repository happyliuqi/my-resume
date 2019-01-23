<template>
  <div id="app">
    <div class="title_wrapper">
      <span>头部</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title_wrapper{
  width: 100%;
  height: 50px;
  background-color: darkturquoise;
}
</style>

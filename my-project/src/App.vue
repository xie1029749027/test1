<template>
  <div id="app">
    <headerd/>
    <router-view/>
    <footerd/>
  </div>
</template>

<script>
import headerd from '@/components/header'
import footerd from '@/components/footer'
export default {
  name: 'App',
  components: {
    headerd,
    footerd
  }
}
</script>

<style>
#app {
  margin:0;
  padding:0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
</style>

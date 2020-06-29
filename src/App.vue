<template>
  <div id="app">
    <main-navbar></main-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainNavbar from 'components/content/navbar/MainNavbar'

export default {
  name: 'App',
  components: {
    MainNavbar
  }
}
</script>

<style>
@import './assets/css/base.css';
#app{
  width: 100%;
  position: relative;
}
</style>

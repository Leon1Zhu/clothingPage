<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted(){
      //提交修改
    this.$store.commit('LOGIN_STATUS', true)
      console.log(this.$store)
  }
}
</script>

<style>
</style>

<template>
  <div id="app">
    <alienUpload uploadType="all" :compressQuality="compressQuality" showProgress :ProgressPercent="ProgressPercent" ref="uploadImg"></alienUpload>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      compressQuality:.6,
      ProgressPercent:0,
    }
  },
  mounted(){
  }
}
</script>

<style>
</style>

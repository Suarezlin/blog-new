<template>
  <div id="app">
    <div class="header-wrapper">
      <v-header></v-header>
    </div>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import vHeader from './components/header/header';
  import vContent from './components/content/content';
  export default {
    name: 'app',
    components: {
      vHeader, vContent
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>

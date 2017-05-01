<template>
  <div class="edit">
    <mavonEditor v-model="value"/>
    <div v-html="newvalue">
    </div>
  </div>
</template>
<script>
  import markdown from './markdown.js';
  import {mavonEditor} from 'mavon-editor';
  export default {
    data () {
      return {
        value: '',
        newvalue: ''
      };
    },
    components: {
      mavonEditor
    },
    watch: {
      value: function (old, val) {
        this.newvalue = markdown.render(val);
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .edit
    position: relative
    margin: 30px auto
    width: 80%
    height: 450px
    .markdown-body
      height: 100%
</style>

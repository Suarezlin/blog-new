<template>
  <div class="header">
    <div class="item-wrapper">
        <span class="item home">
          <router-link to="/index">
            <span>HOME</span>
          </router-link>
      </span>
      <span class="item about-us">
          <router-link to="/about">
            <span>ABOUT US</span>
          </router-link>
      </span>
      <span class="item blog">
        <router-link to="/blog">
          <span>BLOG</span>
        </router-link>
      </span>
      <span class="item me"><span>ME</span></span>
      <span class="item contact"><span>CONTACT</span></span>
    </div>
  </div>
</template>
<script>
  export default {};
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .header
    height: 10px
    font-family: Verdana
    background: rgb(4, 14, 30)
    padding: 40px
    box-sizing: border-box
    .item-wrapper
      position: relative
      display: flex
      margin: 0 auto
      width: 800px
      color: rgba(255, 255, 255, 0.4)
      .item
        flex: 1
        font-size: 12px
        text-align: center
      .router-link-active
        padding-bottom: 3px
        color: #fff
        border-bottom: 2px solid red
</style>

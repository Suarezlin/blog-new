<template>
  <div class="content">
    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="banner">
          <img width="100%" src="./banner.png">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="intro">
          <div class="intro-title">欢迎来到 SuarezLin Blog</div>
          <div class="intro-content">
            一首伟大的诗篇象一座喷泉一样，总是喷出智慧和欢愉的水花<br>
            写作不是用白发而是用识见；写作如春蚕吐丝，呕心沥血。<br>
            写作的真正原因，并不在已成为作家的声言中，而存在于其青春时代的梦幻中。<br>
            写作这个职业，就是自找麻烦，自讨苦吃，其程度是你所想象不到的。<br>
            在这里，你可以写下你想说的所有的话，并分享给大家。<br>
            在这里，发现写作的乐趣
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="intro">
          <div class="intro-title">
            全新富文本写作系统
          </div>
          <div class="intro-content">
            <img src="./mark.png" width="100%">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="intro">
          <div class="intro-title">
            随时随地分享
          </div>
          <div class="intro-content">
            <img src="./wechat.png" width="100px">
            <img src="./weibo.png" width="100px">
            <img src="./facebook.png" width="100px">
          </div>
          <div class="intro-content">
            <img src="./qq.png" width="100px">
            <img src="./twitter.png" width="100px">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="intro">
          <div class="intro-title">
            开始写作吧
          </div>
          <div class="intro-content">
            <img src="./pen.png" width="160px">
          </div>
          <div class="intro-content">
            <span class="login-button">登录</span>
            <span class="sign-button">注册</span>
          </div>
          <div class="intro-content">
            <span class="usage-button">MarkDown 教程</span>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  import Swiper from '../../../node_modules/vue-awesome-swiper/swiper';
  import SwiperSlide from '../../../node_modules/vue-awesome-swiper/slide';
  export default {
    components: {
      SwiperSlide,
      Swiper
    },
    data() {
      return {
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 1,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          spaceBetween: 30,
          mousewheelControl: true,
          speed: 1000
        }
      };
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .content
    .swiper-pagination
      position: fixed
      right: 20px
      top: 400px
    .intro
      font-family: Times, "Times New Roman"
      color: rgba(0, 0, 0, 0.7)
      position: relative
      margin: 0 auto
      width: 50%
      .intro-title
        margin-top: 80px
        font-size: 30px
        text-align: center
        font-weight: 800
      .intro-content
        text-align: center
        margin-top: 10px
        font-size: 14px
        line-height: 50px
        .login-button
          display: inline-block
          margin-top: 40px
          width: 80px
          height: 35px
          font-size: 16px
          line-height: 35px
          border-radius: 5px
          color: #fff
          background: deepskyblue
          margin-right: 20px
        .sign-button
          display: inline-block
          margin-top: 40px
          width: 80px
          height: 35px
          font-size: 16px
          line-height: 35px
          border-radius: 5px
          color: #fff
          background: yellowgreen
        .usage-button
          font-family: Verdana
          display: inline-block
          margin-top: -10px
          width: 120px
          height: 35px
          font-size: 14px
          line-height: 35px
          border-radius: 5px
          color: #fff
          background: grey
        img
          margin-top: 30px
          border-radius: 10px
          padding-right: 50px
          &:last-child
            padding-right: 0px
</style>

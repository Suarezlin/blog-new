<template>
  <div class="blog">
    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="banner-wrapper">
          <img src="./banner.jpg" width="100%">
        </div>
      </swiper-slide>
      <swiper-slide
        :style="{backgroundImage:'url(http://i1.piimg.com/567571/53f2570617245a49.png)',backgroundSize:'100%'}">
        <div class="blog-wrapper">
          <div class="blog-title">MarkDown</div>
          <div class="blog-author">林子牛</div>
          <div class="blog-content">
            <h4>标题</h4>
            <pre class="hljs"><code># 一级标题 #\n## 二级标题 ##\n### 三级标题 ###\n#### 四级标题 ####\n##### 五级标题 #####\n###### 六级标题 ######\n</code></pre>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="blog-wrapper">
          I am blog
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="blog-wrapper">
          I am blog
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
  .blog
    .swiper-slide
      background-repeat: no-repeat
    .swiper-pagination
      position: fixed
      right: 20px
      top: 300px
    .blog-wrapper
      position: relative
      margin: 60px auto
      width: 60%
      height: 450px
      background: rgba(255, 255, 255, 0.8)
      border-radius: 10px
      backdrop-filter: blur(3px)
      color: #000
      padding: 20px 50px 20px 50px
      box-sizing: border-box
      overflow: hidden
      .blog-title
        font-weight: 300
        width: 100%
        text-align: center
        font-size: 20px
      .blog-author
        margin-top: 10px
        font-weight: 200
        width: 100%
        text-align: center
        font-size: 12px
      .blog-content
        margin-top: 20px
</style>

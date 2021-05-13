
<template>
  <div class="thumb-example">
    <!-- swiper1 -->
    <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
      <swiper-slide class="slide-1"><img src="../assets/test.jpg" /></swiper-slide>
      <swiper-slide class="slide-2"><img src="../assets/car1.png" /></swiper-slide>
      <swiper-slide class="slide-3"><img src="../assets/land2.jpg" /></swiper-slide>
      <swiper-slide class="slide-4"><img src="../assets/car2.png" /></swiper-slide>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-thumbs-gallery',
    title: 'Thumbs gallery with Two-way control',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOptionTop: {
          loop: true,
          loopedSlides: 5, // looped slides should be the same
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionThumbs: {
          loop: true,
          loopedSlides: 5, // looped slides should be the same
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.$swiper
        const swiperThumbs = this.$refs.swiperThumbs.$swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }
  }
</script>

<style lang="scss" scoped>
  .thumb-example {
    position: relative;
    top: 100px;
    height: 580px;
    background-color: black;
  }

  .swiper {
    .swiper-slide {
        position: relative;
      background-size: cover;
      background-position: center;

      &.slide-1 {
        background-image:url('../assets/test.jpg');
      }
      &.slide-2 {
        background-image:url('../assets/car1.png');
      }
      &.slide-3 {
        background-image:url('../assets/land2.jpg');
      }
      &.slide-4 {
        background-image:url('../assets/car2.png');
      }
    }

    &.gallery-top {
      height: 80%;
      width: 100%;
    }
    &.gallery-thumbs {
      height: 30%;
      box-sizing: border-box;
    }
    &.gallery-thumbs .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.7;
    }
    &.gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
  }
</style>
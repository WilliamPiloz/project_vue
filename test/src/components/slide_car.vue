<template>
  <div class="example-3d">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <swiper>
          <img src="../assets/car1.png" />
        </swiper>
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-3d-coverflow',
    title: '3D Coverflow effect',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    }
  }
</script>

<style>
  .example-3d {
    width: 100%;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper {
    height: 100%;
    width: 100%;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 450px;
    height: 450px;
    text-align: center;
    font-weight: bold;
    font-size: $font-size-huge * 2;
    background-color: #2C8DFB;
    background-position: center;
    background-size: cover;
    color: $white;
  }

  .swiper-pagination {
    /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: $white;
    }
  }
  .car {
    position: absolute;
    left: -10px;
  }
</style>
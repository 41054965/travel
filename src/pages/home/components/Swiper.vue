<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if= "showSwiper">
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="swiper-img"  :src="item.imgUrl" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name : "HomeSwiper",
  props : {
    swiperList : Array
  } ,
  computed:{
      showSwiper () {
      return this.swiperList.length
    }
  },
  data : function(){
    return{
      swiperOption : {
        pagination : '.swiper-pagination' ,
        loop : true
      },
      
      // swiperUrlList : [
      //     {
      //         id : '0000',
      //         imgUrl : 'https://imgs.qunarzz.com/vc/ad/7c/fe/037d1a400372ff57b0030d1d1c.jpg_92.jpg'
      //     },{
      //         id : '0001',
      //         imgUrl : 'https://imgs.qunarzz.com/piao/fusion/1807/79/e85e78bb69c7b602.jpg_890x330_37eda7df.jpg'
      //     },
      //     {
      //         id : '0002',
      //         imgUrl : 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20202/d5bdc04004f1527f706e1771cea3ee8e.JPEG_890x330_61d5bbe0.jpeg'
      //     },
      // ]
    }
}

}
</script>
<style lang="stylus" scoped>
  .wrapper >>>.swiper-pagination-bullet-active
    background : #fff !important  
  .wrapper
    overflow : hidden
    width : 100%
    height : 0
    padding-bottom :37.1%
    background : #fff
    .swiper-img
        width : 100%  
</style>

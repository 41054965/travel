<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id"> 
          <img class="item-img" :src="item.imgUrl" />
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <div class="button-info">
               <button class="item-button">查看详情</button>
               <div class="item-price">¥ {{item.price}}</div>
            </div>
          </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'HomeRecommend',
  props :{
    recommendList : Array
  }
  // data () {
  //   return{
  //     recommendList:[{
  //       id : '001' ,
  //       imgUrl : 'http://p0.meituan.net/200.0/deal/93b5e4a1ba3fbc84770ae260271953c382337.jpg@131_0_440_440a%7C267h_267w_2e_90Q' ,
  //       title : '老杭帮陆记',
  //       desc : '[西湖南山路/中国美术学院]4人套餐，提供免费WiFi',
  //       price: '2345.65'
  //     },{
  //       id : '002' ,
  //       imgUrl : 'https://imgs.qunarzz.com/p/tts6/1707/59/4bbf3de7843a3402.jpg_r_480x320x90_5ca20fc2.jpg' ,
  //       title : '老杭帮陆记2',
  //       desc : '[西湖南山路/中国美术学院]4人套餐，提供免费WiFi2',
  //       price: '3385.95'
  //     },{
  //       id : '003' ,
  //       imgUrl : 'https://imgs.qunarzz.com/vs_ceph_vs_tts/a2ba98f7-a7dc-4b86-be43-2802a1206879.jpg_r_480x320x90_3e4dbe86.jpg' ,
  //       title : '杭州-泰国 6天跟团游',
  //       desc : '泰国曼谷+芭提雅+金沙岛6天跟团游♔高档型住宿☆无自费餐餐全含',
  //       price: '3385.95'
  //     },{
  //       id : '004' ,
  //       imgUrl : 'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg' ,
  //       title : '杭州-泰国大城 6天跟团游',
  //       desc : '全民抗疫丨泰国曼谷+芭提雅5晚6日+网评四星住宿+月亮湾出海+赠特色夜秀表演',
  //       price: '3385.95'
  //     },{
  //       id : '005' ,
  //       imgUrl : 'https://img1.qunarzz.com/sight/p0/1704/71/71a3d23c24494bd2a3.water.jpg_256x160_d5bc3624.jpg' ,
  //       title : '南浔古镇',
  //       desc : '水乡古镇九十九，不如南浔走一走',
  //       price: '3385.95'
  //     }]
  //   }
  // }
  
}
</script>
<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top : .2rem
    line-height : .6rem
    background : #eee
    text-text-indent : .2rem
  .item
    overflow : hidden
    display : flex
    height : 1.9rem
    .item-img
      width : 1.7rem
      height : 1.7rem
      padding : .1rem
    .item-info
      flex : 1
      padding : .1rem
      min-width : 0
      .item-title
        line-height : .54rem
        font-size  : .28rem
        ellipsis()
      .item-desc
        line-height : .4rem
        color : #ccc
        ellipsis()
      .button-info
        width : 90%
        .item-button
          line-height : .44rem
          margin-top : .16rem
          background : #ff9300
          padding : 0 .2rem
          border-border-radius : .06rem
          color : #fff
        .item-price
          margin-top : .2rem
          float :right
          color : #ff7400
          font-weight : bold

</style>

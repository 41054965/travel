<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id"> 
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" />
          </div>
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
  name:'HomeWeekend',
  props : {
    weekendList : Array
  }
  // data () {
  //   return{
  //     recommendList:[{
  //       id : '001' ,
  //       imgUrl : '//imgs.qunarzz.com/vc/24/36/10/3fc94d042ae62de380581d4c98.jpg_92.jpg' ,
  //       title : '老杭帮陆记',
  //       desc : '[西湖南山路/中国美术学院]4人套餐，提供免费WiFi',
  //       price: '2345.65'
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
    line-height : .6rem
    background : #eee
    text-text-indent : .2rem
  .item-img-wrapper
    overflow : hidden
    height :0
    padding-bottom : 33.9%
    .item-img
      width : 100%
  .item-info
    flex : 1
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
      margin-left : .2rem
      .item-button
        line-height : .44rem
        margin-top : .16rem
        margin-buttom: .1rem
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

<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" />
                        <p class="icon-desc">{{item.desc}}</p>
                    </div>
                </div>
            </swiper-slide>
            
        </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeIcons' ,
    props : {
        iconList : Array
    },
    // data () {
    //     return {
    //         iconList:[{
    //             id : '001',
    //             imgUrl : 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
    //             desc : '机票预订'
    //         },{
    //             id : '002',
    //             imgUrl : 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
    //             desc : '热门景点'
    //         },{
    //             id : '003',
    //             imgUrl : 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
    //             desc : '火车票'
    //         },{
    //             id : '004',
    //             imgUrl : 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
    //             desc : '度假村'
    //         },{
    //             id : '005',
    //             imgUrl : 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
    //             desc : '机票预订'
    //         },{
    //             id : '006',
    //             imgUrl : 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
    //             desc : '热门景点'
    //         },{
    //             id : '007',
    //             imgUrl : 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
    //             desc : '火车票'
    //         },{
    //             id : '008',
    //             imgUrl : 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
    //             desc : '度假村'
    //         },{
    //             id : '009',
    //             imgUrl : 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
    //             desc : '酒店名宿'
    //         }]
    //     }
    // },
    computed : {
        pages () {
            const pages = []
            this.iconList.forEach((item,index)=> {
                const page = Math.floor( index / 8)
                if (!pages[page]){
                     pages[page] = []
                }
                 pages[page].push(item)
            })
        return pages 
        }
    
    }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height : 0
    padding-bottom : 50%
  .icons
    margin-top : .1rem
  .icon
    position : relative
    overflow : hidden
    float : left
    width : 25% 
    height : 0
    padding-bottom : 25%
    //background : red
    .icon-img
      position : absolute
      top : 0
      left : 0
      right : 0
      bottom : .44rem
      box-sizing : border-box
      padding : .1rem
      // background : blue
      .icon-img-content
        display :block
        margin : 0 auto
        height : 100%
      .icon-desc
        flex : left 
        position : absolute
        left : 0
        right : 0
        buttom : 0
        height : .44rem
        line-height : .44rem
        text-align : center
        color: $darkTextColor
        ellipsis()


</style>


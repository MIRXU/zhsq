<template>
  <div class="leftinfo">
    <div class="ybss">
         <div class="persionnum">
                    <p class="persionnum-title" data-click="personnelManger/personnel/personnelTable.html"><i class="blue homePage-weight">人员统计:&nbsp;&nbsp;&nbsp;&nbsp;</i><em></em></p>
                    <p><i>实有人数</i>
                        <span style="width:50%"></span><em>4555人</em>
                    </p>
                    <p><i>在册人数</i>
                        <span style="width:50%"></span><em>4555人</em>
                    </p>
                    <p><i>特殊人群</i>
                        <span style="width:10%"></span><em>2人</em>
                    </p>
                    <p style="padding-bottom: 5px"><i>重点人群</i>
                        <span style="width:5%"></span><em>1人</em>
                    </p>
                </div>
                <div class="housesnum">
                    <p  class="housesnum-title" data-click="personnelManger/personnel/Housingltable.html"><i class="blue homePage-weight">房屋统计:&nbsp;&nbsp;&nbsp;&nbsp;</i><em></em></p>
                    <p>
                        <i>自住</i>
                        <span style="width:50%"></span><em>3888套</em>
                    </p>
                    <p>
                        <i>出租</i>
                        <span style="width:34%"></span><em>5455套</em>
                    </p>
                    <p>
                        <i>空置</i>
                        <span style="width:45%"></span><em>45套</em>
                    </p>

                </div>
                <div class="carsnum">
                    <p  class="carsnum-title" data-click="personnelManger/personnel/vehicletable.html"><i class="blue homePage-weight">车辆统计:&nbsp;&nbsp;&nbsp;&nbsp;</i><em></em></p>
                    <p><i>实有车辆</i>
                        <span style="width:50%"></span><em>156辆</em>
                    </p>
                    <p><i>在册车辆</i>
                        <span style="width:45%"></span><em>45辆</em>
                    </p>
                    <p><i>本地车辆</i>
                        <span style="width:6%"></span><em>4辆</em>
                    </p>
                    <p ><i>外地车辆</i>
                        <span style="width:34%"></span><em>15辆</em>
                    </p>
                    <!--<p><i>黑名单车辆</i>-->
                    <!--<span></span><em>414万人</em>-->
                    <!--</p>-->
                </div>
    </div>
      <div class="apps">
               <div id="bigScreen-app-eachView" style="height:245px">
                    <div class="big-screen-left-appechart-title"><span>APP注册量</span></div>
                </div>
                <div style="width: 96%;height: 3px;margin-bottom:15px;background-color: #214d8f; box-shadow: 0 0 25px #214d91;"></div>
                <div id="bigScreen-cjj-eachView" style="height:225px">
                    <div class="big-screen-left-appechart-title"><span>采集机录入人数</span></div>
                </div>
      </div>
  </div>
</template>

<script>
  import {renderinfo,render_cjj_info} from '@/chart/apps'
export default {
  name: 'LeftInfo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:function(){
    let apps=[{
      "outheng": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      "outzong": [1, 0, 2, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 5, 0, 0, 0, 6, 0, 0, 0, 0]
    }]
    let cj= [{
		"outheng": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
		"outzong": [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }]
    renderinfo(apps,"bigScreen-app-eachView")
    render_cjj_info(cj,"bigScreen-cjj-eachView")
  },
  methods:{
   
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.leftinfo{
  color: white;
}
.ybss{
  background: url("../../assets/images/bigscreen_ybss.png") no-repeat;
  height: 439px;
  background-size:100% 100%;
}
.apps{
     background: url("../../assets/images/bigscreen_app.png") no-repeat;
     height: 517px;
     margin-top: 10px;
     padding-top: 20px;
     background-size:100% 100%;
}
.persionnum{
  padding-top: 15px;
}
.persionnum-title{
  font-size: 12px;

}
.homePage-weight{
  font-weight: bold;
}
.persionnum>p,.carsnum>p,.housesnum>p{
            margin-left: 40px; margin-top: 5px;

}
.persionnum p:not(:first-child)>i,.carsnum p:not(:first-child)>i,.housesnum p:not(:first-child)>i{
     width: 80px;
    text-align: right;
    display: inline-block;
}
.persionnum>p>span,.housesnum>p>span,.carsnum>p>span{
            height: 12px;
            border-radius: 10px;
            display: inline-block;
            margin-left: 10px;
}
.persionnum>p>em, .housesnum>p>em, .carsnum>p>em{
            color: #FFFFFF;
            margin-left: 10px;
}
.persionnum>p>span{
            background: -webkit-linear-gradient(left, #69CBE8 , #2B64D7); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(right, #69CBE8 , #2B64D7); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(right, #69CBE8 , #2B64D7); /* Firefox 3.6 - 15 */
            background: linear-gradient(to right, #69CBE8 , #2B64D7); /* 标准的语法 */
}
.housesnum>p>span{
            background: -webkit-linear-gradient(left, #D5C943 , #DC8848); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(right, #D5C943 ,#DC8848); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(right, #D5C943 , #DC8848); /* Firefox 3.6 - 15 */
            background: linear-gradient(to right,#D5C943 , #DC8848); /* 标准的语法 */
}
.carsnum>p>span{
            background: -webkit-linear-gradient(left,#52CB62 , #238F18); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(right,#52CB62 ,#238F18); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(right,#52CB62 ,#238F18); /* Firefox 3.6 - 15 */
            background: linear-gradient(to right,#52CB62 ,#238F18); /* 标准的语法 */
}
  .big-screen-left-appechart-title>span{
            color: #00E6D9;
            font-size: 14px;
            line-height: 30px;
            margin-top: 10px;
            /*background: #88ffffff;*/

        }
        .big-screen-left-appechart-title{
            border: 0.5px solid #3772A5;
            border-radius: 5px;
            width: 113px;
            height: 30px;
            margin-left: 20px;
            text-align: center;
            margin-bottom: 10px;
            background: -webkit-radial-gradient(#153579, #1D4887,#3A77A8 ); /* Safari 5.1 - 6.0 */
            background: -o-radial-gradient(#153579, #1D4887,#3A77A8); /* Opera 11.6 - 12.0 */
            background: -moz-radial-gradient(#153579, #1D4887,#3A77A8); /* Firefox 3.6 - 15 */
            background: radial-gradient(#153579, #1D4887,#3A77A8); /* 标准的语法 */
        }
</style>

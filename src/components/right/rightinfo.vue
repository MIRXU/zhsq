<template>
  <div class="rightinfo">
      <div class="equipment">
         <el-row :gutter="20" style="margin-left: 0px; margin-right: 0px;">
          <el-col :span="12" style="padding-left: 0px;padding-right: 0px;">
             <div id="media-equipment-eachView" style="height:210px;"></div>
          </el-col>
          <el-col :span="12" style="padding-left: 0px;padding-right: -20px;">
             <div id="security-equipment-eachView" style="height: 210px;"></div>
          </el-col>
        </el-row> 
      </div>
      <div class="peopleinfo">
                <!-- <div class="big-screen-left-appechart-title"><span>人员分类</span></div> -->
                <div id="bigScreen-floornum-eachView" style="height:220px"></div>
                <div style="width: 96%;height: 3px;margin-bottom:10px;background-color: #214d8f;box-shadow: 0 0 25px #214d91;"></div>
                <div id="bigScreen-mj-eachView" style="height:240px">
                    <div class="big-screen-left-appechart-title"><span>门禁人员出入</span></div>
                </div>
                <div style="width: 96%;height: 3px;margin-bottom:10px;background-color: #214d8f;box-shadow: 0 0 25px #214d91;"></div>
                <div id="bigScreen-bjnum-eachView" style="height:248px">
                    <div class="big-screen-left-appechart-title"><span>报警次数</span></div>
                </div>
      </div>
  </div>
</template>

<script>
  import {reder_media,reder_security} from '@/chart/equipment'
  import {render_floornum_info,render_mj_info,render_bjnum_info} from '@/chart/peopleinfo'
export default {
  name: 'RightInfo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    
  },
  mounted:function(){
    let meida=	[{
      	"name": "室内屏",
			  "value": 1
		
		}, {
			
      "name": "室外屏",
      "value": 2
		}, {
      "name": "采集机",
			"value": 1
			
    }]
    let security=[{
		
      "name": "人脸识别",
      	"value": 4,
		}, {
      	"name": "巡检设备",
			"value": 36,
		
		}, {
      	"name": "水压设备",
			"value": 0,
		
		}, {
      	"name": "烟雾设备",
			"value": 42,
		
		}, {
      	"name": "电气设备",
			"value": 57,
		
		}, {
      	"name": "监控设备",
			"value": 125,
		
		}, {
      	"name": "门禁设备",
			"value": 8,
		
		}]
    reder_media(meida,"media-equipment-eachView");
    reder_security(security,"security-equipment-eachView");
    let peoplenum=[]
    render_floornum_info(peoplenum,'bigScreen-floornum-eachView')
    let mj=[{
        "outheng": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        "outzong": [35, 29, 36, 26, 20, 20, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
      }, {
        "inzong": [40, 29, 59, 49, 32, 24, 0, 0, 0, 0, 0, 3, 0, 0, 0, 32, 2, 0, 0, 0, 0, 0, 33, 0, 1, 0, 0, 7, 78, 0, 0]
      }, {
        "outzongCrad": [1, 0, 3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        "inzongCard": [3, 1, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }]
    render_mj_info(mj,'bigScreen-mj-eachView')
    let bjnum=[{
        "insideheng": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        "insidezong": [0, 0, 0, 2, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0,6, 0, 0, 7, 0, 0, 0, 7, 0, 0]
      }, {
        "outzong": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 4, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 0,6, 0, 0]
      }, {
        "appzong": [0, 0,2, 3, 0, 4, 0, 0, 0, 0, 0,5, 0, 0, 0, 0, 0,6, 0, 0, 0, 0, 7, 0, 0, 8, 0, 0,9, 0, 0]
      }]
    render_bjnum_info(bjnum,'bigScreen-bjnum-eachView')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rightinfo{
 color: white;
}
.equipment{
  background: url("../../assets/images/bigscreen_equipment.png") no-repeat;
  height: 200px;
  background-size:100% 100%;
}
.peopleinfo{
   background: url("../../assets/images/bigscreen_tjnum.png") no-repeat;
   height:760px;
   margin-top: 10px;
   padding-top: 10px;
   background-size:100% 100%;
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

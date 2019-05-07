<template>
  <div class="middleinfo">
     <div class="floornum">
          <span class="blue">小区数量</span>
          <ul>
            <li><span>0</span></li>
            <li><span>0</span></li>
            <li><span>0</span></li>
            <li><span>0</span></li>
            <li><span>0</span></li>
            <li><span>0</span></li>
            <li><span>0</span></li>
            <li><span>0</span></li>
            <li><span>0</span></li>
          </ul>
          <i>个</i>
     </div>
     <div class="maps" id="container"></div>
     <div class="register">
         <el-row :gutter="20">
          <el-col :span="12" class="system-users-num">
                          <ul>
                                <li>
                                    <img src="../../assets/images/register_users.png" alt=""/>
                                </li>
                                <li style="margin-left: 10px">
                                    <div class="system-users-num">
                                        <p>注册总量</p>
                                        <span>554</span><em>位</em>
                                    </div>
                                </li>
                            </ul>
          </el-col>
          <el-col :span="12" class="system-users-now">
             <ul>
                                <li>
                                    <img src="../../assets/images/register_users.png" alt=""/>
                                </li>
                                <li style="margin-left: 10px">
                                    <div class="system-users-num">
                                        <p>注册总量</p>
                                        <span>32</span><em>位</em>
                                    </div>
                                </li>
                            </ul>
          </el-col>
        </el-row>     
  
     </div>
    <div class="vedio">
         <el-row :gutter="10">
          <el-col :span="12" class="vedio1">
                     <img src="../../assets/images/vedio1.jpg" alt="">
          </el-col>
          <el-col :span="12" class="vedio2">
        <img src="../../assets/images/vedio2.jpg" alt="">
          </el-col>
        </el-row>     
  
     </div>
  </div>
</template>

<script>
export default {
  name: 'MiddleInfo',
  data () {
    return {
      basicdata: {},
    }
  },
  mounted:function(){
  
    // this.getData()
    let params1={
        "commName": "和平春天",
        "address": "陕西省西安市未央区三桥街道红光路社区和平村和平大道路西",
        "longitude": "108.823256",
        "latitude": "34.255933",
        "commid": "610112002",
        "communityCode": "610112002008",
        "commCode": "6101120002",
        "leftUpLongitude": "108.821668",
        "rightUpLongitude": "108.825123",
        "leftDownLongitude": "108.821722",
        "rightDownLongitude": "108.825225",
        "leftUpLatitude": "34.256984",
        "rightUpLatitude": "34.256949",
        "leftDownLatitude": "34.254812",
        "rightDownLatitude": "34.254945"
    }
    let params2= [{
            "buildNo": "1#",
            "longitude": "108.823283",
            "latitude": "34.256975",
            "houseCount": "192",
            "memberCount": "273"
          }, {
            "buildNo": "3#",
            "longitude": "108.823353",
            "latitude": "34.256257",
            "houseCount": "96",
            "memberCount": "125"
          }, {
            "buildNo": "5#",
            "longitude": "108.824442",
            "latitude": "34.256399",
            "houseCount": "208",
            "memberCount": "329"
          }, {
            "buildNo": "6#",
            "longitude": "108.823347",
            "latitude": "34.255459",
            "houseCount": "96",
            "memberCount": "137"
          }, {
            "buildNo": "7#",
            "longitude": "108.824527",
            "latitude": "34.255752",
            "houseCount": "208",
            "memberCount": "383"
          }, {
            "buildNo": "8#",
            "longitude": "108.823208",
            "latitude": "34.255131",
            "houseCount": "208",
            "memberCount": "266"
          }, {
            "buildNo": "9#",
            "longitude": "108.824383",
            "latitude": "34.255109",
            "houseCount": "260",
            "memberCount": "354"
          }, {
            "buildNo": "11#",
            "longitude": "108.822205",
            "latitude": "34.256944",
            "houseCount": "192",
            "memberCount": "328"
          }, {
            "buildNo": "12#",
            "longitude": "108.822269",
            "latitude": "34.256386",
            "houseCount": "208",
            "memberCount": "376"
          }, {
            "buildNo": "18#",
            "longitude": "108.822264",
            "latitude": "34.255685",
            "houseCount": "208",
            "memberCount": "307"
          }, {
            "buildNo": "20#",
            "longitude": "108.822194",
            "latitude": "34.255162",
            "houseCount": "208",
            "memberCount": "295"
          }]
           this.renderMap(params1,params2)
  },
  methods:{
     renderMap: function (res,ress) {
          let path=[]
          path.push([res.leftUpLongitude,res.leftUpLatitude])
          path.push([res.rightUpLongitude,res.rightUpLatitude])
          path.push([res.rightDownLongitude,res.rightDownLatitude])
          path.push([res.leftDownLongitude,res.leftDownLatitude])
          //坐标把小区围起来
          //标签每栋楼
          var map = new AMap.Map("container", {
            zoom: 18,
            pitch: 50,
            showIndoorMap: true,
            showLabel: true,
            mapStyle: 'amap://styles/blue',
            center: [res.longitude,res.latitude],
            features: ['bg','building'],
            viewMode:'3D',//开启3D视图,默认为关闭
          });
        
          ress.forEach((item)=>{
            var marker = new AMap.Marker({
              position: [item.longitude,item.latitude],
              content:"<div  style='color: #FFFFFF;width: 100px'>"+item.buildNo+"</div>",
            });
            //触发每栋楼的事件
            marker.on('mouseover', function(e){
              marker.setLabel({
                offset: new AMap.Pixel(20, -50),
                content:  '<div style="white-space:nowrap;margin:10px;color:#666"><ul><li><span>人数：'+item.memberCount+'</span></li><li><span>房屋：'+item.houseCount+'</span></li></ul></div>'
              });
            });
            marker.on('mouseout',function(){
              marker.setLabel({
                offset: new AMap.Pixel(0, 0),
                content: ""
              });
            });
            map.add(marker);
          })

          var buildingLayer = new AMap.Buildings({zIndex: 130, merge: false, sort: false, zooms: [17, 20]});
          var options =
          {
            hideWithoutStyle: true,//是否隐藏设定区域外的楼块
            areas: [
              {
                color1: 'ff99ff00',
                color2: 'ff123A51',
                path: path
              }
            ]
          };
          buildingLayer.setStyle(options); //此配色优先级高于自定义mapStyle

          new AMap.Polygon({
            map: map,
            fillOpacity:0.4,
            path: path,
            strokeColor: "#238CFB", //线颜色
            strokeOpacity: 1, //线透明度
            strokeWeight: 2,    //线宽
            strokeStyle: "solid",
            fillColor: "#2B90FB", //填充色
            fillOpacity: 0.2//填充透明度
          })

        },
        getData:function(){

          this.$http.get('/static/data/datas.json')
            .then((response)=> {
               this.renderMap(response.data.params1,response.data.params2)
            })
            .catch((error)=>{
              console.log(error);
            });
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.middleinfo{
    color: white;
}
.floornum{
    background: url("../../assets/images/bigscreen_floornum.png") no-repeat;
    background-size:100% 100%;
    height: 80px;
}
.maps{
  height: 500px;
}
.register{
     background: url("../../assets/images/bigscreen_register.png") no-repeat;
    background-size:100% 100%;
    height: 80px;
}
@font-face {
            font-family: "FontAwesome111";
            font-style: normal;
            font-weight: normal;
            src: url("../../assets/fonts/iquartz-medium.otf") format("otf");
            src: url('../../assets/fonts/iquartz-medium.otf?#iefix') format('embedded-opentype'),
            url('../../assets/fonts/iquartz-medium-webfont.woff') format('woff2'),
            url('../../assets/fonts/iquartz-medium-webfont.woff2') format('woff');
        }
 .floornum>span{
            height:80px;
            margin-left: 30px;
            line-height: 80px;
            float: left;
            margin-right: 40px;
            font-size: 16px;

        }
  .floornum>ul{
           margin-left: 40px;
        }
.floornum i{
            color: #FFFFFF;
            font-size: 30px;
        }
 .floornum>ul>li>span{
            color: #FFFFFF;
            font-size: 40px;
            font-family: "FontAwesome111";

        }
        .floornum>ul>li>span{
            line-height: 50px;
        }
        .floornum i{
            line-height: 80px;
            margin-left: 15px;
        }
        .floornum>ul>li{
            float: left;
            display: inline-block;
            /*border: 1px solid #FFFFFF;*/
            width: 25px;
            height: 50px;
            margin-top: 15px;
            margin-left: 18px;
            text-align: center;
        }     
.register .system-users-num,.register .system-users-now{
            float: left;
        }
.system-users-num ul li,.system-users-now ul li
{
            float: left;
            color: #FFFFFF;
}
.system-users-now p,.system-users-num p
{
            font-size: 10px;
            margin-top: 10px;
}
.system-users-now span,.system-users-num span
{
            font-size: 30px;

}    
.maps{
  margin: 10px 0;
}     
.vedio1 img,.vedio2 img{
  margin-top: 10px;
height: 281px;
width: 100%;
}       
</style>

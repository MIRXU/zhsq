<template>
  <div class="header">
       <el-row>
          <el-col :span="8"><div class="date"><p>{{datainfo}}</p></div></el-col>
          <el-col :span="8">
            <div class="logo">
                <img src="../../assets/images/tubiao.png" alt="智慧社区" style="width:45px; margin-top: -26px;height: 45px;margin-right: 10px">
                <p class="big-screen-titlename">
                    <a href="javascript:void(0)">智慧社区警务系统</a>
                    <a href="javascript:void(0)">INTELLIGENT    COMMUNIYT    MANAGE    PLATFORM</a>
                </p>
            </div>
        </el-col>
          <el-col :span="8">
            <div class="basicinfo">
              
              <ul>
                  <li>
                      <el-dropdown>
                        <span class="el-dropdown-link blue">
                            和平春天<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>和平春天</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>
                  </li>
                  <li><a href="#" class="blue" @click="updatapwd()">hpct<i class="icon-tuichu"><img src="../../assets/images/users.png" alt="" style="width:25px;height:25px;vertical-align: middle;margin-left:5px"></i></a></li>
                  <li><a href="#" class="blue" @click="back()">退出<i class="icon-tuichu"><img src="../../assets/images/back.png" alt="" style="width:25px;height:25px;vertical-align: middle;margin-left:5px"></i></a></li>
              </ul>
           </div>
           </el-col>
        </el-row>    
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      datainfo:''
    }
  },
  created:function(){
    this.get_newtime()
  },
  methods:{
    //获取当前时间
    get_newtime:function(){
        setInterval(()=>{
            var d = new Date();
            var y = d.getFullYear();
            var m = d.getMonth()+1;
            var ds = d.getDate();
            if (ds <=9){
                ds ='0'+ds;
            }
            var h = d.getHours();
            if(h <=9){
                h = '0'+h;
            }
            var f = d.getMinutes();
            if(f <=9){
                f = '0'+f;
            }
            var s = d.getSeconds();
            if(s <=9){
                s = '0'+s;
            }
            var days = d.getDay();
            switch(days){
                case 1:
                    days='星期一';
                    break;
                case 2:
                    days='星期二';
                    break;
                case 3:
                    days='星期三';
                    break;
                case 4:
                    days='星期四';
                    break;
                case 5:
                    days='星期五';
                    break;
                case 6:
                    days='星期六';
                    break;
                case 0:
                    days='星期日';
                    break;

            }
            this.datainfo=y+'-'+m+'-'+ds+' '+h+':'+f+':'+s+' '+days
        },1000)
    },
    back:function(){
        
    this.$confirm('即将退出系统, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '继续使用'
          });          
        });

    },
    updatapwd:function(){
        this.$prompt('请输入新密码', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
     
        }).then(({ value }) => {
       
        }).catch(() => {
                
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header{
    color:white;
    padding-left: 10px;
}
.date{
    line-height: 48px;
    color: #00E6D9;
}
.logo{
            text-align: center;
            margin-top: 10px;
}

.logo img,.logo p{
            display: inline-block;
}
.big-screen-titlename>a{
            color: #FFFFFF;
            display:block;
            font-weight: 400;
            font-size: 14px;
}
.big-screen-titlename>a:first-child{
            font-size: 18px;
            text-align: center;
}
.basicinfo{
 text-align: right;
 padding-right: 10px;

}
.basicinfo ul{
    float: right;
    line-height: 50px;
}
.basicinfo ul>li{
    float: left;
    padding-left: 15px;
   
}
</style>

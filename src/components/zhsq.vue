<template>
  <div class="zhsq">
      <Header/>
      <div class="body">
        <el-row :gutter="20">
          <el-col :span="8"><Left/></el-col>
          <el-col :span="8"><Middle/></el-col>
          <el-col :span="8"><Right/></el-col>
        </el-row>      
      </div>
       
  </div>
</template>

<script>
import Header from '@/components/header/header'
import Left from '@/components/left/leftinfo'
import Middle from '@/components/middle/middleinfo'
import Right from '@/components/right/rightinfo'
export default {
  name: 'Zhsq',
  components:{
    Header,
    Left,
    Middle,
    Right
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body{
  padding-top: 10px;
  margin:0 20px;
}
.zhsq{
    background: url("../assets/images/bigscreen_bg.jpg") no-repeat;
    width: 100%;
    background-size:100% 100%;
}
</style>

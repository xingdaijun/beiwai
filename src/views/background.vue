<template>
  <div class="background">
      <fix-right></fix-right>
    <div class="b-content" style="text-align:left" v-html="info.newCon">
    </div>
     
  </div>
</template>
<script>
import fixRight from '../components/fix'
import footer11 from '../components/footer'
import { getLiaojie } from '@/request/api';// 导入我们的api接口 获取背景内容

export default {
  name: 'dynamic',
  components: {
    fixRight,footer11,getLiaojie
  },
  data(){
    return{
      info:"",
    }
  },
  methods:{
    getInfo(){
        let obj={
        funcId:8
        }
        getLiaojie(obj).then(res => {
            this.info=JSON.parse(res.data);
            console.log(this.info);
        })
    },
  },
  created(){
    this.getInfo()
  }
}
</script>
<style lang="less">
  .background{
    width: 100%;
    height: 100%;
    background:rgba(247,247,247,1);
    padding-top:45px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    .b-content{
      width:1200px;
      margin:40px auto;
      background:rgba(255,255,255,1);
      padding:45px; 
    }
  }
</style>
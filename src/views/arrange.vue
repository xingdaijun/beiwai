<template>
  <div class="arrange">
      <fix-right></fix-right>
    <div class="a-content">
      <div class="left">
        <ul>
          <li @click="change(50)" :class="num==50?'active':''">国才考试</li>
          <li @click="change(51)" :class="num==51?'active':''">四川新三级考试</li>
        </ul>
      </div>
      <div class="right">
        <div class="detail" v-html="info.newCon">
        </div>
      </div>
    </div>
     
  </div>
</template>
<script>
import fixRight from '../components/fix'
import footer11 from '../components/footer'
import { getLiaojie } from '@/request/api';// 导入我们的api接口 获取背景内容
import { getdownType } from '@/request/api';// 导入我们的api接口 获取背景内容

export default {
    name: 'dynamic',
  components: {
    fixRight,footer11,getLiaojie,getdownType
  },
  data(){
    return{
      num:50,
      info:"",
    }
  },
  methods:{
    getInfo(){
        let obj={
        funcId:this.num
        }
        getLiaojie(obj).then(res => {
            this.info=JSON.parse(res.data);
            console.log(this.info);
        })
    },
    change(n){
        this.num=n;
        this.getInfo();
    }
  },
  created(){
      this.getInfo();
      if(this.$route.query.num==1){
        this.num=51
      }
  }
}
</script>
<style lang="less">
  .arrange{
    width: 100%;
    height: 100%;
    background:rgba(247,247,247,1);
    .a-content{
      width:1200px;
      margin:0 auto;
      display: flex;
      justify-content: space-between;
      padding-top:85px;
      font-family:MicrosoftYaHei;
      font-weight:400;
      .left{
        width:160px;
        background:rgba(255,255,255,1);
        position: fixed;
        top:191px;
        ul{
          width: 100%;
          list-style: none;
          li{
            font-size: 18px;
            width:160px;
            height:49px;
            line-height: 49px;
            cursor: pointer;
            transition-duration: 0.2s;
            text-align: left;
            padding-left: 20px;
          }
          li:hover{
            background:rgba(217,42,55,1);
            color:#fff;
          }
          .small{
            width: 100%;
            height: 39px;
            background:rgba(253,253,253,1);
            line-height: 39px;
            font-size: 15px;
            border-bottom: 1px solid rgba(238,238,238,1);
          } 
          .active{
            background:rgba(217,42,55,1);
            color:#fff;
          }
          
        }

      }
      .right{
        width:988px;
        margin-left: 200px;
        .detail{
          width:100%;
          background:rgba(255,255,255,1);
          text-align: left;
          padding:30px;
          font-size:16px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(102,102,102,1);
          line-height:36px;
          margin-bottom: 30px;
          .title1{
            font-size:22px;
            font-family:MicrosoftYaHei;
            font-weight:400;
            color:rgba(51,51,51,1);
            margin-bottom: 30px;
          }
          .info{
            text-indent:30px
          }
          
        }
      }
    }
  }
</style>
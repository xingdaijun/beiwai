<template>
  <div class="achievement">
    <fix-right></fix-right>
    <div class="examination">
      <div class="item">
        <div class="title">国际人才英语考试</div>
        <img src="../assets/test.png" alt="">
        <div class="btn" @click="details(1)">查询成绩</div>
      </div>
      <div class="item">
        <div class="title">四川省大学英语新三级考试</div>
        <img src="../assets/test.png" alt="">
        <div class="btn"  @click="details(2)">查询成绩</div>
      </div>
    </div>
      
  </div>
</template>
<script>
import fixRight from '../components/fix'
import footer11 from '../components/footer'
import { getchengji } from '@/request/api';// 导入我们的api接口 查询成绩

export default {
  name: 'dynamic',
  components: {
    fixRight,footer11,getchengji
  },
  data(){
    return{
      name:"",//姓名
      idCard:"",//证件号码
      Gnum:"",
      Xnum:"",
    }
  },
  methods:{
    getparams(){
      this.name = sessionStorage.getItem("name")
      this.idCard = sessionStorage.getItem("num")
      this.Gnum = sessionStorage.getItem("Gnum")
      this.Xnum = sessionStorage.getItem("Xnum")
      console.log('name', this.name);
      console.log('idCard', this.idCard);
    },

    details(type){
      let n=type;
      if(n==1&&this.Gnum==0){
        this.$message.error('您没有国才考试的记录');
        return;
      }
      if(n==2&&this.Xnum==0){
        this.$message.error('您没有新三级考试的记录');
        return;
      }
      this.$router.push({
          path:'/scoreReportList',
          query:{
            type:n
          }
      })
    },
  },
  created(){
    this.getparams();
    // this.getInfo();
  }
}
</script>
<style lang="less">
  .achievement{
    width:100%;
    height: 100%;
    background:rgba(247,247,247,1);
    padding-top:205px;
    position: absolute;
    margin-top:-105px;
    z-index: 1;
    .examination{
      width: 1200px;
      display: flex;
      justify-content: space-between;
      margin:0 auto;
      .item{
        width:585px;
        height:270px;
        background:rgba(255,255,255,1);
        .title{
          font-size:22px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(51,51,51,1);
          margin:0 auto;
          margin-top:34px;
          margin-bottom: 20px;
        }
        .btn{
          width:110px;
          height:37px;
          background:rgba(222,42,48,1);
          border-radius:5px;
          margin:20px auto;
          text-align: center;
          line-height: 37px;
          font-size:16px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(255,255,255,1);
          cursor: pointer;
        }
        .btn:active{
          background:#c8141a;
        }
      }
    }
    .footer{
      margin-top:50px;
    }
  }
</style>

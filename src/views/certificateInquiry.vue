<template>
  <div class="certificateInquiry">
    <fix-right></fix-right>
    <div class="bg">
      <div class="kuang">
        <div class="title">考试证书查验</div>
        <input type="text" class="name" placeholder="请输入您的姓名" v-model="name">
        <input type="text" class="name" placeholder="请输入您的证件号码" v-model="idnumber">
        <div class="alert">*证件号码与报名时所填写号码一致</div>
        <input type="text" class="name" placeholder="请输入您的证书管理号" v-model="certificatenumber">
        <div class="zu">
          <input type="text" placeholder="验证码" v-model="code">
          <div class="code">
            <imgcode :identifyCode="identifyCode"></imgcode>
          </div>
          <div class="change" @click="huan">
            <img src="../assets/weibiaoti--.png" alt="">
            <span >换一换</span>
          </div>
        </div>
        <div class="btn" @click="getDate">查询</div>
        
      </div>
       
    </div>
    
  </div>
</template>
<script>
import fixRight from '../components/fix'
import footer11 from '../components/footer'
import imgcode from '../components/identify'

import { queryZheng } from '@/request/api';// 导入我们的api接口 查询证书

export default {
  name: 'dynamic',
  components: {
    fixRight,footer11,queryZheng,imgcode
  },
  data(){
    return{
       identifyCodes:"1234567890",
      identifyCode:"",//图片
      list:[1,2,3,4],
      name:"",
      idnumber:"",
      certificatenumber:"",
      code:"",//用户填写的验证码
    }
  },
  methods:{
    huan(){
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    getDate(){
      if(this.name==""){
        this.$message.error('姓名不能为空');
        return;
      }
      if(this.idnumber==""){
        this.$message.error('证件号码不能为空');
        return;
      }
      if(this.certificatenumber==""){
        this.$message.error('证书编号不能为空');
        return;
      }
      if(this.code!=this.identifyCode){
        this.$message.error('验证码不正确');
        return;
      }
      queryZheng(
        {
          "namezh":this.name,
          "idnumber":this.idnumber,
          "certificatenumber":this.certificatenumber
        }
      ).then(res=>{
        let info=res.data;
        if(info.length==0){
          this.$message.error('考试证书不存在，请检查');
        }else{
          sessionStorage.setItem("name",res.data[0].namezh);
          sessionStorage.setItem("idnumber",res.data[0].idnumber);
          sessionStorage.setItem("certificatenumber",res.data[0].certificatenumber);//国才数量
          this.$router.push({
              path:`/certificate?isQuery=${0}`,
          })
        }
      })
    },
    //验证码相关
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    }
  },
  created(){
  },
  mounted(){
     this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  }
}
</script>
<style lang="less">
  .certificateInquiry{
    width: 100%;
    height: 100%;
    background:rgba(238,234,223,0.15);
    .bg{
      width: 100%;
      height: 100%;
      background:url("../assets/zu226.png") no-repeat;
      background-size:100% 100%; 
      position: absolute;
      top:0px;
      .kuang{
        width:402px;
        height:432px;
        position: absolute;
        left:50%;
        top:220px;
        margin-left:-201px;
        font-family:MicrosoftYaHei;
        font-weight:400;
        .title{
          width:142px;
          height:22px;
          font-size:22px;

          color:#fff;
          margin:50px auto;
          margin-bottom: 29px;
        }
        input{
          width:300px;
          height:40px;
          border:1px solid rgba(204,204,204,1);
          border-radius:5px 5px 5px 5px;
          padding-left: 16px;
          margin-bottom: 14px;
          outline: none;
          color:#666666;
          font-size: 14px;
        }
        .alert{
          width:189px;
          height:12px;
          font-size:12px;
          color:#FFFFFF;
          line-height:32px;
          margin-left:60px;
          margin-top:-14px;
          margin-bottom: 20px;
        }
        .zu{
          width:300px;
          display: flex;
          align-items: center;
          margin:0 auto;
          img{
            margin:0px;
          }
          .code{
            margin-left:15px;
          }
          input{
            width:120px;
            margin:0px;
          }
          .code{
            width:79px;
            height:28px;
            margin-left:15px;
          }
          .change{
            width: 80px;
            height: 15px;
            display: flex;
            align-items: center;
            font-size:12px;
            color:#FEFEFF;;
            margin-left: 20px;
            cursor: pointer;
            img{
              width:17px;
              height:15px;
              margin-right: 3px;
            }
          }
        }
        .btn{
          width:300px;
          height:37px;
          background:#1970C0;
          border-radius:5px;
          line-height: 37px;
          text-align: center;
          margin:30px auto;
          font-size:16px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(255,255,255,1);
          cursor: pointer;
        }
      }
    }
    .footer{
      position: absolute;
      bottom: -100px;
    }
  }
  
</style>
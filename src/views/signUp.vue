<template>
  <div class="signUp">
    <fix-right></fix-right>
    <div class="liucheng">
      <img src="../assets/0ea7b6f67667618fc2a38eb40c8475c.png" alt="">
    </div>
    <div class="examination">
      <div class="item">
        <img src="../assets/583.png" alt="">
        <div class="title">国际人才英语考试</div>
        <div class="time time1">报名时间 : 2019年07月22日～2019年10月14日</div>
        <div class="time time2">考试时间 : 2019年11月09日</div>
        <div class="type">考试科目：国才初级、国才中级、国才高级</div>
        <div class="tiaozhuan" >点击了解：<span @click="tiaozhuan(2)">考试介绍</span>&#12288;<span @click="tiaozhuan(0)">报名通知</span> </div>
        <div class="btn"  @click="baoming">立即报名</div>
      </div>
      <div class="item">
        <img src="../assets/583.png" alt="">
        <div class="title">四川省大学英语新三级考试</div>
        <div class="time time1">报名时间 : 暂未开放</div>
        <div class="time time2">考试时间 : 2019年11月09日</div>
        <div class="type">考试科目：四川省新三级考试</div>
        <div class="tiaozhuan" style="cursor: pointer;">点击了解：<span @click="tiaozhuan(3)">考试介绍</span>&#12288;<span @click="tiaozhuan(1)">报名通知</span> </div>
        <div class="btn" style="background:#a5a5a5" @click="baoming2">立即报名</div>
      </div>
    </div>
     
  </div>
</template>
<script>
import fixRight from '../components/fix'
import footer11 from '../components/footer'
export default {
  name: 'dynamic',
  components: {
    fixRight,footer11
  },
  data(){
    return{
      list:[1,2,3,4,5,7]
    }
  },
  methods:{
    baoming(){
      window.open("http://c.exam-sp.com/index.html#/e/cla-etic/login")
    },
    baoming2(){
      return;
      window.open("http://c.exam-sp.com/index.html#/e/claonline/login")
    },
    tiaozhuan(num){
       
       if(num==0||num==1){
          this.$router.push({'path':`/aboutETICArrangement?num=${num}`});
       }else{
         this.$router.push({'path':`/aboutETICSyllabus?num=${num}`})
       }
    }
  }
}
</script>
<style lang="less">
  .signUp{
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
      margin:40px auto;
      position: relative;
      .item{
        width:548px;
        // background:rgba(255,255,255,1);
        font-weight:400;
        font-family:MicrosoftYaHei;
        text-align: left;
        background-size: 100% 100%;
        position: relative;
        div{
          z-index: 10;
          position: absolute;
          span{
            border-bottom: 1px solid #666666;
          }
          span:hover{
            color:rgba(222,42,48,1)
          }
        }
        .title{
          font-size:22px;
          color:rgba(51,51,51,1);
          top:67px;
          left:109px;
        }
        .time{
          width:360px;
          font-size:16px;
          font-family:MicrosoftYaHei;
          color:rgba(102,102,102,1);
          left:109px;
        }
        .time1{
          top:116px;
        }
        .time2{
          top:147px;
        }
        .type{
          width:333px;
          font-size:16px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(102,102,102,1);
          top:177px;
          left:109px;
        }
        .tiaozhuan{
          width:333px;
          font-size:16px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(102,102,102,1);
          top:207px;
          left:109px;
          cursor: pointer;
        }
        .btn{
          width:110px;
          height:37px;
          background:rgba(222,42,48,1);
          border-radius:5px;
          text-align: center;
          line-height: 37px;
          font-size:16px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(255,255,255,1);
          cursor: pointer;
          top:271px;
          left:50%;
          margin-left: -55px;
        }
        .btn:active{
          background:#c8141a;
        }
      }
    }
  }
</style>

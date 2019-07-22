<template>
  <div class="ready">
    <fix-right></fix-right>
    <div class="message">
      <div class="title">国际人才英语考试（初级)</div>
      <div class="info">该书由中国外语测评中心编著，全面介绍了“国才考试”各科目的考试内容与要求，对考试样题进行了翔实的分析，并提供真题和作答样例，是考生备考“国才考试”的首选材料。</div>
      <div class="btn">进入模考系统</div>
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
  }
}
</script>
<style lang="less">
  .ready{
    width:100%;
    height: 100%;
    background:rgba(247,247,247,1);
    padding-top:205px;
    position: absolute;
    margin-top:-105px;
    z-index: 1;
    .message{
      width:1202px;
      background:rgba(255,255,255,1);
      margin:0 auto;
      padding-top:35px;
      padding-bottom: 60px;
      .title{
        font-size:22px;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(51,51,51,1);
        margin-bottom: 40px;
      }
      .info{
        width:1125px;
        font-size:16px;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:36px;
        margin:0 auto;
        text-align: left;
      }
      .btn{
        width:130px;
        height:37px;
        background:rgba(222,42,48,1);
        border-radius:5px;
        font-size:16px;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(255,255,255,1);
        text-align: center;
        line-height: 37px;
        margin:30px auto;
        cursor: pointer;
      }
      .btn:active{
        background:#c8141a;
      }
    }
  }
</style>

<template>
  <div class="userCenter">
        <fix-right></fix-right>
    <div class="u-content">
      <div class="title">
        <div>个人中心</div>
        <img class="img1" src="../assets/juxing21.png" alt="">
      </div>
      <div class="mes-alert">
        <img src="../assets/juxing20.png" alt="">
        <span>信息提示</span>
      </div>
      <div class="message">
        <div class="item">
          <div class="item-title">外研社活动</div>
          <div class="type">
            <div><img src="../assets/tongguo.png" alt=""></div>
            <div>
              <div>您所申请的参观外研社的活动已经通过!</div>
            </div>
          </div>
          <div class="type">
            <div><img src="../assets/bf9b8e39273d16f585da585ef6e9213.png" alt=""></div>
            <div>
              <div>您所申请的参观外研社的活动未通过!</div>
              <div style="color:rgba(102,102,102,1);">理由：1111311121316454564</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mes-alert">
        <img src="../assets/juxing20.png" alt="">
        <span>个人资料</span>
      </div>
      <div class="name">
        <span>昵称&#8194;:&#8194;</span>
        <span>跃跃月</span>
      </div>
      <div class="headimg">
        <img src="../assets/zu90kaobei.png" alt="">
        <div class="btn">上传头像</div>
      </div>
      <div class="btn-box">
        <div class="btn1">保存</div>
        <div class="btn1" style="background:#fff;border:1px solid #CCCCCC;line-height: 30px;">取消</div>
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
  }
}
</script>
<style lang="less">
  .userCenter{
    width: 100%;
    height: 100%;
    background:rgba(247,247,247,1);
    padding-top:80px;
    padding-bottom: 30px;
    .u-content{
      width:1200px;
      margin:0 auto;
      justify-content: space-between;
      font-family:MicrosoftYaHei;
      font-weight:400;
      padding:30px 34px;
      background: #fff;
      text-align: left;
      .title{
        width:79px;
        height:36px;
        font-size:18px;
        font-family:MicrosoftYaHei;
        font-weight:bold;
        color:rgba(51,51,51,1);
        line-height:36px;
      }
      .img1{
        position: relative;
        top:-23px;
      }
      .mes-alert{
        margin-top:27px;
        display: flex;
        align-items: center;
        img{
          margin-right: 10px;
        }
      }
      .message{
        margin:20px;
        margin-bottom: 50px;
        .item{
          .item-title{
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .type{
            display: flex;
            margin-top:5px;
            padding-left:10px; 
            font-size:16px;
            font-family:MicrosoftYaHei;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:36px;
            img{
              width: 15px;
              margin-right: 10px;
            }
          }
          .liyou{
            margin-top:10px;
            padding-left: 10px;
          }
        }
      }
      .name{
        margin:26px 20px;
      }
      .headimg{
        width: 500px;
        margin:26px 20px;
        display: flex;
        align-items: center;
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
        margin-left: 30px;
      }
      .btn:active{
        background:#c8141a;
      }
      .btn-box{
        margin:26px 20px;
        display: flex;
        justify-content: space-between;
        width: 180px;
        .btn1{
          width:80px;
          height:32px;
          background:rgba(222,42,48,1);
          border-radius:5px;
          text-align: center;
          line-height: 32px;
          font-size:16px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:#CCCCCC;
          cursor: pointer;
          
        }
      }
    }
  }
</style>

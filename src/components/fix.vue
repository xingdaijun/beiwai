<template>
  <div class="fix">
    <div class="fitem" @mouseenter="fixnum=1" @mouseleave="fixnum=0">
      <img src="../assets/home/dianhua.png" alt="" v-if="fixnum==1">
      <img src="../assets/home/dianhuakaobei.png" alt="" v-if="fixnum!=1">
      <div>联系电话</div>
      <div class="tanchu" style="width:386px;left:-385px;background-size: 380px 50px;" v-show="fixnum==1">
        <div>报名咨询电话：021-61651124（报名、缴费相关功能）</div>
        <br>
        <div>考试咨询电话：010-88819772/9094/9093</div>
      </div>
    </div>
    <div class="fitem" @mouseenter="fixnum=2" @mouseleave="fixnum=0">
      <img src="../assets/home/ec596e28cd8af492d0918b9097368c6.png" alt="" v-if="fixnum==2">
      <img src="../assets/home/5ddfd666fa2fa4fe896d67a1b7ec94f.png" alt="" v-if="fixnum!=2">
      <div>微信公众号</div>
      <div class="tanchu" style='width:147px;height:137px; background-size: 140px 137px;top:-35px;left:-142px' v-if="fixnum==2">
        <img src="../assets/home/weixinerweima..jpg" alt=""  class="erweima">
      </div>
    </div>
    <div class="fitem" @mouseenter="fixnum=4" @mouseleave="fixnum=0">
      <img src="../assets/home/youxiangkaobei.png" alt="" v-if="fixnum==4">
      <img src="../assets/home/youxiang.png" alt="" v-if="fixnum!=4">
      <div>电子邮箱</div>
      <div class="tanchu" v-show="fixnum==4">
        <div @click="open2">电子邮箱：cla@claonline.cn</div>
      </div>
    </div>
    <div class="fitem" @mouseenter="fixnum=3" @mouseleave="fixnum=0">
      <img src="../assets/home/qqkaobei.png" alt="" v-if="fixnum==3">
      <img src="../assets/home/qq.png" alt="" v-if="fixnum!=3">
      <div>备考群</div>
      <div class="tanchu" v-show="fixnum==3" style='width:250px;height:100px; background-size: 230px 100px;top:-18px;left:-235px'>
        <div @click="open(860432992)">国才初级备考群：860432992</div>
        <div @click="open(860367925)">国才中级备考群：860367925</div>
        <div @click="open(668275256)">国才高级备考群：668275256</div>
      </div>
    </div>
    <div class="fitem" @click="dingbu">
      <img src="../assets/home/huidingbu.png" alt="">
      <div>回到顶部</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "fixRight",
  props: {
    msg: String
  },
  data(){
    return{
      fixnum:0,
    }
  },
  methods:{
    dingbu(){
       document.documentElement.scrollTop=0
    },
    open2(){
      window.open("mailto:cla@claonline.cn")
    },
    open(num){
       window.open(`tencent://message/?uin=${num}`)
    }
  }
};
</script>
<style lang="less">
  .fix{
      position: fixed;
      top:250px;
      right:0px;
      width:60px;
      background:rgba(255,255,255,0.8);
      box-shadow:0px 2px 21px 3px rgba(163,16,21,0.09);
      border-radius:10px 10px 10px 10px;
      z-index: 1000;
      .fitem{
        width: 100%;
        height: 60px;
        font-size: 10px;
        cursor: pointer;
        position: relative;
        padding-top:15px;
        img{
          width: 20px;
        }
        .erweima{
          width: 117px;
          height: 117px;
        }
        .tanchu{
          position:absolute;
          width: 201px;
          height: 50px;
          top:0px;
          left:-195px;
          background: url('../assets/home/yuanjiaojuxingkaobei3.png') no-repeat;
          background-size: 191px 50px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          padding:10px;
          div{
            font-size:12px;
            font-family:MicrosoftYaHei;
            font-weight:400;
            color:rgba(51,51,51,1);
          }
        }
      }
      .fitem:hover{
        background:rgba(255,237,237,1);
        color:rgba(253,80,87,1);
      }
    }
</style>
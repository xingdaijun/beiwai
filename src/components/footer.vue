<template>
  <div class="footer">
    <div class="footer">
      <img src="../assets/home/tu2.png" alt="" style="width:100%">
      <div class="f-details">
        <div class="f-title">
          <div>友情链接</div>
          <img src="../assets/home/juxingkaobei74.png" alt="" class="line">
        </div>
        <div style="width:100%;border-bottom:1px solid #4A4949">
          <div class="link">
            <div @click="tiao0">中华人民共和国教育部</div>
            <div @click="tiao">中国外语测评中心</div>
            <div @click="tiao2">北京外国语大学</div>
            <div @click="tiao3">外语教学与研究出版社</div>
            <div @click="tiao4">高等英语教学网</div>
            <div @click="tiao5">全国高校外语教师研修网</div>
            <div @click="tiao6">iResearch外语学术科研网</div>
            <div @click="tiao7">Unipus</div>
          </div>
        </div>

        <div class="address">
          <div class="a-left">
            <div>地址：北京市西三环北路19号 </div>
            <div>外语教学与研究出版社有限责任公司 版权所有© 1999-2019 FLTRP, All Rights Reserved</div>
          </div>
          <div class="a-right">
            <div @mouseenter="num=1" @mouseleave="num=0">
              <img src="../assets/home/weixin.png" alt="">
              <div class="imgtanchu" v-show="num==1"><img src="../assets/home/weixinerweima..jpg" alt="" ></div>
            </div>
            <div @mouseenter="num=2" @mouseleave="num=0">
              <div class="imgtanchu" v-show="num==2" style="left:-14px;"><img src="../assets/home/weiboerweima.jpg" alt="" ></div>
              <img src="../assets/home/2f0cd9c828bdf6356e00494b5775307.png" alt="">
            </div>

            <div  @mouseenter="num=3" @mouseleave="num=0">
              <img src="../assets/home/zu83.png" alt="">
              <div class="imgtanchu" v-show="num==3" style="left:34px;"><img src="../assets/home/zhihuerweima.png" alt="" ></div>
            </div>
            <div @mouseenter="num=4" @mouseleave="num=0">
              <div  v-show="num==4" class="imgtanchu" style="left:84px;background-size: 146px 161px;padding-top: 31px;"><img src="../assets/home/09c2b42deac0157748403b414b4fc7d.jpg" alt="" style="width:100px;height:100px;"></div>
              <img  src="../assets/home/zu85.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "footer11",
  props: {
    msg: String
  },
  data(){
    return{
      num:0,
    }
  },
  methods:{
    tiao0(){
      window.open("http://www.moe.gov.cn/");
    },
    tiao(){
      window.open("http://www.claonline.cn/");
    },
    tiao2(){
      window.open("http://www.bfsu.edu.cn/");
    },
    tiao3(){
      window.open("http://www.fltrp.com/");
    },
    tiao4(){
      window.open("http://heep.unipus.cn/");
    },

    tiao5(){
      window.open("http://teacher.unipus.cn/");
    },
    tiao6(){
      window.open("http://iresearch.unipus.cn/");
    },
    tiao7(){
      window.open("http://www.unipus.cn/");
    },

  }
};
</script>
<style lang="less">
.footer{
      width:100%;
      position: relative;
      .f-details{
        width: 100%;
        margin:0 auto;
        position: absolute;
        top:40px;
        .f-title{
          width: 1200px;
          height:37px;
          font-size:22px;
          color:rgba(255,255,255,1);
          text-align: left;
          margin:0 auto;
          margin-bottom: 25px;
          img{
            width: 90px;
            position: relative;
            top:-15px;
          }
        }
        .link{
          width: 1200px;
          display: flex;
          margin:0 auto;
          margin-bottom: 50px;
          text-align: left;
          padding-left: 30px;
          flex-wrap:wrap; 
          div{
            width: 25%;
            font-size:16px;
            color:rgba(238,238,238,1);
            cursor: pointer;
            margin-bottom: 15px;
          }
          div:hover{
            color:#D92A37
          }
        }
        .address{
          display: flex;
          width: 1200px;
          justify-content:space-between;
          margin:0 auto;
          padding-left: 30px;
          margin-top: 3%;
          .a-left{
            div{
              width:808px;
              height:15px;
              font-size:14px;
              font-family:MicrosoftYaHei;
              color:rgba(255,255,255,0.6);
              line-height:26px;
              text-align: left;
              margin-bottom: 20px;
            }
            
          }
          .a-right{
            position: relative;
            display: flex;

            img{
              width: 37px;
              height: 37px;
              margin-right: 10px;
              cursor: pointer;
            }
            .imgtanchu{
              position: absolute;
              width: 147px;
              height:157px;
              padding-top: 18px;
              background: url('../assets/home/ffc6606ee46c0e3b464628b27f5d4ac.png') no-repeat;
              background-size: 147px 157px;
              background-position:top left; 
              top:-153px;
              left:-60px;
              img{
                width: 117px;
                height:117px;
                margin:0px;
              }
              
            }
          }
        }
      }
    }
</style>

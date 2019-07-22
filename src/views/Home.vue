<template>
  <div class="home">
    <div class="banner">
      <img src="../assets/home/e216008e7893e3be530588770628eb8.jpg">
    </div>
    <!-- <div class="swiper-container" id="swiper1" v-if="bannerList!=[]"> -->
      <!-- <div class="swiper-wrapper">
        <div class="swiper-slide" data-swiper-autoplay="2000" v-for="(item,i) in bannerList" :key="i">
          
        </div>
      </div>
      <div class="swiper-pagination" id="swp1"></div> -->
      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev" id="swiper-button-prev1"></div>
      <div class="swiper-button-next" id="swiper-button-next1"></div> -->
      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    <!-- </div> -->
    <fix-right></fix-right>
    <div class="nav1">
      <div class="nav1-item" @click="$router.push({path:'/testRegistration'})">
        <img src="../assets/home/renyuanbaoming.png" alt="" class="typeimg">
        <div class="title">我要报名</div>
        <div class="en" >Test Registration</div>
      </div>
      <div class="nav1-item" @click="$router.push({path:'/testScores'})">
        <img src="../assets/home/wj-cj.png" alt="" class="typeimg">
        <div class="title">成绩查询</div>
        <div class="en" >Test Scores</div>
      </div>
      <div class="nav1-item"  @click="$router.push({path:'/certificateVerification'})">
        <img src="../assets/home/3cc21a278c8c1ce26a01ad7749e959b.png" alt="" class="typeimg">
        <div class="title">证书查验</div>
        <div class="en" >Certificate Verification</div>
      </div>
    </div>
    <div class="dongtai">
      <div v-if="donglist!=[]">
        <img src="../assets/home/juixngkaobei4.png" alt="" class="bg">
        <div class="d-deta">
          <div class="d-title">国才动态</div>
          <img src="../assets/home/juxingkaobei74.png" alt="" class="line" style="width:113px;margin:10px 0px 15px  15px;">
          <div class="item" v-for="(item,i) in donglist" :key="i" @click="$router.push({path:`/newsDetails?id=${item.id}`})">
            <div class="d-type"></div>
            <div class="info">{{item.title}}</div>
          </div>
          <div class="d-btn" @click="$router.push({path:'/news'})">更多动态</div>
        </div>
      </div>
      <div>
        <div class="swiper-container"  id="swiper2" v-if="dbanner!=[]"  ref="mySwiper2">
          <div class="swiper-wrapper">
            <div class="swiper-slide" @click="$router.push({path:`/newsDetails?id=${item.imgUrl}`})" data-swiper-autoplay="2000" v-for="(item,i) in dbanner" :data-id='item.imgUrl' :key="i">
              <img style="cursor: pointer;" :src="'http://139.219.15.110'+item.fileUrl" >
            </div>
          </div>
          <div class="swiper-pagination"  id="swp2"></div>
        
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"  id="swiper-button-prev2"></div>
          <div class="swiper-button-next"  id="swiper-button-next2"></div>
          
          <!-- 如果需要滚动条 -->
          <!-- <div class="swiper-scrollbar"></div> -->
        </div>
      </div>
    </div>
    <div class="zhuanqu div1">
        <div class="title">
          <div>国才专区</div>
          <img src="../assets/home/juxingkaobei74.png" alt="" class="line">
        </div>
        <img src="../assets/home/tuceng58.png" alt="" class="bg">
        <div class="z-details">
            <img src="../assets/home/tuceng1.png" alt="" class="bg1">
            <div class="num">
              <div class="n">{{num1}}+</div>
              <div class="ntext">国际人才培养基地</div>
              <!-- <input type="text"> -->
            </div>
            <div class="num" style="left:300px;">
              <div class="n">{{num2}}+</div>
              <div class="ntext">国才合作院校</div>
            </div>
            <div class="num" style="top:150px; left:95px;">
                <div class="n">{{num3}}+</div>
              <div class="ntext" style="padding-left:17px;">国才合作企业</div>
            </div>
            <div class="num" style="top:150px;left:270px;">
              <div class="n">{{num4}}+</div>
              <div class="ntext" style="text-align:center">国才证书持有者</div>
            </div>
            <div class="list">
                    <div class="item" @mouseenter="zhuannum=1" @mouseleave="zhuannum=0" :class="zhuannum==1?'i-hover':''">
                      <img src="../assets/home/yuanjiaojuxing5.png" alt="" v-show="zhuannum!=1">
                      <img src="../assets/home/a25802953ffe19531653a56349b8d58.png" alt="" v-show="zhuannum==1">
                      <div @click="$router.push({'path':'/enterprise'})">企业专区</div>
                    </div>
                    <div class="item" @mouseenter="zhuannum=2" @mouseleave="zhuannum=0" :class="zhuannum==2?'i-hover':''">
                      <img src="../assets/home/dibudaohanglan-.png" alt="" v-show="zhuannum!=2">
                      <img src="../assets/home/56f2b7dbb817234a329de658066ec2b.png" alt="" v-show="zhuannum==2">
                      <div @click="openType">院校专区</div>
                    </div>
                    <div class="item" style="margin-bottom:0px;" @mouseenter="zhuannum=3" @mouseleave="zhuannum=0" :class="zhuannum==3?'i-hover':''">
                      <img src="../assets/home/xuexiao_jiaoshi.png" alt="" v-show="zhuannum!=3">
                      <img src="../assets/home/128e9611bd11ac7f500f13edd5efd4e.png" alt="" v-show="zhuannum==3">
                      <div @click="openType" >教师专区</div>
                    </div>
            </div>
        </div>
    </div>
    <!-- 国才活动 -->
    <div class="huodong div1">
      <div class="title">
        <div style="color:#000">国才活动</div>
        <img src="../assets/home/juxingkaobei74.png" alt="" class="line">
      </div>
      <img src="../assets/home/tuceng587132.png" alt="" class="bg">
      <div class="h-details" v-if="gamelist.length!=0">
        <div class="h-left">
          <div class="h-item" style="margin-bottom:11px; " @click="$router.push({path:`/newsDetails?id=${gamelist[1].id}`})" @mouseenter="hov=1" @mouseleave="hov=0">
            <img :src="gamelist[1].fileUrl" alt="">
            <div class="info info1" :class="hov==1?'hov1':''" >
              <div class="i-title">{{gamelist[1].title}}</div>
              <div class="i-deta">{{gamelist[1].outline}}</div>
            </div>
          </div>
          <div class="h-item" @click="$router.push({path:`/newsDetails?id=${gamelist[2].id}`})" @mouseenter="hov=2" @mouseleave="hov=0">
            <img :src="gamelist[2].fileUrl" alt="">
            <div class="info info1" :class="hov==2?'hov1':''" >
              <div class="i-title">{{gamelist[2].title}}</div>
              <div class="i-deta">{{gamelist[2].outline}}</div>
            </div>
          </div>
        </div>
        <div class="h-right" @click="$router.push({path:`/newsDetails?id=${gamelist[0].id}`})" @mouseenter="hov=3" @mouseleave="hov=0" >
          <img :src="gamelist[0].fileUrl" alt="">
          <div class="info" :class="hov==3?'hov':''">
            <div class="i-title">{{gamelist[0].title}}</div>
            <div class="i-deta">{{gamelist[0].outline}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="jiuye">
      <div class="j-img">
        <img src="../assets/home/tu1.png" alt="" style="height:100%">
      </div>
      <div class="j-right">
        <div class="j-title">
          <div>国才就业</div>
          <img src="../assets/home/juxingkaobei74.png" alt="" class="line">
        </div>
        <div class="list">
          <div class="j-item" v-for="(item,i) in jiuyelist" :key="i" v-if="i<9">
            <div></div>
            <span  @click="details(item.id)">{{item.station}} {{item.companyname}}</span>
          </div>
        </div>
        <div class="j-btn" @click="$router.push({path:`/jobs`})">更多招聘</div>
      </div>
    </div>
    <div class="hezuo">
      <div class="he-title">
        <div>合作企业</div>
        <img src="../assets/home/juxingkaobei74.png" alt="" class="line">
      </div>
      <el-carousel trigger="click" height="260px" style="width:1200px;margin:0 auto;padding:20px;background:#fff" :autoplay="false">
          <el-carousel-item  style="background:#fff  ">
            <img style="width:100%;" src="../assets/logo/57.png" alt="">
          </el-carousel-item>
          <el-carousel-item  style="background:#fff  ">
            <img style="width:100%;" src="../assets/logo/51.png" alt="">
          </el-carousel-item>
          <el-carousel-item  style="background:#fff  ">
            <img style="width:100%;" src="../assets/logo/52.png" alt="">
          </el-carousel-item>
          <el-carousel-item  style="background:#fff  ">
            <img style="width:100%;" src="../assets/logo/53.png" alt="">
          </el-carousel-item>
          <el-carousel-item  style="background:#fff  ">
            <img style="width:100%;" src="../assets/logo/54.png" alt="">
          </el-carousel-item>
          <el-carousel-item  style="background:#fff  ">
            <img style="width:100%;" src="../assets/logo/55.png" alt="">
          </el-carousel-item>
          <el-carousel-item  style="background:#fff  ">
            <img style="width:100%;" src="../assets/logo/58.png" alt="">
          </el-carousel-item>
        </el-carousel>
    </div>
    <div class="hezuo" style='margin-top:-20px;'>
      <div class="he-title">
        <div>合作院校</div>
        <img src="../assets/home/juxingkaobei74.png" alt="" class="line">
      </div>
      <el-carousel trigger="click" height="220px" style="width:1200px;margin:0 auto;padding:20px;background:#fff" :autoplay="false">
          <el-carousel-item style="background:#fff">
            <div>
              <img src="../assets/school/21.png" alt="">
            </div>
          </el-carousel-item>
          <el-carousel-item style="background:#fff">
            <div>
              <img src="../assets/school/22.png" alt="">
            </div>
          </el-carousel-item>
          <el-carousel-item style="background:#fff">
            <div>
              <img src="../assets/school/23.png" alt="">
            </div>
          </el-carousel-item>
          
        </el-carousel>
    </div>
    <footer11></footer11>
  </div>
</template>
<script>
import Swiper from 'swiper';
import countTo from 'vue-count-to';
import 'swiper/dist/css/swiper.min.css';
import fixRight from '../components/fix'
import footer11 from '../components/footer'
import { getBanner } from '@/request/api';// 导入我们的api接口  banner图
import { friendLink } from '@/request/api';// 导入我们的api接口 友情链接
import { getDongBanner } from '@/request/api';// 导入我们的api接口 动态轮播图
import { getDongtai } from '@/request/api';// 导入我们的api接口 获取动态
import { hotwork } from '@/request/api';// 导入我们的api接口 获取热门就业列表
import { getjiuyelist } from '@/request/api';// 导入我们的api接口 获取就业列表


export default {
  components: { countTo ,fixRight,footer11,getBanner , friendLink , getDongBanner ,getDongtai},
  data(){
    return{
      // t1:0,
      bannerList:"",//轮播图
      zhuannum:0,//专区判断悬浮
      list:[1,2,3,4,5,6],//动态新闻列表
      hov:0,//活动专区悬浮
      dbanner:[],//动态轮播图
      donglist:[],//动态列表
      gamelist:[],
      jiuyelist:[],
      start:false,
      num1:0,
      num2:0,
      num3:0,
      num4:0,
    }
  },
  methods:{
    details(id){
      this.$router.push({'path':`/jobDetails?id=${id}`})
    },
    openType() {
      this.$alert('即将开放，敬请期待', {
        confirmButtonText: '知道了',
      });
    },
    //获取首页轮播
    getba(){
      getBanner({
        }).then(res => {
          // 获取数据成功后的其他操作
          this.bannerList=JSON.parse(res.data);
          this.$nextTick(() => {
          var mySwiper = new Swiper('#swiper1', {
              loop:true,
              autoplay : 3000,
              speed:300,
              // 如果需要分页器
              pagination:"#swp1",
              paginationClickable :true,//点点控制图
              // 如果需要前进后退按钮
              nextButton: '#swiper-button-next1',
              prevButton: '#swiper-button-prev1',
              observer:true, //修改swiper自己或子元素时，自动初始化swiper
              observeParents:true,//修改swiper的父元素时，自动初始化swiper
              initialSlide :0,
              // 如果需要滚动条
              // scrollbar: '.swiper-scrollbar',
            })
          })            
        })
    },
    //获取首页动态轮播
    getdongba(){
      let that=this;
      getDongBanner({
      }).then(res => {
        // 获取数据成功后的其他操作
        this.dbanner=JSON.parse(res.data);
        this.$nextTick(() => {
          var mySwiper = new Swiper('#swiper2', {
            // loop:true,
            autoplay : 3000,
            on: {
              click: function () {
                // 这里有坑
                // 需要注意的是：this 指向的是 swpier 实例，而不是当前的 vue， 因此借助 vm，来调用 methods 里的方法 
                // console.log(this); // -> Swiper
                // 当前活动块的索引，与activeIndex不同的是，在loop模式下不会将 复制的块 的数量计算在内。           
                const realIndex = this.realIndex;
                that.handleClickSlide(realIndex); 
              }
            },

            speed:300,
            // 如果需要分页器
            pagination:"#swp2",
            paginationClickable :true,//点点控制图
            // 如果需要前进后退按钮
            nextButton: '#swiper-button-next2',
            prevButton: '#swiper-button-prev2',
            observer:true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            initialSlide :0,
            // 如果需要滚动条
            // scrollbar: '.swiper-scrollbar',
          })
        })
      })
    },
    //获取首页友情链接
    getfriendlink(){
      friendLink({
      }).then(res => {
        this.$nextTick(() => {
        })
      })
    },
    menu() {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      let that=this;
      if(this.scroll>700){
        if(that.start==false){
          that.start=true;
          let time1=setInterval(function(){
            that.num1+=1;
            if(that.num1==100){
              clearInterval(time1)
            }
          },3000/100);
          let time2=setInterval(function(){
            that.num2+=10;
            if(that.num2==1000){
              clearInterval(time2)
            }
          },3000/100);
          let time3=setInterval(function(){
            that.num3+=20
            if(that.num3==2000){
              clearInterval(time3)
            }
          },3000/100);
          let time4=setInterval(function(){
            that.num4+=200;
            if(that.num4==100000){
              clearInterval(time4)
            }
          },3000/600);
        }
        
        
      }
    },
    //获取首页动态
    getDate(){
      let obj={
        funcId:2,
        pageSize:6,
        pageNum:1,
        homepage:1
      }
      obj=JSON.stringify(obj);
      getDongtai(obj).then(res => {
        let list1=JSON.parse(res.data);
        this.donglist=list1;
        console.log(this.donglist);
        this.getGameDate();
        this.gethot();
      })
    },
    //获取首页赛事活动
    getGameDate(){
      let obj={
        funcId:6,
        pageSize:10,
        pageNum:1,
        homepage:1
      }
      obj=JSON.stringify(obj);
      getDongtai(obj).then(res => {
        let list1=JSON.parse(res.data);
        this.gamelist=list1;
        console.log(this.gamelist,798)
      })
    },
    //获取热门
    gethot(){
      hotwork().then(res => {
        let list=JSON.parse(res.data);
        this.jiuyelist=list;
        console.log(this.jiuyelist,852)
      })
    },
    handleClickSlide(index) {
      console.log('handleClickSlide current index', index);
    }
  },
  created(){
    // this.getba();
    this.getdongba();
    this.getDate();
    
    // this.firstgetlist();
  },
  computed:{
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted(){
    window.addEventListener('scroll', this.menu)
  },
  destroyed(){
    window.removeEventListener("scroll", this.menu);
  }
}
</script>
<style lang="less">
  .home{
    width:100%;
    height:100%;
    padding-top:30px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    background: #f5f5f5;
    .banner{
      width: 100%;
      img{
        width: 100%;
      }
    }
    .nav1{
      width:877px;
      height: auto;
      display: flex;
      justify-content: space-between;
      margin:64px auto;
      .nav1-item{
        width: 260px;
        height: 125px;
        background: #fff;
        text-align: left;
        cursor: pointer;
        transition-duration: 0.2s;
        padding-top: 15px;
        text-align: center;
        border-radius: 10px;
        .typeimg{
          width: 35px;
        }
        .title{
          width:150px;
          height:35px;
          font-size:25px;
          font-weight:bold;
          color:rgba(60,60,60,1);
          line-height:35px;
          margin: 3px auto 0px;
        }
        .en{
          width:100%;
          height:15px;
          font-size:16px;
          color:rgba(128,128,128,1);
          line-height:17px;
          margin:5px 0px 0px 0px;
          text-align: center;
        }
      }
      .nav1-item:hover{
        transform: scale(1.1);
        -ms-transform:scale(1.1);     /* IE 9 */
        -moz-transform:scale(1.1);     /* Firefox */
        -webkit-transform:scale(1.1); /* Safari 和 Chrome */
        -o-transform:scale(1.1);
      }
    }
    .dongtai{
      width: 100%;
      height: auto;
      display: flex;
      margin-bottom: 28px;
      >div{
        width: 50%;
        position: relative;
        .bg{
          width: 100%;
          height: 100%;
        }
        .d-deta{
          position: absolute;
          width: 70%;
          height: 80%;
          top:25px;
          right: 23px;
          text-align: left;
          .d-title{
            width:121px;
            height:29px;
            font-size:28px;
            color:rgba(255,255,255,1);
            margin-left: 15px;
          }
          .item{
            width: 100%;
            height: 6%;
            display: flex;
            align-items: center;
            margin-bottom: 6%;
            cursor: pointer;
            .d-type{
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background:rgba(238,238,238,0.52);
            }
            .info{
              width:532px;
              margin-left: 15px;
              font-size:16px;
              font-weight:400;
              color:#EEEEEE;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
          .item:hover .d-type{
            background: #ef5861;
          }
          .item:hover .info{
            color:#ef5861;
          }
          .d-btn{
            width: 25%;
            height: 40px;
            text-align: center;
            line-height: 38px;
            color:#fff;
            font-size:18px;
            font-weight:400;
            border:1px solid #Fff;
            border-radius: 5px;
            cursor: pointer;
          }
          .d-btn:hover{
            color:#ef5861;
            border-color: #ef5861;
          }
        }
      }
      .d-right{
        width: 100%;
        height: 528px;
      }
    }
    .div1{
      width: 100%;
      position: relative;
      margin-bottom: 28px;
      .title{
        width:1200px;
        font-size:28px;
        color:rgba(255,255,255,1);
        position: absolute;
        top:25px;
        left:50%;
        margin-left: -600px;
        text-align: left;
        padding-left:2%;
        img{
          position: relative;
          top:-20px;
        }
      }
      .bg{
        width: 100%;
      }
      
    }
    .zhuanqu{
      margin-bottom: 28px;
      .z-details{
        width: 1200px;
        display: flex;
        align-items: center;
        position: absolute;
        align-items: center;
        top:90px;
        left:50%;
        margin-left: -600px;
        >img{
          width: 43%;
        }
        .num{
          position: absolute;
          top:50px;
          left:100px;
          .n{
            font-size:43px;
            font-family:FZZYJW--GB1-0;
            font-weight:normal;
            color:rgba(255,255,255,1);
            line-height:26px;
            margin-bottom: 16px;
          }
          .ntext{
            font-size:14px;
            font-family:MicrosoftYaHei;
            color:rgba(255,255,255,1);
            line-height:27px;
            text-align: left;
            padding-left: 10px;
            letter-spacing: 1.5px;
          }
          
        }
        .list{
          width: 45%;
          height: 100%;
          margin-left:80px;
          .item{
            width: 55%;
            display: flex;
            align-items: center;
            margin:auto;
            margin-bottom: 15%;
            img{
              width: 27%;
            }
            div{
              width: 80%;
              height:50%;
              line-height: 56px;
              font-size:20px;
              color:rgba(255,255,255,1);
              text-align: center;
              border:1px solid #fff;
              border-radius: 5px;
              margin-left: 35px;
              cursor: pointer;
            }
          }
          .i-hover{
            div{
              color:#ef5861;
              border-color: #ef5861;
            }
          }
        }
      } 

    }
    .huodong{
      .h-details{
        width: 1200px;
        position: absolute;
        top:90px;
        left:50%;
        margin-left:-600px;
        display:flex;
        .h-left{
          width:21%;  
          .h-item{
            
            cursor: pointer;
            img{
              width:100%;
              height: 220px;
            }

          }
          
        }
        .h-right{
          width: 80%;
          height: 455px;
          overflow: hidden;
          cursor: pointer;
          margin-left: 2%;
          img{
            width:100%;
          }
        }
        .info{
          height:0px;
          background:#000;
          padding:0px 30px 0px;
          opacity:0.8;
          transition-duration: 0.3s;
          overflow: hidden;
          .i-title{
            width:100%;
            font-size:25px;
            font-weight:400;
            color:rgba(255,255,255,1);
            text-align: left;
            margin-bottom: 15px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .i-deta{
            width:99%;
            font-size:18px;
            color:rgba(255,255,255,0.8);
            line-height:36px;
            text-align: left;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
        .info1{
          .i-title{
            font-size: 14px;
          }
          .i-deta{
            font-size: 10px;
            line-height: 20px;
            margin-top:-10px; 
          }
        }
        .hov{
          height: 149px;
          margin-top:-153px;
          transition-duration: 0.3s;
          padding-top:20px;
        }
        .hov1{
          height: 105px;
          margin-top:-105px;
          transition-duration: 0.3s;
          padding:10px 20px 0px;
        }
      }
    }
    .jiuye{
      width: 100%;
      display: flex;
      align-items: center;
      .j-img{
        width:50%;
        img{
          width: 100%;
        }
      }
      .j-right{
        width: 50%;
        padding-left:130px;
        .j-title{
          height:37px;
          font-size:28px;
          color:#000;
          text-align: left;
          margin-bottom: 34px;
          img{
            width: 113px;
            position: relative;
            top:-20px;
          }
        }
        .j-item{
          width:515px;
          font-size:15px;
          color:rgba(51,51,51,1);
          text-align: left;
          display: flex;
          cursor: pointer;
          margin-bottom: 20px;
          div{
            width:5px;
            height: 5px;
            border-radius: 50%;
            background:rgba(0,0,0,0.22);
            margin-right: 15px;
            position: relative;
            top:10px;
          }
          span{
            width: 100%;
            line-height: 25px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .j-item:hover{
          color:rgba(218,42,55,1);
        }
        .j-item:hover div{
          background:rgba(218,42,55,1);
        }
        .j-btn{
          width:150px;
          border:1px solid #000;
          border-radius: 8px;
          cursor: pointer;
          color:rgba(51,51,51,1);
          padding:10px 0px;
          font-size: 18px;
          margin-top: 50px;
        }
        .j-btn:hover{
          // transition-duration: 0.3s;
          border-color:#ef5861;
          color:#ef5861;
        }
      }
    }
    .hezuo{
      width: 100%;
      background:rgba(247,247,247,1);
      padding:59px 0px 30px;
      .he-title{
        width: 1200px;
        height:37px;
        margin:0 auto;  
        font-size:28px;
        color:#000;
        text-align: left;
        margin-bottom: 34px;
        img{
          width: 113px;
          position: relative;
          top:-20px;
        }
      }
      .el-carousel__item{
        padding-bottom: 20px;
      }
      .el-carousel__button{
        height:8px;
        opacity: 0.18;
        background:red;
        width: 8px;
        border-radius: 50%;
        overflow: hidden;
      }
      .el-carousel__indicator.is-active button{
        opacity: 1;
      }
      .el-carousel__arrow{
        background-color: rgba(31,45,61,.41);
      }
      .el-carousel__arrow:hover{
        background-color: rgba(31,45,61,.81);
      }
    }
    .swiper-container {
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination-bullet{
      background:#fff;
      opacity: 1;
    }
    .swiper-pagination-bullet-active{
      background:#ef5861
    }
    .swiper-container-horizontal>.swiper-pagination-bullets{
      bottom:60px;
    }
  }
  .swiper-button-prev{
    background-image:url("../assets/home/39eb64ff4c1972c0ba9a959a24675d0.png");
    left: 80px;
  }
  .swiper-button-next{
    background-image:url("../assets/home/cb3e3f4dffe95a9b2c11d8f2f1ab6cc.png");
    right: 80px;
  }
  .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled{
    pointer-events: auto;
  }

  @media screen and (max-width: 1430px){
     .home .div1 .bg{
        height:650px;
      }
  }
   @media screen and (max-width: 1233px){
     .home .footer{
       width: 1233px;
     }
     .footer>img{
       width: 1233px;
       height:300px;
     }
     .home .swiper-container{
       width: 1216px;
     }
     .home .hezuo{
       width: 1216px;
     }
  }
  @media screen and (max-width: 1000px){
     .home .jiuye .j-right .j-title{
       font-size: 20px;
       margin-bottom:3%;
     }
     .home .jiuye .j-right .j-title img{
       width:81px;
     }
     .home .jiuye .j-right .j-item span{
       font-size: 13px;
     }
     .home .jiuye .j-right .j-btn{
       width: 30%;
       font-size: 14px;
       margin-top:3%;
       padding:5px 0px;
     }
  }
  @media screen and (min-width: 1600px){
    .home .zhuanqu .bg{
      height:650px;
    }
    .home .huodong .bg{
      height:610px;
    }
    .home .zhuanqu .z-details .list .item{
      width: 60%
    }
    .home .zhuanqu .z-details .list .item div{
      font-size: 25px;
    }
  }
  @media screen and (min-width: 1233px) and (max-width: 1500px) {
    .home .zhuanqu .bg{
      height:620px;
    }
    .home .huodong .bg{
      height:580px;
    }
  }
  @media screen and (max-width: 1233px){
    .home .footer{
       width: 1214px;
     }
    .home .dongtai div .bg {
        width: 100%;
        height: 100%;
    }
    .home .dongtai{
      width: 1214px;
    }
    .home .dongtai div{
      width: 616px;
    }
    .home .div1 .bg{
        width: 1214px;
        height:580px;
    }
    .home .zhuanqu  .bg{
      height:620px;
    }
    .home .div1 .z-details{
        margin-left: 0px;
        left:0px;
    }
    .home .div1 .h-details{
      margin-left: 0px;
      left:0px;
    }
    .home .div1 .title{
      left:0px;
      margin-left: 10px;
    }
    
  }
  @media screen and (max-width: 1260px){
    .home .hezuo .he-title,.home .footer .f-details .f-title{
      margin-left: 15px;
    }

  }
  // @media screen and (max-width: 1700px){
  //    .home .div1 .bg{
  //       height:850px;
  //     }
  // }
</style>


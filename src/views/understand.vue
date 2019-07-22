<template>
  <div class="understand">
    <fix-right></fix-right>
    <div class="container">
      <div class="left">
        <ul :class="zhankai&&id!=38?'':'select'">
          <li @click="open" :class="!zhankai&&id!=38?'active':''" >国才考试
            <img src="../assets/jiantou.png" alt="">
          </li>
          <li @click="txt(39)" class="small" :class="id==39?'active':''">国才初级</li>
          <li @click="txt(40)" class="small" :class="id==40?'active':''" >国才中级</li>
          <li @click="txt(41)" class="small" :class="id==41?'active':''" >国才高级</li>
          <li @click="txt(42)" class="small" :class="id==42?'active':''" >国才高端</li>
          <li @click="txt(43)" class="small" :class="id==43?'active':''" >国才高翻笔译</li>
          <li @click="txt(44)" class="small" :class="id==44?'active':''" >国才高翻交传</li>
          <li @click="txt(45)" class="small" :class="id==45?'active':''" >国才高翻同传</li>
        </ul>
        <ul style="height:49px">
          <li  @click="txt(38)" :class="id==38?'active':''">四川新三级考试</li>
        </ul>
      </div>
      <div class="right">
        <div class="title">
          <div class="item" v-show="id!=38" >{{text}}&#12288;></div>
          <div @click="maodian(0)" class="item" :class="num2==0?'select':''">考试说明</div>
          <div @click="maodian(1)" class="item" :class="num2==1?'select':''">考试样题</div>
        </div>
        <div class="detail">
          <div class="info" v-html="content.newCon">
          </div>
        </div>
      </div>
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
      zhankai:false,
      list:[1,2,3,4,5,6],
      text:"国才初级",
      type:"",
      id:39,
      content:"",
      num2:0,
    }
  },
  methods:{
    open(){
      if(this.zhankai&&this.id!=38){
        console.log(1)
        this.zhankai=false;
      }else{
        this.zhankai=true;
        console.log(12)
      }
      this.id=39;
      this.text='国才初级';
      this.id=39
    },
    txt(id){
      if(id==39){
        this.text='国才初级';
        this.id=39;
      }else if(id==40){
        this.text='国才中级'
        this.id=40
      }
      else if(id==41){
        this.text='国才高级'
        this.id=41
      }
      else if(id==42){
        this.text='国才高端'
        this.id=42
      }
      else if(id==43){
        this.text='国才高翻笔译'
        this.id=43
      }
      else if(id==44){
        this.text='国才高翻交传'
        this.id=44
      }
      else if(id==45){
        this.text='国才高翻同传'
        this.id=45
      }
      else if(id==38){
        this.text='四川新三级'
        this.id=38;
        this.zhankai=true;
      }
      this.getInfo();

    },
    maodian(n){
      if(n==0){
        this.num2=0;
         document.documentElement.scrollTop=0;
      }else{
        this.num2=1;
        if(this.id==39){
          document.documentElement.scrollTop=2600;
        }
        if(this.id==40){
          document.documentElement.scrollTop=3800;
        }
        if(this.id==41){
          document.documentElement.scrollTop=2600;
        }

        if(this.id==42){
          document.documentElement.scrollTop=2600;
        }
        if(this.id==43){
          document.documentElement.scrollTop=1350;
        }
        if(this.id==44){
          document.documentElement.scrollTop=1350;
        }
        if(this.id==45){
          document.documentElement.scrollTop=1350;
        }
        if(this.id==38){
          document.documentElement.scrollTop=2600;
        }

      }
    },
    getInfo(){
      let obj={
        funcId:this.id
      }
      getLiaojie(obj).then(res => {
          let info=JSON.parse(res.data);
          console.log(info);
          this.content=info;
      })
    }
  },
  created(){
    if(this.$route.query.num==3){
      console.log(this.id);
      this.id=38
    }
    this.getInfo();
  }
}
</script>
<style lang="less">
  .understand{
    width: 100%;
    height: 100%;
    background:rgba(247,247,247,1);
    margin-top:140px;
    .container{
      width:1200px;
      margin:0 auto;
      display: flex;
      justify-content: space-between;
      padding-top:52px;
      .left{
        width:160px;
        background:rgba(255,255,255,1);
        position: fixed;
        top:191px;
        ul{
          width: 100%;
          height: 322px;
          list-style: none;
          transition: all 0.3s ease 0s;
          overflow: hidden;
          li{
            font-size: 18px;
            width:160px;
            height:49px;
            line-height: 49px;
            cursor: pointer;
            transition-duration: 0.2s;
            text-align: left;
            padding-left: 20px;
            img{
              width: 12px;
              margin-left: 30px;
            } 
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
        .select{
          height: 49px;
        }

      }
      .right{
        width:988px;
         margin-left: 200px;
         position: relative;
        .title{
          width:988px;
          height:40px;
          background:rgba(255,255,255,1);
          display: flex;
          line-height: 40px;
          padding-left: 30px;
          font-size:13px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height:36px;
          margin-bottom: 20px;
          background:rgba(255,255,255,1);
          cursor: pointer;
          div{
            margin-right: 20px;
          }
          div:hover{
            color:rgba(217,42,55,1);
          }
          .select{
            color:rgba(217,42,55,1);
          }
        }
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

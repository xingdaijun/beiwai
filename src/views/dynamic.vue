<template>
  <div class="dynamic">
    <fix-right></fix-right>
    <div class="container">

      <div class="left">
        <ul>
          <li :class="funcId==3?'active':''" @click="getType(3)">考试资讯</li>
          <li :class="funcId==4?'active':''" @click="getType(4)">会议研修</li>
          <li :class="funcId==5?'active':''" @click="getType(5)">新闻报道</li>
          <li :class="funcId==6?'active':''" @click="getType(6)">赛事活动</li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li  :style="index<3?'background:#fff':index%2==1?'background:#fdfdfd':''" v-for="(item,index) in list" :key="index" @click="$router.push({path:`newsDetails?id=${item.id}`})">
            <div class="info" >
              <div class="title">
                <div class="title1">
                  <img v-if="item.stick==1" style="width:21px;height:17px;margin-right:5px" src="../assets/50f43ae16b485013a8bd4900512c0dd.png" alt="">
                  <span>{{item.title}}</span>
                </div>
                <div class="time">{{item.createtime}}</div>
              </div>
              <div class="detail" v-if="index<3">
                <img :src="item.fileUrl" alt="" v-if="item.fileUrl!=undefined">
                <div class="message">
                  <div class="mes" v-html="item.outline"></div>
                  <!-- <div class="zixun">[考务资讯」</div> -->
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="more1">{{footer}}</div>
      </div>
    </div>
          
  </div>
</template>
<script>
import fixRight from '../components/fix'
import { getDongtai } from '@/request/api';// 导入我们的api接口 获取动态

export default {
  name: 'dynamic',
  components: {
    fixRight,getDongtai
  },
  data(){
    return{
      list:[],//动态列表
      pageNum:1,//页码
      pageSize:20,//数量
      funcId:2,//菜单id
      footer:"加载更多",
      scroll: '',
      search:"",
      
    }
  },
  methods:{
    //获取动态
    getDate(){
      let obj={
        funcId:this.funcId,
        pageSize:this.pageSize,
        pageNum:this.pageNum,
        title:this.search
      }
      obj=JSON.stringify(obj);
      getDongtai(obj).then(res => {
        let that=this;
        let list1=JSON.parse(res.data);
        console.log(list1)
        if(list1.length==0){
          this.footer='我也是有底限的'
        }
        this.list=this.list.concat(list1);
      })
      
    },
    menu() {
   		//变量scrollTop是滚动条滚动时，距离顶部的距离
     		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
     		//变量windowHeight是可视区的高度
     		var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
     		//变量scrollHeight是滚动条的总高度
     		var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
        //滚动条到底部的条件
         if(scrollHeight-scrollTop-windowHeight<1){
                //写后台加载数据的函数
         	console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
          this.pageNum+=1;
          this.getDate();
         }   
      console.log(this.scroll)

    },
    getType(type){
      this.pageNum=1;
      this.funcId=type;
      this.list=[];
      this.getDate();
    },
  },
  created(){
    console.log(this.$route.query.fid,132)
    if(this.$route.query.fid!=undefined){
      this.funcId=this.$route.query.fid
    }
    if(this.$route.query.search!=undefined){
      console.log(this.$route.query.search,13231231321);
      this.search=this.$route.query.search;
    }
    this.getDate();
  },
  mounted(){
    window.addEventListener('scroll', this.menu)
  },
  destroyed(){
    window.removeEventListener("scroll" , this.menu);
  }
}
</script>
<style lang="less">
  .dynamic{
    width: 100%;
    height: 100%;
    background:rgba(247,247,247,1);
     font-family:MicrosoftYaHei;
     padding-bottom:40px; 
    .container{
      width:1200px;
      margin:0 auto;
      display: flex;
      justify-content: space-between;
      padding-top:85px;
      .left{
        width:160px;
        background:rgba(255,255,255,1);
        position: fixed;
        top:191px;
        ul{
          width: 100%;
          list-style: none;
          font-size: 18px;
          li{
            width:160px;
            line-height: 49px;
            cursor: pointer;
            transition-duration: 0.2s;
            // border-bottom: 1px solid #eeeeee
          }
          li:hover{
            background:rgba(217,42,55,1);
            color:#fff;
          }
          .active{
            background:rgba(217,42,55,1);
            color:#fff;
          }
        }

      }
      .right{
        width:988px;
        background:rgba(255,255,255,1);
        margin-left: 200px;
        li{
          list-style: none;
          padding:10px 35px 10px 20px; 
          display: flex;
          border-bottom: 1px solid rgba(238,238,238,1);
          .info{
            width: 100%;
            margin-left: 30px;
            text-align: left;
            .title{
              height: 40px;
              font-size:16px;
              font-family:MicrosoftYaHei;
              font-weight:400;
              color:rgba(51,51,51,1);
              line-height:40px;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: space-between;
              .title1{
                width: 760px;
                font-size: 16px;
                display:flex;
                align-items: center;
                
                span{
                  width: 735px;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                }
              }
              .time{
                width: 90px;
                font-size: 14px;
                color:#bbbbbb;
              }
              .title1:hover{
                color:#D92A37;
              }
            }
            
            .detail{
              display: flex;
              align-items: center;
              img{
                width: 150px; 
                margin-right: 20px;
              }
              .message{
                .mes{
                  font-size:14px;
                  font-family:MicrosoftYaHei;
                  font-weight:400;
                  color:rgba(102,102,102,1);
                  line-height:36px;
                  text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                  p{
                    width: 100%;
                    text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                  }
                }
              }
            }
          }
        }
        li:hover{
          cursor: pointer;
        }
        .more1{
          width: 100%;
          text-align: center;
          height: 100px;
          line-height: 40px;
          font-size:15px;
          font-family:MicrosoftYaHei;
          color:rgba(51,51,51,1);
          cursor: pointer;
          margin-top:20px;
        }
      }
    }
    
  }
</style>

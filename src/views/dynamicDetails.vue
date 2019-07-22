<template>
  <div class="dynamicDetails">
    <fix-right></fix-right>
    <div class="type"><span @click="$router.push({path:'/dynamic?id='+details.funcId})">国才动态</span> > <span @click="$router.push({path:'/dynamic?fid='+details.funcId})">{{details.funcName}}</span>  > <span style="color:rgba(32,134,228,1);">正文</span></div>
    <div class="content1">
      <div class="details">
        <div class="title">
          <div class="name">{{details.title}}</div>
          <!-- <img src="../assets/fenxiang-2.png" alt=""> -->
          <!-- <share :config="config"></share> -->
          <div class="time">{{details.createtime}}</div>
          <div class="line"></div>
        </div>
        <!-- <div class="info" v-html="details.newCon">
        </div> -->
        <div class="info" v-html="details.newCon">
        </div>
        <!-- <div class="btn">我要报名</div> -->
        <!-- <vshare></vshare> -->
        <vshare></vshare>

      </div>
      <div class="tuijian">
        <div class="title">相关动态</div>
        <div class="item" v-for="(item,index) in list" :key="index" @click="tiaozhuan(item.id)">{{item.title}}</div>
      </div>
    </div>
    
     
  </div>
</template>
<script>
import fixRight from '../components/fix'
import footer11 from '../components/footer'
import share from '../components/share'
import { getDongDetail } from '@/request/api';// 导入我们的api接口 获取动态内容
import { getDongtai } from '@/request/api';// 导入我们的api接口 获取动态

export default {
  name: 'dynamic',
  components: {
    fixRight,footer11 , getDongDetail ,share
  },
  data(){
    return{
        vshareConfig: {
          shareList: [
            // 此处放分享列表（ID）

          ],
          common : {
            //此处放置通用设置
          },
          share : [{
            //此处放置分享按钮设置
            }
          ],
          slide : [
            //此处放置浮窗分享设置
          ],
          image : [
            //此处放置图片分享设置
          ],
          selectShare : [
            //此处放置划词分享设置
          ]
        },
      id:"",//动态id
      details:"",
      list:[],
    }
  },
  methods:{
    tiaozhuan(id){
      this.id=id;
      this.getdetail()
    }
    ,
    //获取详情
    getdetail(){
      let obj={
        id:this.id
      }
      getDongDetail(obj).then(res => {
        let list1=JSON.parse(res.data);
        let date=new Date(list1.createtime);
        list1.month=date.getMonth()+1;
        list1.day=date.getDay()
        this.details=list1;
        console.log(this.details,13222);
        this.getDate();

      })
    },
    //获取相关
    //获取动态
    getDate(){
      let obj={
        funcId:this.details.funcId,
        pageSize:6,
        pageNum:1,
      }
      obj=JSON.stringify(obj);
      getDongtai(obj).then(res => {
        let list1=JSON.parse( res.data);
        console.log(list1)
        this.list=list1;
      })
      
    },
  },
  created(){
    this.id=this.$route.query.id;
    this.getdetail();
  }
}
</script>
<style lang="less">
  .dynamicDetails{
    width: 100%;
    height: 100%;
    background:rgba(247,247,247,1);
    padding-top:105px;
    font-family:MicrosoftYaHei;
    .type{
      width:1197px;
      height:50px;
      background:rgba(255,255,255,1);
      margin: 0 auto;
      line-height: 50px;
      text-align: left;
      padding-left: 33px;
      font-weight:400;
      color:rgba(51,51,51,1);
      font-size: 14px;
      span{
        cursor: pointer;
      }
      span:hover{
        color:rgb(32, 134, 228);
      }
    }
    .content1{
      display: flex;
      justify-content: space-between;
      width: 1200px;
      margin:20px auto;
      .details{
        width:870px;
        background:rgba(255,255,255,1);
        padding:42px 62px;
        .title{
          flex-wrap: nowrap;
          margin-bottom: 30px;
          .name{
            font-size:24px;
            font-weight:400;
            color:rgba(51,51,51,1);
            margin-bottom: 10px;
          }
          .line{
            width: 100%;
            border-bottom:1px solid #dddddd;
            margin:20px 0px;
          }

          img{
            width: 20px;
            margin-left: 254px;
            cursor: pointer;
          }
        }
        .info{
          width: 100%;
          font-size:14px;
          font-weight:400;
          color:rgba(102,102,102,1);
          line-height:33px;
          text-align: left;
          p{
            text-indent: 25px;
            font-size: 15px;
            line-height: 30px;
            margin-bottom: 10px;
          }
          td{
            border:1px solid #000000;
          }
        }
        .btn{
          width:110px;
          height:37px;
          background:rgba(222,42,48,1);
          border-radius:5px;
          margin:20px auto;
          margin-top:60px;
          text-align: center;
          line-height: 37px;
          font-size:16px;
          font-weight:400;
          color:rgba(255,255,255,1);
          cursor: pointer;
        }
        .btn:active{
          background:#c8141a;
        }
        .bdsharebuttonbox{
          width: 300px;
          height: 50px;
        }
        .bdshare-button-style0-24 .bds_more{
          display:none;
        }
      }
      .tuijian{
        width:300px;
        height: 320px;
        background:rgba(255,255,255,1);
        padding:33px;
        .title{
          font-size:18px;
          font-weight:400;
          color:rgba(51,51,51,1);
          margin-bottom: 12px;
          text-align: left;
          padding-left: 4px;
          padding-bottom: 15px;
          border-bottom:1px solid rgba(238,238,238,1);
        }
        .item{
          font-size:14px;
          font-weight:400;
          color:rgba(102,102,102,1);
          line-height:36px;
          text-align: left;
          cursor: pointer;
          padding-left: 5px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .item:hover{
          color: #c8141a;
        }
      }
    }
    
  }
</style>

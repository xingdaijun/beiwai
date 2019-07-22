<template>
  <div class="workDetails">
    <fix-right></fix-right>
    <div class="bg">
      <div class="left1">
        <div class="message">
          <div class="title">{{info.station}}   {{info.companyname}}</div>
          <div class="xiaobq">
            <div v-if="info.certificate!='不限'" class="biaoqian bq1">国才证书优先</div>
            <div v-if="info.city!='不限'" class="biaoqian">{{info.city}}</div>
            <div v-if="info.companytype!='不限'" class="biaoqian">{{info.companytype}}</div>
            <div v-if="info.educationask!='不限'" class="biaoqian">{{info.educationask}}</div>
            <div v-if="info.industry!='不限'" class="biaoqian">{{info.industry}}</div>
            <div v-if="info.pay!='不限'" class="biaoqian">{{info.pay}}</div>
            <div v-if="info.station!='不限'" class="biaoqian">{{info.station}}</div>
            <div v-if="info.stationask!='不限'" class="biaoqian">{{info.stationask}}</div>
            <div v-if="info.workexperience!='不限'" class="biaoqian">{{info.workexperience}}</div>
          </div>
          <div class="msg" v-if="info.stationduty">
            <div class="type">岗位职责 :</div>
            <div class="del" v-html="info.stationduty">
            </div>
          </div>
          <div class="msg" v-if="info.takeoffice">
            <div class="type" >任职要求 :</div>
            <div class="del" v-html="info.takeoffice">
              
            </div>
          </div>
          <div class="msg" v-if="info.socialbenefits">
            <div class="type">福利待遇 :</div>
            <div class="del"  v-html="info.socialbenefits">
              
            </div>
          </div>
          <div class="msg" v-if="info.companyprofile">
            <div class="type">企业介绍 :</div>
            <div class="del"  v-html="info.companyprofile">
              
            </div>
          </div>
          <div class="msg" v-if="info.deliveryway">
            <div class="type">投递方式 :</div>
            <div class="del"  v-html="info.deliveryway">
              
            </div>
          </div>
        </div>
        <!-- <div class="other" style="">
          <span  style="cursor: pointer;">本公司其他职位  </span>
          <span style="cursor: pointer;padding-left:35px;">  其他相关职位</span>
        </div> -->
        <!-- <div class="other-list">
          <div class="list">
            <div class="item" v-for="(item,index) in list" :key="index" v-if="index!=0" @click="details(item.id)">
              {{item.station}} {{item.companyname}} {{item.city}}
            </div>
            <div class="item" v-if="list.length==1">暂时没有岗位信息，去看看其他岗位吧~</div>
          </div>
          <div class="list">
            <div class="item" v-for="(item,index) in list1" :key="index" @click="details(item.id)"  v-if="index!=0">
              {{item.station}} {{item.companyname}} {{item.city}}
            </div>
            <div class="item" v-if="list1.length==1">暂时没有岗位信息，去看看其他岗位吧~</div>
          </div>
        </div> -->
        <el-carousel trigger="click" height="180px" arrow="always" style="margin:30px 0px;padding:20px;background:#fff" :autoplay="false">
          <el-carousel-item v-for="item in logo" :key="item.id" style="background:#fff  ">
            <img style="width:100%;height:100%" :src="item.img" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="right1">
        <el-carousel trigger="click" height="160px" style="width:300px;" :autoplay="false">
          <el-carousel-item>
             <img src="../assets/5745299c1855b0e6ded427b01469a69.png" alt="">
          </el-carousel-item>
          <el-carousel-item>
             <img src="../assets/9e49dc78d5af87c63dc07026a0c7156.png" alt="">
          </el-carousel-item>
        </el-carousel>
        <div class="hot">
          <div class="title">热门岗位</div>
          <div class="list">
            <div class="item" v-for="(item,index) in hotList" :key="index"  v-if="index<6">
              <!-- <div class="dian"></div> -->
              <div class="name" @click="details(item.id)">{{item.station}} {{item.companyname}}</div>
            </div>  
          </div>
          <img src="../assets/tuijian.png" alt="" style="width:34px;position:absolute;top:0px;left:0px;">
        </div>
      </div>
    </div>
     
  </div>
</template>
<script>
import fixRight from '../components/fix'
import footer11 from '../components/footer'
import { getjiuDetails } from '@/request/api';// 导入我们的api接口 获取就业信息列表
import { hotwork } from '@/request/api';// 导入我们的api接口 获取热门就业列表
import { getjiuyelist } from '@/request/api';// 导入我们的api接口 获取就业列表


export default {
  name: 'dynamic',
  components: {
    fixRight, footer11 ,getjiuDetails,getjiuyelist
  },
  data(){
    return{
      list:[],
      list1:[],
      zhilist:[1,2,3,4,5],
      logo:[
        {"id":1,"img":require("../assets/zu2kaobei.png")},
        {"id":2,"img":require("../assets/zu1.png")},
        {"id":3,"img":require("../assets/zu2.png")},
        {"id":4,"img":require("../assets/zu3.png")},
        {"id":5,"img":require("../assets/zu5.png")},
        {"id":6,"img":require("../assets/zu6.png")},
        {"id":7,"img":require("../assets/zu7.png")},
        {"id":8,"img":require("../assets/zu8.png")}
      ],
      id:"",//信息id
      info:"",//职位信息
      hotList:[],
      other:2
    }
  },
  methods:{
    getDetails(){
      getjiuDetails({
        "id":this.id
      }).then(res=>{
        this.info = JSON.parse(res.data);
        console.log(this.info);
        this.fitstworkSearch();
      })
    },
    //获取热门
    gethot(){
      hotwork().then(res => {
        let list=JSON.parse(res.data);
        console.log(list);
        this.hotList=list;
        console.log(this.hotList,1321321)
      })
    },
    //相同职位
    fitstworkSearch(){
        getjiuyelist(JSON.stringify({
            "companyname":this.info.companyname
          })).then(res => {
          let list=JSON.parse(res.data);
          this.list=list;
          console.log(list,132132)
        })
        getjiuyelist(JSON.stringify({
          "station":this.info.station
        })).then(res => {
          let list=JSON.parse(res.data);
          this.list1=list;
          console.log(this.list1,12312)
      })
    },
    //跳转其他职位
    details(id){
      this.id=id;
      this.other=2
      this.getDetails();
    },
  },
  created(){
    this.id=this.$route.query.id;
    this.getDetails();
    this.gethot();
  }
}
</script>
<style lang="less">
  .workDetails{
    width: 100%;
    background:rgba(247,247,247,1);
    padding-top:80px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    .bg{
      width: 1200px;
      margin:0 auto;
      display: flex;
      justify-content: space-between;
      .left1{
        width:870px;
        text-align: left;
        .message{
          background:#fff;
          padding:36px 0px 1px 34px;
          .title{
            font-size:22px;
            font-family:MicrosoftYaHei;
            font-weight:bold;
            color:rgba(32,134,228,1);
            line-height:26px;
            margin-bottom: 19px;
          }
          .xiaobq{
            display:flex;
            flex-wrap: wrap;
            margin-bottom: 15px;
            .biaoqian{
              background:#deeff9;
              margin-right: 15px;
              padding:5px 13px;
              border-radius: 6px ; 
              font-size: 12px;
              color:rgba(32,134,228,1);
              margin-bottom: 10px;
            }
            .bq1{
                background:rgba(255,236,236,1);
                font-weight:bold;
                color:rgba(251,14,42,1);
              }
          }
          .msg{
            margin-bottom: 30px;
            .type{
              width:120px;
              font-size:16px;
              font-family:MicrosoftYaHei;
              font-weight:400;
              color:rgba(51,51,51,1);
              line-height:26px;
              margin-bottom: 10px;
            }
            .del{
              width:773px;
              font-size:14px;
              font-family:MicrosoftYaHei;
              font-weight:400;
              color:rgba(102,102,102,1);
              line-height:20px;
            }
          }
        }
        .other{
          width:100%;
          height:50px;
          font-size:16px;
          color:rgba(51,51,51,1);
          line-height:50px;
          margin:30px 0px 0px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          span{
            padding-left: 34px;
            background:rgba(255,255,255,1);
            width: 48%;
            border-bottom: 1px solid #838383;
          }
        }
        .other-list{
          width: 100%;
          display: flex;
          justify-content: space-between;
          .list{
            width:48%;
            padding:10px 0px 10px 0px;
            position: relative;
            background:rgba(255,255,255,1);
            padding-left: 35px;
            .item{
              font-size:14px;
              color:rgba(102,102,102,1);
              line-height:32px;
              cursor: pointer;
            }
            .item:hover{
              color:#D92A37;
            }
          }
        }
        
        .el-carousel__item h3 {
          color: #475669;
          font-size: 14px;
          opacity: 0.75;
          line-height: 150px;
          margin: 0;
        }
        .el-carousel__arrow{
          background-color: rgba(31,45,61,.5);
        }
        .el-carousel__arrow:hover{
           background-color: rgba(31,45,61,.8);
        }
        .el-carousel__item:nth-child(2n) {
          background-color: #99a9bf;
        }
        
        .el-carousel__item:nth-child(2n+1) {
          background-color: #d3dce6;
        }
      }
      .right1{
        width:300px;
        height:160px;
        img{
          width:300px;
          margin-bottom: 30px;
        }
        .hot{
          width:300px;
          height:312px;
          background:rgba(255,255,255,1);
          position: relative;
          margin-top:20px;
          .title{
            width: 100%;
            height: 50px;
            line-height: 45px;
            text-align: center;
            font-size:16px;
            font-weight:bold;
            color:rgba(51,51,51,1);
            border-bottom:1px solid rgba(238,238,238,1);
          }
          .list{
            width: 100%;
            padding:10px 24px 40px 26px;
            .item{
              display: flex;
              align-items: center;
              cursor: pointer;
              .dian{
                width:8px;
                height:8px;
                background:rgba(238,238,238,1);
                border-radius:50%;
                margin-right: 14px;
              }
              .name{
                width:247px;
                font-size:14px;
                font-weight:400;
                color:rgba(102,102,102,1);
                line-height:37px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                text-align: left;
              }
            }
            .item:hover .dian{
              background: #D92A37
            }
            .item:hover .name{
              color: #D92A37
            }
          }
        }
      }
    }
  }
</style>

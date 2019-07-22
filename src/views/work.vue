<template>
  <div class="work">
    <fix-right></fix-right>
    <div class="bg">
      <div class="left1">
        <div class="searchb">
          <el-input
            size="mini"
            placeholder="请输入需要检索的内容"
            v-model="search"
            suffix-icon="el-icon-search"
            >
          </el-input>
          <div class="search-btn" @click="workSearch">搜索</div>
        </div>
        <div class="choose">
          <div class="type">
            <div class="row">
              <div class="col">
                <div class="item item1">国才证书:</div>
                <div @click="choose('certificate',i,item.menuName)" :class="item.select?'active':''"  class="item" v-for="(item,i) in typelist[4].son" :key="i">{{item.menuName}}</div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="item item1">公司行业:</div>
                <div class="item-content" :style="ismodel==1?'height:auto':''">
                  <div class="item item2" @click="choose('industry',i,item.menuName)" :class="item.menuName==industry?'active':''" v-for="(item,i) in typelist[1].son" :key="i" >{{item.menuName}}</div>
                </div>
                <div class="item" @click="open(1)">更多</div>
              </div>
            </div>
            <!-- <div class="row">
              <div class="col">
                <div class="item item1">岗位名称:</div>
                <div class="item" @click="choose('station',i,item.menuName)" :class="item.menuName==station?'active':''"  v-for="(item,i) in typelist[2].son" :key="i" >{{item.menuName}}</div>
                <div class="item" @click="open(2)" >更多</div>
              </div>
            </div> -->
            <div class="row">
              <div class="col">
                <div class="item item1">工作地点:</div>
                <div class="item-content" :style="ismodel==3?'height:auto':''">
                    <div class="item" @click="choose('city',i,item.menuName)" :class="item.menuName==city?'active':''"  v-for="(item,i) in typelist[3].son" :key="i">{{item.menuName}}</div>
                </div>
                <div class="item" @click="open(3)" >更多</div>
             </div>
            </div>
            
          </div>
          <div class="other">
            <div class="item">其他:</div>
            <el-select v-model="pay" placeholder="薪资" size="small" @change="slectChange($event,1)">
              <el-option
                v-for="item in typelist[5].son"
                :key="item.menuName"
                :label="item.menuName"
                :value="item.menuName">
              </el-option>
            </el-select>
            <el-select v-model="stationask" placeholder="岗位要求" size="small" @change="slectChange($event,2)">
              <el-option
                v-for="item in typelist[6].son"
                :key="item.menuName"
                :label="item.menuName"
                :value="item.menuName">
              </el-option>
            </el-select>
            <el-select v-model="workexperience" placeholder="工作经验" size="small" @change="slectChange($event,3)">
              <el-option
                v-for="item in typelist[7].son"
                :key="item.menuName"
                :label="item.menuName"
                :value="item.menuName">
              </el-option>
            </el-select>
            <el-select v-model="companytype" placeholder="企业类型" size="small" @change="slectChange($event,4)">
              <el-option
                v-for="item in typelist[8].son"
                :key="item.menuName"
                :label="item.menuName"
                :value="item.menuName">
              </el-option>
            </el-select>
            <el-select v-model="educationask" placeholder="学历要求" size="small" @change="slectChange($event,5)">
              <el-option
                v-for="item in typelist[0].son"
                :key="item.menuName"
                :label="item.menuName"
                :value="item.menuName">
              </el-option>
            </el-select>
          </div>
          <div class="selected">
            <div class="item">已选条件</div>
            <div class="selitem">
              <div  class="sel" v-for="(item,i) in typelist[4].son" :key="i" v-if="item.select&&item.menuName!='不限'">
                {{item.menuName}} 
                <i @click="deleta(0,i)" class="el-icon-close"></i>
              </div>

              <div v-if="industry!='不限'" class="sel">
                {{industry}} 
                <i @click="deleta(1)" class="el-icon-close"></i>
              </div>

              <div v-if="station!='不限'" class="sel">
                {{station}} 
                <i @click="deleta(2)" class="el-icon-close"></i>
              </div>

              <div v-if="city!='不限'" class="sel">
                {{city}} 
                <i @click="deleta(3)" class="el-icon-close"></i>
              </div>

              <div v-if="pay!=null&&pay!='不限'" class="sel">
                {{pay}} 
                <i @click="deleta(4)" class="el-icon-close"></i>
                </div>

              <div v-if="stationask!=null&&stationask!='不限'" class="sel">
                {{stationask}}
                <i @click="deleta(5)" class="el-icon-close"></i>
              </div>

              <div v-if="workexperience!=null&&workexperience!='不限'" class="sel">
                {{workexperience}} 
                <i @click="deleta(6)" class="el-icon-close"></i>
              </div>

              <div v-if="companytype!=null&&companytype!='不限'" class="sel">
                {{companytype}} 
                <i @click="deleta(7)" class="el-icon-close"></i>
              </div>

              <div v-if="educationask!=null&&educationask!='不限'" class="sel">
                {{educationask}} 
                <i @click="deleta(8)" class="el-icon-close"></i>
              </div>

            </div>
            <div class="rem" @click="remove">清空</div>
          </div>
        </div>
        <div class="list">
          <ul class="ul1">
            <li class="li1" v-for="(item,index) in list" :key="index" @click="details(item.id)">
              <div class="li-top">
                <div class="title">
                  <div class="name">{{item.station}}</div>
                  <div class="comname">{{item.companyname}}</div>
                </div>
                <div class="time">
                  {{item.releasetime}}
                </div>
              </div>
              <div class="details">
                <div class="bq bq1" v-if="item.certificate!='不限'">国才证书优先</div>
                <div class="bq" v-if="item.pay!='不限'">{{item.pay}}</div>
                <div class="bq" v-if="item.city!='不限'">{{item.city}}</div>
              </div>
            </li>
          </ul>
          <div class="nomsg" v-if="this.list==''">
            <!-- <img src="../assets/undraw_no_data_qbuo.png" alt=""> -->
            <div>很抱歉，没有您查找的资料，换个条件试试吧</div>
          </div>
          <div class="more1" v-if="count!=0">
            <el-pagination
              background
              class="fenye"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage1"
              :page-sizes="[10, 20]"
              :page-size="10"
              :total="count"
              layout="total, sizes, prev, pager, next, jumper"
              >
            </el-pagination>
          </div>
        </div>
        <h3 style="margin:20px 0">合作企业</h3>
        <el-carousel trigger="click" height="180px" arrow="always" style="margin:0px 0px 30px;padding:20px;background:#fff" :autoplay="false">
          <el-carousel-item style="background:#fff  ">
            <img style="width:100%;height:100%" src="../assets/logo/57.png" alt="">
          </el-carousel-item>
          <el-carousel-item style="background:#fff  ">
            <img style="width:100%;height:100%" src="../assets/logo/51.png" alt="">
          </el-carousel-item>
          <el-carousel-item style="background:#fff  ">
            <img style="width:100%;height:100%" src="../assets/logo/52.png" alt="">
          </el-carousel-item>
          <el-carousel-item style="background:#fff  ">
            <img style="width:100%;height:100%" src="../assets/logo/53.png" alt="">
          </el-carousel-item>
          <el-carousel-item style="background:#fff  ">
            <img style="width:100%;height:100%" src="../assets/logo/54.png" alt="">
          </el-carousel-item>
          <el-carousel-item style="background:#fff  ">
            <img style="width:100%;height:100%" src="../assets/logo/55.png" alt="">
          </el-carousel-item>
          <el-carousel-item style="background:#fff  ">
            <img style="width:100%;height:100%" src="../assets/logo/58.png" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="right1">
        <el-carousel trigger="click" height="160px" style="width:300px;" arrow="always" :autoplay="false">
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
            <div class="item" v-for="(item,index) in hotList" :key="index" v-if="index<6">
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
import { getjiuyetype } from '@/request/api';// 导入我们的api接口 获取就业列表
import { getjiuyelist } from '@/request/api';// 导入我们的api接口 获取就业列表
import { hotwork } from '@/request/api';// 导入我们的api接口 获取热门就业列表
// import { types } from 'util';
// import { type } from 'os';

export default {
  components: {
    fixRight,footer11,getjiuyelist,getjiuyetype,hotwork
  },
  data(){
    return{
      ismodel:0,
      typelist:[],//条件类型列表
      currentPage1: 1,//页码激活
      search:"",//搜索项
      list:[],
      certificate:[],//选择的证书
      industry:'不限',//选择的行业
      station:'不限',//选择的岗位
      city:'不限',//选择的地点
      pay:null,//选择的薪资
      stationask:null,//选择的要求
      workexperience:null,//选择的经验
      companytype:null,//选择的类型
      educationask:null,//选择的学历
      zhilist:[1,2,3,4],
      pageSize:10,//每页数量
      pageNum:1,//页码
      hotList:[],
      count:10,
      
    }
  },
  methods: {
    //搜索工作
    workSearch(){
      let obj={
        "search":this.search
      }
      getjiuyelist(JSON.stringify(obj)).then(res => {
        let list=JSON.parse(res.data);
        this.list=list;
      })
    },
    //下拉选的选择
    slectChange(e,n){
      if(n==1){
        this.pay=e;
      }
      if(n==2){
        this.stationask=e;
      }
      if(n==3){
        this.workexperience=e;
      }
      if(n==4){
        this.companytype=e;
      }
      if(n==5){
        this.educationask=e;
      }
      this.getlist();
    },
    //删除所选项
    deleta(num,i){
      if(num==0){
        this.typelist[4].son[i].select=false;
        this.certificate=[];
        for(let a=0;a< this.typelist[4].son.length;a++){
          if(this.typelist[4].son[a].select==true){
            this.certificate[this.certificate.length]=this.typelist[4].son[a].menuName
          }
        }
        console.log(this.certificate,123)
        if(this.certificate.length==0){
           this.typelist[4].son[0].select=true;
        }
        this.getlist();
      }
      if(num==1){
        this.industry="不限"
      }
      if(num==2){
        this.station="不限"
      }
      if(num==3){
        this.city="不限"
      }
      if(num==4){
        this.pay=null;
      }
      if(num==5){
        this.stationask=null
      }
      if(num==6){
        this.workexperience=null
      }
      if(num==7){
        this.companytype=null
      }
      if(num==8){
        this.educationask=null
      }
      this.getlist();
    },
    //清空所选项
    remove(){
      this.certificate=[]//选择的证书
      this.industry='不限'//选择的行业
      this.station='不限'//选择的岗位
      this.city='不限'//选择的地点
      this.pay=null//选择的薪资
      this.stationask=null//选择的要求
      this.workexperience=null//选择的经验
      this.companytype=null//选择的类型
      this.educationask=null//选择的学历
      for(let a=0;a<this.typelist[4].son.length;a++){
        this.typelist[4].son[a].select=false;
      }
      this.typelist[4].son[0].select=true;
      this.getlist();
    },
    //开启更多
    open(num){
      if(this.ismodel==num){
        this.ismodel=0;
      }else{
        this.ismodel=num;
      }
      

    },
    //关闭更多
    close(t,n,name){
      this.ismodel=0;
      if(t=="industry"){
        this.industry=name;
      }
      if(t=="station"){
        this.station=name;
      }
      if(t=="city"){
        this.city=name;
      }
      this.getlist();
    },
    //点击选择
    choose(t,n,name){
      this.ismodel=0;
      if(t=="industry"){
        this.industry=name;
      }
      if(t=="station"){
        this.station=name;
      }
      if(t=="city"){
        this.city=name;
      }
      if(t=="certificate"){
        if(name!="不限"){
          this.certificate=[];
          this.typelist[4].son[n].select=true;
          this.typelist[4].son[0].select=false;
          for(let a=0;a< this.typelist[4].son.length;a++){
            if(this.typelist[4].son[a].select==true){
              console.log(this.typelist[4].son[a])
              this.certificate[this.certificate.length]=this.typelist[4].son[a].menuName
            }
          }
        }else{
          for(let a=0;a< this.typelist[4].son.length;a++){
            this.typelist[4].son[a].select=false;
          }
          this.typelist[4].son[0].select=true;
          this.certificate=[];
        }
      }
      this.getlist();
    },
    handleSizeChange(val) {
      this.pageSize=val;
      this.firstgetlist();
    },
    handleCurrentChange(val) {
      this.pageNum=val;
      this.firstgetlist();
    },
    details(id){
      let routeData = this.$router.resolve({
        name: "jobDetails",
        query: {id:id},
      });
      window.open(routeData.href, '_blank');
    },
    //第一次获取就业列表
    firstgetlist(){
      let obj={
        "pageSize":this.pageSize,
        "pageNum":this.pageNum,
      }
      getjiuyelist(JSON.stringify(obj)).then(res => {
        let list=JSON.parse(res.data);
        this.count=res.count;
        this.list=list;
        console.log(this.list)
      })
    },
    //有条件的列表
    getlist(){
      let c=null;
      if(this.certificate.length!=0){
        c=this.certificate.join(",");
      }
      let obj={
        "certificate":c==null?'':c,
        "pageSize":this.pageSize,
        "pageNum":this.pageNum,
        "industry":this.industry=='不限'?'所有':this.industry,//选择的行业
        "station":this.station=='不限'?'所有':this.station,//选择的岗位
        "city":this.city=='不限'?'所有':this.city,//选择的地点
        "pay":this.pay==null||this.pay=='不限'?'所有':this.pay,//选择的薪资
        "stationask":this.stationask==null||this.stationask=='不限'?"所有":this.stationask,//选择的要求
        "workexperience":this.workexperience==null||this.workexperience=='不限'?"所有":this.workexperience,//选择的经验
        "companytype":this.companytype==null||this.companytype=='不限'?'所有':this.companytype,//选择的类型
        "educationask":this.educationask==null||this.educationask=='不限'?'所有':this.educationask,//选择的学历
      }
      console.log(obj,123987)
      getjiuyelist(JSON.stringify(obj)).then(res => {
        let list=JSON.parse(res.data);
        this.count=res.count;
        this.list=list;
      })
    },
    //获取热门
    gethot(){
      hotwork().then(res => {
        let list=JSON.parse(res.data);
        console.log(list);
        this.hotList=list;
      })
    },
    //获取就业选择条件
    gettype(){
      getjiuyetype({}).then(res=>{
        let type=JSON.parse(res.data);
        let list=[];
        //转换数组
        for (let i = 0; i < type.length; i++) {
          if(type[i].menupid==-1){
            list[list.length]=type[i];
          }
        }
        for (let c = 0; c < list.length; c++) {
          list[c].son=[];
        }
        for (let a = 0; a < type.length; a++) {
          for (let b = 0; b < list.length; b++) {
            if(type[a].menupid==list[b].menuType){
              list[b].son[list[b].son.length]=type[a];
            }
          }
          
        }
        //给国才证书做多选
        for(let e=0;e<list[4].son.length;e++){
          list[4].son[e].select=false;
        }
        list[4].son[0].select=true;
        this.typelist=list;
        this.firstgetlist();
        this.gethot()
      })
    },
  },
  created(){
    this.gettype();
    
  }
}
</script>
<style lang="less">
  .work{
    width: 100%;
    background:rgba(247,247,247,1);
    padding-top:85px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    .model{
      position: fixed;
      width: 100%;
      height: 100%;
      background:rgba(0,0,0,0.5);
      top:0px;
      z-index: 1000;
      
      .kuang{
        width:800px;
        height: 200px;
        position: absolute;
        top:50%;
        left:50%;
        margin-left: -400px;
        margin-top:-100px;
        background:#fff;
        padding:20px;
        .title{
          text-align: left;
          margin-bottom: 20px;
        }
        img{
          width: 15px;
          position: absolute;
          top:20px;
          right:20px;
          cursor: pointer;
        }
        .list{
          display: flex;
          flex-wrap: wrap;
          .item{
            margin-bottom: 20px;
            margin-right: 20px;
            cursor: pointer;
          }
          .active{
            color:#2086E4;
          }
          .item:hover{
            color:#2086E4;
          }
        }
      }
    }
    .bg{
      width: 1200px;
      margin:0 auto;
      display: flex;
      justify-content: space-between;
      .left1{
        width:870px;
        text-align: left; 
        .searchb{
          display: flex;
          justify-content:space-between;
          .el-input--mini .el-input__inner{
            width: 789px;
            height:40px;
            border-radius: 0px;
            outline: none;
            font-size: 16px;
            background: #fff;
            padding:0px;
            padding-left: 40px;
            border: none;
          }
          .el-input__suffix{
            left:-750px;
            top:1px;
          }
          .search-btn{
            width:89px;
            height:40px;
            background:rgba(51,51,51,1);
            border-radius:3px;
            text-align: center;
            line-height: 40px;
            font-weight:400;
            color:rgba(255,254,254,1);
            font-size: 16px;     
            cursor: pointer; 
          }
        }
        .choose{
          width: 100%;
          margin-top:20px;
          background:rgba(255,255,255,1);
          padding:32px 31px 30px 34px;
          .type{
            border-bottom: 1px solid rgba(238,238,238,1);
            .row{
              width: 100%;
              position: relative;
              .col{
                display: flex;
                flex-wrap:wrap;
                margin-bottom: 10px;
                .item{
                  height:25px;
                  font-size:14px;
                  font-family:MicrosoftYaHei;
                  font-weight:400;
                  color:rgba(102,102,102,1);
                  line-height:15px;
                  margin-right: 20px;
                  margin-bottom: 10px;
                  cursor: pointer;
                  z-index:100;
                }
                .item1{
                  font-weight: bold;
                }
                .item-content{
                  width: 617px;
                  height: 20px;
                  display: flex;
                  flex-wrap: wrap;
                  overflow: hidden;
                  transition: all 0.3s ease 0s;
                }
                .active{
                  color:#2086E4;
                }
                .item:hover{
                  color:#2086E4;
                }
              }
              .open{
                width:690px;
                background:rgba(247,247,247,1);
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                padding: 10px;
                position: absolute;
                transition-duration: 0.3s;
                top:25px;
                left:80px;
                z-index: 101;
                .item{
                  height:15px;
                  font-size:14px;
                  font-family:MicrosoftYaHei;
                  font-weight:400;
                  color:rgba(102,102,102,1);
                  line-height:20px;
                  margin-right: 38px;
                  margin-bottom: 8px;
                  cursor: pointer;
                }
                .active{
                  color:#2086E4;
                }
                .item:hover{
                  color:#2086E4;
                }
                img{
                  width: 15px;
                  position: absolute;
                  top:5px;
                  right:5px;
                  cursor: pointer;
                }
              }
            }
          }
          .other{
            border-bottom: 1px solid rgba(238,238,238,1);
            padding:30px 0;
            display: flex;
            align-items: center;
            .item{
              margin-right: 34px;
            }
            .el-select{
              width:120px;
              // height:32px;
              // background:rgba(247,247,247,1);
              border-radius:5px;
              font-size: 14px;
              margin-right: 20px;
            }
            .el-input__inner{
              font-size: 14px;
              // height: 32px;
              // background:rgba(247,247,247,1);
              border:1px solid #818181;
            }
          }
          .selected{
            padding-top:42px;
            display: flex;
            .item{
              height:15px;
              font-size:16px;
              font-family:MicrosoftYaHei;
              font-weight:400;
              color:rgba(102,102,102,1);
              margin-right: 38px;
            }
            .selitem{
              width:600px;
              display: flex;
              flex-wrap: wrap;
              .sel{
                padding:0px 17px;
                height:25px;
                background:rgba(247,247,247,1);
                border-radius:12px;
                font-size:14px;
                color:rgba(102,102,102,1);
                line-height:25px;
                margin-right: 30px;
                margin-bottom: 24px;
                i{
                  cursor: pointer;
                }
              }
            }
            .rem{
              cursor: pointer;
            }
          }
          .el-carousel__item h3 {
            color: #475669;
            font-size: 14px;
            opacity: 0.75;
            line-height: 150px;
            margin: 0;
          }

          .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
          }
          
          .el-carousel__item:nth-child(2n+1) {
            background-color: #d3dce6;
          }
        }
        .list{
          width:869px;
          background:rgba(255,255,255,1);
          margin-top:30px;
          .ul1{
            list-style: none;
            .li1{
              padding:30px 20px;
              width: 100%;
              border-bottom: 1px solid rgba(238,238,238,1);
              cursor: pointer;
              .li-top{
                display: flex;
                align-items: center;
                justify-content:space-between;
                .title{
                  font-size:22px;
                  font-family:MicrosoftYaHei;
                  font-weight:400;
                  color:rgba(51,51,51,1);
                  margin-left: 18px;
                  display: flex;
                  align-items: baseline;
                  .name{
                    font-size: 18px;
                    margin-right: 10px;
                  }
                  .comname{
                    font-size: 14px;
                  }
                }
                .time{
                  font-size: 14px;
                  color: #bbbbbb;
                }
                .title:hover{
                  color:#D92A37
                }
                
              }
              .details{
                width:777px;
                font-size:16px;
                font-family:MicrosoftYaHei;
                font-weight:400;
                color:rgba(102,102,102,1);
                line-height:36px;
                margin:15px 0px 0px 20px;
                display: flex;
                .bq{
                  height:25px;
                  background:rgba(235,244,253,1);
                  border-radius:12px;
                  font-size:12px;
                  color:#1086F2;
                  line-height:25px;
                  text-align: center;
                  margin-right:10px;
                  padding:0px 10px;
                }
                .bq1{
                  background:rgba(255,236,236,1);
                  font-weight:bold;
                  color:rgba(251,14,42,1);
                }
              }
            }
          }
          .nomsg{
            text-align: center;
            margin-bottom: 10px;
            font-size:16px;
            font-family:MicrosoftYaHei;
            font-weight:400;
            color:#aaaaaa;
            padding:60px 0px;
          }
        }
        .more1{
          padding-bottom: 30px;
          .fenye{
            text-align: center;
            margin:30px auto 0px;
          }
        }
        .el-carousel__arrow{
          background-color: rgba(31,45,61,.5);
        }
        .el-carousel__arrow:hover{
           background-color: rgba(31,45,61,.8);
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
          height:300px;
          background:rgba(255,255,255,1);
          position: relative;
          margin-top:20px;
          .title{
            width: 100%;
            height: 50px;
            line-height: 50px;
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
  .el-pagination.is-background .el-pager li:not(.disabled).active{
    color:#fff;
    background-color:#D92A37 !important
  };
  .el-pagination.is-background .el-pager li:not(.active):hover {
    color:#D92A37 !important
  }
</style>

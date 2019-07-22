<template>
  <div id="app">
    <div class="nav">
      <div class="main">
        <div class="top">
          <div class="logo" >
            <img src="../assets/home/e849f666c0bc5440c1d3b0fce97d5ac.png" alt="" @click="$router.push({path:'/'})">
          </div>
          <div class="right">
            <div class="right-top">
              <div class="text">
                <div class="text1">China Language Assessment</div>
                <div class="text1">中国外语测评中心</div>
              </div>
              <div class="search">
                <!-- <el-input
                  size="mini"
                  placeholder="本站搜索"
                  v-model="search"
                  suffix-icon="el-icon-search"
                  
                  >
                </el-input> -->
                <div class="head">
                  <div @click="opentiao2" v-if="user==''">登录</div>
                  <div @click="opentiao" v-if="user==''">注册</div>
                  <div v-if="user!=''">您好，{{user}}</div>
                  <div @click="logout" v-if="user!=''">退出</div>
                  <!-- <img src="./assets/user.png" alt="">
                  <span>18514425351</span>-->
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div class="right-bottom">
          <ul>
            <li
              @mouseenter="hover(11)"
              @mouseleave="hover(0)"
              @click="$router.push({path:'/'})" 
              :class="$route.path=='/'?'active':''"
            >
              <span>首页</span>
              <div class="line" v-show="i==11||$route.path=='/'"></div>
            </li>
            <li 
              @mouseenter="hover(2)"
              @mouseleave="hover(0)"
              @click="$router.push({path:'/news'})" 
              :class="$route.path=='/news'||$route.path=='/newsDetails'?'active':''">
              <span>国才动态</span>
              <div class="line" v-show="i==2||$route.path=='/news'"></div>
              <!-- <i class="el-icon-arrow-down"></i> -->
            </li>
            <li 
              @mouseenter="hover(3)"
              @mouseleave="hover(0)" 
              :class="$route.path=='/aboutETICSyllabus'||$route.path=='/aboutETICArrangement'||$route.path=='/aboutETICAdvantages'||$route.path=='/aboutETICBackground'?'active':''">
              <span>了解国才</span>
              <i class="el-icon-arrow-down"></i>
              <div class="line" v-show="i==3||$route.path=='/aboutETICSyllabus'||$route.path=='/aboutETICArrangement'||$route.path=='/aboutETICAdvantages'||$route.path=='/aboutETICBackground'"></div>
              <div class="dropdown" v-show="i==3">
                <div @click="$router.push({path:'/aboutETICBackground'})">研发背景</div>
                <div @click="$router.push({path:'/aboutETICAdvantages'})">理念特色</div>
                <div @click="$router.push({path:'/aboutETICSyllabus'})">考试介绍</div>
                <div @click="$router.push({path:'/aboutETICArrangement'})">考试安排</div>
                <!-- <div >大家说国才</div> -->
              </div>
            </li>
            <li
              @mouseenter="hover(5)"
              @mouseleave="hover(0)"
              :class=" $route.path=='/scoreReport'||$route.path=='/certificate'|| $route.path=='/testRegistration'||$route.path=='/scoreReportList'|| $route.path=='/faq'||$route.path=='/achievement'||$route.path=='/testScores'||$route.path=='/certificateVerification'?'active':''"
            >
              <span>报考国才</span>
              <div class="line" v-show="i==5||
                    $route.path=='/achievement'||
                    $route.path=='/testRegistration'||
                    $route.path=='/certificateVerification'||
                    $route.path=='/scoreReportList'||
                    $route.path=='/faq'||
                    $route.path=='/certificate'||
                    $route.path=='/scoreReport'||
                    $route.path=='/testScores'"></div>
              <i class="el-icon-arrow-down"></i>
              <div class="dropdown" v-show="i==5">
                <div  @click="$router.push({path:'/testRegistration'})">我要报名</div>
                <div @click="$router.push({path:'/testScores'})">成绩查询</div>
                <div  @click="$router.push({path:'/certificateVerification'})">证书查验</div>
                <div @click="$router.push({path:'/faq'})">常见问题</div>
              </div>
            </li>
            <li
              @mouseenter="hover(6)"
              @mouseleave="hover(0)"
              :class="$route.path=='/ready'||$route.path=='/moreMaterials'||$route.path=='/books'?'active':''"
            >
              <span>备考国才</span>
              <div class="line" v-show="i==6||$route.path=='/ready'||$route.path=='/courses'||$route.path=='/books'||$route.path=='/moreMaterials'"></div>
              <i class="el-icon-arrow-down"></i>
              <div class="dropdown" v-show="i==6">
                <div @click="$router.push({path:'/books'})">备考图书</div>
                <div @click="$router.push({path:'/courses'})">在线课程</div>
                <div @click="dialogVisible = true">模考系统</div>
                <div @click="$router.push({path:'/moreMaterials'})">更多资源</div>
              </div>
            </li>
            <li
              @mouseenter="hover(7)"
              @mouseleave="hover(0)"
              @click="$router.push({path:'/jobs'})"
              :class="$route.path=='/jobs'||$route.path=='/jobDetails'?'active':''"
            >
              <span>国才就业</span>
              <div class="line" v-show="i==7||$route.path=='/jobs'||$route.path=='/jobDetails'"></div>
            </li>
            <li
              @mouseenter="hover(8)"
              @mouseleave="hover(0)"
              @click="$router.push({path:'/ICI'})"
              :class="$route.path=='/ICI'?'active':''">
              <span>国才学院</span>
              <!-- <i class="el-icon-arrow-down"></i> -->
              <div class="line" v-show="i==8||$route.path=='/ICI'"></div>
            </li>
            <li
              @mouseenter="hover(9)"
              @mouseleave="hover(0)"
              @click="$router.push({path:'/download'})"
              :class="$route.path=='/download'||$route.path=='/download'?'active':''">
              <span>下载专区</span>
              <div class="line" v-show="i==9||$route.path=='/download'||$route.path=='/download'"></div>
              <!-- <i class="el-icon-arrow-down"></i> -->
            </li>
          </ul>
        </div>
      </div>
      
    </div>
    <div class="content">
      <router-view />
    </div>
    <el-dialog
        :visible.sync="dialogVisible"
        :close-on-click-modal="false"
        :show-close="false"
        width="30%"
        >
        <img style="width:350px;" src="../assets/e0f002ec975fec4220788747e84e035.jpg" alt="">
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>
<script>
import { getMenu } from '@/request/api';// 导入我们的api接口
import { getDongtai } from '@/request/api';// 导入我们的api接口 获取动态
import { login } from '@/request/api';// 导入我们的api接口 获取动态
import axios from 'axios';
import qs from 'qs';


export default {
  components: {getMenu,login},
  data(){
    return{
      search:"",//搜索项
      i:0,
      list:"",
      dialogVisible:false,
      user:"",
      url:"",
    }
  },
  methods: {
    seardong(){
      let obj={
        funcId:2,
        pageSize:6,
        pageNum:1,
        title:this.search
      }
      getDongtai(obj).then(res => {
        let list1=JSON.parse(res.data);
        console.log(list1,123);
        if(list1.length!=0){
          this.$router.push({"path":`/news?search=${this.search}`})
        }else{
          this.$message.error('暂无信息');
        }
      })
    },
    hover(index){
      this.i=index
    },
    opentiao(){
      window.open('http://classo.claonline.cn/sso/register')
    },
    opentiao2(){
      let url=window.location.href;
      // let url1=url.split("?");
      window.location.href = "https://classo.claonline.cn/sso/login?service=" + encodeURIComponent("http://localhost:1111/")
    },
    getmenu(){
      getMenu({
        }).then(res => {
            // 获取数据成功后的其他操作
            this.list=JSON.parse(res.data);
            console.log(res.data);
            // console.log(this.list)            
      })
    },
    indexlogin(){
      if(this.user==""){
        var ticket = this.$route.query.ticket;
        var queryid = this.$route.query.id;
        let url=window.location.href;
        let url1=url.split("?")[0];
        var data={};
        if(queryid!=undefined){
          data={
            "ticket":ticket,
            "targetService":url1+'?id='+queryid
          }
        }else{
          data={
            "ticket":ticket,
            "targetService":"http://localhost:1111/"
          }
        }
        if(ticket){
            axios({
              method: 'post',
              url: "http://139.219.15.110:8087/auth/sso/serviceValidate",
              data: qs.stringify(data),
              headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                'cache-control': 'no-cache',
              },
            })
            .then(res=>{
              console.log(res.data);
              if(res.data.success){
                sessionStorage.setItem("username",res.data.data.nickName)
                this.user=res.data.data.nickName;
              }
              //去掉地址栏中的ticket信息 
              if(queryid){
                 var shortURL=url1+'?id='+queryid
              }else{
                 var shortURL=url1
              }
              history.replaceState(null,null,shortURL)    
            })
        }
      }
      
    },
    logout(){
      this.user="";
      sessionStorage.removeItem("username")
      let url=window.location.href;
      // var queryid = this.$route.query.id;
      // let url1=url.split("?")[0];
      // let url1=url.split("?");
      // let q=url1[2];
      // console.log(q,798)
      // console.log(url1,123)
      // let t=url1[1].split("#")[0];
      // let r=url1[1].split("#")[1];
      // if(q){
      //   var shortURL=top.location.href.substring(0,top.location.href.indexOf('?'))+'#'+r+"?"+q; 
      // }else{
      //   var shortURL=top.location.href.substring(0,top.location.href.indexOf('?'))+'#'+r; 
      // }
      window.location.href = "https://sso.unipus.cn/sso/logout?service=" + encodeURIComponent("http://localhost:1111/");
      // if(queryid){
      //     var shortURL=url1+'?id='+queryid
      // }else{
      //     var shortURL=url
      // }
      var shortURL=top.location.href.substring(0,top.location.href.indexOf('?'))
      history.replaceState(null,null,shortURL)    
    }
  },
  created(){
    if(sessionStorage.getItem("username")){
      this.user=sessionStorage.getItem("username");
    }else{
      this.indexlogin();
    }
    if(this.$route.query.logout){
      console.log(132)
      let url=window.location.href;
      let url1=url.split("?")[0];
      history.replaceState(null,null,url1)    
    }
  }
}
</script>
<style lang="less">
a,div,img,span,p,input,h1,h2,h3,h4,h5,h6,header,body,footer,ul,li{
  margin:0px;
  padding:0px;
  box-sizing: border-box;
}
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  width: 100%;
  height:135px;
  background:#2F3234;
  position: fixed;
  top:0px;
  z-index: 1000;
  .main{
    margin:0 auto;
    color:rgba(255,255,255,1);
    // justify-content: space-between;
    .top{
      width: 1200px;
      height: 87px;
      display: flex;
      margin:0 auto; 
      align-items: center; 
      .logo{
        margin-right: 30px;
        img{
          width:93px;
          height:64px;
        }
        cursor: pointer;
      }
      .right{
        width:1078px;
        .right-top{
          width: 100%;
          font-size: 15px;
          display: flex;
          font-family:MicrosoftYaHei;
          font-weight:400;
          justify-content: space-between;
          border-left: 1px solid #54595c;
          padding:10px 0px;
          padding-left: 30px;
          .text{
            text-align: left;
          }
          .search{
            width: 300px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            font-size: 14px;
            .head{
              width: 200px;
              display: flex;
              align-items: center;
              margin-left: 30px;
              justify-content:flex-end;
              div{
                cursor: pointer;
                font-size: 13px;
                margin-left: 30px;
              }
              div:hover{
                color:#D92A37
              }
              img{
                width: 28px;
                height: 26px;
                margin-right:10px;
              }
            }
            .el-input--mini .el-input__inner{
              width: 200px;
              background:#2F3234;
              border-radius: 20px;
              outline: none;
              font-size: 11px;
              color: #fff;
            }
          }
        }
      }
    }
    .right-bottom{
        height:52px;
        background: #fff;
        width: 100%;
        color:#414141;
        box-shadow:0px 1px 27px 0px rgba(0, 0, 0, 0.2);
        ul{
          width: 1200px;
          list-style: none;
          display: flex;
          font-size: 17px;
          justify-content: space-between;
          font-family:MicrosoftYaHei;
          margin:0 auto;
          padding-left: 123px;
          li{
            width: 100px;
            cursor: pointer;
            transition-duration: 0.2s;
            position: relative;
            text-align: center;
            height: 52px;
            line-height: 52px;
            i{
              font-size: 12px;
              margin-left: 2px;
            }
            .line{
              width: 100%;
              height: 4px;
              background:#D92A37;
              position: absolute;
              top:48px;
            }
            .dropdown{
              background:rgba(255,255,255,1);
              box-shadow:0px 2px 7px 0px rgba(60,11,12,0.15);
              margin-top:0px;
              div{
                width: 100px;
                font-size:15px;
                font-family:MicrosoftYaHei;
                font-weight:400;
                color:rgba(102,102,102,1);
                line-height:31px;
                padding:5px 0;
              }
              div:hover{
                background:rgba(254,245,245,1);
                color:rgba(223,64,70,1);
              }
            }
          }
          li:hover{
            color: #D92A37;
          }
          li:hover .line{
            display: block;
          }
          .active{
            color:#D92A37;
          }
        }
      }
  }
}
.content{
  margin-top:105px;
}
</style>

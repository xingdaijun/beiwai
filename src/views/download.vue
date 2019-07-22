<template>
  <div class="download">
    <div class="model" v-if="loading" 
    v-loading="loading"
    element-loading-text="正在下载中"
    element-loading-background="rgba(0, 0, 0, 0.2)"
    ></div>
    <fix-right></fix-right>
    <div class="search">
      <el-input
        style="width:300px;"
        size="mini"
        placeholder="本栏目搜索"
        v-model="search"
        suffix-icon="el-icon-search"
        @change="downsearch"
        >
      </el-input>
    </div>
    <div class="file"  v-for="(item,i) in downList" :key="i">
      <div class="title">{{item.type}}</div>
      <div class="list" v-if="item.data.length==0">暂无下载资料</div>
      <div class="list" v-for="(item2,i2) in item.data" :key="i2">
        <div class="item" >
          <img src="../assets/wenjian.png" alt="">
          <div class="name" @click="down(item2.fileurl,item2.title)">{{item2.title}}</div>
          <a href=""></a>
        </div>
        <div class="date">{{item2.createtime}}</div>
      </div>
    </div>
      
  </div>
</template>
<script>
import fixRight from '../components/fix'
import footer11 from '../components/footer'
import { getdownType } from '@/request/api';// 导入我们的api接口 获取下载类别
import { getdownTypeList } from '@/request/api';// 导入我们的api接口 获取下载类别的列表
import { download } from '@/request/api';// 导入我们的api接口 //下载
  import axios from 'axios'


export default {
  name: 'dynamic',
  components: {
    fixRight,footer11,getdownType,getdownTypeList,download
  },
  data(){
    return{
      search:"",
      downList:[],
      loading:false,
    }
    
  },
  methods:{
    downsearch(){
      this.getlist();
    },
    //下载
    down(url1,title){
      this.loading=true;
      let that=this;
      const form = {"fileUrl":url1}  //数据
      axios({ // 用axios发送post请求
        method: 'post',
        url: 'http://139.219.15.110:8087/auth/down/downFile/', // 请求地址
        data: form, // 参数
        responseType: 'blob' // 表明返回服务器返回的数据类型
      })
        .then((res) => { // 处理返回的文件流
          const content = res
          const blob = new Blob([content])
          const fileName = title;
          // if ('download' in document.createElement('a')) { // 非IE下载
          //   const elink = document.createElement('a')
          //   elink.download = fileName
          //   elink.style.display = 'none'
          //   elink.href = URL.createObjectURL(blob)
          //   document.body.appendChild(elink)
          //   elink.click()
          //   URL.revokeObjectURL(elink.href) // 释放URL 对象
          //   document.body.removeChild(elink)
          // } else { // IE10+下载
          //   navigator.msSaveBlob(blob, fileName)
          // }
          let url = window.URL.createObjectURL(res.data)
          let link = document.createElement('a')
          link.style.display = 'none'
          link.href = url
          link.setAttribute('download', fileName)
          document.body.appendChild(link)
          link.click();
          that.loading=false;
      })
    },
    
    //获取下载列表
    getlist(){
      let list=[];
      getdownTypeList(JSON.stringify({
        "title":this.search
      }
      )).then(res=>{
        console.log(res.data);
        let list=[
            {
              "type":"申请表单",
              "funcId":48,
              "data":[]
            },
            {
              "type":"了解国才",
              "funcId":49,
              "data":[]
            },
            {
              "type":"国才考务",
              "funcId":46,
              "data":[]
            },
            {
              "type":"四川新三级考务",
              "funcId":47,
              "data":[]
            },
            
            
        ];
        for(let i=0;i<res.data.length;i++){
          res.data[i].createtime=res.data[i].createtime.slice(0,10)
          for(let a=0;a<list.length;a++){
              if(res.data[i].funcId==list[a].funcId){
                list[a].data[list[a].data.length]=res.data[i]
              }
          }
        }
        console.log(list,132);
        this.downList=list;
      })
    }
  },
  created(){
    this.getlist();
  }
}
</script>
<style lang="less">
  .download{
    width: 100%;
    height: 100%;
    background:rgba(247,247,247,1);
    margin-top:115px;
    padding-top:75px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    .search{
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      top:180px;
      left: 50%;
      margin-left: -600px;
      padding-left:900px;
    }
    .model{
      position: fixed;
      width:100%;
      height: 100%;
      background:rgba(0, 0, 0, 0.7);
      top:0px;
      left:0px;
      z-index:500;
    }
    .file{
      width:1197px;
      background:rgba(255,255,255,1);
      padding:34px;
      margin:30px auto;
      .title{
        width:150px;
        font-size:20px;
        color:rgba(51,51,51,1);
        margin-bottom: 24px;
        text-align: left;
      }
      .list{
          display: flex;
          width: 100%;
          align-items: center;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 20px;
        .item{
          display: flex;
          align-items: center;
          margin-right: 50px;
          img{
            width:33px;
            height:32px;
            margin-right: 19px;
          }
          div{
            font-size:16px;
            color:rgba(102,102,102,1);
            line-height:36px;
            text-align: left;
            cursor: pointer;
            
          }
          div:hover{
            color:#D92A37;
          }
        }
        .date{
          font-size: 14px;
          color: #bbbbbb;
        }
      }
      
    }
  }

</style>

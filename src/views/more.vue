<template>
  <div class="more2">
    <fix-right></fix-right>
    <div class="search">
      <el-input
        style="width:300px;"
        size="mini"
        placeholder="本栏目搜索"
        v-model="search"
        suffix-icon="el-icon-search"
        @change="moreserch"
        >
      </el-input>
    </div>
    <div class="b-item" v-for="(item,i) in list" :key="i">
      <div class="img1">
        <img  :src="item.fileUrl" alt="">
      </div>
      <div class="details">
        <div class="name">{{item.title}}</div>
        <div class="info" v-html="item.newCon"></div>
        <!-- <div class="download1">
          <div class="link" @click="open(ilink)" v-for="(ilink,i2) in item.outline" :key="i2">* {{ilink}}</div>
        </div> -->
      </div>
    </div>
     
  </div>
</template>
<script>
import fixRight from '../components/fix'
import footer11 from '../components/footer'
import { getbeikao } from '@/request/api';// 导入我们的api接口 获取国才学院内容
export default {
  name: 'dynamic',
  components: {
    fixRight,footer11 ,getbeikao
  },
  data(){
    return{
      list:[],
      search:"",
    }
  },
  methods:{
    open(link){
      console.log(link)
       window.open(`${link}`);
    },
    moreserch(){
      this.getdata();
    },
    getdata(){
      let obj={
        "funcId":33,
        "pageSize":10,
        "pageNum":1,
        "title":this.search
      }
      getbeikao(JSON.stringify(obj)).then(res => {
        let list1=JSON.parse(res.data);
        for(let a=0;a<list1.length;a++){
          list1[a].outline=list1[a].outline.split(',');
        }
        this.list=list1;
        console.log(this.list);
      })
    }
  },
  created(){
    this.getdata();
  }
}
</script>
<style lang="less">
  .more2{
    width: 100%;
    height: 100%;
    background:rgba(247,247,247,1);
    padding-top:75px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    .search{
      width: 1200px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      top:180px;
      left: 50%;
      margin-left: -600px;
      padding-left:900px;
    }
    .b-item{
      width:1202px;
      background:rgba(255,255,255,1);
      border:1px solid rgba(238,238,238,1);
      margin:40px auto;
      margin-bottom: 30px;
      padding:40px;
      display: flex;
      .img1{
        width: 230px;
        text-align: left;
        display:flex;
        align-items: center;
        img{
          width:100%;
        }
      }
      .details{
        width: 770px;
        margin-top:20px;
        margin-left: 50px;
        padding-left: 30px;
        .name{
          height:22px;
          font-size:22px;
          color:rgba(51,51,51,1);
        }
        >div{
          text-align: left;
        }
        .info{
          width:100%;
          font-size:14px;
          color:rgba(102,102,102,1);
          margin-top: 20px;
          line-height:25px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .download1{
          width:471px;
          font-size:12px;
          color:rgba(102,102,102,1);
          .link{
            color:#449BEB;
            text-decoration:underline;
            color:rgba(68,155,235,1);
            margin: 13px 0px;
            cursor: pointer;
            div{
              cursor: pointer;
            }
          }
        }
      }

    }

  }
</style>

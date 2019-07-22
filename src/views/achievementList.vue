<template>
  <div class="achievementList">
    <fix-right></fix-right>
    <div class="tit" v-if="type==1">国际人才英语考试</div>
    <div class="tit" v-if="type==2">四川新三级考试</div>
    <div class="list"  v-for="(item,index) in clist" :key="index" v-if="item.data!=''&&type==1">
      <div class="title">国才{{item.type}}</div>
      <div class="col" v-for="(item1,i2) in item.data" :key="i2">
        <div class="item" >
          <div class="msg">{{item1.examdate}}</div>
          <div class="btn" @click="see(item1.id)">点击查看</div>
        </div>
      </div>
    </div>
    <div class="list" v-if="type==2">
      <div class="title">四川新三级</div>
        <div class="col" v-for="(item,index) in clist" :key="index">
          <div class="item">
            <div class="msg">{{item.examdate}}</div>
            <div class="btn" @click="see(item.id)">点击查看</div>
          </div>
      </div>
    </div>
     
  </div>
</template>
<script>
import fixRight from '../components/fix'
import footer11 from '../components/footer'
import { getchengji } from '@/request/api';// 导入我们的api接口 查询成绩

export default {
  components: {
    fixRight,footer11
  },
  data(){
    return{
      clist:[],//成绩列表
      type:"",//是否是新三级考试
      name:"",
      idCard:"",
    }
  },
  methods:{
    see(id){
      this.$router.push({
        path: `/scoreReport?num=${this.type}&&id=${id}`
      })
    },
    //查询信息
    getInfo(){
      let obj={
        name:this.name,
        idnumber:this.idCard,
        type:this.type,
      }
      getchengji(obj).then(res => {
          console.log(res,789)
          let info=res.data;
          let list=[
                {
                  "type":"初级",
                  "data":[]
                },
                {
                  "type":"中级",
                  "data":[]
                },
                {
                  "type":"高级",
                  "data":[]
                },
                {
                  "type":"高端",
                  "data":[]
                },
                {
                  "type":"高翻笔译",
                  "data":[]
                },
                {
                  "type":"高翻同传",
                  "data":[]
                },{
                  "type":"高翻交传",
                  "data":[]
                }
            ];
          if(this.type==1){
            console.log(info,456)
            for(let i=0;i<res.data.length;i++){
              for(let a=0;a<list.length;a++){
                  if(res.data[i].grade==list[a].type){
                    list[a].data[list[a].data.length]=res.data[i]
                  }
              }
            }
            this.clist=list;
          }else{
            this.clist=res.data;
          }
          console.log(this.clist);
          console.log(this.clist.data,123)
      })
    },
  },
  created(){
    this.name = sessionStorage.getItem("name")
    this.idCard = sessionStorage.getItem("idnumber")
    this.type = this.$route.query.type
    console.log('name', this.name);
    console.log('idCard', this.idCard);
    console.log('type', this.type);
    this.getInfo();
  }
}
</script>
<style lang="less">
  .achievementList{
    width:100%;
    height:750px;
    background:rgba(247,247,247,1);
    padding-top:105px;
    // position: absolute;
    // margin-top:-105px;
    // z-index: 1;
    padding-bottom: 40px;
    .footer{
      margin-top:50px;
    }
    .tit{
      width: 1200px;
      font-size:22px;
      font-family:MicrosoftYaHei;
      font-weight:400;
      color:rgba(51,51,51,1);
      margin:0 auto;
      background:#ffffff;
      padding: 34px;
      text-align: left;
    }
    .list{
      width:1200px;
      background:rgba(255,255,255,1);
      margin:0 auto;
      text-align: left;
      padding-bottom: 30px;
      .title{
        width:100%;
        font-size:18px;
        font-family:MicrosoftYaHei;
        font-weight:bold;
        color:rgba(51,51,51,1);
        padding-bottom:22px;
        border-bottom: 1px solid rgba(238,238,238,1);
        margin-bottom: 15px;
        padding-left: 34px;
      }
      .col{
        width: 100%;
        padding:0 34px;
        .item{
          width: 100%;
          display: flex;
          justify-content: space-between;
          height: 50px;
          font-size:16px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(102,102,102,1);
          align-items: center;
          .btn{
            width:100px;
            height:35px;
            background:rgba(222,42,48,1);
            border-radius:5px;
            color:rgba(255,255,255,1);
            line-height:35px;
            text-align: center;
            cursor: pointer;
          }
          .btn:active{
            background:#c8141a;
          }
        }
        
      }
      .col:hover{
          background:#f7f7f7;
        }
      
      
    }
  }
</style>

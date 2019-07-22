 <template>
  <div class="classti">
    <fix-right></fix-right>
    <div class="b-title">
      <img src="../assets/home/mulu.png" alt="">
      <div @click="maodian(0)" id="div1" :class="num2==0?'active':''">项目背景</div>
      <div @click="maodian(1)" id="div2" :class="num2==1?'active':''">组织架构</div>
      <div @click="maodian(2)" id="div3" :class="num2==2?'active':''">课程体系</div>
      <div @click="maodian(3)" id="div4" :class="num2==3?'active':''">合作模式</div>
    </div>
    <div class="info">
      <div class="logo">
        <img src="../assets/da061ac1a3c0113200195d282a7a04a.png" alt="">
      </div>
      <div class="title" id="id1">
        一、项目背景
      </div>
      <div class="info1" >
        <img src="../assets/tupian2.png" alt="">
        <div>
          自1978年改革开放以来，中国不断推进国际化进程，深入参与国际协作分工与全球治理，其中包括2001年加入WTO、2008年举办北京奥运会、2010年举办上海世博会、2014年举办APEC峰会、2016年举办杭州G20峰会、2018年举办上海中国进博会等一系列事件，尤其是习总书记在2013年正式提出一带一路概念，标志着中国的国际化进程进入了全新阶段。
        </div>
      </div>
      <div class="info2">
        随着我国改革开放的不断深化和国际化趋势的不断加强，国际化人才成为时代发展、社会进步最重要的智力支撑。在国际化人才培养方面，习总书记曾明确提出：“参与全球治理需要一大批熟悉党和国家方针政策、了解我国国情、具有全球视野、熟练运用外语、通晓国际规则、精通国际谈判的专业人才”。越来越多的企业和高校将目光聚焦国际化人才培养领域。 <br>
        一直以来，外研社在支持教学、推动科研、协同创新、服务社会等方面进行了富有成效的探索，积极构建“教、学、测、评、研”五位一体的生态圈，依托图书、课程、测试、会议、赛事等优质资源，推动我国外语教育创新发展。国际人才英语考试（简称“国才考试”）是外研社在测评领域的重要尝试，取得了良好的育人与选人效果，获得了广泛的社会反响。在此基础上，外研社顺应时代发展潮流，针对高素质复合型国际化人才培养采取的又一重要战略举措，成立了外研社国际人才学院（简称国才学院，ICI），致力于为推进国际化进程的中国企业培养具有国际视野、通晓国际规则、熟练运用外语的国际化人才。<br>
        国才学院汇聚国内外企业界精英代表与学术界知名专家的智慧，以跨学科培养国际化复合型人才为理念，构建提升国际化语言与跨文化沟通能力、国际化产业实践能力 的“1（语言能力与 国际化能力提升课程）+X（产业研修课程）”课程体系，同时积极与业界、学界开展广泛合作，共同搭建国际化人才交流与培养平台，为企业提供精准的外语、思维、跨文化交际系统化解决方案，为高校外语教学改革提供包括课程内容、方案设计、专业测评、职前培训、实习就业的全生态支持体系。<br>
      </div>
      <div class="title" id="id2">
        二、组织架构
      </div>
      <div class="info3"  >
          院长：徐建中 <br>
          执行院长：贾毅 <br>
          专家智库：各领域精英代表，国内外教育专家，包括教育界、企业界、国家部委等 <br>
          师资力量：北外专家+企业高管+合作专家
      </div>
      <div class="title" id="id3">
        三、课程体系
      </div>
      <div class="info4"  >
        <div>“1+X” 课程体系采用国内 + 国际、线下 + 线上的混合学习方式，凝聚北外专家、合作专家、企业专家等师资力量，结合全球化产业类别实践，系统化提升学员的语言能力、思维能力与国际视野。</div>
        <div  style="text-align:center"><img src="../assets/tupian3.png" alt=""></div>
        
        <div style="color:#222222">职场外语能力系统化提升系列</div>
        <div>内容：选取 20+真实职场沟通任务，依据口语与写作教学理论，遵循信息有效传递模型，运用 AI 语言能力训练系统，全方位提升职场英文沟通表达能力。</div>     
        <div style="text-align:center">
          <img src="../assets/tupian4.png" alt="">
        </div>
        <div style="color:#222222">职场思维能力提升系列</div>
        <div>内容：基于理查德• 保罗的人类思维基本模型，结合自然科学、社会科学、管理科学与工程科学的研究成果，搭建职业典型沟通场景，形成国际化的职场沟通思维体系。</div>
        <div style="text-align:center">
          <img src="../assets/tupian5.png" alt="">
        </div>
        <div style="text-align:center">
          <img src="../assets/tupian6.png" alt="">
        </div>
        <div style="text-align:center">
          <img src="../assets/tupian7.png" alt="">
        </div>
        <div style="text-align:center;margin-top:19px;font-weight:bold;color:rgba(34,34,34,1);font-size:18px;margin-bottom:45px;">
          “1+X”课程体系课程列表（部分）
        </div>
      </div>
      <div class="title" id="id4">
        四、合作模式
      </div>
      <div class="info5"  >
        <div style="margin-right:75px;">
          <div style="font-weight:bold;">企业端：</div> 
          1. 标准化培训 <br>
          2. 定制化培训 <br>
          3. 行业课程共建 <br>
          4. 合作代理 
        </div>
        <div style="width:455px;">
          <div style="font-weight:bold;">高校端：</div> 
          1. 课程共建（国才学院可与高校联合共建本校特色化课程）<br>
          2. 课程采购 <br>
          3. 师资培训 
        </div>
      </div>
      <br>
      <div class="info6">
        <div class="type">案例</div>
        <br>
        <br>
        <div class="t-content">
          <div>
            <img src="../assets/tupian8.png" alt="">
            <div>2019北京世界园艺博览会礼宾团队培训项目</div>
          </div>
          <div>
            <img src="../assets/tupian9.png" alt="">
            <div>中国工商银行海外员工测评与培训项目</div>
          </div>
          <div>
            <img src="../assets/tupian10.png" alt="">
            <div>中国外运股份有限公司测评与培训项目</div>
          </div>
          <div>
            <img src="../assets/tupian11.png" alt="">
            <div>北京外企人力资源服务有限公司人力资源专业英文培训项目</div>
          </div>
          <div>
            <img src="../assets/tupian12.png" alt="">
            <div>世界经济论坛（达沃斯论坛）志愿者测评与培训项目</div>
          </div>
          <div>
            <img src="../assets/tupain13.png" alt="">
            <div>中国企业家论坛（亚布力论坛）志愿者测评与培训项目 </div>
          </div>

        </div>
      </div>
      <div class="info7">
        洽谈合作请联系： <br>
        <span @click="open2">国才学院贾老师：88819726 / jiayi@fltrp.com </span>
        <br>
        <span @click="open2">国才学院李老师：88819726 / lxfy@fltrp.com</span>
        
      </div>
    </div>
     
  </div>
</template>
<script>
import fixRight from '../components/fix'
import footer11 from '../components/footer'
import { guoCaixueyuan } from '@/request/api';// 导入我们的api接口 获取国才学院内容

export default {
  name: 'dynamic',
  components: {
    fixRight,footer11 , guoCaixueyuan
  },
  data(){
    return{
      list:[1,2,3,4],
      info:"",
      num2:0,
    }
  },
  methods:{
    maodian(n){
      if(n==0){
        this.num2=0
        let idScroll=document.getElementById("id1").offsetTop-165;
         document.documentElement.scrollTop=idScroll;
        console.log(idScroll,132)
      }
      if(n==1){
        this.num2=1
        let idScroll=document.getElementById("id2").offsetTop-165;
         document.documentElement.scrollTop=idScroll;
        console.log(idScroll,132)
      }
      if(n==2){
        this.num2=2
        let idScroll=document.getElementById("id3").offsetTop-165;
         document.documentElement.scrollTop=idScroll;
        console.log(idScroll,132)
      }
      if(n==3){
        this.num2=3
        let idScroll=document.getElementById("id4").offsetTop-165;
         document.documentElement.scrollTop=idScroll;
        console.log(idScroll,132)
      }
    },
    //获取国才学院内容
    getdata(){
      guoCaixueyuan({
        "funcId":16
      }).then(res => {
        console.log(res.data);
        this.info=JSON.parse(res.data);
        console.log(this.info);
      })
    },
    open2(){
      window.open("mailto:cla@claonline.cn")
    },
  },
  created(){
    // this.getdata();
  }
}
</script>
<style lang="less">
  .classti{
    width: 100%;
    height: 100%;
    background:rgba(247,247,247,1);
    padding-top:65px;
    padding-bottom: 40px;
    .b-title{
        width:1200px;
        height:40px;
        background:rgba(255,255,255,1);
        display: flex;
        padding-left: 42px;
        margin:0px auto 12px;
        font-size: 13px;
        align-items: center;
        img{
          width: 28px;
          height: 28px;
        }
        div{
          width:90px;
          font-size:16px;
          line-height:40px;
          margin-right: 20px;
          cursor: pointer;
        }
        .active{
          color:rgba(217,42,55,1);
        }
        div:hover{
          color:rgba(217,42,55,1);
        }
      }
    .info{
      width:1200px;
      background:rgba(255,255,255,1);
      margin:0 auto;
      text-align: left;
      padding:50px;
      font-family:MicrosoftYaHei;
     .logo{
       margin-bottom: 35px;
     }
     .title{
      width:120px;
      font-size:18px;
      font-weight:bold;
      color:rgba(51,51,51,1);
      border-bottom: 2px solid rgba(219,55,59,0.41);
      margin-bottom: 25px;
      padding-bottom: 5px;
     }
     .info1{
       width: 100%;
       display: flex;
       justify-content: space-around;
       margin-bottom: 20px;
       img{
         width: 731px;
         height: 302p;
       }
       div{
         width:327px;
          height:305px;
          font-size:16px;
          font-weight:400;
          color:rgba(102,102,102,1);
          line-height:38px;
       }
     }
     .info2{
      width:100%;
      height:413px;
      font-size:16px;
      font-weight:400;
      color:rgba(102,102,102,1);
      line-height:38px;
      margin-bottom: 44px;
     }
     .info3{
        width:632px;
        font-size:16px;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:38px;
        margin-bottom: 42px;
     }
     .info4{
      width:100%;
      font-size:16px;
      font-weight:400;
      color:rgba(102,102,102,1);
      line-height:38px;
      letter-spacing: 2px;
     }
     .info5{
       display: flex;
       margin-bottom: 20px;
       >div{
         width:127px;
        height:160px;
        font-size:16px;
        font-family:MicrosoftYaHei;
        color:rgba(102,102,102,1);
        line-height:36px;
       }
        
     }
     .info6{
       width:100%;
        .type{
          width:46px;
          height:16px;
          font-size:16px;
          font-family:MicrosoftYaHei;
          font-weight:bold;
          color:rgba(102,102,102,1);
          line-height:36px;
        }
        .t-content{
          display: flex;
            flex-wrap: wrap;
            
          >div{
            width: 33.33%;
            text-align: center;
            margin-bottom: 61px;
            img{
              width:118px;
              height: 95px;
            }
            div{
                font-size:12px;
                font-family:MicrosoftYaHei;
                font-weight:400;
                color:rgba(0,0,0,1);
                line-height:36px;
            }
          }
          
        }
     }
     .info7{
      width:387px;
      height:90px;
      font-size:16px;
      font-family:MicrosoftYaHei;
      color:rgba(102,102,102,1);
      line-height:36px;
      margin-bottom: 86px;
      span{
        cursor: pointer;
      }
     }
    }
  }
</style>


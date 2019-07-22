<template>
  <div class="characteristic">
      <fix-right></fix-right>
    <div class="b-content">
      <div class="b-title">
        <img src="../assets/home/mulu.png" alt="">
        <div @click="maodian(0)" id="div1" :class="num2==0?'active':''">国才理念</div>
        <div @click="maodian(1)" id="div2" :class="num2==1?'active':''">国才优势</div>
      </div>
      <div class="first-info" id="id1">
        <div class="title">国才理念</div>
        <div style="font-size:18px;color:rgba(102,102,102,1);margin-bottom:34px;">聚焦沟通 · 服务职场 · 权威认证</div>
        <div class="title2">1、聚焦沟通</div>
        <img id="right" src="../assets/5a4b4f558e664b90485c750fc717616.jpg" alt="">
        <div class="info1">国才考试关注在职场运用英语完成各类沟通任务的能力，主要包括三个维度：国际视野与协商合作能力、跨文化理解与表达能力、分析问题与解决问题的能力。
         <br><br> 国际视野强调全球化的视野、包容的胸怀、完善的知识结构，协商合作能力体现发展、共赢的意识。分析问题与解决问题的能力指用逻辑的、系统的和有序的方法解决问题。跨文化理解与表达能力要求理解自身文化和其他文化，了解各种文化的异同，有效沟通。
         <br> <br>在国才考试中，国际视野主要通过考试所设的各项任务的话题内容来体现；协商合作、分析与解决问题以及跨文化理解与表达的能力，则通过口头与书面沟通的各类典型任务来考查。                       
        </div>
        <br>
        <div class="title2">2、服务职场</div>
        <div class="info2">国才考试旨在评价、认定考生在各类国际交流活动中的英语沟通能力，为各行各业用人单位招聘、选拔人才提供参考依据，并促进高校培养符合新时代职场需求的人才，提升人才培养质量。
          <br><br>
          国才考试充分体现“分类优秀”的原则，分为国才初级、国才中级、国才高级、国才高端和国才高翻五个类别，通过设计真实、典型的职场沟通情境考试任务，满足不同层次国际交流活动的不同需求。
                        
        </div>
        <div class="title2">3、权威认证</div>
        <div class="info3">
          <img src="../assets/5f756fe1ca20806727a64c37b424d38.png" alt="">
          <div>国才考试由北京外国语大学中国外语测评中心推出，凝聚国内外语言测评专家、学者的智慧，同时，在设计研发过程中得到了亚洲基础设施投资银行、国家开发银行、中国南方航空股份有限公司以及一些国家机关、国际组织、跨国公司、外资企业、国内大型企事业单位管理层、人力资源部门的认可与支持，是评价国际化人才英语沟通能力的“行业标准”。
            <br><br>
            考生参加国才考试的结果将与国际人才英语能力等级标准体系相对应。国际人才英语能力等级标准是中国外语测评中心专门为评价行业人才英语沟通能力研发的一套标准体系，包含9个级别，与不同级别的岗位需求相对应。通过查看相应级别的语言能力描述，考生可以了解自身的语言水平以及处理相应工作的能力；用人单位可以根据明确的岗位需求，择优录用人才。
          </div>
        </div>
      </div>
      <div class="secound-info" id="id2">
        <div class="stitle">国才优势</div>
        <div class="box">
          <div class="div1" 
              @mouseenter="hover(1)"
              @mouseleave="hover(0)">
            <div class="model" :style="num==1?'height: 440px;width: 367px;':'height: 0px;width:0px;'"></div>
            <div class="d-info1" :style="num==1?'top:70px':''">
              <img src="../assets/background/4657998c0edbc3509cfba699e8e6977.png" alt="">
              <div style="font-size:25px;">考查综合能力</div>
              <div style="font-size:16px;">英语好≠能力强</div>
            </div>
            <div class="d-info2" :style="num==1?'top:170px;height:237px;':''">
              ■  国才考试考查国际化人才应具备的核心素养——英语沟通能力，包括：国际视野与协商合作能力、跨文化理解与表达能力、分析问题与解决问题的能力。<br>
              ■  考试强调产出导向，融语言、思维和文化于一体，考查考生语言能力、沟通能力、思辨能力、跨文化能力、协作能力、学习能力等职场情境下运用英语的综合能力。
            </div>
          </div>
          <div class="div2"
              @mouseenter="hover(2)"
              @mouseleave="hover(0)">
            <div class="model" :style="num==2?'height: 100%;width: 100%;':'height: 0px;width:0px;'"></div>
            <div class="d-info1" :style="num==2?'top:70px;':''">
              <img src="../assets/background/2.png" alt="">
              <div style="font-size:25px;">体现“分类优秀”</div>
              <div style="font-size:16px;">行行都能出状元</div>
            </div>
            <div class="d-info2" :style="num==2?'top:170px;height:237px;':''">
              依据“分类优秀”原则，构建多层次的国际化人才评价体系，设计国才初级、国才中级、国才高级、国才高端和国才高翻五个类别，满足各级各类、各行各业人才证明英语沟通能力的不同需求。
            </div>
          </div>
          <div class="div3"
              @mouseenter="hover(3)"
              @mouseleave="hover(0)">
            <div class="model" :style="num==3?'height: 474px;width: 366px;':'height: 0px;width:0px;'"></div>
            <div class="d-info1" :style="num==3?'top:70px;':''">
              <img src="../assets/background/light.png" alt="">
              <div style="font-size:25px;">注重实际应用</div>
              <div style="font-size:16px;">拒绝纸上谈兵</div>
            </div>
            <div class="d-info2" :style="num==3?'top:170px;height:237px;':''">
              ■  不同于常见的听、说、读、写单项训练，国才考试口头沟通和书面沟通并重，输入与输出能力结合，符合真实语言情境的要求。
              <br>
              ■  依据真实职场情境，设计典型沟通任务，突出行动导向，考查考生在既定情境中以特定身份完成指定目标、解决实际职场问题的能力。
              <br>
              ■  要求考生在机考环境下用英语完成实战任务，符合职场无纸化办公趋势。
              <br>
            </div>
          </div>
          <div class="div4"
              @mouseenter="hover(4)"
              @mouseleave="hover(0)">
            <div class="model" :style="num==4?'height: 458px;width: 366px;':'height: 0px;width:0px;'"></div>
            <div class="d-info1" :style="num==4?'top:60px;':''">
              <img src="../assets/background/5.png" alt="">
              <div style="font-size:25px;">促进人才培养</div>
              <div style="font-size:16px;">1000+高校合作</div>            
            </div>
            <div class="d-info2" :style="num==4?'top:170px;height:auto;':''">
              <b>■ 理念促进：</b> 国才考试理念促进高校创新外语教学模式和人才培养机制，引导教学由知识传授向能力提升转变。
              <br>
              <b>■ 方案改革：</b> 众多院校将国才考试纳入人才培养方案，改革课程设置与学分制度，鼓励学生参加考试。
              <br>
              <b>■ 合作培养：</b> 合作培养：100+院校设立国际人才培养基地，1000+院校建立合作，共同培养国际化人才。
            </div>
          </div>
          <div class="div5"
              @mouseenter="hover(5)"
              @mouseleave="hover(0)">
            <div class="model" :style="num==5?'height: 568px;width: 367px;':'height: 0px;width:0px;'"></div>
            <div class="d-info1" :style="num==5?'top:30px;':''">
              <img src="../assets/background/4.png" alt="">
              <div style="font-size:25px;">更多精彩机遇</div>
              <div style="font-size:16px;">遇见国才，开启不一样的人生</div>
            </div>
            
            <div class="d-info2" :style="num==5?'top:130px;height:auto;':''">
              <b>■ 国才奖学金：</b>从2018年上半年国才考试起，凡在各级别国才考试中获得“优秀”的考生，将获得中国外语测评中心提供的等同于该级别报名费的全额奖学金及荣誉证书。
              <br>
              <b>■ 免费重考：</b>从2018年上半年国才考试起，凡报考国才高端、国才高翻的考生，如首次考试未通过，可在下一考季免费重考一次。
              <br>
              <b>■ 国才招聘：</b>提供求职绿色通道，国才考生专享内推渠道、优先录用机会，海量职位助力职场发展，“职”通精彩未来。
              <br>
              <b>■ 企业参观：</b>带你走进名企，了解企业文化，与大咖亲密接触，现场投递简历，人民日报社、华为、中青博联、巨力集团、三元食品、宜信财富、学而思网校等众多名企等你来探访。
              <br>
              <b>■ 国才直播：</b>打造精品直播课，邀请国才培训师为你辅导备考，邀请优秀考生与你分享考试心得，邀请企业管理者和HR为你分析行业动态。
            </div>
          </div>
          <div class="div6"
              @mouseenter="hover(6)"
              @mouseleave="hover(0)">
            <div class="model" :style="num==6?'height: 470px;width: 369px;':'height: 0px;width:0px;'"></div>
            <div class="d-info1" :style="num==6?'top:50px;':''">
              <img src="../assets/background/3.png" alt="">
              <div style="font-size:25px;">多家名企护航</div>
              <div style="font-size:16px;">2000+企业合作</div>
            </div>
            <div class="d-info2" :style="num==6?'top:150px;height:auto;':''">
              ■ 亚投行、国开行、南方航空及多家国家机关、国际组织、跨国公司、国内大型企事业单位管理层、人力资源部门在国才考试研发过程中给予认可与支持。
              <br>
              ■ 中国外语测评中心与万宝盛华、FESCO、实习僧、猎聘校园、职优你等人力资源企业展开长期稳定合作，推荐优秀考生优先获得实习和工作机会。
              <br>
              ■ 源源不断的用人单位选择国才考试，依托国际化人才库招贤纳士，优先录用国才证书持有者。
            </div>
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
      num:0,
      num2:0,
    }
  },
  methods:{
    hover(n){
      this.num=n;
    },
    maodian(n){
      if(n==0){
        this.num2=0
        let idScroll=document.getElementById("id1").offsetTop-165;
         document.documentElement.scrollTop=idScroll;
        console.log(idScroll,132)
      }else{
        this.num2=1
        let idScroll=document.getElementById("id2").offsetTop-165;
         document.documentElement.scrollTop=idScroll;
        console.log(idScroll,132)
      }
    }
  },
  created(){
  }
}
</script>
<style lang="less">
  .characteristic{
    width: 100%;
    height: 100%;
    background:rgba(247,247,247,1);
    padding-top:45px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    .b-content{
      width:1200px;
      margin:40px auto;
      .b-title{
        width:1200px;
        height:30px;
        background:rgba(255,255,255,1);
        display: flex;
        padding-left: 42px;
        margin-bottom: 12px;
        align-items: center;
        img{
          width: 24px;
          margin-top:2px;
        }
        div{
          width:90px;
          font-size:16px;
          line-height:30px;
          margin-right: 20px;
          cursor: pointer;
        }
        .active{
          color:rgba(217,42,55,1);
        }
      }
      .b-title:hover{
        color:rgba(217,42,55,1)
      }
      .first-info{
        width:1200px;
        background:rgba(255,255,255,1);
        padding:55px;
        text-align: left;
        position: relative;
        margin-bottom: 30px;
        .title{
          font-size:22px;
          color:rgba(51,51,51,1);
          margin-bottom: 18px;
        }
        #right{
          position: absolute;
          top: 165px;
          right: 98px;
          width: 400px;
        }
        .title2{
          width: 120px;
          font-size:18px;
          font-weight:bold;
          color:rgba(51,51,51,1);
          padding-bottom: 5px;
          border-bottom: 2px solid rgba(219, 55, 59, 0.41);
          margin-bottom: 20px;
        }
        .info1{
          width:576px;
          height:257px;
          font-size:16px;
          color:rgba(102,102,102,1);
          line-height:30px;
          margin-bottom: 65px;
        }
        .info2{
          width:100%;
          height:107px;
          font-size:16px;
          color:rgba(102,102,102,1);
          line-height:30px;
          margin-bottom: 63px;
        }
        .info3{
          width: 100%;
          display: flex;
          img{
            width:637px;
            height:403px;
            position: relative;
            left: -15px;
          }
          div{
            width:481px;
            height:347px;
            font-size:16px;
            color:rgba(102,102,102,1);
            line-height:30px;
            position: relative;
            top:3px;
          }
        }
      }
      .secound-info{
        width:1200px;
        height:1268px;
        background:rgba(255,255,255,1);
        padding:36px 0px;
        text-align: left;
        position: relative;
        .stitle{
          font-size:22px;
          color:rgba(51,51,51,1);
          margin-bottom: 18px;
          margin-left: 39px;
        }
        .box{
          width: 100%;
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          img{
            width: 36px;
            height: 36px;
          }
          >div{
            background-size: 100% 100%;
            text-align: center;
            color:#FFF;
            position: relative;
            .model{
              position: absolute;
              background:rgba(0, 0, 0, 0.5);
              transition: all 0.3s ease 0s;
            }
            .d-info1{
              transition: all 0.3s ease 0s;
              position: absolute;
              width:100%;
            }
            .d-info2{
              position: absolute;
              height:0px;
              overflow: hidden;
              font-size:14px;
              color:rgba(255,255,255,1);
              line-height:25px;
              transition: all 0.5s ease 0s;
              text-align: left;
            }
          }
          .div1{
            width: 397px;
            height: 476px;
            background: url('../assets/background/zu114.png') no-repeat;
            .model{
              width: 367px;
              height: 440px;
              top: 10px;
              left: 16px;
            }
            .d-info1{
              top:200px;
            }
            .d-info2{
              top:260px;
              left:50px;
              width:318px;
            }
          }
          .div2{
            width: 366px;
            height: 354px;
            background: url('../assets/background/zu119.png') no-repeat;
            top:11px;
            .model{
              width: 0;
              height: 0;
              top: 0px;
              left: 0px;
            }
            .d-info1{
              top:133px;
            }
            .d-info2{
              top:200px;
              left:30px;
              width:318px;
            }
          }
          .div3{
            width: 400px;
            height: 510px;
            background: url('../assets/background/zu118.png') no-repeat;
            top:2px;
            .model{
              top: 10px;
              left: 18px;
            }
            .d-info1{
              width:100%;
              position: absolute;
              top:200px;
            }
            .d-info2{
              top:270px;
              left:50px;
              width:318px;
              height:0px;
            }
          }
          .div4{
            width: 400px;
            height: 510px;
            background: url('../assets/background/zu117.png') no-repeat;
            top:2px;
            position: absolute;
            top:546px;
            left: 0px;
            .model{
              width: 366px;
              height: 458px;
              top: 8px;
              left: 18px;;
            }
            .d-info1{
              width:100%;
              position: absolute;
              top:180px;
            }
            .d-info2{
              top:250px;
              left:50px;
              width:318px;
            }
          }
          .div5{
            width: 400px;
            height: 600px;
            background: url('../assets/background/zu116.png') no-repeat;
            background-size: 100% 100%;
            top:2px;
            position: absolute;
            top:462px;
            left: 399px;
            .model{
              width: 367px;
              height: 503px;
              top: 8px;
              left: 16px;
            }
            .d-info1{
              width:100%;
              position: absolute;
              top:180px;
            }
            .d-info2{
              top:250px;
              left:50px;
              width:318px;
            }
          }
          .div6{
            width: 366px;
            height: 470px;
            background: url('../assets/background/f84136c42ffd2bc473aa423668d428a.png') no-repeat;
            top:2px;
            position: absolute;
            top:594px;
            left: 818px;
            .model{
              width: 367px;
              height:470px;
            }
            .d-info1{
              width:100%;
              position: absolute;
              top:180px;
            }
            .d-info2{
              top:250px;
              left:35px;
              width:318px;
            }
          }
        }
      }
    }
  }
</style>
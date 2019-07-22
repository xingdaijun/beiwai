<template>
  <div class="enterprise">
    <fix-right></fix-right>
    <div class="e-content">
      <div class="e-left">
        <img src="../assets/img1/top.png" alt="">
        <div class="info1">
          我们实时捕捉企业人才管理痛点，以<span @click="$router.push({path:'/aboutETICBackground'})" style="font-weight: bold; cursor: pointer;
          color:#F56868">国际人才英语考试</span>和<span  @click="$router.push({path:'/ICI'})" style="font-weight: bold;
          color:#F56868;cursor: pointer;">国际人才学院</span>为抓手，以拥有<span style="font-weight: bold;
          color:#F56868;">100000+ 国才证书持有者</span>的国际化人才库为基础，提供集选才招聘、员工内训、测评选拔于一体的全链条人才服务体系，致力于为企业培养、考查、选拔具有国际视野，熟练运用外语，通晓国际规则，精通国际谈判的国际化人才。
        </div>
        <div class="info2">
          <div class="info-item1" >
            <div>
              <div class="type">
                <img class="img1" src="../assets/img1/tuceng123465798.png" alt="">
                <div>招聘</div>
              </div>
              <div class="ty-info">节约选才成本<br>提高招聘效率</div>
              <div class="info-content">
                经<span style="color:#F56868">国才考试</span> 考查、认证的国才证书持有者，强语言、善思辨，能沟通，具备跨文化意识和能力，能够用英语分析和解决职场实际问题。基于100000+ 国才证书持有者等优秀人才，我们建立了体量庞大的国际化人才库，可以为企业提供精准、优质、高效的人才选拔服务。</div>
            </div>
            <div class="info3-item">
              <div >
                <div class="item-title">寻找国才</div>
                <div class="item-content">我们在国际化人才库中为您的企业免费输送、精准适配您所需的人才，使您招聘环节省时、省力、事半功倍。</div>
              </div>
              <div style="top:35px">
                <div class="item-title">发布岗位</div>
                <div class="item-content">您可以在国才专属招聘渠道，免费投放招聘信息，让您的岗位需求到达更多人才手中。</div>
              </div>
              <div style="top:75px">
                <div class="item-title">线上直播</div>
                <div class="item-content">您可以做客【国才直播】线上平台，面向全国100000+ 国际化人才和广大在校大学生传播企业文化，为企业拓宽招聘渠道、增强社会影响力。</div>
              </div>
              <div style="top:105px">
                <div class="item-title">企业参观</div>
                <div class="item-content">我们带领国际化人才走进企业，体验职场氛围、感受企业文化，让您与优质人才建立面对面的沟通方式，抢占招聘先机。</div>
              </div>
              <div style="top:140px" class="active">
                <div class="item-title ">校企合作</div>
                <div class="item-content">我们每年举办多种形式的校园宣讲会、双选会、招聘会和校企座谈活动等，帮助您的企业定点、定向招募优质人才。 </div>
              </div>
            </div>
          </div>
          <div class="info-item1" style="left:33.33%;background:rgba(233,233,233,0.22);">
            <div>
              <div class="type">
                <img class="img1" src="../assets/img1/flow-determine.png" alt="">
                <div>培训</div>
              </div>
              <div class="ty-info">
                强化员工国际化能力<br>助推企业国际发展
              </div>
              <div class="info-content">
                <span style="color:#F56868">国才学院</span>汇聚国内外企业界精英代表和外语教育领域知名专家、教师，以跨学科培养国际化复合型人才理念构建了“1+X”课程体系，可以为企业提供精准的外语、思维、跨文化交际系统化解决方案，包括标准化培训和定制化培训等方案。
              </div>
            </div>
            <div class="info3-item">
              <div >
                <div  class="item-title">“1+X”课程体系</div>
                <div class="item-content">国才学院“1+X”课程体系为您的员工提供融合语言能力、思维能力和国际视野的标准化课程，全方位提升员工的外语语言、思辨能力、跨文化沟通能力和国际化产业实践能力。</div>
              </div>
              <div class="long">
                <div class="item-title">定制化培训</div>
                <div class="item-content">您可以向我们提出您的需求，我们将结合您的行业特色和国际环境的发展趋势，为您的员工量身定制培训方案。</div>
              </div>
            </div>
          </div>
          <div class="info-item1" style="left:66.66%" id="hover" >
            <div>
              <div class="type">
                <img class="img1" src="../assets/img1/peixunjihua.png" alt="">
                <div>测评</div>
              </div>
              <div class="ty-info">
                科学考查英语能力<br>遴选国际化职场人才
              </div>
              <div class="info-content">
                由北京外国语大学中国外语测评中心研发的<span style="color:#F56868">国际人才能力等级标准</span>和<span style="color:#F56868">国际化人才培养理念</span>，可以为企业在选人用人过程中提供科学有效的评价标准和测评体系，真正选拔出能使用英语处理业务的国际化人才。
              </div>
            </div>
            <div class="info3-item">
            <div >
                <div  class="item-title">国才考试</div>
                <div class="item-content">您可以组织员工参加国才考试，将考试成绩作为评价员工国际化水平的标准。</div>
              </div>
              <div  class="long">
                <div class="item-title">定制化测评</div>
                <div class="item-content">您可以向我们提出您的需求，我们为您定制英语能力测评试题，为您的企业在晋升考核、海外派遣、国际合作等方面进行员工遴选提供可靠标准。</div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="info3">
          
          <div class="info3-item">
            <div style="width:132px;">
              <div style="width:122px;" class="item-title">“1+X”课程</div>
              <div class="item-content">您可以组织员工参加“1+X”课程体系，全方位提升员工的国际化语言与跨文化沟通能力和国际化产业实践能力。</div>
            </div>
            <div style="top:50px;width:100px" class="long">
              <div style="width:100px;" class="item-title">定制化培训</div>
              <div class="item-content">您可以向我们提出您的需求，我们会在已有培训课程的基础上，根据不同企业、不同高校的独特需求，结合所属行业、国际环境的能力需要，为其量身定制英语能力测评试题。</div>
            </div>
          </div>
          <div class="info3-item">
            <div style="width:132px;">
              <div style="width:132px;" class="item-title">参加国才考试</div>
              <div class="item-content">您可以组织员工参加国才考试，将考试成绩作为评价员工国际化水平的标准。</div>
            </div>
            <div style="top:50px;width:100px" class="long">
              <div style="width:100px;" class="item-title">定制化测评</div>
              <div class="item-content">您可以向我们提出您的需求，我们为您定制英语能力测评试题，为晋升考核、海外派遣、国际合作等项目的员工遴选提供可靠标准，真正选拔出能使用英语处理业务的国际化人才。</div>
            </div>
          </div>
        </div> -->
        <div class="info-title" style="width:80px;">合作案例</div>
        <div class="info4">
          <div class="info-item">
            <img src="../assets/img1/11.png" alt="">.
            <div class="model">
              <div class="m-title">人民日报社</div>
              <div class="m-content">
                人民日报新媒体中心与全媒体平台在国才考生入社参观等方面与国才展开多种合作
              </div>
            </div>
          </div>
          <div class="info-item">
            <img src="../assets/img1/122.png" alt="">
            <div class="model">
              <div class="m-title">中国工商银行</div>
              <div class="m-content">
                国才受中国工商银行之托，依据“服务职场、聚焦沟通”的设计理念，结合金融类国际化人才的个性化能力需求，为其定制外派人才选拔测评方案。
              </div>
            </div>
          </div>
          <div class="info-item">
            <img src="../assets/img1/33.png" alt="">
            <div class="model">
              <div class="m-title">中国外运股份有限公司</div>
              <div class="m-content">
                中国外运股份有限公司联合国才，组织空中招聘宣讲会，并采用国才标准化试题组卷，作为公司校招的笔试试题，筛选应聘者。此外，国才为其定制了国际新闻（双语）写作与编译课程培训。
              </div>
            </div>
          </div>
          <div class="info-item">
            <img src="../assets/img1/44.png" alt="">
            <div class="model">
              <div class="m-title">国家开发银行</div>
              <div class="m-content">
                国家开发银行组织中层管理干部参加国才考试。
              </div>
            </div>
          </div>
          <div class="info-item">
            <img src="../assets/img1/155.png" alt="">
            <div class="model">
              <div class="m-title">北京外企人力资源有限公司（FESCO）</div>
              <div class="m-content">
                国才受北京外企人力资源服务中心（ FESCO ）之托，为“扶 U 职上”项目招募国际化人才，并为 FESCO 外籍人员服务团队提供定制化试题服务。
              </div>
            </div>
          </div>
          <div class="info-item">
            <img src="../assets/img1/66.png" alt="">
            <div class="model">
              <div class="m-title">实习僧</div>
              <div class="m-content">
                实习僧招聘网站每周为国才考生精选实习岗位，不定期组织校内国才招聘专场。
              </div>
            </div>
          </div>
          
        </div>
        <div class="info-title" style="width:118px;">更多合作企业</div>
        <el-carousel trigger="click" height="150px" style="margin:0px 0px 30px;padding:20px;background:#fff" :autoplay="false">
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

      <div class="e-right">
        <div class="title">申请合作</div>
        <div class="inp">
          <div class="name"> 
            <span>企</span>
            <span>业</span>
            <span>名</span>
            <span>称</span>
            <span>:</span>
          </div>
          <input type="text" placeholder="企业名称" v-model="obj.enterprise">
        </div>
        <div class="inp">
          <div class="name">
            <span>联</span>
            <span>系</span>
            <span>人</span>
            <span>:</span>
          </div>
          <input type="text" placeholder="联系人名字"  v-model="obj.person">
        </div>
        <div class="inp">
          <div class="name">
            <span>联</span>
            <span>系</span>
            <span>人</span>
            <span>职</span>
            <span>位</span>
            <span>:</span>
          </div>
          <input type="text" placeholder="联系人职位"  v-model="obj.position">
        </div>
        <div class="inp">
          <div class="name">
            <span>联</span>
            <span>系</span>
            <span>人</span>
            <span>电</span>
            <span>话</span>
            <span>:</span>
          </div>
          <input type="text" placeholder="联系人电话" v-model="obj.phone">
        </div>
        <div class="inp">
          <div class="name">
            <span>联</span>
            <span>系</span>
            <span>人</span>
            <span>邮</span>
            <span>箱</span>
            <span>:</span>
          </div>
          <input type="text" placeholder="联系人邮箱"  v-model="obj.email">
        </div>
        <div class="inp">
          <div class="name">
            <span>合</span>
            <span>作</span>
            <span>意</span>
            <span>向</span>
            <span>:</span>
          </div>
          <textarea name="" id="" cols="30" rows="10" v-model="obj.intention"></textarea>
        </div>
        <div class="btn" @click="submit">
          提交
        </div>
      </div> 
    </div>
  </div>
</template>
<script>
import fixRight from '../components/fix'
import footer11 from '../components/footer'
import { baocun } from '@/request/api';// 导入我们的api接口 获取动态

export default {
  name: 'dynamic',
  components: {
    fixRight,footer11,baocun
  },
  data(){
    return{
      list:[1,2,3,4,5,7],
      obj:{
        "enterprise":"",
        "person":"",
        "position":"",
        "phone":"",
        "email":"",
        "intention":"",
      },

    }
  },
  methods:{
    submit(){
      if(this.obj.enterprise==""){
        this.$message.error('企业名称不能为空');
        return;
      }
      if(this.obj.person==""){
        this.$message.error('联系人姓名不能为空');
        return;
      }
      // if(this.obj.position==""){
      //   this.$message.error('联系人职位不能为空');
      //   return;
      // }
      if(this.obj.phone==""){
        this.$message.error('联系人电话不能为空');
        return;
      }

      // if(this.obj.email==""){
      //   this.$message.error('联系人邮箱不能为空');
      //   return;
      // }
      // if(this.obj.intention==""){
      //   this.$message.error('合作意向不能为空');
      //   return;
      // }
      console.log(this.obj);
      baocun(this.obj).then(res=>{
        console.log(res);
        if(res.success){
          this.$message({
            message: '提交成功',
            type: 'success'
          });
        }else{
          this.$message.error('提交失败');
        }
        
      })
    }
  }

}
</script>
<style lang="less">
  .enterprise{
    width: 100%;
    height: 100%;
    background:rgba(247,247,247,1);
    padding-bottom: 40px;
    .e-content{
      width:1200px;
      margin:0 auto;
      display: flex;
      justify-content: space-between;
      padding-top:80px;
      font-family:MicrosoftYaHei;
      font-weight:400;
      .e-left{
        width:760px;
        background:rgba(255,255,255,1);
        font-size:16px;
        color:rgba(102,102,102,1);
        line-height:36px;
        padding: 38px;
        text-align: left;
        .e-title{
          font-size:22px;
          color:rgba(51,51,51,1);
          text-align: center;
          
        }
        .info-title{
          width: 90px;
          font-size:18px;
          color:rgba(51,51,51,1);
          border-bottom: 2px solid rgba(219,55,59,0.41);
          margin-bottom: 25px;
          font-weight: bold;
        }
        .info1{
          font-size:16px;
          color:rgba(102,102,102,1);
          line-height:25px;
          margin-bottom: 30px;
        }
        .info2{
          width: 100%;
          height: 233px;
          display: flex;
          margin-bottom: 360px;
          // box-shadow:0px 1px 27px 0px rgba(0, 0, 0, 0.1);
          position: relative;
          transition: all 0.3s ease 0s;
          justify-content: space-between;

          .info-item1{
            width:31%;
            height: 540px;
            background:rgba(203,247,255,0.22);
            padding:22px;
            >div{
            }
            .type{
              display: flex;
              align-items: center;
              margin-bottom: 5px;
              img{
                width: 23px;
                height: 25px;
                margin-right: 8px;
              }
              .img2{
                display: none;
              }
              div{
                width:43px;
                font-size:20px;
                font-weight:bold;
                color:rgba(45,114,203,1);
              }
            }
            .ty-info{
              line-height: 25px;
              font-size:15px;
              font-weight:400;
              color:rgba(48,116,202,1);
              margin-bottom: 10px;
            }
            .info-content{
              width: 100%;
              font-size:12px;
              line-height: 22px;
              font-size:13px;
              color:rgba(50,50,50,0.85);
            }
          }
          .info3-item{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            position: relative;
            >div{
              width:100%;
              transition: all 0.3s ease 0s;
              .item-title{
                font-size:14px;
                font-weight:400;
                text-decoration:underline;
                color:rgba(48,116,202,1);
                line-height:36px;
                transition: all 0.3s ease 0s;
              }
              .item-content{
                width: 100%;
                height: 0px;
                font-size:13px;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height:26px;
                overflow: hidden;
                transition: all 0.3s ease 0s;
              }
            }
            >div:hover{
              width:305px;
              height:167px;
              background:rgba(255,255,255,1);
              border:1px solid rgba(238,238,238,1);
              box-shadow:0px 0px 7px 0px rgba(57,57,57,0.17);
              border-radius:3px;
              padding:10px 15px;
              position: absolute;
              z-index: 300;
            }
            >div:hover .item-content{
              width: 100%;
              height: 300px;
            }
          }
          
        }
        .info4{
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          flex-wrap:wrap; 
          .info-item{
            width: 217px;
            height: 250px;
            position: relative;
            cursor: pointer;
            margin-bottom:20px; 
            img{
              width: 100%;
              height: 100%;
            }
            .model{
              width: 100%;
              height: 0;
              overflow: hidden;
              position: absolute;
              top:220px;
              left: 0px;
              background: rgba(0, 0, 0, 0.5);
              color: #fff;
              transition: all 0.3s ease 0s;
              .m-title{
                font-size: 14px;
                text-align: center;
                padding-top: 20px;
                font-weight: bold;
                line-height: 25px;
              }
              .m-content{
                font-size: 12px;
                padding: 10px 20px;
                line-height: 25px;
              }
            }
          }
          .info-item:hover .model{
            top:0px;
            height: 100%;
          }
        }
      }
      .e-right{
        width:409px;
        height: 760px;
        background:rgba(255,255,255,1);
        position: relative;
        .title{
          font-size:16px;
          font-weight:bold;
          color:rgba(51,51,51,1);
          line-height:36px;
          margin:0 auto;
          padding:10px 0px;
          border-bottom: 1px solid rgba(238,238,238,1);
        }
        .inp{
          width:90%;
          height:32px;
          border-radius:5px;
          margin: 20px auto;
          display: flex;
          justify-content: space-between;
          line-height: 32px;
          font-size: 16px;
          flex-wrap: wrap;
          .name{
            width:97px;
            display: flex;
            justify-content: space-between;
          }
          input{
            width:234px;
            height:32px;
            background:rgba(247,247,247,1);
            border-radius:5px;
            outline: none;
            border: none;
            text-indent: 10px;
            font-size: 14px;
          }
          textarea{
            width:348px;
            height:191px;
            background:rgba(247,247,247,1);
            border-radius:5px;
            resize:none;
            margin-top:13px;
            border:none;
            outline: none;
            font-size: 15px;
            font-family:MicrosoftYaHei;
            font-weight:400;
            padding:10px;
          }
          
        }
        .btn{
          width:110px;
          height:37px;
          background:rgba(222,42,48,1);
          border-radius:5px;
          margin:300px auto 100px;
          text-align: center;
          line-height: 37px;
          font-size:16px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(255,255,255,1);
          cursor: pointer;
        }
        .btn:active{
          background:#c8141a;
        }
      }
    }
  }
</style>

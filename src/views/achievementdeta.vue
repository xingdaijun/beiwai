<template>
  <div class="achievementdeta" v-show="isover">
    <fix-right></fix-right>
    <div class="btnbox">
      <el-tooltip class="btn btn2" v-if="info.scoregrade=='不合格'" :class="info.scoregrade=='不合格'?'jinyong':''" effect="dark" content="成绩达到标准方可获取证书" placement="top" @click='downLoad'>
        <el-button  @click="see">查看证书</el-button>
      </el-tooltip>
      <div class="btn btn2" @click="see" v-if="info.scoregrade!='不合格'">查看证书</div>
      <el-tooltip class="btn btn1" effect="dark" content="点击下载到本地默认路径" placement="top" @click='downLoad'>
        <el-button @click="downLoad">下载电子版成绩单</el-button>
      </el-tooltip>
    </div>
    <div class="bg1" v-if="info.subject=='国际人才英语考试'">
      <div class="title">
        <div class="t1">{{info.subject=='国际人才英语考试'?'国际人才英语考试':'四川省大学英语新三级考试'}} <span v-if="info.subject=='国际人才英语考试'">( {{info.grade}} )</span> </div>
        <div class="t2">成绩报告单</div>
        <div class="t3">Score Report</div>
      </div>
      <div class="userinfo">
        <div class="name">姓&#12288;&#12288;名&#8194;:&#8194;{{info.name}}</div>
        <div class="idnum">证件号码&#8194;:&#8194;{{info.idnumber}}</div>
        <div class="date">考试日期&#8194;:&#8194;{{info.examdate}}</div>
      </div>
      <div class="chengji">
        <div class="dengji">
          <div class="type">考试成绩</div>
        </div>
        <div class="en">Scores</div>
        <div class="cjdeta" v-if="info.grade=='初级'||info.grade=='中级'||info.grade=='高级'||info.grade=='高端'">
          <div class="item" style="width:178px;">
            <div class="i-type">口头沟通</div>
            <div class="fenshu">{{Math.floor(info.verbal)}}</div>
          </div>
          <div class="item" style="width:220px;">
            <div class="i-type">书面沟通</div>
            <div class="fenshu">{{Math.floor(info.written)}}</div>
          </div>
          <div class="item" style="width:160px;">
            <div class="i-type">总分</div>
            <div class="fenshu">{{Math.floor(info.sum)}}</div>
          </div>
        </div>

        <div class="cjdeta" v-if="info.grade=='高翻笔译'||info.grade=='高翻交传'||info.grade=='高翻同传'">
          <div class="item" style="width:178px;">
            <div class="i-type">英译汉</div>
            <div class="fenshu">{{Math.floor(info.verbal)}}</div>
          </div>
          <div class="item" style="width:220px;">
            <div class="i-type">汉译英</div>
            <div class="fenshu">{{Math.floor(info.written)}}</div>
          </div>
          <div class="item" style="width:160px;">
            <div class="i-type">总分</div>
            <div class="fenshu">{{Math.floor(info.sum)}}</div>
          </div>
        </div>
      </div>
      <div class="chengji2">
        <div class="type">成绩等级</div>
        <div class="en">Grade</div>
        <div class="cjdj">{{info.scoregrade}}</div>
      </div>
      <div class="text">
        <div>
          国际人才英语考试（简称国才考试），英文名称 English Test for International Communication（ETIC），是北京外国语大学中国外语测评中心研发的英语沟通能力认证体系。
        </div>
        <div>
          国才考试凝聚国内外语言测评研究者与企事业单位管理者的智慧，更新人才评价标准，设计典型职场沟通任务，考查国际人才应具备的核心素养——<b>英语沟通能力</b>，主要包括三个维度：国际视野与协商合作能力、跨文化理解与表达能力、分析问题与解决问题的能力。
        </div>
        <div>
          国才考试体现“分类优秀”的原则，设置国才初级、国才中级、国才高级、国才高端、国才高翻（笔译）、国才高翻（同传）、国才高翻（交传），评价、认定考生在不同工作岗位和工作场合中，运用英语开展工作的能力。
        </div>
      </div>
      <div class="text2">
        北京外国语大学中国外语测评中心
      </div>
    </div>
    <div class="bg" v-if="info.subject!='国际人才英语考试'">
      <div class="title">
        <div class="t1">{{info.subject=='国际人才英语考试'?'国际人才英语考试':'四川省大学英语新三级考试'}} <span v-if="info.subject=='国际人才英语考试'">( {{info.grade}} )</span> </div>
        <div class="t2">成绩报告单</div>
        <div class="t3">Score Report</div>
      </div>
      <div class="userinfo">
        <div class="name">姓&#12288;&#12288;名&#8194;:&#8194;{{info.name}}</div>
        <div class="idnum">证件号码&#8194;:&#8194;{{info.idnumber}}</div>
        <div class="date">考试日期&#8194;:&#8194;{{info.examdate}}</div>
      </div>
      <div class="chengji">
        <div class="dengji">
          <div class="line"></div>
          <div class="type">成绩等级</div>
          <div class='line'></div>
        </div>
        <div class="en">Grade</div>
        <div class="cjdj">{{info.scoregrade}}</div>
      </div>
      <div class="chengji" v-if="info.subject=='国际人才英语考试'">
        <div class="dengji">
          <div class="line" ></div>
          <div class="type">考试成绩</div>
          <div class='line' ></div>
        </div>
        <div class="en">Scores</div>
        <div class="cjdeta" v-if="info.grade=='初级'||info.grade=='中级'||info.grade=='高级'||info.grade=='高端'">
          <div class="item">
            <div class="i-type">口头沟通</div>
            <div class="fenshu">{{Math.floor(info.verbal)}}</div>
          </div>
          <div class="item">
            <div class="i-type">书面沟通</div>
            <div class="fenshu">{{Math.floor(info.written)}}</div>
          </div>
          <div class="item">
            <div class="i-type">总分</div>
            <div class="fenshu">{{Math.floor(info.sum)}}</div>
          </div>
        </div>

        <div class="cjdeta" v-if="info.grade=='高翻笔译'||info.grade=='高翻交传'||info.grade=='高翻同传'">
          <div class="item">
            <div class="i-type">英译汉</div>
            <div class="fenshu">{{Math.floor(info.verbal)}}</div>
          </div>
          <div class="item">
            <div class="i-type">汉译英</div>
            <div class="fenshu">{{Math.floor(info.written)}}</div>
          </div>
          <div class="item">
            <div class="i-type">总分</div>
            <div class="fenshu">{{Math.floor(info.sum)}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- //下载用副本 -->
    <div class="bg" id='downLoad' v-if="info.subject!='国际人才英语考试'" style="
      position:absolute;left:-1500px;transform:rotate(90deg);
      -ms-transform:rotate(90deg); 	/* IE 9 */
      -moz-transform:rotate(90deg); 	/* Firefox */
      -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
      -o-transform:rotate(90deg); ">
      <div class="title">
        <div class="t1">{{info.subject=='国际人才英语考试'?'国际人才英语考试':'四川省大学英语新三级考试'}} <span v-if="info.grade!='四川省大学英语'">( {{info.grade}} )</span> </div>
        <div class="t2">成绩报告单</div>
        <div class="t3">Score Report</div>
      </div>
      <div class="userinfo">
        <div class="name">姓&#12288;&#12288;名&#8194;:&#8194;{{info.name}}</div>
        <div class="idnum">证件号码&#8194;:&#8194;{{info.idnumber}}</div>
        <div class="date">考试日期&#8194;:&#8194;{{info.examdate}}</div>
      </div>
      <div class="chengji">
        <div class="dengji">
          <div class="line"></div>
          <div class="type">成绩等级</div>
          <div class='line'></div>
        </div>
        <div class="en">Grade</div>
        <div class="cjdj">{{info.scoregrade}}</div>
      </div>
      <div class="chengji" v-if="info.subject=='国际人才英语考试'">
        <div class="dengji">
          <div class="line" ></div>
          <div class="type">考试成绩</div>
          <div class='line' ></div>
        </div>
        <div class="en">Scores</div>
        <div class="cjdeta" v-if="info.grade=='初级'||info.grade=='中级'||info.grade=='高级'||info.grade=='高端'">
          <div class="item">
            <div class="i-type">口头沟通</div>
            <div class="fenshu">{{Math.floor(info.verbal) }}</div>
          </div>
          <div class="item">
            <div class="i-type">书面沟通</div>
            <div class="fenshu">{{Math.floor(info.written)}}</div>
          </div>
          <div class="item">
            <div class="i-type">总分</div>
            <div class="fenshu">{{Math.floor(info.sum)}}</div>
          </div>
        </div>

        <div class="cjdeta" v-if="info.grade=='高翻笔译'||info.grade=='高翻交传'||info.grade=='高翻同传'">
          <div class="item">
            <div class="i-type">英译汉</div>
            <div class="fenshu">{{Math.floor(info.verbal)}}</div>
          </div>
          <div class="item">
            <div class="i-type">汉译英</div>
            <div class="fenshu">{{Math.floor(info.written)}}</div>
          </div>
          <div class="item">
            <div class="i-type">总分</div>
            <div class="fenshu">{{Math.floor(info.sum)}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg1" id='downLoad' v-if="info.subject=='国际人才英语考试'"
      style="
        position:absolute;left:-1500px;transform:rotate(90deg);
        -ms-transform:rotate(90deg); 	/* IE 9 */
        -moz-transform:rotate(90deg); 	/* Firefox */
        -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
        -o-transform:rotate(90deg); "
      >
        <div class="title">
          <div class="t1">{{info.subject=='国际人才英语考试'?'国际人才英语考试':'四川省大学英语新三级考试'}} <span v-if="info.subject=='国际人才英语考试'">( {{info.grade}} )</span> </div>
          <div class="t2">成绩报告单</div>
          <div class="t3">Score Report</div>
        </div>
        <div class="userinfo">
          <div class="name">姓&#12288;&#12288;名&#8194;:&#8194;{{info.name}}</div>
          <div class="idnum">证件号码&#8194;:&#8194;{{info.idnumber}}</div>
          <div class="date">考试日期&#8194;:&#8194;{{info.examdate}}</div>
        </div>
        <div class="chengji">
          <div class="dengji">
            <div class="type">考试成绩</div>
          </div>
          <div class="en">Scores</div>
          <div class="cjdeta" v-if="info.grade=='初级'||info.grade=='中级'||info.grade=='高级'||info.grade=='高端'">
            <div class="item" style="width:178px;">
              <div class="i-type">口头沟通</div>
              <div class="fenshu">{{Math.floor(info.verbal)}}</div>
            </div>
            <div class="item" style="width:220px;">
              <div class="i-type">书面沟通</div>
              <div class="fenshu">{{Math.floor(info.written)}}</div>
            </div>
            <div class="item" style="width:160px;">
              <div class="i-type">总分</div>
              <div class="fenshu">{{Math.floor(info.sum)}}</div>
            </div>
          </div>

          <div class="cjdeta" v-if="info.grade=='高翻笔译'||info.grade=='高翻交传'||info.grade=='高翻同传'">
            <div class="item" style="width:178px;">
              <div class="i-type">英译汉</div>
              <div class="fenshu">{{Math.floor(info.verbal)}}</div>
            </div>
            <div class="item" style="width:220px;">
              <div class="i-type">汉译英</div>
              <div class="fenshu">{{Math.floor(info.written)}}</div>
            </div>
            <div class="item" style="width:160px;">
              <div class="i-type">总分</div>
              <div class="fenshu">{{Math.floor(info.sum)}}</div>
            </div>
          </div>
        </div>
        <div class="chengji2">
          <div class="type">成绩等级</div>
          <div class="en">Grade</div>
          <div class="cjdj">{{info.scoregrade}}</div>
        </div>
        <div class="text">
          <div>
            国际人才英语考试（简称国才考试），英文名称 English Test for International Communication（ETIC），是北京外国语大学中国外语测评中心研发的英语沟通能力认证体系。
          </div>
          <div>
            国才考试凝聚国内外语言测评研究者与企事业单位管理者的智慧，更新人才评价标准，设计典型职场沟通任务，考查国际人才应具备的核心素养——<b>英语沟通能力</b>，主要包括三个维度：国际视野与协商合作能力、跨文化理解与表达能力、分析问题与解决问题的能力。
          </div>
          <div>
            国才考试体现“分类优秀”的原则，设置国才初级、国才中级、国才高级、国才高端、国才高翻（笔译）、国才高翻（同传）、国才高翻（交传），评价、认定考生在不同工作岗位和工作场合中，运用英语开展工作的能力。
          </div>
        </div>
        <div class="text2">
          北京外国语大学中国外语测评中心
        </div>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
        :show-close="false"
      width="30%"
      >
      <div style="font-size:14px;padding: 0px 57px;">
        <div style="text-align:left;margin-bottom:10px">参加2019年5月11日之前的国才考试，且达到获得证书条件的考生，中国外语测评中心均已发放纸质证书。</div>
        <div style="text-align:left;">如需补办纸质证书，或申请电子证书，请扫描下方二维码，关注国才考试微信公众号，进入公众号后留言“申请国才证书”获取申请办法。</div>
        <img src="../assets/2ad6050f238fb9e480ebb6e09e4669f.jpg" alt="">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">知道了</el-button>
      </span>
    </el-dialog>
    <el-dialog
      :visible.sync="dialogVisible2"
      :close-on-click-modal="false"
        :show-close="false"
      width="500px"
      >
      <div style="font-size:14px;padding: 0px 57px;">
        <div style="text-align:left;margin-bottom:10px">参加四川省大学英语新三级考试，且成绩达到合格及以上的考生，中国外语测评中心均颁发纸质证书。</div>
        <div style="text-align:left;">如考生需要补办纸质证书，或申请电子证书，请扫描下方二维码，关注国才考试微信公众号，进入公众号后留言“申请新三级证书”获取申请办法。</div>
        <img src="../assets/2ad6050f238fb9e480ebb6e09e4669f.jpg" alt="">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible2 = false">知道了</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import fixRight from '../components/fix'
import footer11 from '../components/footer'
import { getcjdetail } from '@/request/api';// 导入我们的api接口 查询成绩


export default {
  name: 'dynamic',
  components: {
    fixRight,footer11,getcjdetail
  },
  data(){
    return{
      isnew:'',//是否是新三级
      ismodel2:false,//遮罩层
      liucheng2:0,//流程
      text:"",//标题文本
      isneed:"1",//是否需要发票
      isgeren:"0",//是否是个人
      id:"",
      info:"",
      isYear:false,
      newtime:"",
      dialogVisible:false,
      dialogVisible2:false,
      isover:false,
    }
  },
  methods:{
    //查看证书
    see(){
      if(this.info.scoregrade=='不合格'){
        return;
      }
      if(this.isYear==false&&this.info.subject=='国际人才英语考试'){
        this.dialogVisible=true
        return;
      }
      if(this.info.subject!='国际人才英语考试'){
        this.dialogVisible2=true
        return;
      }
      let time=this.info.examdate.split("-");
        this.newtime=`${time[0]}年${time[1]}月${time[2]}日`;
        sessionStorage.setItem("examTime",this.newtime);
        sessionStorage.setItem("subject",this.info.grade);
        this.$router.push({
          path: `/certificate`
        })
    },
    //查询信息
    getInfo(){
      let obj={
        id:this.id
      }
      getcjdetail(obj).then(res => {
          let info1=JSON.parse(res.data);
          console.log(info1);
          this.info=info1;
          let time=this.info.examdate.split("-");
          this.newtime=`${time[0]}年${time[1]}月${time[2]}日`;
          if(time[0]=="2019"){
            this.isYear=true;
          }
          this.isover=true;
      })
    },
    downLoad () {
      var canvas =document.getElementById('downLoad')
      html2canvas(canvas).then(function(canvas) {
        var dataURL = canvas.toDataURL("JPEG")
        var contentWidth = canvas.width;
        var contentHeight = canvas.height;

        //一页pdf显示html页面生成的canvas高度;
        var pageHeight = contentWidth / 592.28 * 841.89;
        //未生成pdf的html页面高度
        var leftHeight = contentHeight;
        //pdf页面偏移
        var position = 0;
        //html页面生成的c在pdf中图片的宽高（a4纸的尺寸[595.28,841.89]）
        var imgWidth = 595.28;
        var imgHeight = 592.28 / contentWidth * contentHeight;

        var pdf = new jspdf('', 'pt', 'a4');
        console.log(pdf)
        pdf.addImage(dataURL, 'JPEG', 0, 0,imgWidth, imgHeight);
        // pdf.save(`${that.info.subject}-${that.info.grade}-${that.info.namezh}.pdf`);
        pdf.save(`成绩单.pdf`);

      });
    }
  },
  created(){
    this.id=this.$route.query.id;
    this.getInfo();
  }
}
</script>
<style lang="less">
  @font-face {
    font-family:lanting;
    src: url(../assets/font/lanting.ttf);
  }
  .achievementdeta{
    width: 100%;
    height: 100%;
    background:rgba(238,234,223,0.15);
    padding-top:100px;
    font-family: lanting;
    .btnbox{
      width: 1200px;
      height: 35px;;
      margin:10px auto;
      text-align: right;
      .btn{
        float: right;
        height:35px;
        margin-right: 15px;
        background:rgba(222,42,48,1);
        border-radius:5px;
        color:rgba(255,255,255,1);
        text-align: center;
        cursor: pointer;
        line-height: 35px;
      }
      .jinyong{
        background:#7E7E7E;
        border:none;
        color:#fff;
      }
      .btn1{
        text-align: center;
        line-height: 0px;
      }
      .btn1:active{
        background:#c8141a;
        
      }
      .btn2{
        padding:0 20px;
        line-height: 35px;
        height: 33.5px;
        margin-top:1px;
        font-size: 14px;
      }
      .el-button{
        padding:0px 15px;
      }
    }
    .model{
      position: fixed;
      width: 100%;
      height: 100%;
      background:rgba(0,0,0,0.5);
      top:0px;
      z-index: 100;
      .kuang{
        width:520px;
        position: absolute;
        top:50%;
        left:50%;
        margin-top:-190px;
        margin-left:-260px;
        border-radius:5px;
        overflow: hidden;
        .close{
          position: absolute;
          top:16px;
          right:20px;
          width: 14px;
          height: 14px;
          cursor: pointer;
        }
        .title{
          width:520px;
          height:47px;
          background:rgba(222,42,48,1);
          font-size:18px;
          font-weight:normal;
          color:rgba(255,255,255,1);
          line-height:47px;
        }
        .details{
          width:520px;
          background:rgba(255,255,255,1);
          padding:28px 64px 42px;
          .item{
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            margin-bottom: 20px;
            .left2{
              width:116px;
              height:16px;
              font-size:16px;
              font-weight:400;
              color:rgba(51,51,51,1);
              line-height:16px;
              display: flex;
              justify-content: space-between;
            }
            input{
              width:256px;
              height:32px;
              background:rgba(247,247,247,1);
              border-radius:5px;
              outline: none;
              border:none;
              padding-left: 15px;
              font-size:15px;
              font-weight:400;
              color:rgba(153,153,153,1);
              margin-left: 20px;

            }
            .right2{
              margin-left: 8px;
              width: 280px;
              text-align: left;
            }
          }
          .erweima{
            margin-top:40px;
            div{
              text-align: left;
            }
            .img{
              width:135px;
              height:136px;
              border:1px solid red;
              margin:20px auto;
            }
          }
        }
        .btn-box{
          width: 70%;
          margin:20px auto;
          display: flex;
          justify-content: space-between;
          padding-top:20px;
          .btn{
            width:100px;
            height:35px;
            border:1px solid rgba(0,0,0,1);
            border-radius:5px;
            line-height: 35px;
            font-size:16px;
            font-weight:400;
            color:rgba(0,0,51,1);
            cursor: pointer;
          }
        }
      }
    }
    .bg1{
      width: 1200px;
      height: 846px;
      background: url("../assets/chengji1200.png") no-repeat;
      background-size:100% 100%; 
      margin:0 auto;
      position: relative;
      .title{
        width: 100%;
        padding-left:106px;
        padding-top:62px;
        text-align: left;
        .t1{
          font-size:32px;
          font-weight:bold;
          color:#C30D23;
        }
        .t2{
          font-size:31px;
          font-weight:bold;
          color:rgba(51,51,51,1);
          margin-top:25px;
        }
        .t3{
          font-size:22px;
          font-weight:400;
          color:#8A8A8A;
          margin-top:8px;
          font-weight: 200;
        }
      }
      .userinfo{
        width: 100%;
        padding-left:111px;
        padding-top:44px;
        text-align: left;
        .name{
          font-size:20px;
          font-weight:400;
          color:#4F5558;
        }
        .idnum{
          font-size:20px;
          font-weight:400;
          color:#4F5558;
          margin-top:18px;
        }
        .date{
          font-size:20px;
          font-weight:400;
          color:#4F5558;
          margin-top:17px;
        }
      }
      .chengji{
        width: 100%;
        padding:0 111px;
        margin-top:47px;
        .dengji{
          width: 100%;
          text-align: left;
          margin-bottom:12px;
          .type{
            font-size:29px;
            font-weight:600;
            color:rgba(79,85,88,1);
            color:rgba(51,51,51,1);
          }
        }
        .en{
          width: 100%;
          margin-top:3px;
          font-size:19px;
          font-weight:200;
          color:rgba(138,138,138,1);
          text-align:left;
        }
        .cjdj{
          width: 100%;
          margin-top:10px;
          font-size:18px;
          font-weight:400;
          color:rgba(51,51,51,1);
        }
        .cjdeta{
          width: 580px;
          display: flex;
          margin-top:48px;
          .item{
            width: 33%;
            .i-type{
              font-size:20px;
              font-weight:400;
              color:rgba(79,85,88,1);
              margin-bottom: 25px;
            }
            .fenshu{
              text-align: center;
              font-size:27px;
              font-weight:400;
              color:rgba(79,85,88,1);
              margin-top:10px;
            }
          }
          
        }
      }
      .chengji2{
        width: 307px;
        height: 84px;
        position: absolute;
        top: 263px;
        left: 700px;
        .type{
          width:130px;
          font-size:29px;
          font-weight:600;
          color:rgba(0,0,0,1);
          position: absolute;
          top:10px;
        }
        .en{
          font-size:19px;
          font-weight:200;
          color:rgba(138,138,138,1);
          position: absolute;
          top:55px;
          left:10px;
        }
        .cjdj{
          width:164px;
          font-size:30px;
          font-weight:400;
          color:rgba(79,85,88,1);
          position: absolute;
          top:20px;
          left:143px;
          text-align: center;
        }
      }
      .text{
        width:1003px;
        height:98px;
        font-size:13px;
        font-weight:200;
        color:rgba(34,24,21,1);
        line-height:20px;
        margin:50px 81px  41px 116px;
        text-align: left;
      }
      .text2{
        width:307px;
        height:20px;
        font-size:20px;
        font-weight:bold;
        color:rgba(89,87,87,1);
        padding-top:10px;
        border-top:2px solid #000;
        margin-left:810px;
      }
    }
    .bg{
      width: 1200px;
      height: 846px;
      background: url("../assets/chengjidan1200.png") no-repeat;
      background-size:100% 100%; 
      margin:0 auto;
      position: relative;
      .title{
        width: 100%;
        padding-left:106px;
        padding-top:79px;
        text-align: left;
        .t1{
          font-size:32px;
          font-weight:bold;
          color:#C30D23;
        }
        .t2{
          font-size:31px;
          font-weight:bold;
          color:rgba(51,51,51,1);
          margin-top:22px;
        }
        .t3{
          font-size:22px;
          font-weight:400;
          color:#8A8A8A;
          margin-top:10px;
          font-weight: 200;
        }
      }
      .userinfo{
        width: 100%;
        padding-left:106px;
        padding-top:54px;
        text-align: left;
        .name{
          font-size:20px;
          font-weight:400;
          color:#4F5558;
        }
        .idnum{
          font-size:20px;
          font-weight:400;
          color:#4F5558;
          margin-top:18px;
        }
        .date{
          font-size:20px;
          font-weight:400;
          color:#4F5558;
          margin-top:17px;
        }
      }
      .chengji{
        width: 100%;
        padding:0 91px;
        margin-top:54px;
        .dengji{
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .line{
            width:450px;
            height:1px;
            background:rgba(238,238,238,1);
          }
          .type{
            font-size:20px;
            font-weight:bold;
            color:rgba(51,51,51,1);
          }
        }
        .en{
          width: 100%;
          margin-top:3px;
          font-size:16px;
          font-weight:400;
          color:rgba(204,204,204,1);
        }
        .cjdj{
          width: 100%;
          margin-top:10px;
          font-size:18px;
          font-weight:400;
          color:rgba(51,51,51,1);
        }
        .cjdeta{
          display: flex;
          width: 80%;
          margin:0 auto;
          justify-content: space-around;
          margin-top:25px;
          .i-type{
            width:68px;
            height:17px;
            font-size:16px;
            font-weight:400;
            color:rgba(102,102,102,1);
          }
          .fenshu{
            text-align: center;
            font-size:22px;
            font-weight:400;
            color:rgba(0,0,0,1);
            margin-top:10px;
          }
        }
      }
    }
  }
</style>

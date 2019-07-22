<template>
  <div class="problem">
    <fix-right></fix-right>
    <div class="container">
      <div class="left">
        <ul>
          <li :class="isguocai==52?'active':''"  @click="guocai(52)">国才考试</li>
          <li :class="isguocai==53?'active':''" @click="guocai(53)">四川新三级考试</li>
        </ul>
      </div>
      <div class="right">
        <div class="title">
          常见问题
          <div class="search">
            <el-input
              @change="guocaiSearch"
              size="mini"
              placeholder="本栏目搜索"
              v-model="search"
              suffix-icon="el-icon-search"
              >
            </el-input>
          </div>
        </div>
        <el-collapse id="box1" v-model="activeName" accordion>
          <el-collapse-item :title="item.title" :name="i+1" v-for="(item,i) in list" :key="i">
            <div class="info" v-html="item.newCon"></div>
          </el-collapse-item>
          <!-- <el-collapse-item title="2. 国际人才英语考试2019年考试及报名安排？" name="2">
            <div  class="info">国际人才英语考试分别于5月和11月各举办一次。</div>
            <div  class="info">11月份考试报名时间：7月22日9:00- 10月14日24:00。各科目考试时间安排，请关注国际人才英语考试官方网站（http://etic.claonline.cn）。</div>
          </el-collapse-item>
          <el-collapse-item title="3. 国际人才英语考试有哪些科目？" name="3">
            <div  class="info">国际人才英语考试包含国才初级、国才中级、国才高级、国才高端、国才高翻（笔译）、国才高翻（交传）和国才高翻（同传）七个科目。</div>
            <div  class="info">2019年下半年国才考试开考科目为国才初级、国才中级和国才高级。</div>
          </el-collapse-item>
          <el-collapse-item title="4. 考试的题型及通过标准？" name="4">
            <div  class="info">考试将采取闭卷机考形式。考试题型包括客观题和主观题。国才初级、国才中级、国才高级、国才高端的考试成绩分为优秀、良好、合格、不合格四个等级，成绩达到合格及以上者，方可获得证书。国才高翻的考试成绩分为优秀、合格、基本合格、不合格四个等级，成绩达到基本合格及以上者，方可获得证书。具体请参见各科考试说明。</div>
          </el-collapse-item>
          <el-collapse-item title="5. 考试的咨询电话？" name="5">
            <div  class="info">考务咨询电话：021-61651124。</div>
          </el-collapse-item>
          <el-collapse-item title="6. 首次参加国际人才英语考试，不知道如何注册账号？" name="6">
            <div  class="info">国际人才英语考试采用在线报名，考生可于2019年7月22日9:00开始，通过国际人才英语考试官方网站（http://etic.claonline.cn）“考试报名”进行报名。考生注册报考账号后，需逐步安流程进行报考。具体流程详情请参见报名须知。</div>
          </el-collapse-item>
          <el-collapse-item title="7. 考生如何修改考试报名信息？" name="7">
            <div  class="info">考生报名信息为考生所报科目及报考城市等，如填写有误，考生可在报名截止日前，在报名网站的“已报考科目”模块进行修改。在报名截止后，不能修改。</div>
          </el-collapse-item>
          <el-collapse-item title="8. 报名系统中考生信息有误，如何进行更改？" name="8">
            <div  class="info"></div>
            <div  class="info"></div>
          </el-collapse-item>
          <el-collapse-item title="9. 如何打印准考证？何时开始打印？" name="9">
            <div  class="info">准考证打印日期考前一周（具体日期请留意官网通知），考生可凭报名时获取的账号和密码登录报名网站，自行打印准考证。</div>
          </el-collapse-item>
          <el-collapse-item title="10. 考试结束后多久公布成绩？" name="10">
            <div  class="info">考试结束50个工作日后公布成绩，考生可登录国际人才英语考试官网（http://etic.claonline.cn）查询成绩。</div>
          </el-collapse-item>
          <el-collapse-item title="11. 通过考试的考生如何获得证书？" name="11">
            <div  class="info">考生需在查询成绩后申请纸质证书且支付30元邮寄费用，并填写证书邮寄地址，证书在成绩公布后35个工作日寄出。</div>
          </el-collapse-item>
          <el-collapse-item title="12. 考生如果忘记用户名及密码怎么办？" name="12">
            <div  class="info">考生可在登录页面点击“忘记密码”，填写注册时使用的手机号或邮箱、图片验证码及短信/邮箱验证码，随后进行密码重置。关于用户名和密码的问题可咨询客服电话：4008-987-008，客服QQ：2774182652，客服邮箱：service@unipus.cn</div>
          </el-collapse-item>
          <el-collapse-item title="13. 如何登录和退出国际人才英语考试报名网站？" name="13">
            <div  class="info">登录：<br>&#12288;&#12288; 登录国际人才英语考试官网http://etic.claonline.cn，点击“考试报名”，在用户登录界面，输入用户名、密码，点击登录（没有注册的用户需要先注册再登录），进入国际人才英语考试报名网站。</div>
            <br>
            <div  class="info">退出：<br>&#12288;&#12288;在国际人才报名网站完成考试报名操作后，点击右上角用户名下面的小三角，点击退出，即回到考试官网http://etic.claonline.cn</div>
          </el-collapse-item>
          <el-collapse-item title="14. 历史考生报考时，点击“我已阅读”，进行不下去是什么原因？" name="14">
            <div  class="info">请考生到个人信息页确认是否已完善个人信息，完善个人信息后可以继续报考。</div>
          </el-collapse-item>
          <el-collapse-item title="15. 考试成绩什么时候公布？" name="15">
            <div  class="info">考试成绩在考试结束后50个工作日左右公布，届时请您登录官网（etic.claonline.cn）来查询您的成绩。</div>
          </el-collapse-item>
          <el-collapse-item title="16. 考点在哪里？" name="16">
            <div  class="info">考点所在城市请关注官网通知，具体考点位置请以准考证中公布为准，请各位考生注意打印准考证的通知。</div>
          </el-collapse-item>
          <el-collapse-item title="17. 国才考试奖学金" name="17">
            <div  class="info">在国才各级别考试中获得“优秀”的考生，将获得由中国外语测评中心颁发的等同于该级别报名费的全额奖学金。</div>
            <div  class="info">请获得“优秀”的国才考生关注“国才”（ID: guocaiwx）微信公众号，回复“奖学金”获取奖学金领取方法。</div>
          </el-collapse-item>
          <el-collapse-item title="18. 直通卡" name="18">
            <div  class="info">直通卡指在外研社举办的指定大赛中，进入全国总决赛的考生给与的免费考试任意科目的机会。</div>
            <div  class="info">请获得直通卡考生关注“国才”（ID: guocaiwx）微信公众号，回复“直通卡”获取报名流程。</div>
          </el-collapse-item>
          <el-collapse-item title="19. 高端、高翻考生免费重考政策" name="19">
            <div  class="info">免费重考资格： 包括参加上一届国才高端未达到“合格”及以上等级和国才高翻未达到“基本合格”及以上等级的考生。</div>
            <div  class="info">请获得高端、高翻免费重考考生关注“国才”（ID: guocaiwx）微信公众号，回复“免费重考”获取报名流程。</div>
          </el-collapse-item>
          <el-collapse-item title="20. 考试缴费有哪些要求？" name="20">
            <div  class="info">
              科目缴费金额如下：<br>
              国才初级：180元/次/人<br>
              国才中级：380元/次/人<br>
              国才高级：580元/次/人<br>
              国才高端：1280元/次/人<br>
              国才高翻（笔译、交传、同传）：均1580元/次/人<br>
              在线支付报名费，支付成功后，在“已报考科目”内报名状态变成“已支付”，即为报名成功。
            </div>
          </el-collapse-item>
          <el-collapse-item title="21. 考试退费" name="21">
            <div  class="info">免费重考资格： 包括参加上一届国才高端未达到“合格”及以上等级和国才高翻未达到“基本合格”及以上等级的考生。</div>
            <div  class="info">请获得高端、高翻免费重考考生关注“国才”（ID: guocaiwx）微信公众号，回复“免费重考”获取报名流程。</div>
          </el-collapse-item>
          <el-collapse-item title="22. 转考问题" name="22">
            <div  class="info">在报名截止日期之前，考生可以登录网站办理转考，仅限于更改考试科目及考试区域，不收取额外手续费用。在报名截止日期之后不再受理转考申请。</div>
          </el-collapse-item>
          <el-collapse-item title="23. 退考手续费" name="23">
            <div  class="info">在报名截止日期之前，考生可以登录网站办理退考手续并支付手续费用。手续费用为30%的考试费用。退款会在考试结束后15个工作日内返还至考生原付款路径，在报名截止之后不再受理退考申请。</div>
          </el-collapse-item>
          <el-collapse-item title="24. 发票如何申请？" name="24">
            <div  class="info">如需申请考试发票，请在个人中心-详细信息内正确填写发票邮寄地址，发票将在考后统一安排邮寄</div>
          </el-collapse-item> -->
        </el-collapse>
      </div>
    </div>
     
  </div>
</template>
<script>
import fixRight from '../components/fix'
import footer11 from '../components/footer'
import { getDongtai } from '@/request/api';// 导入我们的api接口 获取动态

export default {
  name: 'dynamic',
  components: {
    fixRight,footer11,getDongtai
  },
  data(){
    return{
      activeName: ['1'],
      isguocai:52,
      search:"",//搜索项
      list:[],
    }
  },
  methods:{
    guocaiSearch(){
      this.getdate();
    },
    guocai(num){
      this.isguocai=num;
      this.getdate();
    },
    change(){
      // let div=document.getElementById("box1");
      // console.log(div);
      console.log(this.search);
      // div.innerHTML=div.innerHTML.split(this.search).join('<span>'+this.search+'</span>')
    },
    getdate(){
      let obj={
        funcId:this.isguocai,
        title:this.search
      }
      getDongtai(obj).then(res => {
        console.log(res.data)
        this.list=JSON.parse(res.data);
        console.log(this.list);
        if(this.list.length==0){
          this.$message.error("没有符合条件的问题")
        }
      })
    }
  },
  created(){
    this.getdate();
  }

}
</script>
<style lang="less">
  .problem{
    width: 100%;
    height: 100%;
    background:rgba(247,247,247,1);
    .container{
      width:1200px;
      margin:0 auto;
      display: flex;
      justify-content: space-between;
      padding-top:80px;
      .left{
        width:160px;
         background:rgba(255,255,255,1);
        position: fixed;
        top:191px;
        ul{
          width: 100%;
          list-style: none;
          font-size: 18px;
          li{
            width:160px;
            height:49px;
            line-height: 49px;
            cursor: pointer;
            transition-duration: 0.2s;
            text-align: left;
            padding-left: 20px;
          }
          .active{
            background:rgba(217,42,55,1);
            color:#fff;
          }
          .small{
            width: 100%;
            height: 39px;
            background:rgba(253,253,253,1);
            line-height: 39px;
            font-size: 12px;
            border-bottom: 1px solid rgba(238,238,238,1);
          }
        }

      }
      .right{
        width:988px;
        margin-left: 200px;
        .title{
          height:23px;
          font-size:22px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(51,51,51,1);
          text-align: center;
          position: relative;
          .search{
            width: 300px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: absolute;
            top:0px;
            right:0px;
          }
        }
        .el-collapse{
          margin-top:20px;
          text-align: left;
        }
        .el-collapse-item{
          margin-bottom: 7px;
          padding-left: 20px;
          background:#fff;
        }
        .el-collapse-item__header{
          font-size:16px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(51,51,51,1);
          background:#fff;
        }
        .active{
          background:#fff;
          .el-collapse-item__header{
            background:#fff;
          }
        }
        
        .info{
          width:896px;
          font-size:14px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(102,102,102,1);
          line-height:30px;
          padding-left:20px;
          margin-top:10px;
        }
      }
    }
    
  }
</style>

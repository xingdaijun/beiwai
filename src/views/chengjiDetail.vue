<template>
  <div class="chengjiDetail" v-if="isover">
    <fix-right></fix-right>
    <div class="model" v-if="ismodel2">
      <div class="kuang" v-if="liucheng2==0" style="margin-top:-140px;">
        <div class="title">提示</div>
        <img src="../assets/guanbi.png" alt="" class="close" @click="close2">
        <div class="details" style="height:246px;padding:20px;">
          <div class="tishi" style="text-align:left;line-height:25px;">
            考生参加四川省大学英语新三级考试后，如成绩等级为“合格”或“良好”或“优秀”将默认会收到纸质证书。纸质证书将于成绩公布后35个工作日寄至考生所在院校，请考生在本校自行领取。如申请补办证书则需另行缴费，每份证书补办费用为30元。
          </div>
          <div class="btn-box" style="width:90%">
            <div class="btn" @click="sure(1)" style="padding:0 15px;width:150px;background:rgba(51,51,51,1);color:#fff;border:none">
              申请纸质版证书
            </div>
            <div class="btn" @click="sure(2)" style="padding:0 15px;width:150px;background:rgba(51,51,51,1);color:#fff;border:none">
              申请电子版证书
            </div>
            <div class="btn" @click="close2">取消</div>
          </div>
        </div>
      </div>
      <div class="kuang" v-if="liucheng2==1" style="height:500px;overflow:auto">
        <img  src="../assets/guanbi.png" alt="" class="close" @click="close2">
        <div class="title">{{text}}</div>
        <div class="details">
          <div class="item">
            <div class="left2">
              <span>姓</span>
              <span>名 :</span>
            </div>
            <input type="text" placeholder="请输入您的名字" v-model="obj.name">
          </div>
          <div class="item">
            <div class="left2">
              <span>联</span>
              <span>系</span>
              <span>电</span>
              <span>话 :</span>
            </div>
            <input type="text" placeholder="请输入您的手机号"  v-model="obj.phone">
          </div>
          <div class="item">
            <div class="left2">
              <span>邮</span>
              <span>寄</span>
              <span>地</span>
              <span>址 :</span>
            </div>
            <input type="text" placeholder="请输入您的邮寄地址" v-model="obj.adress">
          </div>
          <div class="item">
            <div class="left2">
              <span>邮</span>
              <span>编 :</span>
            </div>
            <input type="text" placeholder="请输入您的邮编号" v-model="obj.code">
          </div>
          <div class="item">
            <div class="left2">
              <span>是</span>
              <span>否</span>
              <span>需</span>
              <span>要</span>
              <span>发</span>
              <span>票</span>
              <span>:</span>
            </div>
            <input style="width:15px;" type="radio" value="0" name="fapiao" v-model="obj.invoice" >是
            <input style="width:15px;" type="radio" value="1" name="fapiao" v-model="obj.invoice">否
          </div>
          <div class="item" v-if="obj.invoice==0">
            <div class="left2">
              <span>开</span>
              <span>票</span>
              <span>单</span>
              <span>位</span>
              <span>:</span>
            </div>
            <input style="width:15px;" type="radio" value="0" name="geren" v-model="obj.unit" >个人
            <input style="width:15px;" type="radio" value="1" name="geren" v-model="obj.unit">单位
          </div>
          <div class="item"  v-if=" obj.unit==1">
            <div class="left2">
              <span>单</span>
              <span>位</span>
              <span>发</span>
              <span>票</span>
              <span>抬</span>
              <span>头</span>
              <span>:</span>
            </div>
            <input type="text" placeholder="请输入您的发票抬头" v-model="invoicelooked">
          </div>
          <div class="item" v-if="obj.invoice==0">
            <div class="left2">
              <span>纳</span>
              <span>税</span>
              <span>人</span>
              <span>识</span>
              <span>别</span>
              <span>号</span>
              <span>:</span>
            </div>
            <input type="text" placeholder="请输入您的识别号" v-model="obj.tax">
          </div>
          <div class="btn-box">
            <div class="btn" @click="close">取消</div>
            <div class="btn" @click="submit" style="background:rgba(51,51,51,1);color:#fff;border:none">确定</div>
          </div>
        </div>
      </div>
      <div class="kuang" v-if="liucheng2==2">
        <div class="title">{{text}}</div>
        <img src="../assets/guanbi.png" alt="" class="close" @click="close2">
        <div class="details" style="padding:30px 39px 39px;height:380px;">
          <div class="item" style="font-size:16px;"  v-if="isNew==1">
            <div class="left2">
              <span>姓</span>
              <span>名 :</span>
            </div>
            <div class="right2">崔海跃海跃</div>
          </div>
          <div class="item"  v-if="isNew==1">
            <div class="left2">
              <span>手</span>
              <span>机</span>
              <span>号 :</span>
            </div>
            <div class="right2">18519185353</div>
          </div>
          <div class="item"  v-if="isNew==1">
            <div class="left2">
              <span>收</span>
              <span>件</span>
              <span>地</span>
              <span>址 :</span>
            </div>
            <div class="right2">北京市海淀区清河（邮编100086）</div>
            <div @click="liucheng2=1" style="color:#1174E3; cursor: pointer;">修改</div>
          </div>
          <div class="erweima">
            <div>扫描下方二维码缴费：</div>
            <div class="img">
              <img src="" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="kuang" v-if="liucheng2==3" style="margin-top:-140px;">
        <img src="../assets/guanbi.png" alt="" class="close" @click="close2">
        <div class="title">{{text}}</div>
        <div class="details" style="height:196px;padding-top:50px;">
          <div class="success">
            <img src="../assets/chenggong.png" alt="" style="margin-bottom:20px;">
            <div class="text">缴费成功！我们将尽快邮递您的证书</div>
          </div>
        </div>
      </div>
      <div class="kuang" v-if="liucheng2==4" style="margin-top:-140px;">
        <div class="title">{{text}}</div>
        <img src="../assets/guanbi.png" alt="" class="close" @click="close2">
        <div class="details" style="height:196px;padding-top:50px;">
          <div class="success">
            <img src="../assets/shibai.png" alt="" style="margin-bottom:20px;">
            <div class="text">缴费失败！点击<span @click="liucheng2=2" style="color:#1174E3;text-decoration: underline;cursor: pointer;">重新扫码</span>进行重新缴费</div>
          </div>
        </div>
      </div>
    </div>
    <div class="model" v-if="ismodel">
      <div class="kuang" v-if="liucheng==1" style="height:500px;overflow:auto">
        <img  src="../assets/guanbi.png" alt="" class="close" @click="close">
        <div class="title" :style="isneed==0?'width:524px;':''">申请纸质版证书</div>
        <div class="details">
          <div class="item">
            <div class="left2">
              <span>姓</span>
              <span>名 :</span>
            </div>
            <input type="text" placeholder="请输入您的名字" v-model="obj.name">
          </div>
          <div class="item">
            <div class="left2">
              <span>联</span>
              <span>系</span>
              <span>电</span>
              <span>话 :</span>
            </div>
            <input type="text" placeholder="请输入您的手机号"  v-model="obj.phone">
          </div>
          <div class="item">
            <div class="left2">
              <span>邮</span>
              <span>寄</span>
              <span>地</span>
              <span>址 :</span>
            </div>
            <input type="text" placeholder="请输入您的邮寄地址" v-model="obj.adress">
          </div>
          <div class="item">
            <div class="left2">
              <span>邮</span>
              <span>编 :</span>
            </div>
            <input type="text" placeholder="请输入您的邮编号" v-model="obj.code">
          </div>
          <div class="item">
            <div class="left2">
              <span>是</span>
              <span>否</span>
              <span>需</span>
              <span>要</span>
              <span>发</span>
              <span>票</span>
              <span>:</span>
            </div>
            <input style="width:15px;" type="radio" value="0" name="fapiao" v-model="obj.invoice" >是
            <input style="width:15px;" type="radio" value="1" name="fapiao" v-model="obj.invoice">否
          </div>
          <div class="item" v-if="isneed==0">
            <div class="left2">
              <span>开</span>
              <span>票</span>
              <span>单</span>
              <span>位</span>
              <span>:</span>
            </div>
            <input style="width:15px;" type="radio" value="0" name="geren" v-model="obj.unit" >个人
            <input style="width:15px;" type="radio" value="1" name="geren" v-model="obj.unit">单位
          </div>
          <div class="item"  v-if="unit==1">
            <div class="left2">
              <span>单</span>
              <span>位</span>
              <span>发</span>
              <span>票</span>
              <span>抬</span>
              <span>头</span>
              <span>:</span>
            </div>
            <input type="text" placeholder="请输入您的发票抬头" v-model="invoicelooked">
          </div>
          <div class="item" v-if="isneed==0">
            <div class="left2">
              <span>纳</span>
              <span>税</span>
              <span>人</span>
              <span>识</span>
              <span>别</span>
              <span>号</span>
              <span>:</span>
            </div>
            <input type="text" placeholder="请输入您的识别号" v-model="tax">
          </div>
          <div class="btn-box">
            <div class="btn" @click="close">取消</div>
            <div class="btn" @click="submit" style="background:rgba(51,51,51,1);color:#fff;border:none">确定</div>
          </div>
        </div>
      </div>
      <div class="kuang" v-if="liucheng==2">
        <div class="title">申请纸质版证书</div>
        <img src="../assets/guanbi.png" alt="" class="close" @click="close">
        <div class="details" style="padding:30px 39px 39px;height:380px;">
          <div class="item" style="font-size:16px;">
            <div class="left2">
              <span>姓</span>
              <span>名 :</span>
            </div>
            <div class="right2">崔海跃海跃</div>
          </div>
          <div class="item">
            <div class="left2" >
              <span>手</span>
              <span>机</span>
              <span>号 :</span>
            </div>
            <div class="right2" >18519185353</div>
          </div>
          <div class="item" >
            <div class="left2">
              <span>收</span>
              <span>件</span>
              <span>地</span>
              <span>址 :</span>
            </div>
            <div class="right2" >北京市海淀区清河（邮编100086）</div>
            <div  @click="liucheng=1" style="color:#1174E3; cursor: pointer;">修改</div>
          </div>
          <div class="erweima">
            <div>扫描下方二维码缴费：</div>
            <div class="img">
                          <img src="" alt="">

            </div>
          </div>
        </div>
      </div>
      <div class="kuang" v-if="liucheng==3" style="margin-top:-140px;">
        <img src="../assets/guanbi.png" alt="" class="close" @click="close">
        <div class="title">申请纸质版证书</div>
        <div class="details" style="height:196px;padding-top:50px;">
          <div class="success">
            <img src="../assets/chenggong.png" alt="" style="margin-bottom:20px;">
            <div class="text">缴费成功！我们将尽快邮递您的证书</div>
          </div>
        </div>
      </div>
      <div class="kuang" v-if="liucheng==4" style="margin-top:-140px;">
        <div class="title">申请纸质版证书</div>
        <img src="../assets/guanbi.png" alt="" class="close" @click="close">
        <div class="details" style="height:196px;padding-top:50px;">
          <div class="success">
            <img src="../assets/shibai.png" alt="" style="margin-bottom:20px;">
            <div class="text">缴费失败！点击<span @click="liucheng=2" style="color:#1174E3;text-decoration: underline;cursor: pointer;">重新扫码</span>进行重新缴费</div>
          </div>
        </div>
      </div>
    </div>
    <div class="btnbox" v-if="isQuery!=0">
      <div class="btn btn2" v-if="info.grade=='国际人才英语考试'" @click="dialogVisible=true">申请纸质版证书</div>
      <el-tooltip  v-if="info.grade=='国际人才英语考试'" class="btn btn1" style="line-height:0px;" effect="dark" content="点击下载到本地默认路径" placement="top" >
        <el-button @click='downLoad'>下载电子版证书</el-button>
      </el-tooltip>
      <div class="btn btn1" v-if="info.grade!='国际人才英语考试'" @click="dialogVisible=true">补办证书</div>
    </div>
    <!-- 证书页面 -->
    <div v-if="isQuery!=0">
      <!-- 国才考试 -->
      <div class="bg" v-if="info.grade=='国际人才英语考试'">
        <span class="name-zh">{{info.namezh}}</span>
        <span class="examtimezh">{{info.examtimezh}}</span>
        <span class="grade">{{info.subject}}</span>
        <span class="gradezh">{{info.gradezh}}</span>
        <span class="nameen">{{info.nameen}}</span>
        <span class="gradeen">{{info.gradeen}}</span>
        <span class="subjectEN">{{info.subjectEN}}</span>
        <span class="examtimeen">{{info.examtimeen}}</span>
        <span class="idnumber">{{info.idnumber}}</span>
        <span class="certificatenumber">{{info.certificatenumber}}</span>
        <div class="fen" v-if="info.subject=='初级'||info.subject=='中级'||info.subject=='高级'||info.subject=='高端'" >
          <div class="item"  >
            <div><a style="font-size:17px;">口头沟通</a> <br>Oral communication</div>
            <div style="width:154px;"><a style="font-size:17px;">书面沟通</a> <br>Written communication</div>
            <div style="width:97px;"><a style="font-size:17px;">总分</a> <br>Overall Score</div>
          </div>
          <div class="item"  >
            <div>{{Math.floor(info.goalfirst)}}</div>
            <div style="width:154px;">{{Math.floor(info.goalsecond)}}</div>
            <div style="width:97px;">{{Math.floor(info.goalthird)}}</div>
          </div>
        </div>
        <div class="fen2"  v-if="info.subject=='高翻笔译'||info.subject=='高翻交传'||info.subject=='高翻同传'">
          <div class="item">
            <div><a>英译汉</a><br>English to Chinese</div>
            <div style="width:154px;"><a style="font-size:17px;">汉译英</a><br>Chinese to English</div>
            <div style="width:103px;"><a style="font-size:17px;">总分</a><br>Overall Score</div>
          </div>
          <div class="item">
            <div>{{Math.floor(info.goalfirst)}}</div>
            <div style="width:154px;">{{Math.floor(info.goalsecond)}}</div>
            <div style="width:103px;">{{Math.floor(info.goalthird)}}</div>
          </div>
        </div>
        <div class="text">
          <div> <span>{{info.catecolumnfirst}}</span><span>&#12288;{{info.abilitydescribe}}&#12288;</span> <span>{{info.catecolumnsecond}}</span> </div>
          <div>国才考试是北京外国语大学中国外语测评中心研发的职场英语沟通能力认证体系，考题取自真实、典型的职场情境，重点考查英语口头和书面沟通能力，包括国际视野与协商合作的能力、跨文化理解与表达的能力、分析问题与解决问题的能力三个维度，为用人单位选拔具有全球胜任力的国际人才。</div>
          <div>{{info.catecolumnthird}}</div>
        </div>
      </div>
      <!-- //下载用副本 -->
      <div class="bg"
        style="position:absolute;left:-1500px;transform:rotate(90deg);
        -ms-transform:rotate(90deg);  /* IE 9 */
        -moz-transform:rotate(90deg);   /* Firefox */
        -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
        -o-transform:rotate(90deg); " 
        id='downloadBook'
        >
        <span class="name-zh">{{info.namezh}}</span>
        <span class="examtimezh">{{info.examtimezh}}</span>
        <span class="grade">{{info.subject}}</span>
        <span class="gradezh">{{info.gradezh}}</span>
        <span class="nameen">{{info.nameen}}</span>
        <span class="gradeen">{{info.gradeen}}</span>
        <span class="subjectEN">{{info.subjectEN}}</span>
        <span class="examtimeen">{{info.examtimeen}}</span>
        <span class="idnumber">{{info.idnumber}}</span>
        <span class="certificatenumber">{{info.certificatenumber}}</span>
        <div class="fen" v-if="info.subject=='初级'||info.subject=='中级'||info.subject=='高级'||info.subject=='高端'" >
          <div class="item"  >
            <div><a style="font-size:17px;">口头沟通</a> <br>Oral communication</div>
            <div style="width:154px;"><a style="font-size:17px;">书面沟通</a> <br>Written communication</div>
            <div style="width:97px;"><a style="font-size:17px;">总分</a> <br>Overall Score</div>
          </div>
          <div class="item"  >
            <div>{{Math.floor(info.goalfirst)}}</div>
            <div style="width:154px;">{{Math.floor(info.goalsecond)}}</div>
            <div style="width:97px;">{{Math.floor(info.goalthird)}}</div>
          </div>
        </div>
        <div class="fen2"  v-if="info.subject=='高翻笔译'||info.subject=='高翻交传'||info.subject=='高翻同传'">
          <div class="item">
            <div>
              <a style="font-size:17px;">英译汉</a>
              <br>English to Chinese</div>
            <div style="width:154px;"><a style="font-size:17px;">汉译英</a><br>Chinese to English</div>
            <div style="width:103px;"><a style="font-size:17px;">总分</a><br>Overall Score</div>
          </div>
          <div class="item">
            <div>{{Math.floor(info.goalfirst)}}</div>
            <div style="width:154px;">{{Math.floor(info.goalsecond)}}</div>
            <div style="width:103px;">{{Math.floor(info.goalthird)}}</div>
          </div>
        </div>
        <div class="text">
          <div> <span>{{info.catecolumnfirst}}</span><span>&#12288;{{info.abilitydescribe}}&#12288;</span> <span>{{info.catecolumnsecond}}</span> </div>
          <div>国才考试是北京外国语大学中国外语测评中心研发的职场英语沟通能力认证体系，考题取自真实、典型的职场情境，重点考查英语口头和书面沟通能力，包括国际视野与协商合作的能力、跨文化理解与表达的能力、分析问题与解决问题的能力三个维度，为用人单位选拔具有全球胜任力的国际人才。</div>
          <div>{{info.catecolumnthird}}</div>
        </div>
      </div>
      <!-- 新三级考试 -->
      <div class="bg bg1"  v-if="info.grade!='国际人才英语考试'">
        <!-- <div class="title">
          <div style="font-family:方正简菱心字体;font-size: 32px;color:#fff;letter-spacing:5.0px;margin-bottom:4px;">国际人才英语考试 · 初级</div>
          <div  style="font-family:STKaiti;font-size: 14px;color:#fff;letter-spacing:0.5px;">English Test for Internationnal Communication-Basic</div>
        </div>
        <div class="div1">
          &#12288;&#12288;&#12288;<span style="width:178px;margin-right:10px;">{{info.namezh}}</span >参加<span style="width:163px;">{{info.examtimezh}}</span>四川省大学英语新三级考试 ( 国际人才英语考试·初级) ，成绩<span class="gradezh" style="width:86px;margin-right:5px;">{{info.gradezh}}</span>，特发此证。
        </div>
        <div class="div2">
          &#12288;&#12288;&#12288;This is to certify that <span style="width:278px;">{{info.nameen}}</span> has been awarded <span style="width:199px;">{{info.gradeen}}</span> <br>
          in the SCET-3（ English Test for International Communication-Basic）in <span style="width:141px;">{{info.examtimeen}}</span>.
        </div> -->
        <span class="name-zh">{{info.namezh}}</span>
        <span class="examtimezh">{{info.examtimezh}}</span>
        <span class="gradezh">{{info.gradezh}}</span>
        <span class="nameen">{{info.nameen}}</span>
        <span class="gradeen">{{info.gradeen}}</span>
        <span class="examtimeen">{{info.examtimeen}}</span>
        <span class="idnumber">{{info.idnumber}}</span>
        <span class="certificatenumber">{{info.certificatenumber}}</span>
      </div>
    </div>
    <div class="query" v-if="isQuery==0">
      <div class="subject">{{info.grade=='国际人才英语考试'?'国际人才英语考试':'四川省大学英语新三级考试'}} <span v-if="info.grade!='四川省大学英语'">( {{info.subject}} )</span> </div>
      <div class="t2">证书验证</div>
      <div class="t3">
        Certificate Verification
      </div>
      <div class="t4">
        姓&#12288;&#12288;名：{{info.namezh}}
      </div>
      <div class="t4">
        证件号码：{{info.idnumber}}
      </div>

      <div class="t4">
        证书编码：{{info.certificatenumber}}
      </div>
      <div class="t4">
        考试日期：{{info.examtimezh}}
      </div>
      <div class="chengji">
        <div class="dengji">
          <div class="line"></div>
          <div class="type">成绩等级</div>
          <div class='line'></div>
        </div>
        <div class="en">Grade</div>
        <div class="cjdj">{{info.gradezh}}</div>
      </div>
      <div class="chengji" v-if="info.grade=='国际人才英语考试'">
        
        <div class="dengji">
          <div class="line" ></div>
          <div class="type">考试成绩</div>
          <div class='line' ></div>
        </div>
        <div class="en">Scores</div>
        <div class="cjdeta" v-if="info.subject=='初级'||info.subject=='中级'||info.subject=='高级'||info.subject=='高端'">
          <div class="item">
            <div class="i-type">口头沟通</div>
            <div class="fenshu">{{Math.floor(info.goalfirst) }}</div>
          </div>
          <div class="item">
            <div class="i-type">书面沟通</div>
            <div class="fenshu">{{Math.floor(info.goalsecond)}}</div>
          </div>
          <div class="item">
            <div class="i-type">总分</div>
            <div class="fenshu">{{Math.floor(info.goalthird)}}</div>
          </div>
        </div>

        <div class="cjdeta" v-if="info.subject=='高翻笔译'||info.subject=='高翻交传'||info.subject=='高翻同传'">
          <div class="item">
            <div class="i-type">英译汉</div>
            <div class="fenshu">{{Math.floor(info.goalfirst)}}</div>
          </div>
          <div class="item">
            <div class="i-type">汉译英</div>
            <div class="fenshu">{{Math.floor(info.goalsecond)}}</div>
          </div>
          <div class="item">
            <div class="i-type">总分</div>
            <div class="fenshu">{{Math.floor(info.goalthird)}}</div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
        :show-close="false"
      width="30%"
      >
      <div>
        <div>请扫描下方二维码，关注国才考试微信公众号，进入公众号后留言“申请纸质证书”获取申请办法。</div>
        <img src="../assets/2ad6050f238fb9e480ebb6e09e4669f.jpg" alt="">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">知道了</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import fixRight from '../components/fix'
import footer11 from '../components/footer'
import { queryZheng } from '@/request/api';// 导入我们的api接口 查询证书
import { shengqing } from '@/request/api';// 导入我们的api接口 申请证书

export default {
   
  components: {
    fixRight,footer11,queryZheng,shengqing
  },
  data(){
    return{
      ismodel:false,//遮罩层
      liucheng:1,//流程
      isneed:"1",//是否需要发票
      unit:"0",//是否是个人
      info:"",//证书信息
      ismodel2:false,//遮罩层
      liucheng2:0,//流程
      text:"",//标题文本
      obj:{
        "name":"",
        "phone":"",
        "adress":"",
        "code":"",//邮编
        "invoice":1,//0是1否
        "unit":0,//0个人1单位
        "invoicelooked":"",//发票抬头
        "tax":""//识别号

      },
      isQuery:"",
      ismodel3:false,
      dialogVisible: false,
      isover:false,
    }
  },
  methods:{
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    downLoad () {
      console.log(132131)
      let that=this;
      if(this.info.grade!='国际人才英语考试'){
        this.ismodel2=true;
      }
      console.log(123)
      var canvas =document.getElementById('downloadBook')
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
        //html页面生成的canvas在pdf中图片的宽高（a4纸的尺寸[595.28,841.89]）
        var imgWidth = 592.28;
        var imgHeight = 592.28 / contentWidth * contentHeight;

        var pdf = new jspdf('', 'pt', 'a4');
        console.log(pdf)
        pdf.addImage(dataURL, 'JPEG', 0, 0,imgWidth, imgHeight);
        pdf.save(`${that.info.subject}-${that.info.grade}-${that.info.namezh}.pdf`);

      });
    },
    down(){
      if(this.info.grade!='国际人才英语考试'){
        this.ismodel2=true;
      }
    },
    submit(){
      this.liucheng=2
    },
    shengqin(){
      console.log(123122)
      this.ismodel3=true;
      console.log(this.ismodel3)
      // if(this.isNew==2){
      //   this.ismodel2=true;
      // }else{
      //   this.ismodel=true;
      // }
      
    },
    close(){
      this.ismodel=false;
      this.liucheng=1;
      this.ismodel3=false;
    },
    //提交
    submit2(n){
      this.liucheng2=2
    },
    //关闭
    close2(){
      console.log(132)
      this.ismodel2=false;
      this.liucheng2=0;
    },
    //确定买
    sure(n){
      if(n==1){
        this.text="申请纸质版证书";
        this.liucheng2=1;
      }else{
        this.text="申请电子版证书";
        this.liucheng2=2;
      }
      
    },
    getDate(){
      let name=sessionStorage.getItem('name');
      let certificatenumber=sessionStorage.getItem("certificatenumber");
      let examTime=sessionStorage.getItem("examTime");
      let idnumber=sessionStorage.getItem("idnumber")
      let subject=sessionStorage.getItem("subject")
      queryZheng(
        {
          "namezh":name,
          "idnumber":idnumber,
          "certificatenumber":certificatenumber,
          "examtimeZH":examTime,
          "subject":subject
        }
      ).then(res=>{
        console.log(res);
        this.info=res.data[0];
        this.isover=true
      })
    },
    //申请证书传入信息
    submitShenqing(){
      shengqing(this.obj).then(res=>{
        console.log(res)
      })
    }
  },
  created(){
    this.isQuery=this.$route.query.isQuery;
    this.getDate();
    console.log(this.info);
  },
  destroyed() {
    sessionStorage.removeItem("certificatenumber")
    sessionStorage.removeItem("examTime")
    sessionStorage.removeItem("subject")
  },
}
</script>
<style lang="less">
  @font-face {
    font-family:songti;
    src: url('../assets/font/songti.ttf');
  }
  .chengjiDetail{
    width: 100%;
    height: 100%;
    background:rgba(238,234,223,0.15);
    padding-top:100px;
    .model{
      position: fixed;
      width: 100%;
      height: 100%;
      background:rgba(0,0,0,0.5);
      top:0px;
      z-index: 100;
      .kuang{
        width:540px;
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
          width:540px;
          height:47px;
          background:rgba(222,42,48,1);
          font-size:18px;
          font-family:Adobe Heiti Std R;
          font-weight:normal;
          color:rgba(255,255,255,1);
          line-height:47px;
        }
        .details{
          width:100%;
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
              font-family:MicrosoftYaHei;
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
              font-family:MicrosoftYaHei;
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
            font-family:MicrosoftYaHei;
            font-weight:400;
            color:rgba(0,0,51,1);
            cursor: pointer;
          }
        }
      }
    }
    .btnbox{
      width: 1200px;
      height: 35px;;
      margin:10px auto;
      text-align: right;
      .btn{
        float: right;
        width:160px;
        height:35px;
        margin-right: 20px;
        background:rgba(222,42,48,1);
        border-radius:5px;
        color:rgba(255,255,255,1);
        line-height:35px;
        text-align: center;
        cursor: pointer;
        font-size: 14px;
        
      }
      .el-button{
        padding: 0px  15px;
      }
    }
    .bg{
      width: 1200px;
      height: 849px;
      background: url("../assets/b728da4eabd676c578bdcb1c2e564f2.png") no-repeat;
      background-size:100% 100%; 
      margin:0 auto;
      padding-top:265px;
      position: relative;
      span{
        position: absolute;
        top:20px;
        left: 20px;
        color: #333333;
        font-size: 18px;
        letter-spacing:1.5px;
        font-family:songti ;
        
      }
      .name-zh{
        width: 180px;
        top: 281px;
        left: 179px;
        font-weight: bold;
      }
      .examtimezh{
        width: 140px;
        top: 281px;
        left: 404px;
        letter-spacing: 0px;
        font-weight: bold;
      }
      .grade{
        width: 80px;
        top: 281px;
        left: 702px;
        font-weight: bold;
      }
      .gradezh{
        width: 85px;
        top: 281px;
        left: 852px;
        letter-spacing: 0px;
        font-weight: bold;
      }
      .nameen{
        width: 208px;
        top: 326px;
        left: 345px;
        letter-spacing: 0px;
        font-family: 'Arail';
      }
      .gradeen{
        width: 200px;
        top: 325px;
        left: 703px;
        letter-spacing: 0.5px;
        font-family: 'Arail';
      }
      .subjectEN{
        width: 240px;
        top: 371px;
        left: 376px;
        font-family: 'Arail';
        letter-spacing: 0px;
      }
      .idnumber{
        top: 431px;
        left: 316px;
        font-family: 'Arail';
      }
      .certificatenumber{
        top: 511px;
        left: 316px;
        font-family: 'Arail';
      }
      .examtimeen{
        width: 187px;
        top: 370px;
        left: 643px;
        font-family: 'Arail';
      }
      .fen{
        position: absolute;
        height: 96px;
        top: 427px;
        left: 643px;
        font-family: 'Arail';
        .item{
          display: flex;
          flex-wrap:wrap; 
          margin-bottom: 12px;
          div{
            width: 140px;
            height: 45px;
            padding-top:5px; 
            font-size: 13px;
            font-family:MicrosoftYaHei;
            a{
              font-size: 17px;
            }
          }
        }
      }
      .fen2{
        position: absolute;
        width: 422px;
        height: 96px;
        top: 427px;
        left: 641px;
        .item{
          width: 100%;
          display: flex;
          margin-bottom: 15px;
          div{
            width: 140px;
            height: 45px;
            font-size: 13px;
            padding-top:5px; 
            font-family:MicrosoftYaHei;
            a{
              font-size: 17px;
            }
          }
        }
      }
      .text{
        width:742px;
        font-size:12px;
        font-family: songti;
        font-weight:400;
        color:rgba(134,106,67,1);
        line-height:20px;
        text-align: left;
        padding: 334px 0px 0px 125px;
        div{
          margin-bottom: 8px;
        }
        span{
          display: inline;
          font-weight: 400;
          position: relative;
          color:rgba(134,106,67,1);
          font-size:12px;
          top:0px;
          left: 0px;
          letter-spacing: 1px;
          border:none;
          text-align: left;
          letter-spacing: 0px;
        }
      }
    }
    .bg1{
      width: 1200px;
      height: 842px;
      margin:0 auto;
      position: relative;
      background:url("../assets/zhengshu.jpg") no-repeat;
      padding-top:48px;
      background-size: 100% 100%;
      .title{
        padding-top:130px;
        font-size:32px;
        font-weight:bold;
        margin-bottom: 97px;
      }
      span{
        height: 33px;
        display: inline-block;
        color: #333333;
        font-size: 18px;
        letter-spacing:1.5px;
        // border-bottom: 1.5px solid #3f3b3a;
        text-align: center;
        position: absolute;
      }
      .div1{
        text-align: left;
        font-size:18px;
        color:rgba(51,51,51,1);
        padding:0px 143px 0px 118px;
        letter-spacing:1.5px;
        line-height: 45px;
        margin-bottom: 30px;
      }
      .div2{
        text-align: left;
        padding:0px 143px 0px 118px;
        letter-spacing:1.5px;
        line-height: 45px;
        font-size:18px;
        margin-bottom: 37px;
      }
      .name-zh{
        width: 170px;
        top: 315px;
        left: 210px;
      }
      .examtimezh{
        width: 147px;
        top: 316px;
        left: 412px;
        letter-spacing: 0px;
      }
      .grade{
        width: 240px;
        top: 286px;
        left: 735px;
      }
      .gradezh{
        width: 60px;
        top: 354px;
        left: 180px;
        letter-spacing: 0px;
      }
      .nameen{
        width: 270px;
        top: 400px;
        left: 377px;
      }
      .gradeen{
        width: 223px;
        top: 397px;
        left: 805px;
      }
      .idnumber{
        top: 512px;
        left: 306px;
      }
      .certificatenumber{
        top: 578px;
        left: 306px;
      }
      .examtimeen{
        width: 138px;
        top: 444px;
        left: 749px;
      }
    }
    .query{
      width:1200px;
      height: 849px;
      background:url('../assets/6dd909264a9ed20f3e7adf60102486d.png') no-repeat;
      margin:0 auto;
      font-family:MicrosoftYaHei-Bold;
      padding:141px 121px 0px;
      text-align: left;
      .subject{
        font-size:37px;
        font-weight:bold;
        color:rgba(195,13,35,1);
        line-height:44px;
        margin-bottom: 26px;
      }
      .t2{
        font-size:30px;
        font-family:FZLTZHK--GBK1-0;
        font-weight:600;
        color:rgba(0,0,0,1);
        margin-bottom: 14px;
      }
      .t3{
        font-size:19px;
        font-family:FZLTXHK--GBK1-0;
        font-weight:200;
        color:rgba(138,138,138,1);
        margin-bottom: 32px;
      }
      .t4{
        font-size:20px;
        font-family:MicrosoftYaHei;
        // font-weight:bold;
        color:rgba(79,85,88,1);
        margin-bottom: 23px;
      }
      .chengji{
        width: 100%;
        margin-top:34px;
        .dengji{
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .line{
            width:390px;
            height:1px;
            background:rgba(238,238,238,1);
          }
          .type{
            font-size:26px;
            font-family:FZLTZHK--GBK1-0;
            font-weight:600;
            color:rgba(0,0,0,1);
          }
        }
        .en{
          width: 100%;
          margin-top:3px;
          font-size:19px;
          font-family:FZLTXHK--GBK1-0;
          font-weight:200;
          color:rgba(138,138,138,1);
          text-align: center;
        }
        .cjdj{
          width: 100%;
          margin-top:10px;
          font-size:18px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(51,51,51,1);
          text-align: center;
          margin-bottom: 30px;
        }
        .cjdeta{
          display: flex;
          width: 80%;
          margin:0 auto;
          justify-content: space-around;
          margin-top:20px;
          text-align: center;
          .i-type{
            width:68px;
            height:17px;
            font-size:16px;
            font-family:MicrosoftYaHei;
            font-weight:400;
            color:rgba(102,102,102,1);
          }
          .fenshu{
            font-size:22px;
            font-family:MicrosoftYaHei;
            font-weight:400;
            color:rgba(79,85,88,1);
            margin-top:10px;
          }
        }
      }
    }
  }
</style>

import Vue from "vue";
import Router from "vue-router";
import index from "./views/index.vue";
import home from "./views/Home.vue";
import news from "./views/dynamic.vue";
import aboutETICSyllabus from "./views/understand.vue";
import testScores from "./views/achievementQuery.vue";
import certificateVerification from "./views/certificateInquiry.vue";
import achievement from "./views/achievement.vue";
import scoreReportList from "./views/achievementList.vue";
import testRegistration from "./views/signUp.vue";
import ready from "./views/ready.vue";
import newsDetails from "./views/dynamicDetails.vue";
import jobs from "./views/work.vue";
import jobDetails from "./views/workDetails.vue";
import faq from "./views/problem.vue";
import download from "./views/download.vue";
import books from "./views/book.vue";
import ICI from "./views/classone.vue";
import enterprise from "./views/enterprise.vue";
import aboutETICArrangement from "./views/arrange.vue";
import userCenter from "./views/userCenter.vue";
import courses from "./views/onlineClass.vue";
import aboutETICBackground from "./views/background.vue";
import certificate from "./views/chengjiDetail.vue";
import scoreReport from "./views/achievementdeta.vue";
import aboutETICAdvantages from "./views/characteristic.vue";
import moreMaterials from "./views/more.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  // base: 'mycli3',
  routes: [
    //首页
    {
      path: "/",
      name: "index",
      component: index,
      children:[
        //首页
        {
          path: "/",
          name: "home",
          component: home
        },
        //首页
        {
          path: "/home",
          name: "home",
          component: home
        },
        //国才动态
        {
          path: "/news",
          name: "news",
          component: news
        },
        //动态详情
        {
          path: "/newsDetails",
          name: "newsDetails",
          component: newsDetails
        },
        //了解国才
        {
          path: "/aboutETICSyllabus",
          name: "aboutETICSyllabus",
          component: aboutETICSyllabus
        },


        //成绩查询
        {
          path: "/testScores",
          name: "testScores",
          component: testScores
        },
        //科目成绩查询
        {
          path: "/achievement",
          name: "achievement",
          component: achievement
        },
        //科目成绩查询列表
        {
          path: "/scoreReportList",
          name: "scoreReportList",
          component: scoreReportList
        },


        //证书查询
        {
          path: "/certificateVerification",
          name: "certificateVerification",
          component: certificateVerification
        },
        //我要报名
        {
          path: "/testRegistration",
          name: "testRegistration",
          component: testRegistration
        },
        //备考国才
        {
          path: "/ready",
          name: "ready",
          component: ready
        },
        //国才就业
        {
          path: "/jobs",
          name: "jobs",
          component: jobs
        },
        //职位详情
        {
          path: "/jobDetails",
          name: "jobDetails",
          component: jobDetails
        },
        //常见问题
        {
          path: "/faq",
          name: "faq",
          component: faq
        },
        //下载专区
        {
          path: "/download",
          name: "download",
          component: download
        },
        //备考图书
        {
          path: "/books",
          name: "books",
          component: books
        },
        //在线课程
        {
          path: "/courses",
          name: "courses",
          component: courses
        },
        //备考图书
        {
          path: "/moreMaterials",
          name: "moreMaterials",
          component: moreMaterials
        },
        //课程体系
        {
          path: "/ICI",
          name: "ICI",
          component: ICI
        },
        //企业合作
        {
          path: "/enterprise",
          name: "enterprise",
          component: enterprise
        },
        //考试安排
        {
          path: "/aboutETICArrangement",
          name: "aboutETICArrangement",
          component: aboutETICArrangement
        },
        //用户中心
        {
          path: "/userCenter",
          name: "userCenter",
          component: userCenter
        },
        //研发背景
        {
          path: "/aboutETICBackground",
          name: "aboutETICBackground",
          component: aboutETICBackground
        },
        //证书详情
        {
          path: "/certificate",
          name: "certificate",
          component: certificate
        },
        //成绩详情
        {
          path: "/scoreReport",
          name: "scoreReport",
          component: scoreReport
        },
        //理念特色
        {
          path: "/aboutETICAdvantages",
          name: "aboutETICAdvantages",
          component: aboutETICAdvantages
        },
      ]
    },
    
    
  ],
  scrollBehavior(to, from, savedPosition){
    if (savedPosition) {
      return savedPosition
    }else{
     return { x: 0, y: 0 }
    }
  }
});

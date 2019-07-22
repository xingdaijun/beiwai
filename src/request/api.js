import { get, post } from './http'

//顶部菜单获取
export const getMenu = p => post('auth/home/searchMenus', p);
//首页大banner
export const getBanner = p => post('auth/home/homeBanner', p);
//首页轮播图
export const friendLink = p => post('auth/home/blogroll', p);
//获取首页动态轮播图
export const getDongBanner = p => post('auth/home/homeTheOnlyBanner', p);
//获取动态
export const getDongtai = p => post('auth/content/theOnlyDynamic', p);
//获取详情动态信息
export const getDongDetail = p => post('auth/content/theOnlyDynamicByIdContent', p);
//国才学院
export const guoCaixueyuan = p => post('auth/content/getContentByFuncId', p);
//就业列表
export const getjiuyelist = p => post('auth/invite/searchData', p);
//备考国才
export const getbeikao = p => post('auth/content/theOnlyDynamic', p);
//了解国才
export const getLiaojie = p => post('auth/content/getContentByFuncId', p);
//成绩查询列表
export const getchengji = p => post('auth/grade/searchData', p);
//成绩查询信息详情
export const getcjdetail = p => post('auth/grade/searchByIdContent', p);
//获取就业类型
export const getjiuyetype = p => post('auth/menu/searchInviteCondition', p);
//获取就业信息
export const getjiuDetails = p => post('auth/invite/searchByIdContent', p);
//获取下载类别
export const getdownType = p => post('auth/content/onlyKnowTheChildMenu', p);
//获取下载类别的列表
export const getdownTypeList = p => post('auth/down/searchData', p);
//下载
export const download = p => post('auth/down/downFile', p);
//证书查询
export const queryZheng = p => post('auth/certificate/searchData', p);
//申请证书
export const shengqing = p => post('auth/applyCertificate/insertData', p);
//企业专区
export const baocun = p => post('auth/applyCooperate/insertData', p);
//热门职位
export const hotwork = p => post('auth/invite/searchHotData', p);
//sso登录
export const  login= p => post('auth/sso/serviceValidate', p);
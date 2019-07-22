import axios from 'axios';
// import QS from 'qs';

// //自动切换环境
// if (process.env.NODE_ENV == 'development'){
//     axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV == 'debug'){
//     axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV == 'production') { 
//     axios.defaults.baseURL = 'http://***********/';
// }
axios.defaults.baseURL = 'http://139.219.15.110:8087';
//设置超时时间
axios.defaults.timeout = 10000000;
// post请求头
axios.defaults.headers.post['Content-Type'] = "application/json";

// //对外接口
// export function request({method, url, params}){
//     if(method == 'Get'){
//         return get(url, params);
//     }else if(method == 'Post'){
//         return post(url, params);
//     }
// }

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params){    
  return new Promise((resolve, reject) =>{        
      axios.get(url, {            
          params: params        
      }).then(res => {
          resolve(res.data);
      }).catch(err =>{
          reject(err.data)        
      })    
  });
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
       axios.post(url, params)
      .then(res => {
          resolve(res.data);
      })
      .catch(err =>{
          reject(err.data)
      })
  });
}
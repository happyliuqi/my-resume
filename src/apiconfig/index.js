/* eslint-disable */
import axios from 'axios'

/**
 * 定义请求量
 * TIME_OUT，ERR_OK
 */

export const TIME_OUT = 1000;
export const ERR_OK = true;
export const baseUrl = process.env.BASE_URL


axios.defaults.timeout = TIME_OUT

axios.interceptors.request.use(
  config => {
    let token = localStorage.getItem("token")
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    config.headers['Authorization'] = ''
    if (token != null){
      config.headers['Authorization'] = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 封装相应拦截， 判断token 是否过期
axios.interceptors.response.use(
  response => {
    let {data} = response
    if (data.message === 'token failure!'){
      localStorage.removeItem('token')
    } else {
      return Promise.reject(error)
    }
  }
)

// 封装 post 请求
export function fetch (requestUrl, params = '') {
  return axios({
    url: requestUrl,
    method: 'post',
    data: {
      'body': params
    }
  })
}

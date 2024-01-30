import axios from 'axios'

const httpInstance = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  timeout: 5000
})

// 添加 request interceptor
httpInstance.interceptors.request.use(
  function (config) {
    // 在此加入需求發送前要執行的程式
    return config
  },
  function (error) {
    // 在此加入若 request 有錯誤
    return Promise.reject(error)
  }
)

// 添加 response interceptor
axios.interceptors.response.use(
  function (response) {
    // 任何 2XX 成功的狀態碼都可觸發此 function
    // 針對 response data 做操作
    return response
  },
  function (error) {
    // 任何 2XX 以外的狀態碼都可觸法此 function
    // 針對 error 回傳資料做操作
    return Promise.reject(error)
  }
)
export default httpInstance

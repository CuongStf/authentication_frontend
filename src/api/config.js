// Thư viện
import axios from 'axios'
// import ls from 'local-storage'

// Cấu hình chung
axios.defaults.baseURL = process.env.BASE_URL_API

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'

// Cấu hình request trước khi gửi di
axios.interceptors.request.use(config => {
  // if u add new Chainable promise or other interceptor
  // You have to return `config` inside of a rquest
  // otherwise u will get a very confusing error
  // and spend sometime to debug it.
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

// Cấu hình khi nhận dc response
// axios.interceptors.response.use(function (response) {
//   return response.data
// }, function (error) {
//   let status = error.response.status
//   if (status === 401) {
//     const token = ls.get('token', '')
//     if (token) {
//       ls.remove('token')
//     }
//     store.dispatch('setLogout', null, {
//       root: true
//     })
//     router.push({
//       name: 'login'
//     })
//   }
//   return error.response.data
// })

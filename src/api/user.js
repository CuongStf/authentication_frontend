import axios from 'axios'

export const signup = (data) => {
  return axios.post('/signup', data)
}

export const loginFb = (data) => {
  return axios.get('/auth/facebook', {
    params: data
  })
}

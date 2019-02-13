import axios from 'axios'

export const signup = (data) => {
	return axios.post('/signup', data)
}
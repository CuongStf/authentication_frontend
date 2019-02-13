import axios from 'axios'

export const listBook = (data) => {
	return axios.get('/book', {
		params: data
	});
}


export const createBook = (data) => {
	return axios.post('/book/create', data)
}


export const deleteBook = (data) => {
	return axios.post('/book/delete', data)
}

export const editBook = (data) => {
	return axios.post('/book/ediot', data)
}
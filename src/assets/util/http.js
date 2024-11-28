import axios from 'axios'
import cookie from './cookie.js'
import Qs from 'qs'

let localhost = process.env.VUE_APP_BASE_URL
axios.defaults.baseURL = localhost
axios.defaults.timeout = 6000

//请求拦截
axios.interceptors.request.use(
	config => {
		//从cookie从获取token上传
		/*if (cookie.getCookie('Authorization')) {
			config.headers.Authorization = cookie.getCookie('Authorization')
		}*/
		return config
	},
	error => {
		Message.error(error)
		return Promise.reject(error)
	})

//响应拦截
axios.interceptors.response.use(
	response => {
		//拦截响应，做统一处理 
		return response
	},
	//接口错误状态处理，无响应时的处理
	error => {
		Message.error(error)
		return Promise.reject(error) // 返回接口返回的错误信息
	})

function get(url, params) {
	return new Promise((resolve, reject) => {
		axios.get(url, {
			params: params
		}).then(res => {
			resolve(res.data)
		}).catch(err => {
			reject(err.data)
		})
	})
}

function post(url, params) {
	return new Promise((resolve, reject) => {
		// axios.post(url, Qs.stringify(params))
		axios.post(url, params)
			.then(res => {
				resolve(res.data)
			})
			.catch(err => {
				reject(err.data)
			})
	})
}

export{
	get,
	post
}

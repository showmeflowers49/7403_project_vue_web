import Vue from 'vue'
import Router from 'vue-router'
import cookie from './assets/util/cookie.js'
import api from './assets/util/common.js'
import Qs from 'qs'

Vue.use(Router)

const routes = [
	{
		path: '/',
		redirect: '/result'  // 重定向到 /vote 路由
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login')
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('@/views/home')
	},
	{
		path: '/404',
		name: '404',
		component: () => import('@/views/404')
	},
	{
		path: '/vote',
		name: 'vote',
		component: () => import('@/views/votePage')
	},
	{
		path: '/result',
		name: 'result',
		component: () => import('@/views/resultPage')
	}
]

const router = new Router({
	routes,
	base: '/'
})

// router.beforeEach((to, from, next) => {
// 	// 如果跳转的页面不存在，跳转到404页面
// 	if (to.matched.length === 0) {
// 		next('/404')
// 	}
// 	let userToken = cookie.getCookie('Authorization')
// 	let params = {
// 		'appid': 'tongxiang-cms',
// 		'sessionid': userToken
// 	}
// 	if(to.path!='/404'){
// 		api.authenticate(params).then(res => {
// 			if (res.code == 1) {
// 				next()
// 			} else {
// 				if (to.path === "/login") {
// 					next()
// 				} else {
// 					next('/login')
// 				}
// 			}
// 		})
// 	}
// })

export default router

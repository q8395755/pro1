// 引入模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import http from '../utils/HttpClient'

//引入组件
import MineCompont from '../components/mine/mine.vue'

import DetailsCompont from '../components/details/details.vue'

//使用路由
Vue.use(VueRouter)

//路由配置
const router = new VueRouter({
	hashbang: true,
  	history: true,
	routes:[
		{
			path:'/mine',
			name:'mine'	,
			component:MineCompont,
			children:[]
		},
		{
			path:'/details',
			name:'details'	,
			component:DetailsCompont,
			children:[]
		}
	]

})

// 对将要进入的路由进行权判断
// router.beforeEach((to, from, next) =>{
// 	// console.log(to);
// 	if(to.path.indexOf('login') < 0 && !window.localStorage.getItem('access_token')){
// 		router.replace('login');
// 		next();
// 	} 
// 	next();
// })

export default router
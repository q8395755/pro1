// 引入模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import http from '../utils/HttpClient'

//引入组件
import MineCompont from '../components/mine/mine.vue'

import DetailsCompont from '../components/details/details.vue'
import A from '../index.vue'
//使用路由
Vue.use(VueRouter)

//路由配置
const router = new VueRouter({
	hashbang: true,
  	history: true,
	  //百度Vue项目启动后首页URL带的#该怎么去掉?
	mode:'history',
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
		},
		{
			path:'/',
			name:'index',
			component:A,
			children:[]
		},
		
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
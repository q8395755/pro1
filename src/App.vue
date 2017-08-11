<template>
  <div id="app">
    <!--头部-->
    <div id="top">
      <!--头部导航-->
      <div class="T-nav">
        <div class="T-nav-header">
          <!--用户盒子-->
          <div class="T-n-h-people">
            <router-link to="/mine" class="T-n-h-p-a">
              <i class="iconfont icon-icon">
                
              </i>
            </router-link>
          </div>
          <!--logo盒子-->
          <div class="T-n-h-logo">
            
          </div>
          <!--搜索盒子-->
          <div class="T-n-h-search">
            <i class="iconfont icon-sousuo"></i>
          </div>
        </div>
      </div>
    </div>

    <!--内容-->
    <div id="main">
      <div class="main-top">
        <div class="top-lunbo swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img class="banner-box" src="./imgs/banner1.jpg"></div>
              <div class="swiper-slide"><img class="banner-box" src="./imgs/banner2.jpg"></div>
              <div class="swiper-slide"><img class="banner-box" src="./imgs/banner3.jpg"></div>
            </div>
        </div>
        <div class="top-list">
          <ul class="t-l-ul">
            <li class="t-l-u-li">
              <i class="iconfont icon-cb076744863b79b4df2aa85bb20934df-copy"></i>
              <span>美白面膜</span>
            </li>
            <li class="t-l-u-li">
              <i class="iconfont icon-yanzhuang"></i>
              <span>防水眼妆</span>
            </li>
            <li class="t-l-u-li">
              
              <i class="iconfont icon-dizhuang"></i>
              <span>遮瑕底妆</span>
            </li>
            <li class="t-l-u-li">
              <i class="iconfont icon-fangshaishuang"></i>
              <span>轻薄防晒</span>
            </li>
          </ul>
          <ul class="t-l-ul">
            <li class="t-l-u-li">
              <i class="iconfont icon-kouhong"></i>
              <span>水润唇妆</span>
            </li>
            <li class="t-l-u-li">
              <i class="iconfont icon-hufumeizhuang"></i>
              <span>洁面卸妆</span>
            </li>
            <li class="t-l-u-li">
              <i class="iconfont icon-meironghufu"></i>
              <span>美妆工具</span>
            </li>
            <li class="t-l-u-li">
              <i class="iconfont icon-17"></i>
              <span>眼霜精华</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import './app.scss'
  import './iconfont/iconfont.css'
  import './assset/swiper-3.4.2.min.css'
  import Swiper from './assset/swiper-3.4.2.min.js'
  export default {
    components: {
      
    },
    created(){
      
    },
    data(){
      return {
        
      }
    },
    methods:{
       
   },
   mounted(){ 
      var mySwiper = new Swiper ('.swiper-container', {
       autoplay:1000,
      }) 
            
		},
    updated(){

    }
  }
</script>



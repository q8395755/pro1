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
              <span>美容</span>
            </li>
            <li class="t-l-u-li">
              <i class="iconfont"></i>
            </li>
            <li class="t-l-u-li">
              <i class="iconfont"></i>
            </li>
            <li class="t-l-u-li">
              <i class="iconfont"></i>
            </li>
          </ul>
          <ul class="t-l-ul">
            <li class="t-l-u-li">
              <i class="iconfont"></i>
            </li>
            <li class="t-l-u-li">
              <i class="iconfont"></i>
            </li>
            <li class="t-l-u-li">
              <i class="iconfont"></i>
            </li>
            <li class="t-l-u-li">
              <i class="iconfont"></i>
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



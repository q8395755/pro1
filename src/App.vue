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
      <div class="lunbo"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import './app.scss'
  
  import './iconfont/iconfont.css'
  
  // import swiper from './assset/swiper-3.4.2.min.js'
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
    updated(){

    }
  }
</script>



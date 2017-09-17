<template>
  <div id="app">
    <!--头部-->
    <!--<indexlist></indexlist>-->
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
    <!--轮播banner图不需要图片预加载-->
    <div id="main">
      <!--导航和轮播-->
      <div class="main-top">
        <div class="top-lunbo swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img class="banner-box" src="./imgs/banner1.jpg"></div>
              <div class="swiper-slide"><img class="banner-box" src="./imgs/banner2.jpg"></div>
              <div class="swiper-slide"><img class="banner-box" src="./imgs/banner3.jpg"></div>
            </div>
            <div class="swiper-pagination"></div>
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
      <!--商品推荐-->
      <div class="main-container">
        <div class="main-box">
          <div class="m-b-banner">
            <img class="banner-box1" src="./imgs/banner21.jpeg"></img>
          </div>
          <!--:m相当于把data传给indexlist组件-->
          <div class="m-b-container">
            <ul class="m-b-c-ul">
              <li class="m-b-c-li" v-for="(index,attr) in data1.chunyu" >
                <router-link :to="{path:'/details',query:{id:index.id}}">
                <div class="m-b-c-li-imgbox">
                  <img class="loading-imgs" :src="src + loading" :data-src="chunfengsrc+index.img">
                </div>
                <div class="m-b-c-li-textbox">
                  <span class="textbox-title">{{index.title}}</span>
                </div>
                <div class="m-b-c-li-pricebox">
                  <div class="priceMax-box">
                    <span>¥</span>{{index.price}}<span>.00</span>
                  </div>
                  <div class="priceMin-box">
                    <span>¥</span>{{index.yuanjia}}<span>.00</span>
                  </div>
                </div>
                </router-link>
              </li>
            </ul>
          </div>
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
  import axios from 'axios';
  import base from '../global.js'

  // 引入index-list组件
  import indexList from './components/index/index-list.vue'
  export default {
    //引入index-list组件
    components: {
      'indexlist':indexList
    },
    created(){
      
    },
    data(){
      return {
       num:7,
       data1:'' ,
       src:base.imgUrl,
       loading:'loading.gif',
       chunfengsrc:base.imgUrl+'chunfeng/'
      }
    },
    methods:{
       
   },
   mounted(){ 
      //swiper  banner轮播
      var mySwiper = new Swiper ('.swiper-container', {
       autoplay:1000,
       loop : true,
       pagination : '.swiper-pagination',
      })

      // 用一个变量指向this
      // 这样可以在axios里面调用它
      var se = this;
        axios.get('./src/json/index.json')
       .then(function (response) {
          
          se.data1 = response.data[0];
          localStorage.data = JSON.stringify(response.data[0]);
          
        })
        .catch(function (error) {
          console.log(error);
        }
        
      );
      
         
		},
    updated(){
      //图片延迟加载
      var loadingImgs = document.querySelectorAll('.loading-imgs');
      for(var i=0;i<=loadingImgs.length-1;i++){
        loadingImgs[i].src = loadingImgs[i].getAttribute("data-src");
      }
    }
  }
</script>


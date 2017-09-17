<template>
    <div class="details">
      <!--头部-->
        <div class="details_top">
          <div class="d_t_left">
            <!--回到上一页用函数式路由-->
            <a class="d_t_link" @click="routerBack"><i class="iconfont icon-jiantou-"></i></a>
          </div>
          <div class="d_t_zhong">
            <span class="xiangqing-title">商品详情</span>
          </div>
          <div class="d_t_right">
            <router-link class="d_t_link" :to="{path:'/'}"><i class="iconfont icon-shouye"></i></router-link>
          </div>
        </div>
        <!--内容-->
        <div class="details_main" id="main1">
          <div class="d_m_img swiper-container" id="img11" @scroll="Scroll">
            <div class="swiper-wrapper details_lunboimgs_box">
              <!--滚动内容-->
              <div class="swiper-slide" v-for="item in datalunboImgs"><img class="details_lunboimgs" :src="Imgurl + item"></div>
            </div>
            <!--控制器-->
            <div class="swiper-pagination"></div>
          </div>
          <div class="details_product">
            <div class="product_box">
              <div class="product_title">{{dataTitle}}</div>
              <div class="product_xiaoliang">
                <div class="p_x_text1">已售{{dataNum}}件</div>
                <div class="p_x_text1"><span class="p_x_color">100%</span>好评</div>
              </div>
            </div>
            <div class="product_pinpai product_box">
              <div class="product_logo_box">
                <img :src="Imgurl + dataLogo">
              </div>
              <div class="product_pinpai">
                <span>{{pinpai}}</span>
              </div>
              <div class="p_g_jiantou">
                <i class="iconfont icon-jiantou-"></i>
              </div>
            </div>
            <div class="product_price product_box">

            </div>
          </div>
        </div>
        <!--尾部-->
        <div class="details_foot" @click="Click"></div>
    </div>
</template>

<script>
  import './details.scss'
  import '../../iconfont/iconfont.css'
  import base from '../../../global.js'
  import axios from 'axios';
  import Swiper from '../../assset/swiper-3.4.2.min.js'
  export default {
    
    components: {
     
    },
    beforeCreate(){
      //这里要放在DOM生成前执行

      // ---商品查找---
      // 用一个变量指向this
      // 这样可以在axios里面调用它
      var oThis = this;
      console.log(oThis);
      if(!localStorage.data){
        //如果本地存储不存在，就重新ajax
        axios.get('./src/json/index.json')
        .then(function (response) {
            localStorage.data = JSON.stringify(response.data[0]);
            var oChunyu = JSON.parse(localStorage.data).chunyu;
            for(var attr in oChunyu){
              if(oChunyu[attr].id==oThis.$route.query.id){
                  oThis.data1 = oChunyu[attr];
                  oThis.datalunboImgs =oThis.data1.lunboimgs;
                  oThis.dataTitle = oThis.data1.title;
                  oThis.dataNum = oThis.data1.num;
                  oThis.dataLogo = oThis.data1.logo;
                  oThis.pinpai =oThis.data1.pinpai;
                  console.log(oThis.data1);
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          }
        
        );
      }else{
        //如果存在就根据Id找到商品
        var oChunyu = JSON.parse(localStorage.data).chunyu;
        for(var attr in oChunyu){
          if(oChunyu[attr].id==oThis.$route.query.id){
              oThis.data1 = oChunyu[attr];
              oThis.datalunboImgs =oThis.data1.lunboimgs;
                  oThis.dataTitle = oThis.data1.title;
                  oThis.dataNum = oThis.data1.num;
                  oThis.dataLogo = oThis.data1.logo;
                  oThis.pinpai =oThis.data1.pinpai;
          }
        }
      }
    
    },
    created(){

    },
    data(){
      return {
        //data里的数据，如果一开始就给定‘’值，那么在渲染的时候就会把数据当成空值渲染，而不会替换成你想要的数据
        Imgurl:base.imgUrl + 'chunfeng/',
      }
    },
    methods:{
      //路由回到上一页的写法
      routerBack(){
        this.$router.go(-1);
      },
      //详情页img高度动态赋值
      oHeight(){
        var oImg = document.querySelector('.d_m_img')
        oImg.style.height = document.documentElement.clientWidth + 'px';
        console.log(oImg.style.height);
      },
      //
      Scroll(){
         console.log(document.body.scrollTop);
      },
      //返回顶部
      Click(){
          var omain1 =document.getElementById('main1');
          omain1.scrollTop = 0;
      },
      //title变色
      Title(){
        var oimg =document.getElementById('img11');
        var omain1 =document.getElementById('main1');
        var num = 0;
        var num1 = 1/320;
        oimg.addEventListener('touchmove', function(event) {
            // 如果这个元素的位置内只有一个手指的话
            if (event.targetTouches.length == 1) {
        　　　　 /// 阻止浏览器默认事件 
                // event.preventDefault();

                var touch = event.targetTouches[0];
                // 把元素放在手指所在的位置

                num = num1 * omain1.scrollTop;
                console.log(num,omain1.scrollTop);
                

                //getAttribute只能获取写在标签内的属性
                document.querySelector(".details_top").style.background = 'rgba(255,255,255,' +num +')';
                console.log(document.querySelector(".details_top"))
                }
        }, false);
      }
     
    },
    mounted(){
      
      // var se = this;
      // se.data = localStorage.data;
      //swiper  商品详情轮播
      var mySwiper = new Swiper ('.swiper-container', {
        autoplay:1000,
        loop : true,
        pagination : '.swiper-pagination',
        })
        //执行title换色
      this.Title();
      
      console.log(this.data);
      console.log(this.datalunboImgs)
    },
    updated(){
      this.oHeight();
    }
  }    
</script>
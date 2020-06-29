<template>
  <div class="home">
    <banner 
      @goDownClick="goDownClick" 
      @bannerImgLoad="bannerImgLoad">
    </banner>
    <household-lock 
      :showAnimate="showAnimate" 
      ref="householdlock">
    </household-lock>
    <commercial
      :showLockAnimate="comShowLockAnimate"
      :showTitleAnimate="comShowTitleAnimate"
      ref="commercial">
    </commercial>
    <encrypt-desc
      :showTitleAnimate="encryptShowTitleAnimate"
      ref="encrypt">
    </encrypt-desc>
    <accordion></accordion>
    <copyright></copyright>
  </div>
</template>

<script>
import Banner from './childcompts/Banner'
import HouseholdLock from './childcompts/HouseholdLock'
import Commercial from './childcompts/Commercial'
import EncryptDesc from './childcompts/EncryptDesc.vue'
import Accordion from './childcompts/Accordion'

import Copyright from 'components/content/copyright/Copyright'


export default {

  name : "Home",

  data () {
    return {
      householdPos:0,
      commercialPos:0,
      encryptPos:0,
      showAnimate:false,
      comShowLockAnimate:false,
      comShowTitleAnimate:false,
      encryptShowTitleAnimate:{ firstTitle:false , secondTitle : false }
    };
  },
  components: {
    Banner,
    HouseholdLock,
    Commercial,
    EncryptDesc,
    Accordion,
    Copyright
    
  },

  created(){
    this.$bus.$on('goLockPos' , this.goLockPos);
  },

  mounted(){
    window.onscroll = this.windowScroll;
  },

  methods: {
    // 监听banner图片加载  加载完毕再把组件的顶部坐标赋值到变量
    bannerImgLoad(){
      this.householdPos = this.$refs.householdlock.$el.offsetTop;
      this.commercialPos = this.$refs.commercial.$el.offsetTop;
      this.encryptPos = this.$refs.encrypt.$el.offsetTop;
    },
    // 监听导航栏发射的事件滚动到对应的地方
    goLockPos(target){
      
      if(target=='household'){
        window.scrollTo( {top:this.householdPos-60 ,behavior:'smooth'});
      }else if(target=='commercial'){
        window.scrollTo( {top:this.commercialPos ,behavior:'smooth'});
      }
    },
    // 监听向下图标点击 减去导航栏的60高度
    goDownClick(){
      window.scrollTo( {top:this.householdPos-60 ,behavior:'smooth'});
    },
    
    householdScrollListener(position){
      // 针对household组件的判断
      // 减200提前展示动画及信息 否则留白时间太长
      if(position >= (this.householdPos-200)){
        this.showAnimate = true;
      // 如果向上滑动超过这个组件的距离将动画效果和信息隐藏
      }else if(position < (this.householdPos - this.$refs.householdlock.$el.offsetHeight)){
        this.showAnimate = false;
      };
    },

    commercialScrollListener(position){
      
      // 针对commercial组件的监听
      if(position >= this.commercialPos-10 ){
        this.comShowTitleAnimate = true;

      }else if(position >= (this.commercialPos - 200)) {
        this.comShowLockAnimate = true;

      }else if(position < (this.commercialPos - 200)){
        this.comShowLockAnimate = false;
        this.comShowTitleAnimate = false;
      };
    },
    encryptDescScrollListener(position){
      // 针对encrypt组件的监听
      if(position >= ( this.encryptPos - 200 )){
        this.encryptShowTitleAnimate.secondTitle = true;
        this.encryptShowTitleAnimate.firstTitle = true;

      }else if(position  >= (this.encryptPos - 400)){
        this.encryptShowTitleAnimate.firstTitle = true;

      }else if(position < (this.encryptPos-400)){
        this.encryptShowTitleAnimate.firstTitle = false;
        this.encryptShowTitleAnimate.secondTitle = false;
      }
    },
    // 监听页面滚动
    windowScroll(){
      let position = document.documentElement.scrollTop||document.body.scrollTop;
      if(!this.$refs.householdlock)return;
      this.householdScrollListener(position);
      this.commercialScrollListener(position);
      this.encryptDescScrollListener(position);
    }
  }
}

</script>
<style scoped>
.home{
  width: 100%;
  background-color: #fff;
}
</style>
<template>
  <div class="commercial">
    <div class="title-content">  
      <p class="title-lock-type">商业用锁</p>
      <p class="title-lock-keynote"><span>省时省力&nbsp;一键帮你管理</span></p>
      <div class="title-lock-text">
        <div>
          <p>门锁管理系统(Saas)、开发API接口、零互开率</p>
          <p>适合99%门型;安装方便、提升服务提高入住。</p>
        </div>
      </div>
      <div class="features-content">
        <div v-for="(item,index) in featuresImg" :key="index">
          <img class="features-content-img" :src="item.img" alt="">
          <p>{{item.desc}}</p>
        </div>
      </div>
    </div>
    <div class="features-img-content">
      <img src="~assets/img/home/commercial/comlock_right.png" alt="">
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'

export default {

  name : "Commercial",

  props:{
    showLockAnimate:{
      type:Boolean,
      default(){
        return false;
      }
    },
    showTitleAnimate:{
      type:Boolean,
      default(){
        return false;
      }
    }
  },

  data () {
    return {
      featuresImg:[
        { img : require('assets/img/home/commercial/icon99.png') , desc:'99%适合'},
        { img : require('assets/img/home/commercial/comicon2.png') , desc:'云管理'},
        { img : require('assets/img/home/commercial/comicon3.png') , desc:'门锁管理'},
        { img : require('assets/img/home/commercial/comicon4.png') , desc:'省心省力'},
      ]
    };
  },
  methods: {
    lockImgBindAnimage(isActive){
      
      let lockImgEl = document.querySelector('.features-img-content>img');

        Velocity(lockImgEl ,
          isActive ? { opacity:'1', left:'0px' } : { opacity:'0', left:'100px' },
          { duration:'1s' });
    },
    titleBindAnimate(isActive){
      
      let titleKeynote = document.querySelector('.commercial .title-lock-keynote span');
      let titleText = document.querySelector('.commercial .title-lock-text > div');

        Velocity(titleKeynote , 
          isActive?{ left : 0 , opacity : '1'}: { left : 100, opacity : '0' } ,
          { duration : '500' ,easing : [.17,.86,.34,1.25]}) ;

        Velocity(titleText , 
          isActive?{ left : 0 , top : 0 , opacity : '1'}:{ left : 100, top : 100 , opacity : '0' },
          { duration : '500' ,easing : [.17,.86,.34,1.25]}) 
        // Velocity(titleText , 
        //    , 
        //   { duration : '500'});
    },
    featuresImgBindAnimate(isActive){
        
      let els = document.getElementsByClassName('features-content-img');

      for(let i = 0; i<els.length ; i++){
        els[i].style.transform = isActive?'rotateY(0deg)':'rotateY(-90deg)';
        els[i].style.transition = 'all .5s';
      }
    }
  },
  watch:{
    showLockAnimate(newVal){
      this.lockImgBindAnimage(newVal);
    },

    showTitleAnimate(newVal){
      this.titleBindAnimate(newVal);
      this.featuresImgBindAnimate(newVal);
    }
  }
}

</script>
<style scoped>
.commercial{
  width: 100%;
  height: 927px;
  padding-left: 60px;
  background: url(~assets/img/home/commercial/comlock_bgyas.png) no-repeat;
  background-size: cover;
  background-attachment:fixed;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
}
.title-content{
  margin-top: 180px;
}
.title-lock-type{
  width: 145px;
  height: 54px;
  font-size: 24px;
  text-align: center;
  line-height: 54px;
  color: #FFFFFF;
  background-color: #0099FF;
  border-radius: 30px;
  margin: 10px 0px;
} 
.title-lock-keynote{
  height:66px;
  color: #ffffff;
  font-size: 50px;
  position: relative;
  margin-top: 50px;
}
.title-lock-keynote > span{
  white-space: nowrap;
  opacity: 0;
  position: absolute;
  left: 100px;
}
.title-lock-text{
  height:48px;
  font-size: 18px;
  margin-top: 15px;
  color: #FFFFFF;
  position: relative;
}
.title-lock-text > div{
  position: absolute;
  left: 100px;
  top:100px;
  opacity: 0;
}
.features-content{
  width: 540px;
  margin-top: 115px;
  display: flex;
  justify-content: space-between;
}
.features-content   p{
  color: #FFFFFF;
  font-size: 20px;
  text-align:center;
  margin-top: 15px;
}
.features-content-img{
  width: 100px;
  height: 100px;
  transform: rotateY(-90deg);
}
.features-img-content{
  margin-left: 140px;
  margin-top: 65px;
  position: relative;
}
.features-img-content > img{
  width: 451px;
  height:764px;
  position: absolute;
  left:100px ;
  opacity: 0;
}
</style>
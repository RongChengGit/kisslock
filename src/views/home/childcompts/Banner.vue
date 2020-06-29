<template>
  <div class="banner">
    <img class="banner-bg" src="~assets/img/home/banner/banner_yas.png" alt="" @load="bannerImgLoad">
    <div class="banner-content">
      <p class="banner-title">一键开锁&nbsp;快人一步</p>
      <p class="banner-product-name">KISSLOCK</p>
      <div class="banner-product-desc">
        <span><b></b>军工级防护保护</span>
        <span><b></b>一键开启密钥授权</span>
        <span><b></b>远程操作省事省心</span>
      </div>
    </div>
    <img class="banner-animate-img" src="~assets/img/home/banner/banner_lock.png" alt="">
    <a class="go-down" href="javascript:void(0)"  @click="goDownClick">
      <img class="go-down-img" src="~assets/img/home/banner/down.png" alt="">
    </a>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'

export default {

  name : "Banner",

  data () {
    return {
    };
  },

  mounted(){
    let animateImg = document.querySelector('.banner-animate-img');
    let goDownImg = document.querySelector('.go-down-img');

    Velocity(animateImg , {
      bottom:'0px',
      opacity:'1'
    },{
      duration:'1s',
      delay:'.5s'
    });
    // Velocity(goDownImg ,{
    //   top:'15px'
    // },{
    //   duration:'1s',
    //   easing:'ease',
    //   loop:true
    // })
  },
  methods: {
    goDownClick(){
      this.$emit('goDownClick');
    },
    bannerImgLoad(){
      this.$emit('bannerImgLoad');
    }
  }
}

</script>
<style scoped>
.banner{
  width: 100%;
  position: relative;
  overflow: hidden;
}
.banner-bg{
  width: 100%;
  vertical-align: text-bottom;
}
.banner-content{
  position: absolute;
  left: 33%;
  top: 20%;
  text-align: center;
}
.banner-title{
  color:#FFF;
  font-size: 70px;
  margin: 0px;
}
.banner-product-name{
  font-size: 35px;
  color: #D1D1D1;
  margin: 10px 0px;
} 
.banner-product-desc{
  font-size: 24px;
  color: #A6A6A6;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
}
.banner-product-desc span{
  margin: 0px 15px;
}
.banner-product-desc b{
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  margin-right: 10px;
  background-color: #A6A6A6;
  vertical-align: middle;
}
.banner-animate-img{
  width: 450px;
  position: absolute;
  bottom: -100px;
  right: 300px;
  opacity: 0;
  z-index: 10;
}
.go-down{
  width: 180px;
  height: 60px;
  text-align: center;
  position: absolute;
  left: 50%;
  bottom: 90px;
  transform: translate(-50% ,0);
  z-index: 10;
  
}
.go-down > img{
  width: 30px;
  height: 30px;
  position: relative;
  animation: godownanimate  2s  ease infinite;
}
@keyframes godownanimate {
  0%{
    top:0px
  }
  50%{
    top:15px;
  }
  100%{
    top:0px
  }
}
</style>
<template>
  <div class="encrypt-desc">
    <p 
      class="encrypt-desc-title"
      :class="{'encrypt-desc-title-active':showTitleAnimate.firstTitle}">
      金融级加密技术&nbsp;多重保障安全
    </p>
    <div class="encrypt-desc-text-content">
      <div 
        class="encrypt-desc-text"
        :class="{'encrypt-desc-text-active':showTitleAnimate.secondTitle}">
        <p>金融级非对称算法,高强度服务器需要50年破解,</p>
        <p>买把锁2048位独立密码;全程加密传输,多重安全保障。</p>
      </div>
    </div>
    <div class="encrypt-desc-features">
      <div class="encrypt-desc-features-item" v-for="(item , index) in featuresList" :key="index">
        <div class="encrypt-desc-features-hex-content">
            <div class="encrypt-desc-features-hex" >
              <div class="encrypt-desc-features-hexin">
              </div>
            </div>
        </div>
        
        <img :src="item.img" alt="">
        <p>{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
export default {

  name : "EncryptDesc",

  props:{
    showTitleAnimate:{
      type:Object,
      default(){
        return {firstTitle:false,secondTitle:false};
      }
    }
  },

  data () {
    return {
      featuresList:[
        { img : require('assets/img/home/encrypt_desc/safe1.png') , text : '高强度防护'},
        { img : require('assets/img/home/encrypt_desc/safe2.png') , text : '加密传输'},
        { img : require('assets/img/home/encrypt_desc/safe3.png') , text : '软件终身升级'},
        { img : require('assets/img/home/encrypt_desc/safe4.png') , text : '超B级锁芯'},
        { img : require('assets/img/home/encrypt_desc/safe5.png') , text : '手机一键管理'},
        { img : require('assets/img/home/encrypt_desc/safe6.png') , text : '高性能芯片'},
        { img : require('assets/img/home/encrypt_desc/safe7.png') , text : '急速识别技术'},
      ],
    };
  },
  components: {},

  computed: {},

  methods: {
  }

}

</script>
<style scoped>
.encrypt-desc{
  width: 100%;
  margin: 160px 0px;
  text-align: center;
  align-items: center;
}
.encrypt-desc-title{
  height:58px ;
  font-size:22px;
  color:var(--color-text-tint);
  white-space: nowrap;
  opacity: 0;
}
.encrypt-desc-title-active{
  font-size: 44px;
  opacity: 1;
  transition:all cubic-bezier(.17,.86,.34,1.25) 1s;
  
}
.encrypt-desc-text-content{
  position: relative;
  height: 63.33px;
  margin: 70px 0px;
}
.encrypt-desc-text{
  font-size: 10px;
  color:var(--color-text-tint);
  white-space: nowrap;
  opacity: 0;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%,0);
}
.encrypt-desc-text-active{
  top: 0px;
  opacity: 1;
  font-size: 20px;
  transition:all cubic-bezier(.17,.86,.34,1.25) 1s;
}

.encrypt-desc-text>p{
  margin-bottom: 10px;
}
.encrypt-desc-features{
  font-size: 20px;
  display: flex;
  justify-content: center;
}
.encrypt-desc-features  p{
  margin-top: 10px;
}
.encrypt-desc-features-item{
  margin: 0px 10px;
  position: relative;
}
.encrypt-desc-features-item:hover .encrypt-desc-features-hex-content{
  transform: rotate(360deg);
  -webkit-transform:rotate(360deg);
  -o-transform: rotate(360deg);
  -ms-transform:rotate(360deg);
  -moz-transform: rotate(360deg);
  transition: all 2s ease;
}
.encrypt-desc-features-hex{
  width: 124px;
  height: 108px;
  overflow: hidden;
  transform: rotate(60deg) skewX(30deg);
}
.encrypt-desc-features-hexin{
  width: 124px;
  height: 108px;
  transform: skewX(-30deg) rotate(-60deg);
  background-color: #0099FF;
}
.encrypt-desc-features-item img{
  height: 65px;
  width: 65px;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50% , -80%);
}
</style>
<template>
  <div class="household-lock">
    <div class="img-content">
      <img class="img-content-bg" src="~assets/img/home/homehold/homelock_1.png" alt="">
      <img class="img-content-animate" src="~assets/img/home/homehold/home_n25.png" alt="">
    </div>
    <div class="title-content">
      <p class="title-lock-type">家庭用锁</p>
      <p class="title-lock-text">一个APP&nbsp;家&nbsp;尽在掌中</p>
      <p class="title-lock-keynote"><span class="keynote-text">卓尔不凡&nbsp;多重保障家的安全</span></p>
      <household-lock-features
        :features="features">
      </household-lock-features>
    </div>
  </div>
</template>

<script>
import HouseholdLockFeatures from './HouseholdLockFeatures'
import Velocity from 'velocity-animate';
export default {

  name : "HouseholdLock",

  props:{
    showAnimate:{
      type:Boolean,
      default(){
        return false;
      }
    }
  },

  data () {
    return {
      features:[
        {img:require('assets/img/home/homehold/1.png') , desc:'五种开锁方式任选'},
        {img:require('assets/img/home/homehold/2.png') , desc:'手机app多锁管理'},
        {img:require('assets/img/home/homehold/3.png') , desc:'远程发放管理权限'},
        {img:require('assets/img/home/homehold/4.png') , desc:'远程查询开门记录'},
        {img:require('assets/img/home/homehold/5.png') , desc:'手机一键打开门锁'},
        {img:require('assets/img/home/homehold/6.png') , desc:'远程查询开门记录'},
      ],
    };
  },
  components: {
    HouseholdLockFeatures
  },
  watch:{
    showAnimate(newVal ,oldVal){
      let imgEl = document.querySelector('.img-content-animate');
      let textEl = document.querySelector('.keynote-text')
      if(newVal){
        Velocity(imgEl , { opacity : '1' , bottom : '0px' } , { duration : '1s' });
        Velocity(textEl , { opacity : '1' , bottom : '0px' } , { duration : '1s' });
      }else{
        Velocity(imgEl , { opacity : '0' , bottom : '-150px' } , { duration : '1s' });
        Velocity(textEl , { opacity : '0' , bottom : '-100px' } , { duration : '1s' });
      }
    }
  }
}

</script>
<style scoped>
.household-lock{
  width: 100%;
  margin-top: 200px;
  margin-bottom: 200px;
  display: flex;
}
.img-content{
  margin-left: 30px;
  margin-right: 110px;
  position:relative;
  
}
.img-content > img{
  display: block;
}
.img-content-bg{
  widows: 324px;
  height: 481px;
}
.title-content{
  flex: 1;
}
.title-lock-type{
  width: 145px;
  height: 54px;
  font-size: 24px;
  text-align: center;
  line-height: 54px;
  color: #FFFFFF;
  background-color: #000000;
  border-radius: 30px;
  margin: 10px 0px;
} 
.title-lock-text{
  font-size: 24px;
  color: #B7A57C;
  margin-bottom: 10px;
}
.title-lock-keynote{
  margin-top: 30px;
  font-size: 50px;
  position: relative;
  height: 50px;
}
.keynote-text{
  position: absolute;
  bottom: -100px;
  opacity: 0;
}
.img-content-animate{
  width: 380px;
  position: absolute;
  left: 0px;
  bottom: -150px;
  opacity: 0;
}
</style>
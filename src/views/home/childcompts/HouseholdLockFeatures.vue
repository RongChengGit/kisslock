<template>
  <div class="features">
    <div class="features-item" v-for="(item,index) in features" :key="index">
      <div class="features-item-img"></div>
      <span>{{item.desc}}</span>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
export default {

  name : "HouseholdLockFeatures",

  props:{
    features:{
      type:Array,
      defualt(){
        return [];
      }
    }
  },

  data () {
    return {
    };
  },

  mounted(){
    this.bindItembg();
  },
  components: {},

  computed: {},

  methods: {
    bindItembg(){
      let imgEl = document.getElementsByClassName('features-item-img');
      
      for(let i = 0 ; i <imgEl.length ; i++ ){
        // 加上图标背景
        imgEl[i].style.background = 'url('+this.features[i].img+') no-repeat center center';
        imgEl[i].style.backgroundSize = '50% 50%'
        // 给图标加上mouseleave事件 让边框顺滑回到开始的样式
        imgEl[i].addEventListener('mouseenter',()=>{
          Velocity(imgEl[i],'stop');
          Velocity(imgEl[i] , {
            borderRadius:'0px'
          },{
            easing:'ease',
            duration:'300'
          })
        })
        imgEl[i].addEventListener('mouseleave',()=>{
          Velocity(imgEl[i],'stop');
          Velocity(imgEl[i] , {
            borderRadius:'50%'
          },{
            easing:'ease',
            duration:'300'
          })
        })
      }
    }
  }
}

</script>
<style scoped>
.features{
  width: 600px;
  margin-top: 15px;
  padding-left: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.features-item{
  width: 300px;
  font-size: 20px;
  margin-top: 30px;
  align-items: center;
  display: flex;
}
.features-item-img{
  box-sizing: border-box;
  width: 60px;
  height: 60px;
  margin-right: 20px;
  border: 1px solid #1E9DFE;
  border-radius: 30px ;
}
</style>
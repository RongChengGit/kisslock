<template>
  <div class="accordion">
    <div class="panel" v-for="(panel,index) in accordionImgList" :key="index">
      <div class="panel-item" v-for="(panelItem , indey) in panel" :key="indey"></div>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate';
export default {

  name : "Accordion",

  data () {
    return {
      accordionImgList:[
        [
          require('assets/img/home/accordion/footimg1.png'),
          require('assets/img/home/accordion/footimg5.png'),
        ],
        [
          require('assets/img/home/accordion/footimg2.png'),
          require('assets/img/home/accordion/footimg6.png'),
        ],
        [
          require('assets/img/home/accordion/footimg3.png'),
          require('assets/img/home/accordion/footimg7.png'),
        ],
        [
          require('assets/img/home/accordion/footimg4.png'),
          require('assets/img/home/accordion/footimg8.png'),
        ]
      ]
    };
  },
  mounted(){
    this.$nextTick(()=>{
      this.bindBgAndAnimate();
    })
  },

  methods: {
    bindBgAndAnimate(){
      let els = document.getElementsByClassName('panel-item');
      let panels = document.getElementsByClassName('panel');
      for(let i = 0 ; i < this.accordionImgList.length ; i++){
        
        panels[i].addEventListener('mouseenter',()=>{
          panels[i].style.flex = '4';
        });
        panels[i].addEventListener('mouseleave' , ()=>{
          panels[i].style.flex = '1';
        });
        for(let j = 0 ; j<this.accordionImgList[i].length ;j++){
          let el = els[2*i+j];
          let img = this.accordionImgList[i][j];
          
          el.style.background = 'url('+img+') no-repeat center center';
					el.addEventListener('mouseenter',()=>{
						el.style.flex = '3';
            Velocity( el,{},{})
						
					});
					el.addEventListener('mouseleave' , ()=>{
						el.style.flex = '1';
            Velocity( el,{},{})
					});
        }
      }
    }
  }
}

</script>
<style scoped>
.accordion{
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: space-between;
  
}
.panel{
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition : all 1s;
  -webkit-transition: all 1s;
  -o-transition: all 1s ;
  -moz-transition:  all 1s;
  -ms-transition:all 1s;
}
.panel-item{
  flex: 1;
  width: 100%;
  border: 1px solid #FFF;
  transition : all 1s;
  -webkit-transition: all 1s;
  -o-transition: all 1s ;
  -moz-transition:  all 1s;
}
</style>
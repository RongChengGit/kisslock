<template>
  <div class="main-navbar">
    <navbar>
      <template #left>
        <a href="javascript:void(0)" class="left-content" @click="goPage('home')">
          <img src="~assets/img/navbar/logo.png" alt="">
          <span>Kisslock</span>
        </a>
      </template>
      <template #center>
        <div class="center-content">
          <a class="hide-navbar-detail" href="javascript:void(0)" @click="goPage('home')">首页</a>
          <a class="show-navbar-detail" href="javascript:void(0)">智能锁</a>
          <a class="show-navbar-detail" href="javascript:void(0)" @click="goPage('login')">系统登录</a>
          <a class="hide-navbar-detail" href="javascript:void(0)" @click="goPage('about')">关于我们</a>
        </div>
      </template>
      <template #right>
        <div class="right-content">
          <a href="javascript:void(0)">下载APP</a>
          <div class="right-content-code">
            <img src="~assets/img/copyright/kisslockios.png" alt="">
            <p>扫描下载kisslock</p>
          </div>
        </div>
      </template>
    </navbar>
    <!-- 标题和子目录任意一个元素在hove中都继续显示 -->
    <div class="main-navbar-detail" 
      :class="{'main-navbar-detail-show':isHoverMenu||isHoverMenuDetail}">
      <ul class="detail-content clear-float">
        <li class="detail-content-household">
          <a href="javascript:void(0)" @click="goLockPos('household')">
            <img class="home-icon" src="" alt="">
            <span>家庭锁</span>
          </a>
          <a href="javascript:void(0)" @click="goLockPos('commercial')">
            <img class="hotel-icon" src="~assets/img/navbar/hotel_icon1.png" alt="">
            <span>商用锁</span>
          </a>
        </li>
        <li class="comp-login">
          <a href="javascript:void(0)" @click="goPage('login')">
            <img class="comlogin-icon" src="~assets/img/navbar/comlogin1.png" alt="">
            <span>企业登录</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import navbar from './Navbar'
export default {

  name : "MainNavbar",

  data () {
    return {
      isHoverMenu:false,
      isHoverMenuDetail:undefined
    };
  },
  mounted(){
    let hoverEl = document.getElementsByClassName('show-navbar-detail');
    // 获取两个标题旁边的元素
    let hideEl = document.getElementsByClassName('hide-navbar-detail');
    let detailContent = document.getElementsByClassName('detail-content')[0];
    // 获取当前页面根元素 当鼠标移出页面时也关闭下拉菜单
    let htmlEl = document.querySelector('html');

    detailContent.addEventListener('mouseleave',()=>{
      this.isHoverMenuDetail = false;
    });
    htmlEl.addEventListener('mouseleave',()=>{
      this.isHoverMenuDetail = false;
    })

    for(let el of hoverEl){
      el.addEventListener('mouseenter',()=>{
        this.isHoverMenu = true;
        this.isHoverMenuDetail = true;
      });
      el.addEventListener('mouseleave',()=>{
        this.isHoverMenu = false;
      })
    };
    // 如果旁边两个元素监听到了hover事件则表明鼠标移开了 隐藏子目录
    for(let el of hideEl){
      el.addEventListener('mouseenter',()=>{
        this.isHoverMenuDetail = false;
      })
    }
  },
  components: {
    navbar
  },

  computed: {
  },

  methods: {
    // 监听下拉菜单中的点击
    goLockPos(target){
      if(this.$route.path.indexOf('home')==-1){
        this.$router.push('/home');
      }
      this.$nextTick(()=>{
        this.$bus.$emit('goLockPos' , target);
      })
    },
    // 监听导航栏点击
    goPage(target){
      if(this.$route.path.indexOf(target)==-1){
        this.$router.push(target);
      }
    }
  }
}

</script>
<style scoped>
.main-navbar{
  width:1280px;
  background-color: rgba(0,0,0,.8);
  position: fixed;
  top: 0px;
  z-index: 999;
}
.main-navbar a{
  color: #FFF;
}
.left-content{
  height: 100%;
  color: #FFFFFF;
}
.left-content> img{
  width: 36px;
  vertical-align:middle;
  margin-bottom: 5px;
}
.left-content>span{
  font-size: 20px;
  font-weight: 700;
}
.center-content{
  height: 100%;
  display: flex;
  color:#999999;
}
.center-content > a{
  width: 120px;
  height: 100%;
  padding: 0px 20px;
  text-align: center;
}
.right-content{
  color: #999999;
  text-align: center;
}
.right-content>a{
  display: block;
}
.right-content:hover .right-content-code{
  opacity: 1;
  height: 170px;
  transition: all .5s;
}
.right-content-code{
  background-color: rgba(0,0,0,.8);
  color: #FFFFFF;
  padding: 15px 20px 5px;
  box-sizing: border-box;
  height: 0px;
  overflow: hidden;
  opacity: 0;
}
.right-content-code>img{
  height: 116px;
  width: 116px;
  display: block;
  margin: 0px auto;
}
.right-content-code>p{
  font-size: 12px;
  margin: 10px 0px 10px;
  line-height: 1.4;
}
.main-navbar-detail{
  width: 100%;
  height: 0px;
  opacity: 0;
  overflow: hidden;
}
.main-navbar-detail-show{
  height: 93px !important;
  opacity: 1;
  transition: all .5s;
}
.detail-content{
  padding: 0px;
  margin: 0px;
  width: 340px;
  list-style: none;
  display: flex;
  margin-left: calc(5vw + 117px + 15px + 160px);
}
.detail-content >li{
  width: 160px;
  text-align: center;
  display: flex;
  justify-content: space-evenly ;
}
.detail-content > li > a {
  color: #999999;
  display: flex;
  flex-direction: column;
}
.detail-content > li > a > img{
  height: 50px;
  width: 50px;
}
.detail-content > li > a:hover{
  color: #FFFFFF;
}
/* justify-content在ie中不生效 使用margin来兼容 */
.detail-content-household>a:first-child{
  margin-left: auto;
  margin-right: 5px;
}
.detail-content-household > a:last-child{
  margin-right: auto;
  margin-left: 5px;
}
.comp-login>a{
  margin: 0 auto;
}


.home-icon{
  
  background: url(~assets/img/navbar/home_icon1.png) no-repeat;
  background-size: 50px 50px;
}
.hotel-icon{
  background: url(~assets/img/navbar/hotel_icon1.png) no-repeat;
  background-size: 50px 50px;
}
.comlogin-icon{
  background: url(~assets/img/navbar/comlogin1.png) no-repeat;
  background-size: 50px 50px;
}

.home-icon:hover{
  background: url(~assets/img/navbar/home_icon2.png) no-repeat;
  background-size: 50px 50px;
}
.hotel-icon:hover{
  background: url(~assets/img/navbar/hotel_icon2.png) no-repeat;
  background-size: 50px 50px;
}
.comlogin-icon:hover{
  background: url(~assets/img/navbar/comlogin2.png) no-repeat;
  background-size: 50px 50px;
}

</style>
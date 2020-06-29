<template>
  <div id="about">
    <el-container>
      <el-aside>
        <el-menu :unique-opened="true" 
          @select="menuSelect"
          @open="submenuOpen"
          default-active="0-0"
          ref="menu">

          <el-submenu 
            :index="''+index" 
            v-for="(item , index) in menu" 
            :key="index"
            >
            <template #title>
              <i class="title-icon" :class="'title-icon-'+index"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item 
              :index="index+'-'+indey" 
              v-for="(submenu,indey) in item.submenuList" 
              :key="indey">{{submenu}}</el-menu-item>
          </el-submenu>

        </el-menu>
      </el-aside>
      <el-main>
        <div class="main-nav-text">
          <a href="javascript:(0)">>帮助中心></a>
          <a href="javascript:(0)">{{menu[submenuActiveIndex].title}}</a>
        </div>
        <about-main-content :selectIndex="selectIndex"></about-main-content>
      </el-main>
    </el-container>
    <copyright></copyright>
  </div>
</template>

<script>

import Copyright from 'components/content/copyright/Copyright'

import AboutMainContent from './childcompts/AboutMainContent'

export default {

  name : "About",

  data () {
    return {
      menu:[
        {title : '企业版' , submenuList : ['产品介绍','常见问题']},
        {title : '手机版' , submenuList : ['基本介绍','注册登录','下载安装','使用说明','安全问题','功能问题','故障排查','难以置信']},
        {title : '关于我们' , submenuList : ['产品介绍']}
      ],
      submenuActiveIndex:0,
      selectIndex:'0-0'
    };
  },
  components: {
    Copyright,
    AboutMainContent
  },


  methods: {
    submenuOpen(index){
      let menuChild = this.$refs.menu.$el.getElementsByTagName('ul')[index];
      // 打开菜单时取消所有已激活的子菜单
      menuChild.getElementsByClassName('is-active').forEach(element => {
        element.classList.remove('is-active');
      });
      // 默认为第一个子菜单打开 加上active class
      menuChild.firstChild.classList.add('is-active');
      this.submenuActiveIndex = index;
      this.selectIndex = index+'-0';
    },
    menuSelect(index){
      // 点击时手动取消第一个子菜单的选中状态
      let menuChild = this.$refs.menu.$el.getElementsByTagName('ul')[this.submenuActiveIndex];
      menuChild.firstChild.classList.remove('is-active');
      this.selectIndex = index;
    }
  },
  
  computed: {
  },
}

</script>
<style lang="scss">
#about{
  width: 100%;
  .el-container{
    width: 90%;
    height: auto;
    min-height: 600px;
    margin: 0 auto;
    padding-bottom: 50px;
    padding-top: 100px;
  }
  .el-aside{
    height:auto;
    width: 300px !important;
    line-height: 1.4;

    padding-left: 50px;
    padding-top: 10px;
    overflow-x: hidden;
  }
  .title-icon{
    display: inline-block;
    width: 34px;
    height: 34px;
    font-style: normal;
    margin-right: 5px;
  }
  .title-icon-0{
    background: url(~assets/img/help/qiye04.png) no-repeat;
    background-size: 100% 100%;
  }
  .title-icon-1{
    background: url(~assets/img/help/phone02.png) no-repeat;
    background-size: 100% 100%;
  }
  .title-icon-2{
    background: url(~assets/img/help/qiye02.png) no-repeat;
    background-size: 100% 100%;
  }
  .el-submenu__title{
    font-size: 20px;
  }
  .el-submenu__title:hover{
    background-color: #fff;
  }
  .el-menu-item{
    color: #000;
    height: 30px;
    padding: 0px;
    line-height: 30px;
  }
  .el-menu-item:hover{
    background-color: #9E9E9E;
    color: #FFF;
  }
  .el-menu-item.is-active{
    background-color: #CCC;
  }
  .el-main{
    padding-left: 30px;
  }
  .main-nav-text a{
    font-size: 15px;
  }
  .main-nav-text a:first-child{
    color: #000000;
  }
  .main-nav-text a:last-child{
    color: #409EFF;
  }
}
</style>
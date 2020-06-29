<template>
  <div class="copyright">
    <div class="copyright-content">
      <div class="copyright-content-item" v-for="(item , index ) in contentTextList" :key="index">
        <p class="item-title">{{item.title}}</p>
        <p class="item-text" v-for="(text , indey ) in item.list" :key="indey">
          <a href="javascript:void(0)">{{text}}</a>
        </p>
      </div>
      <div class="contact">
        <p>24小时全国服务热线</p>
        <p class="contact-number">027-87003960</p>
        <div class="concact-service">
          <a href="javascript:void(0)"><img src="~assets/img/copyright/msg_24.png" alt=""></a>
          <a href="javascript:void(0)"><span>24小时在线客服</span></a>
        </div>
      </div>
      <div class="app-code">
        <a href="javascript:void(0)">
          <img src="~assets/img/copyright/kisslockandroid.png" alt="">
          <p>kisslock安卓版</p>
        </a>
        <a href="javascript:void(0)">
          <img src="~assets/img/copyright/kisslockios.png" alt="">
          <p>kisslock苹果版</p>
        </a>
      </div>
    </div>
    <div class="copyright-text">
      <p>Copyright&copy;2011-2017 武汉市国扬科技集团有限公司</p>
      <p><a href="javascript:(0)">鄂ICP备16025640号-1</a></p>
    </div>
  </div>
</template>

<script>
export default {

  name : "Copyright",

  data () {
    return {
      contentTextList:[
        {title : '相关产品' , list : ['智能门锁','家庭用锁','商业用锁']},
        {title : '使用帮助' , list : ['用户登录','关于购买','关于配送']},
        {title : '产品服务' , list : ['kisslock配送','配送时间','购买方式','退货流程','免责声明']},
        {title : '联系合作' , list : ['关于我们','加入我们','新闻中心','产品技术日志']},
      ]
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
.copyright{
  background-color: #F7F7F7;
  width: 100%;
  padding-top: 40px;
  margin-top: 100px;
  border-top: 1px solid #EEEEEE;
}
.copyright-content{
  width: 90%;
  margin: 0 auto;
  padding-bottom: 15px;
  border-bottom: 1px solid #EEEEEE;
  display: flex;
}
.copyright-content-item{
  width: 110px;
  margin: 0 15px;
}
.copyright-content-item p{
 margin-bottom: 3px;
}
.item-title{
  color: #4E4C4C;
}
.item-text{
  font-size: 12px;
}
.contact{
  width: 250px;
  color:#737373;
  margin:0px 15px;
}
.contact-number{
  font-size: 30px;
  margin: 15px 0px;
}
.concact-service{
  height: 44px;
  width: 200px;
  background-color: #1E9DFE;
  display: flex;
  align-items: center;
}
.concact-service a{
  color:#FFFFFF;
  display: block;
  margin-left: 10px;
}
.concact-service img{
  width: 34px;
  height: 34px;
}
.app-code{
  display: flex;
  text-align: center;
  margin-left: 15px;
}
.app-code >a{
  display: block;
  margin-right: 15px;
}
.app-code p{
  font-size: 12px;
}
.app-code img{
  width: 116px;
  height: 116px;
}
.copyright-text{
  width: 85%;
  margin: 0 auto;
  padding: 30px 0px;
  font-size: 13px;
}
.copyright-text>p:first-child{
  color: #888888;
}
</style>
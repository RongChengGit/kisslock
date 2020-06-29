<template>
  <div class="about-main-content ">
    <!-- 企业版部分 index:0-x -->
    <div v-if="selectIndex=='0-0'">
      <p class="content-text-title">KissLock企业版介绍</p>
      <p>KissLock企业版可通过电脑网页登录，便于企业用户使用，可与手机快速且安全的通过服务器交互数据，可以在线添加企业成员、给成员授权钥匙、管理锁和钥匙等操作。</p>
    </div>

    <div v-if="selectIndex=='0-1'">
      <p class="content-text-title">KissLock退出企业版问题</p>
      <p>在以下几种情况下，您将会退出KissLock企业版版：</p>
      <p>1、在网页上点了退出登录，或关闭浏览器。</p>
      <p>2、较长时间没有操作时，网页版将会自动退出登录.</p>
    </div>

    <!-- 手机版部分 index:1-x -->
    <div v-if="selectIndex=='1-0'">
      <p class="content-text-title">什么是KissLock？</p>
      <p>KissLock是行业领先的拥有自主知识产权的智能锁专家。我们专注于人类生活方式的电子信息化，将软件和硬件的完美结合，让具有蓝牙功能的客户端如手机、平板电脑等，达到控制门锁开关的功能。</p>
      
      <p class="content-text-title">KissLock收费吗？</p>
      <p>KissLock的软件免费，只需根据需求选择购买硬件附加设备即可。</p>

      <p class="content-text-title">KissLock可以做什么？</p>
      <p>KissLock的应用范围非常之广，除了可以开门锁外，即将可以加装在门禁、玩具等近距离无线通信设备上，更多产品即将逐步推出，敬请期待。</p>
    </div>
      
    <div v-if="selectIndex=='1-1'">
      <p class="content-text-title">怎样注册KissLock账号？</p>
      <p>使用手机客户端填写相应资料注册即可。</p>
      <p class="content-text-title">不注册可以使用KissLock吗？</p>
      <p>不可以。</p>
      <p class="content-text-title">无法使用KissLock服务器提供的功能怎么办？</p>
      <p>请检查本地的网络状态，客户端部分功能需要网络连接功能才能正常使用，使用时请确保客户端能够正常的连接网络。</p>
    </div>

    <div v-if="selectIndex=='1-2'">
      <p class="content-text-title">KissLock支持的系统有哪些？</p>
      <p>目前主要支持Android和IOS，我们会陆续推出其他版本供用户使用。</p>
      <p class="content-text-title">下载KissLock失败怎么办？</p>
      <p>
        下载KissLock失败，一般由以下原因造成：<br>
        a)连接网络故障；<br>
        b)设备内存过少；<br>
        c)安全软件屏蔽。<br>
      </p>
      <p class="content-text-title">安装KissLock失败怎么办？</p>
      <p>
        安装KissLock失败，一般由以下原因造成：<br>
        a)连接网络故障；<br>
        b)设备内存过少；<br>
        c)安全软件屏蔽。<br>
      </p>
      
    </div>

    <div v-if="selectIndex=='1-3'">
      <p class="content-text-title">怎样选择开锁方式？</p>
      <p>开锁方式分为自动开锁和手动开锁两种:</p>
      <p>自动开锁：打开App，靠近锁，点击开锁键，App自动匹配相应钥匙开锁；</p>
      <p>手动开锁：打开App，靠近锁，点击开锁键，弹出附近的拥有钥匙的门锁，手动选择需要打开的门锁。</p>

      <p class="content-text-title">我的手机如果丢了怎么办？</p>
      <p>App可以设置数字登录密码和手势密码，确保即使在手机丢失后，没有相应的登录密码也不能随意开锁。</p>

      <p class="content-text-title">一个手机可以开多把锁吗？</p>
      <p>可以，只要手机上拥有对应锁的电子钥匙，理论上一个手机可以开任意多的锁，所以以后只要有一个手机，可以开启包括大门、卧室门、汽车门等在内的所有需要使用锁的地方。</p>

      <p class="content-text-title">我们一家人有多部手机，都可以用来开门吗？</p>
      <p>可以，每把把锁都可以分发对应的钥匙。理论上只要设备存储空间足够，可以实现任意多的用户开锁。</p>

      <p class="content-text-title">除了手机，还有其他东西可以开锁吗？</p>
      <p>可以，后续我们会开发出基于不同设备的版本出来，市面上的手机基本上都可以开锁，安卓和苹果平板电脑也可以开锁。</p>

    </div>

    <div v-if="selectIndex=='1-4'">
      <p class="content-text-title">你们的产品安全性怎么样？</p>
      <p>产品安全性非常高，采用3DES/RSA双重加密算法，钥匙与授权手机绑定。密码都具有时效性，无需清楚锁记忆，操作简单，所以安全性完全不用担心，破解钥匙的难度比破解锁的难度要高一万倍以上。</p>

      <p class="content-text-title">前面你说手机上面有账号和密码，如果账号和密码被别人知道了，那不是别人也可以开锁了？</p>
      <p>不会，账号和密码只是其中的一个方式，除了账号和密码，还需要核对设备的mac码，只有开锁的那部手机和锁才知道的密码，所以即便是用别的手机，使用相同的账号和密码也无法开启。</p>

    </div>

    <div v-if="selectIndex=='1-5'">
      <p class="content-text-title">你们的产品需要耗电吗？耗电量怎么样？</p>
      <p>产品需要消耗微小的电流，用4节5号电池供电，正常使用的状态下换一次电池的概率一般为1—2年。</p>

      <p class="content-text-title">用你们的产品以后，手机耗电量是不是会增高？</p>
      <p>蓝牙本身非常省电，对手机的待机时间基本没有影响，尤其是低功耗蓝牙，所以开启蓝牙和没有开启蓝牙，待机时间一样。蓝牙只有在进行连接传输数据的时候，才会消耗比较多的电量，因为锁大部分时间都是休眠状态的，并没有与手机进行连接，更没有数据的传输，所以装上我们的软件以后，耗电量微乎其微，对于手机的待机时间影响可以忽略不计。</p>

      <p class="content-text-title">手机没电了或者没带怎么办？</p>
      <p>每把锁都保留了机械钥匙，可以作为备用品使用。</p>

      <p class="content-text-title">我想买你们的锁，但是我家里的门是不是需要换防盗门？</p>
      <p>我们的锁都是配套的，不需要换防盗门，只需要换一下锁即可，部分木门的型号可能需要您使用特殊的工具。</p>

      <p class="content-text-title">你们的实时监控锁状态的功能是做什么用的？要收费吗？</p>
      <p>每次开锁记录都会上传至后台，锁主手机可以实时获取开锁人员信息和开锁时间。</p>

    </div>

    <div v-if="selectIndex=='1-6'">

      <p class="content-text-title">有时候自动开锁也开不了锁，是怎么回事？</p>
      <p>
        可能由以下原因导致：<br>
        a）离目标锁距离较远，手机和锁无法相互识别，将手机靠近锁重新点击开锁键；<br>
        b）可能手机没有目标锁的钥匙，请在客户端上确认是否拥有相应钥匙；<br>
        c）手机数据未更新，请退出登录，在有网状态下重新登录获取后台数据，重新开锁。<br>
      </p>

      <p class="content-text-title">为什么提示开锁成功，但是实际上无法开锁？</p>
      <p>
        主要有以下可能：<br>
        a）检查安装的方式，有的型号的锁体，侧面有一个六角螺丝，需要使用专门的六角螺丝刀拧紧，才能保证方杆的位置不会移动，如果开锁成功而实际无法开锁，可能是方杆掉进了把手里面。<br>
        b）检查电池是否有电以及电池极片是否有电池盖板之间存在东西连接短路，电力不足可能导致无法开锁，部分新电池也可能需要连续开锁十次左右进行放电才能发挥出电力。<br>
      </p>

    </div>

    <div v-if="selectIndex=='1-7'">

      <p class="content-text-title">手机没电了，怎么办？可以开锁吗？</p>
      <p>可以，您还可以选择机械钥匙开锁。</p>

      <p class="content-text-title">用手机开锁，手机上需要加装什么东西吗？</p>
      <p>完全不需要，只需要在手机上面安装一个应用程序，即可实现所有的功能。</p>

      <p class="content-text-title">所有的手机都可以使用你们的锁吗？</p>
      <p>理论上只要具有蓝牙功能手机都可以使用我们的锁，但是目前有些版本的操作系统暂未开发，所以市面上还有少部分产品不支持，您可以随时关注我们公司的最新版本的推出。</p>

    </div>

    <!-- 关于我们部分 index:2-x -->
    <div v-if="selectIndex=='2-0'" class="product-desc">
      <p class="content-text-title">KissLock智能锁介绍</p>
      <p>KissLock智能锁采用国际领先的对称加密和非对称加密双重加密算法动态分配密钥，使恶意复制及暴力开锁成为不可能。KissLock 响应国家的——锁不联网政策，避免来自互联网的恶意攻击，是一款真正的放心之锁。</p>
      <p>KissLock将实体钥匙虚拟化，可跨平台进行数据交互，通过扫描二维码获取单一的锁主钥匙，在离锁一米范围内点击开锁，KissLock 会自动链接附近信号最强的锁蓝牙信号，经过数秒的短暂通信即可开锁。</p>
      <p>锁主可向其他人分发带有效期(锁主可自行设置时间范围)的子钥匙，拥有子钥匙的用户在有效期内可同样开锁。子钥匙分临时钥匙和平等钥匙，临时钥匙可被锁主删除，平等钥匙则不可。(临时钥匙发给客人或租户，平等钥匙发给家人)。</p>
      <p>KissLoc账号与手机号绑定，一个账号只能在一台手机上登陆使用。锁主可向锁发送设置黑名单的指令——输入黑名单用户的手机号即可一键设置，即使有子钥匙对方也无法开锁。另有校时和低电提醒功能。当您不在锁附近时，还可通过向其他人发送委托指令，帮助您对锁进行管理。</p>
      <p>所有添加的锁均可设置别名(如主卧，大门，书房等)，便于您区分。当要发送多把子钥匙时，可选择发送钥匙串，一次能发送一整栋房子的钥匙哦。钥匙中心显示着所有您拥有和发出的钥匙，并进行了分类。有效期和发送/接收用户均一目了然。另外当您处在无网的环境中时亦可进行登陆开锁。为满足实际生活的特殊需求，还添加了手动开锁。</p>
      <p>我们在设置界面里设有用户反馈功能，如果您对我们的产品有什么意见和建议，可直接向我们提出，我们及时给于您回复，好的建议我们会尽快采纳并更新至app中，用户的体验是我们变得更好的动力，感谢您的使用。</p>
    </div>
  </div>
</template>

<script>
export default {

  name : "AboutMainContent",

  props:{
    selectIndex:{
      type:String,
      default(){
        return '0-0';
      }
    }
  },

  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
.about-main-content{
  width: 100%;
}
.about-main-content>div{
  font-size: 14px;
  color: #000000;
}
.about-main-content>div>p{
  margin-bottom: 15px;
}
.content-text-title{
  font-weight: 600;
  margin: 15px 0px;
}
.product-desc>p{
  text-indent: 2em;
}
</style>
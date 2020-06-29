<template>
  <div id="login">
    <div class="login-content">
      <div class="content-title" >
        <p>登录kisslock</p>
      </div>

      <el-form class="content-padding" :rules="rules" :model="user" label-position="top" ref="loginform">
        <el-form-item label="账号" class="padding-item" prop="account">
          <el-input 
            size="mini" 
            type="text" 
            clearable
            v-model="user.account" 
            class="padding-item-input"
            placeholder="请输入企业账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" class="padding-item" prop="password">
          <el-input 
            size="mini" 
            type="password"
            show-password
            v-model="user.password" 
            class="padding-item-input"
            placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="请选择相关企业" class="padding-item" prop="selectChooseValue">
          <el-select 
            v-model="user.selectChooseValue"
            size="mini"
            placeholder="请选择相关企业"
            class="padding-item-select">
            <el-option
              v-for="( item , index) in options" :key="index" 
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <div class="padding-button">
          <el-button 
            type="primary" 
            size="small"
            class="login-button"
            @click="onSubmit">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {

  name : "Login",

  data () {
    return {
      user:{
        account:'',
        password:'',
        selectChooseValue:''
      },
      options:[
        {label:'请选择相关企业' ,value:'choose'}
      ],
      rules:{
        account:[
          { required : true , message : '账号不能为空' , trigger : 'blur' }
        ],
        password:[
          { required : true , message : '密码不能为空' , trigger : 'blur' }
        ],
        selectChooseValue:[
          { required : true , message : '请选择相关企业' , trigger : 'blur' }
        ]
      }
    };
  },

  components: {},

  computed: {},

  methods: {
    onSubmit(){
      this.$refs.loginform.validate(
        valid=>{
          if(!valid){
            return false;
          }else{
            console.log(this.user);
            
          }
        }
      )
      
    }
  }
}

</script>
<style lang="scss">
#login{
  height: 100vh;
  width: 100%;
  background: url(~assets/img/login/bg_login.png) no-repeat ;
  background-size: cover;
  position: relative;
  z-index: 1000;

  .login-content{
    width: 420px;
    background-color: rgba(255,255,255,.7);
    padding: 0px 10px;
    border-radius: 5px;
    position: absolute;
    margin-left:65%;
    margin-top: 180px;
  }

  .content-title{
    font-size: 18px;
    border-bottom: 1px solid #EEEEEE;
    text-align: center;
    padding: 15px 0px;
    margin-bottom: 15px;
  }

  .content-padding{
    margin-left: 40px;
    padding-bottom: 30px;
  }

  .el-form-item{
    margin: 0px;
    width: 330px;
    margin-bottom: 20px;
  }

  .el-form-item__label{
    font-size: 16px ;
    font-weight: 600 ;
    line-height: 0px;
    padding: 0px ;
    margin-bottom: 5px;
  }
  .el-form-item__label::before{
    content:"";
  }
  .el-form-item__error{
    left: 15px;
    padding-top: 0px;
  }

  .el-select{
    width: 330px;
  }

  .padding-button{
    width: 330px;
    text-align: center;
  }

  .login-button{
    width: 280px;
    font-size: 14px;
    margin: 0px auto;
    margin-top: 10px;
  }
}

</style>
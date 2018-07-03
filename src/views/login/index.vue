<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="center"
           class="login-container">
    <h3 class="title">后台管理系统</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>

    <el-form-item prop="pwd" style="margin:.3rem 0;">
      <el-input type="password" v-model="ruleForm.pwd" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>

    <el-form-item style="height:.1rem;margin:0 0 .3rem 0;">
      <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    </el-form-item>

    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="loading">登录
      </el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
  </el-form>
</template>

<script>
  //Js部分尽量采用ES6语法，webpack babel插件会转义兼容
  export default {
    //组件私有数据（必须是function，而且要return对象类型）
    data() {
      return {
        loading: false,
        ruleForm: {
          username: '',
          pwd: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'},
          ],
          pwd: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ]
        },
        checked: true
      }
    }
    ,
    //计算属性
    computed: {}
    ,
    //函数集，自己封装，便于开发使用
    methods: {}
    ,
    //生命周期钩子：组件实例渲染完成时调用
    mounted() {

    }
    ,
    //要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
    components: {}
  }
</script>

<style lang="css" scoped>
  .title{
    font-size: .2rem;
  }
  .login-container {
    -webkit-border-radius: .1rem;
    border-radius: .1rem;
    -moz-border-radius: .1rem;
    width: 4rem;
    height: 2.7rem;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    padding:.1rem .2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .login-container .title {
    margin: 0px auto .1rem auto;
    text-align: center;
    color: #505458;
  }

  .login-container .remember {
    position: absolute;
    left: 0rem;
  }
</style>

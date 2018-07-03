<template>
  <el-row class="menu">
    <el-col :span="3">
      <ul class="left-menu">
        <li :class="{active:menuSelFlag.userFlag}" @click="selMenu(3)" v-show="showMenu.userFlag">
          <a href="javascript:void(0)">用户</a>
        </li>
        <li :class="{active:menuSelFlag.deviceFlag}" @click="selMenu(4)" v-show="showMenu.deviceFlag">
          <a href="javascript:void(0)">设备</a>
        </li>
        <li :class="{active:menuSelFlag.feedbackFlag}" @click="selMenu(5)" v-show="showMenu.feedbackFlag">
          <a href="javascript:void(0)">用户反馈</a>
        </li>
        <li :class="{active:menuSelFlag.helpFlag}" @click="selMenu(6)" v-show="showMenu.helpFlag">
          <a href="javascript:void(0)">帮助文档</a>
        </li>
        <li :class="{active:menuSelFlag.serviceFlag}" @click="selMenu(2)" v-show="showMenu.serviceFlag">
          <a href="javascript:void(0)">账户管理</a>
        </li>
        <li :class="{active:menuSelFlag.systemFlag}" @click="selMenu(1)" v-show="showMenu.systemFlag">
          <a href="javascript:void(0)">系统配置</a>
        </li>
        <li :class="{active:menuSelFlag.authorityFlag}" @click="selMenu(8)" v-show="showMenu.authorityFlag">
          <a href="javascript:void(0)">权限类目</a>
        </li>
        <li :class="{active:menuSelFlag.dataReportFlag}" @click="selMenu(7)" v-show="showMenu.dataReportFlag">
          <a href="javascript:void(0)">数据报表</a>
        </li>
      </ul>
    </el-col>
    <el-col :span="21">
      <div style="padding:1rem;min-height: 37.5rem;background: #F2F2F2;">
        <router-view @config="config"></router-view>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  //Js部分尽量采用ES6语法，webpack babel插件会转义兼容
  export default {
    //组件私有数据（必须是function，而且要return对象类型）
    data() {
      return {}
    },
    //计算属性
    computed: {},
    //函数集，自己封装，便于开发使用
    methods: {},
    //生命周期钩子：组件实例渲染完成时调用
    mounted() {

    },
    //要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
    components: {}
  }
</script>

<style>

</style>

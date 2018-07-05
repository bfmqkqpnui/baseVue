<template>
  <div class="wrapper">
    <topComp @cuttle="cuttle" @control="control"></topComp>
    <mainComp :collapse="collapse"></mainComp>
    <!-- :style="{width:width}" -->
    <div class="content" :class="collapse?'small':''" >
      <router-view></router-view>
    </div>

    <el-dialog
      :title="title"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelTop">取 消</el-button>
        <el-button type="primary" @click="successTop">确 定</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
  import topComp from 'src/components/top/index.vue';
  import mainComp from 'src/components/main/index.vue';

  //Js部分尽量采用ES6语法，webpack babel插件会转义兼容
  export default {
    //组件私有数据（必须是function，而且要return对象类型）
    data() {
      return {
        tagsList: [],
        // 是否折叠列表菜单
        collapse: false,
        centerDialogVisible: false,
        title: '',
        width: '',
      }
    },
    //计算属性
    computed: {},
    //函数集，自己封装，便于开发使用
    methods: {
      cuttle(e) {
        this.collapse = e;
        /*setTimeout(()=>{
          let width = document.body.clientWidth;
          let sidWidth = document.getElementsByClassName("sidebar");
          console.log("width >>> " + width + "  <<< >> "+sidWidth[0].offsetWidth)
          this.width =  (width - sidWidth[0].offsetWidth) + "px";
        },400);*/
      },
      control(val) {
        if (val == "userInfo") {
          this.centerDialogVisible = true;
          this.title = '个人信息'
        } else if (val == "changePwd") {
          this.centerDialogVisible = true;
          this.title = '修改密码'
        }
      },
      cancelTop() {
        this.centerDialogVisible = false;
      },
      successTop() {
        this.centerDialogVisible = false;
      }
    },
    //生命周期钩子：组件实例渲染完成时调用
    mounted() {

    },
    //要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
    components: {topComp, mainComp}
  }
</script>

<style scoped>
  .content {
    /*display: flex;
    flex-direction:row;
    overflow-y: hidden;
    height: auto;*/
    padding: .25rem;
    margin: .7rem 0 0 2.5rem;
    ransition: All 0.3s ease-in-out;
    -webkit-transition: All 0.3s ease-in-out;
    -moz-transition: All 0.3s ease-in-out;
    -o-transition: All 0.3s ease-in-out;
    position: absolute;
    top: 0rem;
    left: 0rem;
    right: 0rem;
    bottom:0rem;
  }

  .content.small {
    transition: All 0.3s ease-in-out;
    -webkit-transition: All 0.3s ease-in-out;
    -moz-transition: All 0.3s ease-in-out;
    -o-transition: All 0.3s ease-in-out;
    /*transform: translate(-1.87rem, 0);*/
    left: -1.85rem;
  }
</style>

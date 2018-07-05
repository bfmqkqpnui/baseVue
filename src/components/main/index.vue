<template>
  <div>
    <div class="sidebar">
      <el-menu class="sidebar-el-menu" :default-active="routeReplace" :collapse="collapse" background-color="#324157"
               text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router @open="handleOpen"
               @close="handleClose">
        <template v-for="item in items">
          <template v-if="item.subs">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
              </template>
              <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                {{ subItem.title }}
              </el-menu-item>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index" :key="item.index">
              <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
  //Js部分尽量采用ES6语法，webpack babel插件会转义兼容
  export default {
    //组件私有数据（必须是function，而且要return对象类型）
    props: {
      collapse: false
    },
    data() {
      return {
        items: [
          {
            icon: 'el-icon-setting',
            index: '/home',
            title: '系统首页'
          },
          {
            icon: 'el-icon-tickets',
            index: '/home/test',
            title: '基础测试'
          },
          {
            icon: 'el-icon-message',
            index: 'tabs',
            title: 'tab选项卡'
          },
          {
            icon: 'el-icon-date',
            index: '3',
            title: '表单相关',
            subs: [
              {
                index: 'form',
                title: '基本表单'
              },
              {
                index: 'editor',
                title: '富文本编辑器'
              },
              {
                index: 'markdown',
                title: 'markdown编辑器'
              },
              {
                index: 'upload',
                title: '文件上传'
              }
            ]
          },
          {
            icon: 'el-icon-star-on',
            index: '/home/echart',
            title: 'schart图表'
          },
          {
            icon: 'el-icon-rank',
            index: 'drag',
            title: '拖拽列表'
          },
          {
            icon: 'el-icon-warning',
            index: 'permission',
            title: '权限测试'
          },
          {
            icon: 'el-icon-error',
            index: '404',
            title: '404页面'
          }
        ]
      }
    }
    ,
    //计算属性
    computed: {
      routeReplace() {
        // console.log("计算属性>>>" + this.$router.path.replace('/',''));
        let url = this.$route.path;
        console.log(url.substr(url.length - 1))
        if (url.substring(url.length - 1) == '/') {
          url = url.substr(0, url.length - 1);
        }
        console.log("路由地址：" + this.$route.path + "<<<>>>>" + url)
        return url;
      }
    }
    ,
    //函数集，自己封装，便于开发使用
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
    ,
    //生命周期钩子：组件实例渲染完成时调用
    mounted() {
    }
    ,
    //要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
    components: {}
  }
</script>

<style scoped>
  .sidebar {
    /*display: block;
    position: absolute;*/
    left: 0;
    top: .7rem;
    bottom: 0;
    position: fixed;
    text-align: center;
    z-index: 1000;
  }

  .sidebar::-webkit-scrollbar {
    width: 0;
  }

  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
  }

  .sidebar > ul {
    height: 100%;
  }
</style>

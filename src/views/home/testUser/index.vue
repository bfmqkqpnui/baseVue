<template>
  <div>
    <el-row class="row">
      <el-col :span="6">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/home' }"><i class="el-icon-date"></i>首页</el-breadcrumb-item>
          <el-breadcrumb-item>基础测试</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>

    <el-row class="row">
      <el-col :span="2" style="float:left">
        <el-button type="primary" icon="el-icon-plus" @click="showComp">添加</el-button>
      </el-col>
      <el-row style="float:right">
        <el-button type="primary" icon="el-icon-search" @click="searchInfo">搜索</el-button>
      </el-row>
      <el-row style="float:right">
        <el-input v-model.trim="userNo" placeholder="用户名/手机号" class="input-with-button">
        </el-input>
      </el-row>
    </el-row>

    <el-row class="row" style="margin:.2rem 0;">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="user_Name"
          label="姓名"
          header-align="center"
          align="center"
        >
        </el-table-column>

        <el-table-column
          fixed
          prop="birthday"
          label="生日"
          header-align="center"
          align="center"
        >
        </el-table-column>

        <el-table-column
          prop="gender"
          label="性别"
          header-align="center"
          align="center"
        >
        </el-table-column>

        <el-table-column
          prop="salary"
          label="薪资"
          header-align="center"
          align="center"
        >
        </el-table-column>

        <el-table-column
          prop="bonus"
          label="奖金"
          header-align="center"
          align="center"
        >
        </el-table-column>

        <el-table-column
          prop="create_Date"
          label="创建日期"
          header-align="center"
          align="center"
        >
        </el-table-column>

        <el-table-column
          prop="update_Date"
          label="最后更新日期"
          header-align="center"
          align="center"
        >
        </el-table-column>

        <el-table-column
          fixed="right"
          label="操作"
          header-align="center"
          align="center"
        >
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>

    <el-row class="row">
      <el-col :span="24">
        <pageComponent :resultCount="resultCount" :currentPage='currentPage' @handleCurrentChange="handleCurrentChange"
                       @handleSizeChange="handleSizeChange"></pageComponent>
      </el-col>
    </el-row>


    <el-dialog
      :title="tableTitle"
      :visible.sync="tableDialog"
      width="4.8rem"
      center>
      <el-form :model="userInfo" ref="userInfo" label-width=".8rem">
        <el-form-item label="用户名" prop="uname">
          <el-input
            placeholder="请输入用户名"
            v-model="userInfo.uname" clearable>
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="upwd">
          <el-input
            placeholder="请输入密码"
            v-model="userInfo.upwd" type="password" clearable>
          </el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="userInfo.sex" placeholder="请选择" clearable>
            <el-option
              v-for="item in options"
              :key="item.index"
              :label="item.value"
              :value="item.index">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input
            placeholder="请输入地址"
            v-model="userInfo.address" clearable></el-input>
          </el-row>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelTop">取 消</el-button>
        <el-button type="primary" @click="successTop">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import pageComponent from '@/components/pagination/index'
  import api from './api/index'
  //Js部分尽量采用ES6语法，webpack babel插件会转义兼容
  export default {
    //组件私有数据（必须是function，而且要return对象类型）
    data() {
      return {
        options: [
          {index: "1", value: '男'},
          {index: "2", value: '女'}
        ],
        userNo: '', // 查询用户的编号
        resultCount: 0,     // 记录总条数
        display: 10,   // 每页显示条数
        currentPage: 1,   // 当前的页数
        tableData: [],
        tableDialog: false,
        tableTitle: '',
        userInfo: {
          id: '',
          uname: '',
          upwd: '',
          sex: '',
          address: ''
        }
      }
    },
    //计算属性
    computed: {},
    //函数集，自己封装，便于开发使用
    methods: {
      config() {
        let params = {
          pageIndex: this.currentPage,
          pageSize: this.display,
        };
        api.queryAllByPage(params).then(function (data) {
          if (data.ok) {
            if (data.body.result == 0) {
              console.log(data.body)
              this.tableList = data.body.obj;
              this.resultCount = data.body.data.resultCount;
              this.currentPage = data.body.data.pageIndex;
            } else {
              if (data.body.result == 2) {
                localStorage.removeItem("memberInfo");
                this.$router.push("/login");
              } else {
                console.log(data.body);
                // this.$message.error(data.body.msg);
                if (data.body.result == 3) {
                  this.init();
                }
              }
            }
          }
        }, function (err) {
          console.log("接口错误:", err);
        })
      },
      del() {
        console.log("删除方法被触发");
      },
      init() {
        this.userNo = '';
        this.resultCount = 0;     // 记录总条数
        this.display = 10;   // 每页显示条数
        this.currentPage = 1;   // 当前的页数
        this.tableList = [];
      },
      handleCurrentChange(currentPage) {
        console.log(`当前页:` + currentPage);
        if (currentPage && Number(currentPage)) {
          this.currentPage = currentPage;
          this.config();
        }
      },
      handleSizeChange(pageSize) {
        console.log(`当前记录条数: ` + pageSize);
        if (pageSize && Number(pageSize)) {
          this.display = pageSize;
          this.config();
        }
      },
      handleClick(row) {
        console.log(row);
      },
      showComp() {
        this.tableDialog = true;
        this.tableTitle = '新增用户信息';
      },
      cancelTop() {
        this.tableDialog = false;
      },
      successTop() {
        this.tableDialog = false;
      },
      searchInfo() {
        console.log("搜索按钮点击事件触发")
        if (this.userNo !== '') {
          api.queryById(this.userNo).then(result => {
            this.tableData = [];
            if (result.body.resCode == "200") {
              this.tableData.push(result.body.obj);
              this.resultCount = this.tableData.length;
            }
          });
        } else {
          this.tableData = [];
        }
      }
    },
    //生命周期钩子：组件实例渲染完成时调用
    mounted() {
      this.config();
    },
    //要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
    components: {pageComponent},
    filters: {
      getDeviceStatus(status) {
        let strStatus = '未绑定';
        if (!isNaN(status)) {
          if (status == 1) {
            strStatus = '已绑定';
          }
        }
        return strStatus;
      }
    }
  }
</script>

<style scoped>
  .input-with-select .el-input-group__prepend {
    background-color: #409EFF !important;
  }

  .input-with-select .el-input-group__prepend button {
    background-color: #409EFF !important;
  }
</style>

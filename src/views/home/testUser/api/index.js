import Vue from 'vue'

export default {
  // 根据用户编号查询用户信息
  queryById: params => {
    return Vue.http.get(Vue.$SERVICE_PROXY_URL + '/emp/queryById/' + params)
  },
  // 分页查询所有用户信息
  queryAllByPage: params => {
    return Vue.http.post(Vue.$SERVICE_PROXY_URL + '/emp/queryList', params)
  }
}

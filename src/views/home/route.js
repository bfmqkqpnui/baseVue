export default [{
  path: '/',
  meta: {
    title: '主页',
  },
  component: r => require.ensure([], () => r(require('./index')), 'home'),
  children: [
    {
      path: '/home',
      component: r => require.ensure([], () => r(require('./user/index')), 'user'),
      meta: {
        title: '系统首页',
      },
    },
    {
      path: '/home/echart',
      component: r => require.ensure([], () => r(require('./echart/index')), 'echart'),
      meta: {
        title: '报表',
      }
    },
    {
      path: '/home/test',
      component: r => require.ensure([], () => r(require('./testUser/index')), 'test'),
      meta: {
        title: '基础测试',
      }
    },
  ]
}
]

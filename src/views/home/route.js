export default [{
  path: '/home',
  meta: {
    title: '主页',
    notLoading: true,
    needLogin: true,
    wxLogin: true
  },
  component: r => require.ensure([], () => r(require('./index')), 'home')
  }
]

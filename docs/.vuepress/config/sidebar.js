// 侧边栏配置
const Frontend =  [
  {
    title: "基础",
    collapsable: true,
    children: [
      '/Frontend/HTML/',
      '/Frontend/CSS/',
      '/Frontend/JavaScript/',
      '/Frontend/Browser/',
    ],
  },
  {
    title: "工程化",
    collapsable: true,
    children: [
      '/Frontend/Engineering/',
      '/Frontend/Webpack/',
      '/Frontend/Git/',
    ],
  },
  {
    title: "框架",
    collapsable: true,
    children: [
      // ['/Frontend/Vue/', 'Vue'],
      // ['/Frontend/React/', 'React'],
      '/Frontend/Framework/',
      '/Frontend/Vue/',
      '/Frontend/React/',
    ]
  },
  {
    title: "安全",
    collapsable: true,
    children: [
      '/Frontend/Security/'
    ]
  },
]
const CS = [
  {
    title: '网络协议',
    collapsable: true,
    children: [
      '/CS/HTTP/',
      '/CS/TCP/'
    ]
  },
  // {
  //   title: '算法',
  //   collapsable: true,
  //   children: [
  //     '/CS/HTTP',
  //   ]
  // }
]

module.exports = {
  '/Frontend/': Frontend,
  '/CS/': CS,
}

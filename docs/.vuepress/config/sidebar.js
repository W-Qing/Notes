// 侧边栏配置
const frontend =  [
  {
    title: "基础",
    collapsable: true,
    children: [
      '/frontend/HTML/',
      '/frontend/CSS/',
      '/frontend/JavaScript/',
      '/frontend/Browser/',
    ],
  },
  {
    title: "框架",
    collapsable: true,
    children: [
      // ['/frontend/Vue/', 'Vue'],
      // ['/frontend/React/', 'React'],
      '/frontend/Vue/',
      '/frontend/React/',
    ],
  },
]


module.exports = {
'/frontend/': frontend,
}

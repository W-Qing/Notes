const nav = require("./config/nav"); //引入导航栏配置
const sidebar = require("./config/sidebar"); //引入侧边栏配置
// const routeConfig = require('./plugins/routeConfig'); //引入路由配置

module.exports = {
  title: "Mintnoii's Notes",
  description: " 📖 🤔 👨🏻‍💻 ",
  head: [
    // 这里的 '/' 指向 docs/.vuepress/public 文件目录
    // 配置网页的小图标，如下图
    ["link", { rel: "icon", href: "/img/favorite.ico" }],
  ],
  base: '/Notes/', // 部署到github会用到的配置
  markdown: {
    lineNumbers: false, // 代码块显示行号
  },
  // 顶部导航栏
  themeConfig: {
    displayAllHeaders: false, //展开侧边栏所有的小标题
    // sidebarDepth: 1, //提取markdown中h2标题，作为小标题显示在侧边栏上。
    lastUpdated: "last updated", // 文档更新时间：每个文件git最后提交的时间,
    nav, //导航
    sidebar, //侧边栏
  },
  plugins: [
    // '@vuepress/back-to-top'
    ['@vuepress/back-to-top', true],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/google-analytics', {
      ga: 'UA-136843234-2'
    }],
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: '',
      },
    ],
    // routeConfig,
  ],
};

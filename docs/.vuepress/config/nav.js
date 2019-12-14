// 导航栏配置
const nav = [
  {
    text: '首页',
    link: '/'
  },
  { 
    text: '前端', 
    items: [
      {
        text: '基础',
        items: [
          { text: 'HTML', link: '/frontend/HTML/'},
          { text: 'CSS', link: '/frontend/CSS/' },
          { text: 'JavaScript', link: '/frontend/JavaScript/' },
          { text: '浏览器', link: '/frontend/Browser/' }
        ]
      },
      {
        text: '框架',
        items: [
          { text: 'Vue', link: '/frontend/Vue/'},
          { text: 'React', link: '/frontend/React/'}
        ]
      }
    ]
  },
  {
    text: 'About',
    link: '/about/'
  },
// {
//   text: '练习',
//   items: [{
//           text: '小游戏',
//           link: '/PAGE/2019-10-23-before/',
//       },
//       {
//           text: '聊天室',
//           link: '/PAGE/2019-10-14-myChat/',
//       }
//   ]
// },
// {
//   text: '其他',
//   items: [{
//           text: '开发利器',
//           items: [{
//                   text: 'Git',
//                   link: '/PAGE/2019-10-23-git-contribution/',
//               },
//               {
//                   text: '搭建自己的博客',
//                   link: '/PAGE/2019-10-25-build-blog/',
//               },
//           ]
//       },
//       {
//           text: '随笔',
//           items: [{
//                   text: '今天是程序员节',
//                   link: '/PAGE/2019-10-24-today-code/',
//               },
//               {
//                   text: '讲故事写成我们',
//                   link: '/PAGE/2019-10-14-note-02/',
//               },
//           ]
//       },

//   ]
// },
{
  text: 'GitHub',
  link: 'https://github.com/W-Qing',
},
// {
//   text: '关于作者',
//   items: [{
//           text: 'GitHub',
//           link: 'https://github.com/ordinaryA',
//       },
//       {
//           text: '掘金',
//           link: 'https://juejin.im/user/5c38537d518825260d7ec96c',
//       }
//   ]
// },
];

module.exports = nav;
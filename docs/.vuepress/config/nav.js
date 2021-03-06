// 导航栏配置
const nav = [
  {
    text: 'Home',
    link: '/'
  },
  { 
    text: 'FE', 
    items: [
      {
        text: 'Basic',
        items: [
          { text: 'HTML', link: '/Frontend/HTML/'},
          { text: 'CSS', link: '/Frontend/CSS/' },
          { text: 'JavaScript', link: '/Frontend/JavaScript/' },
          { text: 'Browser', link: '/Frontend/Browser/' }
        ]
      },
      {
        text: 'Engineering',
        items: [
          { text: 'Webpack', link: '/Frontend/Webpack/'},
          { text: 'Git', link: '/Frontend/Git/'},
          // { text: '自动化测试', link: '/Frontend/Browser/' }
        ]
      },
      {
        text: 'Framework',
        items: [
          { text: 'Vue', link: '/Frontend/Vue/'},
          { text: 'React', link: '/Frontend/React/'},
          { text: 'React Fiber', link: '/Frontend/ReactFiber/'}
        ]
      },
      {
        text: 'Security',
        items: [
          { text: 'Security', link: '/Frontend/Security/'}
        ]
      }
    ]
  },
  { 
    text: 'CS', 
    items: [
      {
        text: 'Net protocol',
        items: [
          { text: 'HTTP', link: '/CS/HTTP/'},
          { text: 'TCP', link: '/CS/TCP/' },
        ]
      },
      // {
      //   text: '算法',
      //   items: [
      //     { text: 'React', link: '/CS/React/'}
      //   ]
      // }
    ]
  },
  {
    text: 'About',
    link: 'https://www.notion.so/Hi-here-0a4a01ce46dc475a9318075eda4ad3b0'
  },
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
  link: 'https://github.com/W-Qing/Notes',
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
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{225:function(e,t,r){e.exports=r.p+"assets/img/fiber.9b75695d.png"},248:function(e,t,r){"use strict";r.r(t);var a=r(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"react-fiber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-fiber"}},[e._v("#")]),e._v(" React Fiber")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://react.iamkasong.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("React 技术揭秘"),a("OutboundLink")],1),e._v(" 🌟")]),e._v(" "),a("blockquote",[a("ul",[a("li",[a("a",{attrs:{href:"https://overreacted.io/zh-hans/how-are-function-components-different-from-classes/",target:"_blank",rel:"noopener noreferrer"}},[e._v("函数式组件与类组件有何不同"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/",target:"_blank",rel:"noopener noreferrer"}},[e._v("useEffect 完整指南"),a("OutboundLink")],1)])])]),e._v(" "),a("h2",{attrs:{id:"如何理解-fiber-及-time-slice？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何理解-fiber-及-time-slice？"}},[e._v("#")]),e._v(" 如何理解 Fiber 及 Time Slice？")]),e._v(" "),a("p",[a("strong",[e._v("React Fiber 是一种基于浏览器的单线程调度算法：")])]),e._v(" "),a("p",[e._v("React 16 之前 ，"),a("code",[e._v("reconcilation")]),e._v(" 算法实际上是递归，想要中断递归是很困难的。如果你拥有一个很复杂的复合组件，然后改动了最上层组件的 "),a("code",[e._v("state")]),e._v("，那么调用栈可能会很长。调用栈过长，再加上中间进行了复杂的操作，就可能导致长时间阻塞主线程，带来不好的用户体验。")]),e._v(" "),a("p",[e._v("在 React V16 版本中引入了 Fiber 机制使用循环来代替之前的递归算法来解决这个问题。这个机制在一定程度上的影响了部分生命周期的调用，并且也引入了新的 2 个 API 来解决问题。")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("Fiber")]),e._v("：一种将 "),a("code",[e._v("recocilation")]),e._v(" （递归 diff），拆分成无数个小任务的算法；它随时能够停止，恢复。停止恢复的时机取决于当前的一帧（16ms）内，还有没有足够的时间允许计算。")])]),e._v(" "),a("p",[a("strong",[e._v("Time Slice 时间分片：")])]),e._v(" "),a("p",[a("img",{attrs:{src:r(225),alt:"Fiber 分段示意图"}})]),e._v(" "),a("p",[e._v("Fiber 本质上是一个虚拟的堆栈帧，新的调度器会按照优先级自由调度这些帧，从而将之前的同步渲染改成了异步渲染，在不影响体验的情况下去分段计算更新。时间分片正是基于可随时打断、重启的 Fiber 架构，可打断当前任务，优先处理紧急且重要的任务，保证页面的流畅运行。")]),e._v(" "),a("blockquote",[a("p",[e._v("对于如何区别优先级，React 有自己的一套逻辑。")]),e._v(" "),a("ol",[a("li",[e._v("对于动画这种实时性很高的东西，也就是 16 ms 必须渲染一次保证不卡顿的情况下，React 会每 16 ms（以内） 暂停一下更新，返回来继续渲染动画")]),e._v(" "),a("li",[e._v("根据事件类型来。打个比方，点击事件、用户输入事件，相比滚动事件的优先级要高 。目前 React 内部事件机制有简单区分优先级")]),e._v(" "),a("li",[e._v("人工提示 React。参考实验版本里面的 useTransition，useDeferredValue")]),e._v(" "),a("li",[e._v("隐藏内容的更新优先级最低。这通常也需要提示 React 指定组件是隐藏的，目前没有公开 API")])])]),e._v(" "),a("blockquote",[a("p",[e._v("推荐阅读："),a("a",{attrs:{href:"https://juejin.im/post/5dadc6045188255a270a0f85",target:"_blank",rel:"noopener noreferrer"}},[e._v("这可能是最通俗的 React Fiber（时间分片） 打开方式"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);
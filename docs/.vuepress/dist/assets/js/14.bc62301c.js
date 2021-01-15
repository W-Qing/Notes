(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{225:function(t,s,a){t.exports=a.p+"assets/img/fiber.9b75695d.png"},248:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"react-fiber"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-fiber"}},[t._v("#")]),t._v(" React Fiber")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://react.iamkasong.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 技术揭秘"),e("OutboundLink")],1),t._v(" 🌟")]),t._v(" "),e("blockquote",[e("ul",[e("li",[e("a",{attrs:{href:"https://overreacted.io/zh-hans/how-are-function-components-different-from-classes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("函数式组件与类组件有何不同"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/",target:"_blank",rel:"noopener noreferrer"}},[t._v("useEffect 完整指南"),e("OutboundLink")],1)])])]),t._v(" "),e("h2",{attrs:{id:"如何理解-fiber-及-time-slice？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何理解-fiber-及-time-slice？"}},[t._v("#")]),t._v(" 如何理解 Fiber 及 Time Slice？")]),t._v(" "),e("p",[e("strong",[t._v("React Fiber 是一种基于浏览器的单线程调度算法：")])]),t._v(" "),e("p",[t._v("React 16 之前 ，"),e("code",[t._v("reconcilation")]),t._v(" 算法实际上是递归，想要中断递归是很困难的。如果你拥有一个很复杂的复合组件，然后改动了最上层组件的 "),e("code",[t._v("state")]),t._v("，那么调用栈可能会很长。调用栈过长，再加上中间进行了复杂的操作，就可能导致长时间阻塞主线程，带来不好的用户体验。")]),t._v(" "),e("p",[t._v("在 React V16 版本中引入了 Fiber 机制使用循环来代替之前的递归算法来解决这个问题。这个机制在一定程度上的影响了部分生命周期的调用，并且也引入了新的 2 个 API 来解决问题。")]),t._v(" "),e("p",[e("strong",[e("code",[t._v("Fiber")]),t._v("：一种将 "),e("code",[t._v("recocilation")]),t._v(" （递归 diff），拆分成无数个小任务的算法；它随时能够停止，恢复。停止恢复的时机取决于当前的一帧（16ms）内，还有没有足够的时间允许计算。")])]),t._v(" "),e("p",[e("strong",[t._v("Time Slice 时间分片：")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(225),alt:"Fiber 分段示意图"}})]),t._v(" "),e("p",[t._v("Fiber 本质上是一个虚拟的堆栈帧，新的调度器会按照优先级自由调度这些帧，从而将之前的同步渲染改成了异步渲染，在不影响体验的情况下去分段计算更新。时间分片正是基于可随时打断、重启的 Fiber 架构，可打断当前任务，优先处理紧急且重要的任务，保证页面的流畅运行。")]),t._v(" "),e("blockquote",[e("p",[t._v("对于如何区别优先级，React 有自己的一套逻辑。")]),t._v(" "),e("ol",[e("li",[t._v("对于动画这种实时性很高的东西，也就是 16 ms 必须渲染一次保证不卡顿的情况下，React 会每 16 ms（以内） 暂停一下更新，返回来继续渲染动画")]),t._v(" "),e("li",[t._v("根据事件类型来。打个比方，点击事件、用户输入事件，相比滚动事件的优先级要高 。目前 React 内部事件机制有简单区分优先级")]),t._v(" "),e("li",[t._v("人工提示 React。参考实验版本里面的 useTransition，useDeferredValue")]),t._v(" "),e("li",[t._v("隐藏内容的更新优先级最低。这通常也需要提示 React 指定组件是隐藏的，目前没有公开 API")])])]),t._v(" "),e("blockquote",[e("p",[t._v("推荐阅读："),e("a",{attrs:{href:"https://juejin.im/post/5dadc6045188255a270a0f85",target:"_blank",rel:"noopener noreferrer"}},[t._v("这可能是最通俗的 React Fiber（时间分片） 打开方式"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"react-hooks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-hooks"}},[t._v("#")]),t._v(" React Hooks")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.notion.so/React-Hooks-303a7c520bdd41d2921da51d83c85572",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Hooks笔记"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"usestate-的细粒度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usestate-的细粒度"}},[t._v("#")]),t._v(" useState 的细粒度")]),t._v(" "),e("p",[t._v("在设计使用 state 之前，我们需要考虑状态拆分的「粒度」问题。如果粒度过细，代码就会变得比较冗余。如果粒度过粗，代码的可复用性就会降低。")]),t._v(" "),e("p",[t._v("那么，到底哪些 state 应该合并，哪些 state 应该拆分呢？🤔")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("将完全不相关的 state 拆分为多组 state。比如 "),e("code",[t._v("size")]),t._v(" 和 "),e("code",[t._v("position")]),t._v("。")])]),t._v(" "),e("li",[e("strong",[t._v("如果某些 state 是相互关联的，或者需要一起发生改变，就可以把它们合并为一组 state。比如 "),e("code",[t._v("left")]),t._v(" 和 "),e("code",[t._v("top")]),t._v("。")])])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Box")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("position"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setPosition"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("usePosition")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("size"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("width"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("usePosition")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("position"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setPosition"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("left"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" top"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("position"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setPosition"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[t._v("如果使用单个 state 对象变量，每次更新 state 时需要合并之前的 state。 因为 "),e("code",[t._v("useState")]),t._v(" 返回的 "),e("code",[t._v("setState")]),t._v(" 会替换原来的值。")])]),t._v(" "),e("h2",{attrs:{id:"deps-依赖过多，导致-hooks-难以维护？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deps-依赖过多，导致-hooks-难以维护？"}},[t._v("#")]),t._v(" deps 依赖过多，导致 Hooks 难以维护？")]),t._v(" "),e("ol",[e("li",[t._v("依赖数组依赖的值最好不要超过 3 个，否则会导致代码会难以维护。")]),t._v(" "),e("li",[t._v("如果发现依赖数组依赖的值过多，我们应该采取一些方法来减少它。\n"),e("ul",[e("li",[t._v("去掉不必要的依赖。")]),t._v(" "),e("li",[t._v("将 Hook 拆分为更小的单元，每个 Hook 依赖于各自的依赖数组。")]),t._v(" "),e("li",[t._v("通过合并相关的 state，将多个依赖值聚合为一个。")]),t._v(" "),e("li",[t._v("通过 "),e("code",[t._v("setState")]),t._v(" 回调函数获取最新的 state，以减少外部依赖。")]),t._v(" "),e("li",[t._v("通过 "),e("code",[t._v("ref")]),t._v(" 来读取可变变量的值，不过需要注意控制修改它的途径。")])])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.cn/post/6844903958968795149#heading-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("deps 依赖过多"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"usememo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usememo"}},[t._v("#")]),t._v(" useMemo")]),t._v(" "),e("p",[t._v("应该使用 "),e("code",[t._v("useMemo")]),t._v(" 的场景：")]),t._v(" "),e("ul",[e("li",[t._v("保持引用相等")]),t._v(" "),e("li",[t._v("成本很高的计算")])]),t._v(" "),e("p",[t._v("无需使用 "),e("code",[t._v("useMemo")]),t._v(" 的场景：")]),t._v(" "),e("ul",[e("li",[t._v("如果返回的值是原始值： "),e("code",[t._v("string")]),t._v(", "),e("code",[t._v("boolean")]),t._v(", "),e("code",[t._v("null")]),t._v(", "),e("code",[t._v("undefined")]),t._v(", "),e("code",[t._v("number")]),t._v(", "),e("code",[t._v("symbol")]),t._v("（不包括动态声明的 Symbol），一般不需要使用 "),e("code",[t._v("useMemo")]),t._v("。")]),t._v(" "),e("li",[t._v("仅在组件内部用到的 object、array、函数等（没有作为 props 传递给子组件），且没有用到其他 Hook 的依赖数组中，一般不需要使用 "),e("code",[t._v("useMemo")]),t._v("。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);
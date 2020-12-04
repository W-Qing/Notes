(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{228:function(t,s,a){t.exports=a.p+"assets/img/lifescyles.d1279e6d.png"},229:function(t,s,a){t.exports=a.p+"assets/img/responsiveSystem.d5bfe6c9.png"},248:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[t._v("#")]),t._v(" Vue")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.bilibili.com/video/BV1SZ4y157m8",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue3.0（正式版）+ Vite开发快速入门"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"生命周期分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生命周期分析"}},[t._v("#")]),t._v(" 生命周期分析")]),t._v(" "),e("p",[e("strong",[t._v("生命周期是什么？")])]),t._v(" "),e("p",[t._v("Vue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模版、挂载 Dom => 渲染、更新 => 渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。")]),t._v(" "),e("p",[t._v("其中，生命周期函数就是组件在初始化或者数据更新时会触发的钩子函数。")]),t._v(" "),e("p",[e("strong",[t._v("生命周期示意图：")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(228),alt:"vue 生命周期分析"}})]),t._v(" "),e("p",[t._v("📖 官方实例的异步请求是在 mounted 生命周期中调用的，而实际上也可以在 created 生命周期中调用。")]),t._v(" "),e("p",[e("strong",[t._v("各个生命周期的作用：")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("生命周期")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("beforeCreate")]),t._v(" "),e("td",[t._v("组件实例被创建之初，组件的属性生效之前")])]),t._v(" "),e("tr",[e("td",[t._v("created")]),t._v(" "),e("td",[t._v("组件实例已经完全创建，属性也绑定，但真实 dom 还没有生成，"),e("code",[t._v("$el")]),t._v("还不可用")])]),t._v(" "),e("tr",[e("td",[t._v("beforeMount")]),t._v(" "),e("td",[t._v("在挂载开始之前被调用：相关的 render 函数首次被调用")])]),t._v(" "),e("tr",[e("td",[t._v("mounted")]),t._v(" "),e("td",[t._v("el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子")])]),t._v(" "),e("tr",[e("td",[t._v("beforeUpdate")]),t._v(" "),e("td",[t._v("组件数据更新之前调用，发生在虚拟 DOM 打补丁之前")])]),t._v(" "),e("tr",[e("td",[t._v("update")]),t._v(" "),e("td",[t._v("组件数据更新之后")])]),t._v(" "),e("tr",[e("td",[t._v("activited")]),t._v(" "),e("td",[t._v("keep-alive 专属，组件被激活时调用")])]),t._v(" "),e("tr",[e("td",[t._v("deadctivated")]),t._v(" "),e("td",[t._v("keep-alive 专属，组件被销毁时调用")])]),t._v(" "),e("tr",[e("td",[t._v("beforeDestory")]),t._v(" "),e("td",[t._v("组件销毁前调用")])]),t._v(" "),e("tr",[e("td",[t._v("destoryed")]),t._v(" "),e("td",[t._v("组件销毁后调用")])])])]),t._v(" "),e("h2",{attrs:{id:"组件通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件通信"}},[t._v("#")]),t._v(" 组件通信")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("props")]),t._v(" 和"),e("code",[t._v("$emit + v-on")]),t._v("：通过 "),e("code",[t._v("props")]),t._v("将数据自上而下传递，而通过"),e("code",[t._v("$emit")]),t._v("和"),e("code",[t._v("v-on")]),t._v("来向上传递信息")]),t._v(" "),e("li",[t._v("EventBus：通过 EventBus 进行信息的发布与订阅")]),t._v(" "),e("li",[t._v("vuex：是全局数据管理库，可以通过 vuex 管理全局的数据流")]),t._v(" "),e("li",[e("code",[t._v("$attrs/$listeners")]),t._v("： Vue2.4 中加入的"),e("code",[t._v("$attrs/$listeners")]),t._v("可以进行跨级的组件通信")]),t._v(" "),e("li",[e("code",[t._v("provide/inject")]),t._v("：以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效，这成为了跨组件通信的基础")])]),t._v(" "),e("p",[t._v("还有一些利用 solt 插槽或者 ref 实例进行通信的方法，因为使用场景过于有限不再赘述。")]),t._v(" "),e("blockquote",[e("p",[t._v("推荐阅读："),e("a",{attrs:{href:"https://juejin.im/post/5d267dcdf265da1b957081a3",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue 中 8 种组件通信方式"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("太偏门的通信方式根本不会用到，单做知识点了解即可")])]),t._v(" "),e("h2",{attrs:{id:"computed-和-watch-的区别-🌟"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#computed-和-watch-的区别-🌟"}},[t._v("#")]),t._v(" computed 和 watch 的区别 🌟")]),t._v(" "),e("p",[e("strong",[t._v("computed：")])]),t._v(" "),e("ol",[e("li",[e("code",[t._v("computed")]),t._v("是计算属性，也就是计算值，它更多用于计算值的场景")]),t._v(" "),e("li",[e("code",[t._v("computed")]),t._v("具有缓存性，computed 的值在 getter 执行后是会缓存的，只有在它依赖的属性值改变之后，下一次获取 computed 的值时才会重新调用对应的 getter 来计算")]),t._v(" "),e("li",[e("code",[t._v("computed")]),t._v("适用于计算比较消耗性能的计算场景")])]),t._v(" "),e("p",[e("strong",[t._v("watch：")])]),t._v(" "),e("ol",[e("li",[t._v("更多的是「观察」的作用，类似于某些数据的监听回调，用于观察"),e("code",[t._v("props")]),t._v(" 、"),e("code",[t._v("$emit")]),t._v("或者本组件的值，当数据变化时来执行回调进行后续操作")]),t._v(" "),e("li",[t._v("没有缓存性，页面重新渲染时值不变化也会执行")])]),t._v(" "),e("p",[e("strong",[t._v("用法：")])]),t._v(" "),e("ol",[e("li",[t._v("当我们要进行数值计算，而且依赖于其他数据，那么把这个数据设计为 computed")]),t._v(" "),e("li",[t._v("如果你需要在某个数据变化时做一些事情，使用 watch 来观察这个数据变化")])]),t._v(" "),e("h2",{attrs:{id:"vue-实现双向绑定的原理🌟"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-实现双向绑定的原理🌟"}},[t._v("#")]),t._v(" Vue 实现双向绑定的原理🌟")]),t._v(" "),e("p",[t._v("利用"),e("code",[t._v("Object.defineProperty")]),t._v("劫持对象的访问器，在属性值发生变化时我们可以获取变化，然后根据变化进行后续响应，在 vue3.0 中通过 Proxy 代理对象进行类似的操作。")]),t._v(" "),e("h3",{attrs:{id:"proxy-与-object-defineproperty-的对比？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proxy-与-object-defineproperty-的对比？"}},[t._v("#")]),t._v(" Proxy 与 Object.defineProperty 的对比？")]),t._v(" "),e("p",[t._v("Proxy 的优势如下：")]),t._v(" "),e("ul",[e("li",[t._v("Proxy 可以直接监听对象而非属性")]),t._v(" "),e("li",[t._v("Proxy 可以直接监听数组的变化")]),t._v(" "),e("li",[t._v("Proxy 有多达 13 种拦截方法，不限于 apply、ownKeys、deleteProperty、has 等等是"),e("code",[t._v("Object.defineProperty")]),t._v("不具备的")]),t._v(" "),e("li",[t._v("Proxy 返回的是一个新对象，我们可以只操作新的对象达到目的，而"),e("code",[t._v("Object.defineProperty")]),t._v("只能遍历对象属性直接修改")]),t._v(" "),e("li",[t._v("Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利")])]),t._v(" "),e("p",[t._v("Object.defineProperty 的优势：")]),t._v(" "),e("ul",[e("li",[t._v("兼容性好，支持 IE9")])]),t._v(" "),e("blockquote",[e("p",[t._v("推荐阅读：详细对比与实现请见 "),e("a",{attrs:{href:"https://www.cxymsg.com/guide/devsProxy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Proxy 比 defineproperty 优劣对比？"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"nexttick-原理分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nexttick-原理分析"}},[t._v("#")]),t._v(" NextTick 原理分析")]),t._v(" "),e("p",[e("code",[t._v("nextTick")]),t._v(" 可以让我们在下次 DOM 更新循环结束之后执行延迟回调，用于获得更新后的 DOM。")]),t._v(" "),e("p",[t._v("在 Vue 2.4 之前都是使用的 microtasks，但是 microtasks 的优先级过高，在某些情况下可能会出现比事件冒泡更快的情况，但如果都使用 macrotasks 又可能会出现渲染的性能问题。所以在新版本中，会默认使用 microtasks，但在特殊情况下会使用 macrotasks，比如 v-on。")]),t._v(" "),e("p",[t._v("对于实现 macrotasks ，会先判断是否能使用 "),e("code",[t._v("setImmediate")]),t._v(" ，不能的话降级为 "),e("code",[t._v("MessageChannel")]),t._v(" ，以上都不行的话就使用 "),e("code",[t._v("setTimeout")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" setImmediate "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNative")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("setImmediate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("macroTimerFunc")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImmediate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flushCallbacks"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" MessageChannel "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNative")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MessageChannel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// PhantomJS")]),t._v("\n    MessageChannel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[object MessageChannelConstructor]'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" channel "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageChannel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" port "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" channel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port2\n  channel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onmessage "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" flushCallbacks\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("macroTimerFunc")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    port"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* istanbul ignore next */")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("macroTimerFunc")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flushCallbacks"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("code",[t._v("nextTick")]),t._v(" 同时也支持 Promise 的使用，会判断是否实现了 Promise")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("cb"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Function"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" _resolve\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将回调函数整合进一个数组中")]),t._v("\n  callbacks"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cb")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleError")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nextTick'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_resolve"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("_resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("pending"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    pending "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("useMacroTask"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("macroTimerFunc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("microTimerFunc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断是否可以使用 Promise")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以的话给 _resolve 赋值")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这样回调函数就能以 promise 的方式调用")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("cb "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Promise "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      _resolve "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resolve\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"如何理解-vue-的响应式系统？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何理解-vue-的响应式系统？"}},[t._v("#")]),t._v(" 如何理解 Vue 的响应式系统？")]),t._v(" "),e("p",[e("img",{attrs:{src:a(229),alt:"responsiveSystem"}})]),t._v(" "),e("p",[t._v("响应式系统简述：")]),t._v(" "),e("ul",[e("li",[t._v("任何一个 Vue Component 都有一个与之对应的 Watcher 实例。")]),t._v(" "),e("li",[t._v("Vue 的 data 上的属性会被添加 getter 和 setter 属性。")]),t._v(" "),e("li",[t._v("当 Vue Component render 函数被执行的时候，data 会被触碰 (touch)，即被读， getter 方法会被调用， 此时 Vue 会去记录此 Vue component 所依赖的所有 data。（这一过程被称为依赖收集）")]),t._v(" "),e("li",[t._v("data 被改动时（主要是用户操作）， 即被写，setter 方法会被调用，此时 Vue 会去通知所有依赖于此 data 的组件去调用他们的 render 函数进行更新。")])]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://www.cxymsg.com/guide/reactivity.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入响应式系统"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"既然-vue-通过数据劫持可以精准探测数据变化，为什么还需要虚拟-dom-进行-diff-检测差异？🌟"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#既然-vue-通过数据劫持可以精准探测数据变化，为什么还需要虚拟-dom-进行-diff-检测差异？🌟"}},[t._v("#")]),t._v(" 既然 Vue 通过数据劫持可以精准探测数据变化，为什么还需要虚拟 DOM 进行 diff 检测差异？🌟")]),t._v(" "),e("p",[t._v("考点：Vue 的变化侦测原理")]),t._v(" "),e("p",[t._v("前置知识：依赖收集、虚拟 DOM、响应式系统")]),t._v(" "),e("p",[t._v("现代前端框架有两种方式侦测变化，一种是 pull 一种是 push")]),t._v(" "),e("p",[t._v("pull: 其代表为 React，我们可以回忆一下 React 是如何侦测到变化的，我们通常会用"),e("code",[t._v("setState")]),t._v("API 显式更新，然后 React 会进行一层层的 Virtual Dom Diff 操作找出差异，然后 Patch 到 DOM 上，React 从一开始就不知道到底是哪发生了变化，只是知道「有变化了」，然后再进行比较暴力的 Diff 操作查找「哪发生变化了」，另外一个代表就是 Angular 的脏检查操作。")]),t._v(" "),e("p",[t._v("push: Vue 的响应式系统则是 push 的代表，当 Vue 程序初始化的时候就会对数据 data 进行依赖的收集，一旦数据发生变化，响应式系统就会立刻得知，因此 Vue 是一开始就知道是「在哪发生变化了」，但是这又会产生一个问题，如果你熟悉 Vue 的响应式系统就知道，通常绑定一个数据就需要一个 Watcher, 如果我们的绑定细粒度过高就会产生大量的 Watcher，这会带来内存以及依赖追踪的开销，而细粒度过低又会无法精准侦测变化。因此 Vue 的设计是选择中等细粒度的方案，在组件级别进行 push 侦测的方式，也就是那套响应式系统。通常我们会第一时间侦测到发生变化的组件，然后在组件内部进行 Virtual Dom Diff 获取更加具体的差异，而 Virtual Dom Diff 则是 pull 操作，Vue 是 push+pull 结合的方式进行变化侦测的。")]),t._v(" "),e("h2",{attrs:{id:"vue-为什么没有类似于-react-中-shouldcomponentupdate-的生命周期？🌟"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-为什么没有类似于-react-中-shouldcomponentupdate-的生命周期？🌟"}},[t._v("#")]),t._v(" Vue 为什么没有类似于 React 中 shouldComponentUpdate 的生命周期？🌟")]),t._v(" "),e("p",[t._v("考点：Vue 的变化侦测原理")]),t._v(" "),e("p",[t._v("前置知识：依赖收集、虚拟 DOM、响应式系统")]),t._v(" "),e("p",[e("strong",[t._v("根本原因是 Vue 与 React 的变化侦测方式有所不同")])]),t._v(" "),e("p",[t._v("React 是 pull 的方式侦测变化，当 React 知道发生变化后，会使用 Virtual Dom Diff 进行差异检测，但是很多组件实际上是肯定不会发生变化的，这个时候需要用 shouldComponentUpdate 进行手动操作来减少 diff，从而提高程序整体的性能。")]),t._v(" "),e("p",[t._v("Vue 是 pull+push 的方式侦测变化的，在一开始就知道那个组件发生了变化，因此在 push 的阶段并不需要手动控制 diff。而组件内部采用的 diff 方式实际上是可以引入类似于 shouldComponentUpdate 相关生命周期的，但是通常合理大小的组件不会有过量的 diff，手动优化的价值有限，因此目前 Vue 并没有考虑引入 shouldComponentUpdate 这种手动优化的生命周期。")]),t._v(" "),e("h2",{attrs:{id:"vue-中的-key-到底有什么用？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-中的-key-到底有什么用？"}},[t._v("#")]),t._v(" Vue 中的 key 到底有什么用？")]),t._v(" "),e("p",[e("code",[t._v("key")]),t._v("是为 Vue 中的 vnode 标记的唯一 id，通过这个 key，我们的 diff 操作可以更准确、更快速。diff 算法的过程中先会进行新旧节点的首尾交叉对比，当无法匹配的时候会用新节点的"),e("code",[t._v("key")]),t._v("与旧节点进行比对，然后找出差异。")]),t._v(" "),e("blockquote",[e("p",[t._v("diff 程可以概括为：oldCh 和 newCh 各有两个头尾的变量 StartIdx 和 EndIdx，它们的 2 个变量相互比较，一共有 4 种比较方式。如果 4 种比较都没匹配，如果设置了 key，就会用 key 进行比较，在比较的过程中，变量会往中间靠，一旦 StartIdx>EndIdx 表明 oldCh 和 newCh 至少有一个已经遍历完了，就会结束比较，这四种比较方式就是首、尾、旧尾新头、旧头新尾。")])]),t._v(" "),e("ul",[e("li",[t._v("准确：如果不加"),e("code",[t._v("key")]),t._v("，那么 vue 会选择复用节点 (Vue 的就地更新策略），导致之前节点的状态被保留下来，会产生一系列的 bug。")]),t._v(" "),e("li",[t._v("快速：key 的唯一性可以被 Map 数据结构充分利用，相比于遍历查找的时间复杂度 O(n)，Map 的时间复杂度仅仅为 O(1)。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);
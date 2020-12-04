(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{209:function(t,s,a){t.exports=a.p+"assets/img/box.14650bf5.png"},210:function(t,s,a){t.exports=a.p+"assets/img/css-box.e3ed0926.png"},238:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"css"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),n("h2",{attrs:{id:"使用-link-和-import-导入样式有什么区别？🌟"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-link-和-import-导入样式有什么区别？🌟"}},[t._v("#")]),t._v(" 使用 link 和@import 导入样式有什么区别？🌟")]),t._v(" "),n("ul",[n("li",[t._v("link 属于 XHTML 标签，而@import 是 CSS 提供的。")]),t._v(" "),n("li",[t._v("页面被加载时，link 会同时被加载，而@import 引用的 CSS 会等到页面被加载完再加载。")]),t._v(" "),n("li",[t._v("import 只在 IE 5 以上才能识别，而 link 是 XHTML 标签，无兼容问题。")]),t._v(" "),n("li",[t._v("link 方式的样式权重高于@import 的权重。")]),t._v(" "),n("li",[t._v("使用 dom 控制样式时的差别。当使用 javascript 控制 dom 去改变样式的时候，只能使用 link 标签，因为@import 不是 dom 可以控制的。")])]),t._v(" "),n("h2",{attrs:{id:"css-选择器的权重和优先级？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-选择器的权重和优先级？"}},[t._v("#")]),t._v(" CSS 选择器的权重和优先级？")]),t._v(" "),n("p",[t._v("CSS 选择器有很多，不同的选择器的权重和优先级不一样，对于一个元素，如果存在多个选择器，那么就需要根据权重来计算其优先级。")]),t._v(" "),n("p",[t._v("权重分为四级，分别是：")]),t._v(" "),n("ol",[n("li",[t._v("代表内联样式，如"),n("code",[t._v('style="xxx"')]),t._v("，权值为 1000。")]),t._v(" "),n("li",[t._v("代表 ID 选择器，如"),n("code",[t._v("#content")]),t._v("，权值为 100。")]),t._v(" "),n("li",[t._v("代表类、伪类和属性选择器，如"),n("code",[t._v(".content")]),t._v("、"),n("code",[t._v(":hover")]),t._v("、"),n("code",[t._v("[attribute]")]),t._v("，权值为 10。")]),t._v(" "),n("li",[t._v("代表元素选择器和伪元素选择器，如"),n("code",[t._v("div")]),t._v("、"),n("code",[t._v("p")]),t._v("，权值为 1。")])]),t._v(" "),n("p",[n("strong",[t._v("简单记忆：内联 > ID 选择器 > 类选择器 > 标签选择器")])]),t._v(" "),n("p",[n("strong",[t._v("需要注意的是：通用选择器（*）、子选择器（>）和相邻同胞选择器（+）并不在这四个等级中，所以他们的权值都为 0")]),t._v("。")]),t._v(" "),n("p",[t._v("权重值大的选择器其优先级也高，相同权重的优先级又遵循后定义覆盖前面定义的情况。")]),t._v(" "),n("h2",{attrs:{id:"伪类和伪元素的区别是什么？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#伪类和伪元素的区别是什么？"}},[t._v("#")]),t._v(" 伪类和伪元素的区别是什么？")]),t._v(" "),n("p",[n("strong",[t._v("伪类")]),t._v("是一个以冒号"),n("code",[t._v(":")]),t._v("作为前缀，被添加到一个选择器末尾的关键字。存在的意义就是为了通过选择器找到那些不存在于 DOM 树中的信息以及不能被常规 CSS 选择器获取到的信息。")]),t._v(" "),n("blockquote",[n("p",[t._v("当你希望样式在特定状态下才被呈现到指定的元素时，你可以往元素的选择器后面加上对应的伪类。比如"),n("code",[t._v(":checked")]),t._v("、"),n("code",[t._v(":hover")]),t._v("、"),n("code",[t._v(":visited")]),t._v("、"),n("code",[t._v(":first-child")])])]),t._v(" "),n("p",[n("strong",[t._v("伪元素")]),t._v("用于创建一些不在文档树中的元素，并为其添加样式。比如说，我们可以通过"),n("code",[t._v("::before")]),t._v("来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。")]),t._v(" "),n("p",[n("strong",[t._v("两者的区别？")])]),t._v(" "),n("p",[t._v("css 引入伪类和伪元素概念是为了格式化文档树以外的信息。也就是说，伪类和伪元素都是用来修饰不在文档树中的部分。")]),t._v(" "),n("p",[n("strong",[t._v("而伪类与伪元素的区别在于：有没有创建一个文档树之外的元素。")])]),t._v(" "),n("blockquote",[n("p",[t._v("比如："),n("code",[t._v("p::before")]),t._v("对这段文本添加了额外的元素，通过 "),n("code",[t._v("p:first-child")]),t._v("改变了文本的样式。")])]),t._v(" "),n("p",[t._v("伪类是通过在元素选择器上加入伪类改变元素状态，而伪元素通过对元素的操作进行对元素的改变。")]),t._v(" "),n("blockquote",[n("p",[n("strong",[n("code",[t._v("::after")]),t._v(" 和 "),n("code",[t._v(":after")]),t._v(" 的区别")])]),t._v(" "),n("p",[t._v("在实际的开发工作中，我们会看到有人把伪元素写成"),n("code",[t._v(":after")]),t._v("，这实际是 CSS2 与 CSS3 新旧标准的规定不同而导致的。")]),t._v(" "),n("p",[t._v("CSS2 中的伪元素使用 1 个冒号，在 CSS3 中，为了区分伪类和伪元素，规定伪元素使用 2 个冒号。所以，对于 CSS2 标准的老伪元素，比如"),n("code",[t._v(":first-line")]),t._v("，"),n("code",[t._v(":first-letter")]),t._v("，"),n("code",[t._v(":before")]),t._v("，"),n("code",[t._v(":after")]),t._v("，写一个冒号浏览器也能识别，但对于 CSS3 标准的新伪元素，比如"),n("code",[t._v("::selection")]),t._v("，就必须写 2 个冒号了。")]),t._v(" "),n("p",[t._v("拓展阅读："),n("a",{attrs:{href:"http://www.alloyteam.com/2016/05/summary-of-pseudo-classes-and-pseudo-elements/",target:"_blank",rel:"noopener noreferrer"}},[t._v("伪类与伪元素"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"对盒模型的理解？🌟"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对盒模型的理解？🌟"}},[t._v("#")]),t._v(" 对盒模型的理解？🌟")]),t._v(" "),n("p",[t._v("当浏览器对一个网页文档进行布局（layout）的时候，其渲染引擎会根据标准之一的 CSS 基础框盒模型（CSS basic box model），将所有元素表示为一个个矩形的盒子（box）。CSS 决定这些盒子的大小、位置以及属性（例如颜色、背景、边框尺寸…）。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(209),alt:"盒模型"}})]),t._v(" "),n("p",[t._v("盒模型由 content（内容）、padding（内边距）、border（边框）、margin（外边距）四部分组成。")]),t._v(" "),n("h2",{attrs:{id:"标准盒模型和怪异盒模型有什么区别？🌟"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#标准盒模型和怪异盒模型有什么区别？🌟"}},[t._v("#")]),t._v(" 标准盒模型和怪异盒模型有什么区别？🌟")]),t._v(" "),n("h3",{attrs:{id:"这个问题其实也就是在问两种盒子模型的宽度如何计算？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#这个问题其实也就是在问两种盒子模型的宽度如何计算？"}},[t._v("#")]),t._v(" 这个问题其实也就是在问两种盒子模型的宽度如何计算？")]),t._v(" "),n("p",[n("strong",[t._v("在 W3C 标准下的标准盒模型中，我们设置的元素宽度值 width 都是内容 content 的宽度，而不是整个盒子的宽度。（高度同理）")])]),t._v(" "),n("p",[n("strong",[t._v("因此标准盒模型的盒子宽度是：（内容宽度 + padding 宽度 + border 宽度 + margin 宽度）之和。")])]),t._v(" "),n("p",[t._v("这样我们改四个中的任何一个，都会导致盒子总宽度的改变。这对我们开发来说并不友好。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(210),alt:"css-盒模型"}})]),t._v(" "),n("p",[n("strong",[t._v("而在 IE 怪异盒模型（IE8 以下）中，我们书写的宽度值并不是内容 content 的宽度，而是 border-left + padding-left + content 的宽度值 + padding-right + border-right 之和，height 同理。")])]),t._v(" "),n("p",[n("strong",[t._v("因此怪异盒模型的盒子宽度是：内容宽度 + padding 宽度 + border 宽度（不包括 margin）。")])]),t._v(" "),n("p",[t._v("这样就比较符合我们的实际开发要求了。因此虽然现代浏览器默认使用 W3C 的标准盒模型，但是在不少情况下怪异盒模型更加好用，于是 W3C 在 css3 中加入了"),n("code",[t._v("box-sizing")]),t._v("。")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content-box // 标准盒模型\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box // 怪异盒模型\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" padding-box // 火狐的私有模型，没人用\n")])])]),n("h2",{attrs:{id:"谈谈对-bfc-的理解？🌟"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#谈谈对-bfc-的理解？🌟"}},[t._v("#")]),t._v(" 谈谈对 BFC 的理解？🌟")]),t._v(" "),n("p",[n("strong",[t._v("块级上下文格式化 BFC (Block Formatting Context)")])]),t._v(" "),n("p",[n("strong",[t._v("BFC 是 Web 页面中盒模型布局的 CSS 渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。")])]),t._v(" "),n("p",[t._v("在这个独立的渲染区域里，只有 Block-level Box 参与， 并且它有一套渲染规则规定了内部的块级子元素如何布局，以及和其他元素的关系和相互作用。这套规则让处于 BFC 内部的元素与外部的元素互相隔离，毫不相关。")]),t._v(" "),n("p",[n("strong",[t._v("BFC 的特性：")])]),t._v(" "),n("ul",[n("li",[t._v("内部的 Box 会在垂直方向上一个接一个的放置。")]),t._v(" "),n("li",[t._v("垂直方向上的距离由 margin 决定")]),t._v(" "),n("li",[t._v("bfc 的区域不会与 float 的元素区域重叠")]),t._v(" "),n("li",[t._v("计算 bfc 的高度时，浮动元素也参与计算")]),t._v(" "),n("li",[t._v("bfc 就是页面上的一个独立容器，容器里面的子元素不会影响外面元素")])]),t._v(" "),n("p",[n("strong",[t._v("BFC 的应用：")])]),t._v(" "),n("ul",[n("li",[t._v("防止 margin 发生重叠")]),t._v(" "),n("li",[t._v("防止元素塌陷")]),t._v(" "),n("li",[t._v("清除内部浮动")]),t._v(" "),n("li",[t._v("自适应两（多）栏布局")]),t._v(" "),n("li",[t._v("防止文字环绕")])]),t._v(" "),n("p",[n("strong",[t._v("触发 BFC 的条件：")])]),t._v(" "),n("ul",[n("li",[t._v("根元素，即 HTML 元素")]),t._v(" "),n("li",[t._v("position 的值为 absolute、fixed")]),t._v(" "),n("li",[t._v("float 的值不为 none")]),t._v(" "),n("li",[t._v("overflow 的值不为 visible")]),t._v(" "),n("li",[t._v("display 的值为 inline-block、table-cell、table-caption")])]),t._v(" "),n("h2",{attrs:{id:"css-有几种定位方式？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-有几种定位方式？"}},[t._v("#")]),t._v(" CSS 有几种定位方式？")]),t._v(" "),n("ol",[n("li",[n("p",[n("strong",[t._v("static：")]),t._v(" 默认值，正常文档流定位，此时 top、right、 bottom、left 和 z-index 属性无效，块级元素从上往下纵向排布，行级元素从左向右排列。")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("relative：")]),t._v(" 相对定位，此时的『相对』是相对于正常文档流的位置。"),n("strong",[t._v("会导致自身位置的相对变化，而不会影响其他元素的位置、大小")]),t._v("。这是 relative 的要点之一。还有第二个要点，就是 relative "),n("strong",[t._v("产生一个新的定位上下文")]),t._v("。")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("absolute：")]),t._v(" 相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。比如一个绝对定位元素它的父级、和祖父级元素都为 relative，它会相对他的父级而产生偏移。")]),t._v(" "),n("blockquote",[n("ol",[n("li",[t._v("和 relative 不同，absolute 元素脱离了文档结构，会产生破坏性，导致父元素坍塌。")]),t._v(" "),n("li",[t._v("absolute 元素具有“包裹性”。之前撑满整个屏幕的宽度值会变成刚好是内容宽度的宽度值。")]),t._v(" "),n("li",[t._v("absolute 元素具有“跟随性”。虽然 absolute 元素脱离了文档结构，但是它的位置并没有发生变化，还是老老实实地呆在它原本的位置。设置了 top、left 值时，元素是相对于最近的定位上下文来定位的，而不是相对于浏览器定位。")]),t._v(" "),n("li",[t._v("absolute 元素会悬浮在页面上方，会遮挡住下方的页面内容。")])])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("fixed：")]),t._v(" 指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变，一般回到顶部的按钮都是用此种定位方式实现。")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("sticky：")]),t._v(" 粘性定位，特性近似于 relative 和 fixed 的合体，其在实际应用中的近似效果就是 IOS 通讯录滚动的时候的『顶屁股』。")])])]),t._v(" "),n("h2",{attrs:{id:"如何实现居中对齐？🌟"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何实现居中对齐？🌟"}},[t._v("#")]),t._v(" 如何实现居中对齐？🌟")]),t._v(" "),n("h3",{attrs:{id:"水平居中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#水平居中"}},[t._v("#")]),t._v(" 水平居中")]),t._v(" "),n("p",[t._v("inline 元素用"),n("code",[t._v("text-align: center;")]),t._v("即可，如下：")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("block 元素可使用"),n("code",[t._v("margin: auto;")]),t._v("，以前很常用的方式。")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1000px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("绝对定位元素可结合"),n("code",[t._v("left")]),t._v("和"),n("code",[t._v("margin")]),t._v("实现，但是必须知道宽度。")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 500px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -150px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("table 方法，不常用。")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".center")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("table"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0 auto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1px solid red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  <div class="),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"center"')]),t._v(">水平居中</div>\n")])])]),n("p",[t._v("flex 布局，目前主流的方法。")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".center")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("flex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  <div class="),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"center"')]),t._v(">\n      <div class="),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flex-div"')]),t._v(">1</div>\n      <div class="),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flex-div"')]),t._v(">2</div>\n  </div>\n")])])]),n("h3",{attrs:{id:"垂直居中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#垂直居中"}},[t._v("#")]),t._v(" 垂直居中")]),t._v(" "),n("p",[t._v("inline 元素可设置"),n("code",[t._v("line-height")]),t._v("的值等于"),n("code",[t._v("height")]),t._v("值，如单行文字垂直居中：")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("绝对定位元素，可结合"),n("code",[t._v("left")]),t._v("和"),n("code",[t._v("margin")]),t._v("实现，但是必须知道尺寸。")]),t._v(" "),n("ul",[n("li",[t._v("优点：兼容性好")]),t._v(" "),n("li",[t._v("缺点：需要提前知道尺寸")])]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 80px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -20px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -40px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("绝对定位可结合"),n("code",[t._v("transform")]),t._v("实现居中。")]),t._v(" "),n("ul",[n("li",[t._v("优点：不需要提前知道尺寸")]),t._v(" "),n("li",[t._v("缺点：兼容性不好")])]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 80px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" -50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("绝对定位结合"),n("code",[t._v("margin: auto")]),t._v("，不需要提前知道尺寸，兼容性好。")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("flex 方式")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("拓展阅读："),n("a",{attrs:{href:"https://louiszhai.github.io/2016/03/12/css-center/",target:"_blank",rel:"noopener noreferrer"}},[t._v("16 种方法实现水平居中垂直居中"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("拓展阅读："),n("a",{attrs:{href:"https://sunburst.wang/posts/2018/02/05/position-mode-and-five-ways-to-clear-float.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("三种定位模式与 5 种清除浮动的常用方法"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"对-flex-布局的理解？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对-flex-布局的理解？"}},[t._v("#")]),t._v(" 对 flex 布局的理解？")]),t._v(" "),n("p",[t._v("web 应用有不同设备尺寸和分辨率，这时需要响应式界面设计来满足复杂的布局需求，布局的传统解决方案基于盒子模型，依赖 "),n("code",[t._v("display")]),t._v(" 属性 + "),n("code",[t._v("position")]),t._v(" 属性 + "),n("code",[t._v("float")]),t._v(" 属性。它对于那些特殊布局非常不方便。flex 弹性盒模型的优势在于开发人员只是声明布局应该具有的行为，而不需要给出具体的实现方式，浏览器负责完成实际布局，当布局涉及到不定宽度，分布对齐的场景时，就要优先考虑弹性盒布局")]),t._v(" "),n("p",[t._v("具体用法移步阮一峰的 "),n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("flex 语法"),n("OutboundLink")],1),t._v("、"),n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-examples.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("flex 实战"),n("OutboundLink")],1),t._v("，讲得非常通俗易懂。")]),t._v(" "),n("blockquote",[n("p",[t._v("推荐阅读："),n("a",{attrs:{href:"https://juejin.im/post/58e3a5a0a0bb9f0069fc16bb",target:"_blank",rel:"noopener noreferrer"}},[t._v("一劳永逸的搞定 flex 布局"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"如何理解-z-index"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何理解-z-index"}},[t._v("#")]),t._v(" 如何理解 z-index?")]),t._v(" "),n("p",[t._v("CSS 中的 z-index 属性控制重叠元素的垂直叠加顺序，默认元素的 z-index 为 0，我们可以修改 z-index 来控制元素的图层位置，而且 z-index 只能影响设置了 position 值的元素。")]),t._v(" "),n("blockquote",[n("p",[t._v("层叠上下文是 HTML 元素的三维概念，这些 HTML 元素在一条假想的相对于面向（电脑屏幕的）视窗或者网页的用户的 z 轴上延伸，HTML 元素依据其自身属性按照优先级顺序占用层叠上下文的空间。")]),t._v(" "),n("p",[t._v("拓展阅读："),n("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/",target:"_blank",rel:"noopener noreferrer"}},[t._v("层叠上下文-张鑫旭"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"css-有哪些方式可以隐藏页面元素？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-有哪些方式可以隐藏页面元素？"}},[t._v("#")]),t._v(" CSS 有哪些方式可以隐藏页面元素？")]),t._v(" "),n("ol",[n("li",[n("code",[t._v("opacity:0")]),t._v("：本质上就是将元素的透明度设为 0，页面上看起来就隐藏了，但是元素依然占据空间且可以进行事件交互")]),t._v(" "),n("li",[n("code",[t._v("visibility:hidden")]),t._v("：与上一个方法类似的效果，仍占据空间，但是不可以交互了。")]),t._v(" "),n("li",[n("code",[t._v("overflow:hidden")]),t._v("：这个只隐藏元素溢出的部分，但是占据空间且不可交互。")]),t._v(" "),n("li",[n("code",[t._v("display:none")]),t._v("：彻底隐藏了元素，元素从文档流中消失，既不占据空间也不交互，也不影响布局，可以理解成在页面中把该元素删掉。")]),t._v(" "),n("li",[n("code",[t._v("z-index:-9999")]),t._v("：原理是将层级放到底部，这样就被覆盖了，看起来隐藏了。")]),t._v(" "),n("li",[n("code",[t._v("transform: scale(0,0)")]),t._v("：平面变换，将元素缩放为 0，但是依然占据空间，但不可交互。")])]),t._v(" "),n("blockquote",[n("p",[t._v("还有一些靠绝对定位把元素移到可视区域外，或者用 clip-path 进行裁剪等操作，因为过于 Hack，就不提了。")])]),t._v(" "),n("h2",{attrs:{id:"px、em、rem-的区别？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px、em、rem-的区别？"}},[t._v("#")]),t._v(" px、em、rem 的区别？")]),t._v(" "),n("ul",[n("li",[t._v("px：绝对单位，页面按精确像素展示。")]),t._v(" "),n("li",[t._v("em：相对单位，基准点为父节点字体的大小，如果自身定义了 font-size 按自身来计算（浏览器默认字体是 16px），因此整个页面内的 1em 不是一个固定的值。")]),t._v(" "),n("li",[t._v("rem：相对单位，可理解为”root em”。相对根节点 html 的字体大小来计算，CSS3 新加属性，chrome/firefox/IE9+ 支持。")])]),t._v(" "),n("h2",{attrs:{id:"对-css-sprites-的理解，好处是什么？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对-css-sprites-的理解，好处是什么？"}},[t._v("#")]),t._v(" 对 css sprites 的理解，好处是什么？")]),t._v(" "),n("p",[t._v("css sprites 即 css 精灵， 是一种图像合成技术，开发人员往往把使用工具（PS 之类的）将多张小图标合并在一起之后的图片称作雪碧图。每个图标都有相应的 css 类，该类定义了 background-image、background-position 和 background-size 属性。 使用图片时，将相应的类添加到你的元素中。")]),t._v(" "),n("p",[n("strong",[t._v("好处：")])]),t._v(" "),n("ul",[n("li",[t._v("减少加载多张图片的 HTTP 请求数（一张雪碧图只需要一个请求）")]),t._v(" "),n("li",[t._v("提前加载资源")])]),t._v(" "),n("p",[n("strong",[t._v("不足：")])]),t._v(" "),n("ul",[n("li",[t._v("CSS Sprite 维护成本较高，如果页面背景有少许改动，一般就要改这张合并的图片。")]),t._v(" "),n("li",[t._v("加载速度优势在 http2 开启后荡然无存，HTTP2 多路复用，多张图片也可以重复利用一个连接通道搞定。")])]),t._v(" "),n("h2",{attrs:{id:"对媒体查询的理解？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对媒体查询的理解？"}},[t._v("#")]),t._v(" 对媒体查询的理解？")]),t._v(" "),n("p",[t._v("媒体查询由一个可选的媒体类型和零个或多个使用媒体功能的限制了样式表范围的表达式组成，例如宽度、高度和颜色。媒体查询，添加自 CSS3，允许内容的呈现针对一个特定范围的输出设备而进行裁剪，而不必改变内容本身，非常适合 web 网页应对不同型号的设备而做出对应的响应适配。")]),t._v(" "),n("p",[n("strong",[t._v("如何使用？")])]),t._v(" "),n("p",[t._v("媒体查询包含一个可选的媒体类型和，满足 CSS3 规范的条件下，包含零个或多个表达式，这些表达式描述了媒体特征，最终会被解析为 true 或 false。如果媒体查询中指定的媒体类型匹配展示文档所使用的设备类型，并且所有的表达式的值都是 true，那么该媒体查询的结果为 true. 那么媒体查询内的样式将会生效。")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- link 元素中的 CSS 媒体查询 --\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(max-width: 800px)"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("example.css"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 样式表中的 CSS 媒体查询 --\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token style"}},[n("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 600px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".facet_sidebar")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("拓展阅读："),n("a",{attrs:{href:"https://www.cnblogs.com/xiaohuochai/p/5848612.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 CSS Media 媒体查询"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"为什么有时候人们用-translate-来改变位置而不是定位？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么有时候人们用-translate-来改变位置而不是定位？"}},[t._v("#")]),t._v(" 为什么有时候人们用 translate 来改变位置而不是定位？")]),t._v(" "),n("p",[t._v("translate() 是 transform 的一个值。改变 transform 或 opacity 不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）。而改变绝对定位会触发重新布局，进而触发重绘和复合。transform 使浏览器为元素创建一个 GPU 图层，但改变绝对定位会使用到 CPU。 因此 translate() 更高效，可以缩短平滑动画的绘制时间。")]),t._v(" "),n("p",[t._v("而 translate 改变位置时，元素依然会占据其原始空间，绝对定位就不会发生这种情况。")]),t._v(" "),n("blockquote",[n("p",[t._v("拓展阅读："),n("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS3 3D transform 变换-张鑫旭"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"关于-css-的动画与过渡问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于-css-的动画与过渡问题"}},[t._v("#")]),t._v(" 关于 CSS 的动画与过渡问题")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/xiaohuochai/p/5391663.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 CSS 动画 animation"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/xiaohuochai/p/5347930.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 CSS 过渡 transition"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);
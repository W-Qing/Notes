# 浏览器

## 组成部分

1. **用户界面** - 包括地址栏、前进/后退按钮、书签菜单等。除了浏览器主窗口显示的你请求的页面外，其他显示的各个部分都属于用户界面。
2. **浏览器引擎** - 在用户界面和渲染引擎之间传送指令。
3. **渲染引擎** - 负责显示请求的内容。如果请求的内容是 HTML，它就负责解析 HTML 和 CSS 内容，并将解析后的内容显示在屏幕上。
4. **网络** - 用于网络调用，比如 HTTP 请求。其接口与平台无关，并为所有平台提供底层实现。
5. **用户界面后端** - 用于绘制基本的窗口小部件，比如组合框和窗口。其公开了与平台无关的通用接口，而在底层使用操作系统的用户界面方法。
6. **JavaScript 解释器**。用于解析和执行 JavaScript 代码。
7. **数据存储**。这是持久层。浏览器需要在硬盘上保存各种数据，例如 Cookie。新的 HTML 规范 (HTML5) 定义了“网络数据库”，这是一个完整（但是轻便）的浏览器内数据库。

![img](../Images/browser/partOfBrowser.png)

> 值得注意的是，和大多数浏览器不同，Chrome 浏览器的每个标签页都分别对应一个渲染引擎实例。每个标签页都是一个独立的进程。

## 常见内核

浏览器的内核是指支持浏览器运行的最核心的程序，分为两个部分：一是渲染引擎，另一个是JS引擎。

渲染引擎在不同的浏览器中也不是都相同的，目前市面上常见的浏览器内核可以分为这四种：Trident（IE）、Gecko（火狐）、Blink（Chrome、Opera）、Webkit（Safari）。

| 浏览器/RunTime |         内核（渲染引擎）         |    JavaScript 引擎     |
| :------------: | :------------------------------: | :--------------------: |
|     Chrome     | Blink（28~） Webkit（Chrome 27） |           V8           |
|    FireFox     |              Gecko               |      SpiderMonkey      |
|     Safari     |              Webkit              |     JavaScriptCore     |
|      Edge      |             EdgeHTML             | Chakra(for JavaScript) |
|       IE       |             Trident              |  Chakra(for JScript)   |
|   PhantomJS    |              Webkit              |     JavaScriptCore     |
|    Node.js     |                -                 |           V8           |

## 渲染机制

 先了解下浏览器请求加载资源的过程，然后才能更好的理解浏览器的渲染机制。

**浏览器请求加载一个资源的主要过程：**

- 浏览器根据 DNS 服务器得到域名的 IP 地址
- 向这个 IP 的服务器发送 http 请求
- 服务器收到请求，处理并返回 http 请求
- 浏览器得到返回内容

浏览器得到服务器返回的内容后，接下来就是渲染过程。

**浏览器渲染页面的过程：**

1. 解析 HTML 结构生成DOM树形结构—**DOM Tree**
2. 解析CSS，生成CSS规则树—**CSSOM Tree**
3. 解析完成后，浏览器引擎会通过 DOM API 和 CSSOM API 来操作 DOM Tree 和CSSOM Tree，组合形成渲染树—**Render Tree**
4. 根据渲染树来进行布局—**Layout** (计算出各个节点在页面中的确切位置和大小，所有相对测量值都将转换为屏幕上的绝对像素)
5. 布局完成后，浏览器会立即发出“Paint Setup”和“Paint”事件，将渲染树转换成屏幕上的像素，即绘制页面—**reflow/repaint**

> - 遇到`<script>` 时，会执行并阻塞渲染，因为 JS 有可能改变 DOM 树结构( GUI渲染线程与JS引擎线程互斥 )
> - 而 img、 video 则是异步加载，不会阻塞渲染
> - 通常情况下DOM和CSSOM是并行构建的，但是当浏览器遇到一个不带defer或async属性的script标签时，DOM构建将暂停，如果此时又恰巧浏览器尚未完成CSSOM的下载和构建，由于JavaScript可以修改CSSOM，所以需要等CSSOM构建完毕后再执行JS，最后才重新DOM构建

**Load 和 DOMContentLoaded 区别：**

window.onload  事件触发代表页面中的 DOM，CSS，JS，图片已经全部加载完毕。

DOMContentLoaded 事件触发代表初始的 HTML 被完全加载和解析，不需要等待 CSS，JS，图片加载。

```js
window.addEventListener('load', function () {
    // 页面的全部资源加载完才会执行，包括图片、视频等
})

document.addEventListener('DOMContentLoaded', function () {
    // DOM 渲染完即可执行，此时图片、视频可能还没有加载完
})
```

> 推荐阅读：
>
> - [深入浅出浏览器渲染原理](https://github.com/ljianshu/Blog/issues/51)
> - [关键渲染路径](https://github.com/berwin/Blog/issues/29) 👏
> - [从 8 道面试题看浏览器渲染过程与性能优化](https://juejin.im/post/5e143104e51d45414a4715f7#heading-28)
> - [How Browsers work ](http://taligarsiel.com/Projects/howbrowserswork1.htm)

## Event Loop 🌟

### 栈、队列的基本概念

**栈（Stack）** 

- 栈在计算机科学中是限定仅在**表尾**进行**插入**或**删除**操作的线性表。 
- 栈是一种数据结构，它按照**后进先出**的原则存储数据，**先进入**的数据被压入**栈底**，**最后的数据**在**栈顶**，需要读数据的时候从**栈顶**开始**弹出数据**。（`LIFO: last in first out`）
- 栈是只能在**某一端插入**和**删除**的**特殊线性表**。

**队列（Queue）**

- 特殊之处在于它只允许在表的前端（`front`）进行**删除**操作，而在表的后端（`rear`）进行**插入**操作，和**栈**一样，**队列**是一种操作受限制的线性表。
- 进行**插入**操作的端称为**队尾**，进行**删除**操作的端称为**队头**。 队列中没有元素时，称为**空队列**。
- **队列**的数据元素又称为**队列元素**。在队列中插入一个队列元素称为**入队**，从**队列**中**删除**一个队列元素称为**出队**。
- 因为队列**只允许**在一端**插入**，在另一端**删除**，所以只有**最早**进入**队列**的元素**才能最先从队列中**删除，故队列又称为**先进先出**。（`FIFO: first in first out`）

### 宏认为与微任务

在`JavaScript`中，任务被分为两种，一种宏任务（`MacroTask`）也叫`Task`，一种叫微任务（`MicroTask`），也叫`Jobs`。

**MacroTask（宏任务）**

在 JavaScript 中，大部分的任务都是在主线程上执行，为了让这些事件有条不紊地进行，JS 引擎需要对它们的执行顺序做一定的安排，V8 其实采用的是`队列`的方式来存储这些同步任务， 即先进来的先执行。

- script 全部代码，即 js 脚本执行
- setTimeout、setInterval、setImmediate(只有IE10支持) 
- I/O 用户交互、网络请求、文件读写完成事件等
- UI rendering 渲染事件

**MicroTask（微任务）**

如果异步回调也像宏任务一样进行队列的入队操作，那么执行这些回调的时机就是在前面`所有的宏任务`完成之后（先进先出），倘若现在的任务队列非常长，那么异步回调迟迟得不到执行，会造成`应用卡顿`。

为了规避这样的问题，V8 引入了`微任务`的解决方式。在每一个宏任务中定义一个**微任务队列**，当该宏任务执行完成，会检查其中的微任务队列，如果为空则直接执行下一个宏任务，如果不为空，则`依次执行微任务`，执行完成才去执行下一个宏任务。

- Promise、fetch API
- Object.observe （废弃）
- MutationObserver
- process.nextTick（Node独有）
- V8 的垃圾回收

**requestAnimationFrame**

`requestAnimationFrame`也属于异步执行的方法，但该方法既不属于宏任务，也不属于微任务。

> `window.requestAnimationFrame()` 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。

requestAnimationFrame是GUI渲染之前执行，但在微服务之后，不过requestAnimationFrame不一定会在当前帧必须执行，由浏览器根据当前的策略自行决定在哪一帧执行。

### 浏览器端的 Event Loop

**Event Loop(事件循环)是指浏览器或`Node`的一种实现`javaScript`单线程运行时不会阻塞的一种机制（JS 运行机制）**，也就是我们经常使用的**异步**的原理。

众所周知 JS 是一门非阻塞的单线程语言，同一时间只能执行一个任务，即代码的执行是同步并且阻塞的。

> 1. 首先是历史原因，在创建 JS 这门语言时，多进程多线程的架构并不流行，硬件支持并不好。
> 2. 其次是因为多线程的复杂性，多线程操作需要加锁，编码的复杂性会增高。
> 3. 最主要的是，JS 就是为了和浏览器交互而诞生的，如果在多个线程中同时操作 DOM ，在不加锁的情况下，最终会导致 DOM 渲染的结果不可预期（一个线程中新加节点，另一个线程中删除节点）。

> 尽管 HTML5 中有 Web-Worker，但 JS 仍然是单线程的。一切 JavaScript 版的"多线程"都是用单线程模拟出来的。

只有一个主线程，那 javascript 是如何处理各种同步与异步函数的调用关系的？答案是——**调用栈**。

![Event Loop](../Images/browser/eventloop.jpg)

单线程的运行环境有且只有一个 `call-stack` 调用栈(执行栈)，所有的任务都会被放到调用栈等待浏览器的主线程执行。

调用栈采用的是后进先出(LIFO)的规则，当一个函数被执行的时候，它会被添加到栈的顶部(如果它的函数体内有其他函数，则将新的函数加到栈顶)，当函数在调用栈内被执行完成后，就会从栈顶移出，直到栈内被清空。

当调用栈执行完毕之后，就会在队列里面找任务，如果有微任务，就会先执行微任务，再去执行宏任务。

**事件循环：** 就是同步任务进入主线程，异步任务加入到任务队列中。等主线程的任务执行完就去执行任务队列中的任务，这个过程会不断重复。**所有同步任务都在主线程上执行，形成一个执行栈。主线程之外, 存在一个任务队列(task queue), 异步任务有了运行结果会在任务队列之中放置一个任务。执行栈中的所有同步任务执行完毕后读取任务队列(先读取微任务、宏任务)不断重复上面的第三步。**

> 本质上来说 JS 中的异步还是同步行为

有点晕？看这里👉🏻[到底什么是Event Loop呢?](https://www.bilibili.com/video/av74599059?t=960)👀

```js
console.log('script start')

setTimeout(function() {
  console.log('setTimeout')
}, 0)

console.log('script end')
```
举个🌰，上面👆的代码中虽然 setTimeout 延时为 0，但它还是异步的。所以 setTimeout 还是会在 script end 之后打印。
> In fact, HTML5 标准规定这个函数第二个参数不得小于 4 毫秒，不足会自动增加。

不同的任务源会被分配到不同的 Task 队列中。
```js
console.log('script start')

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
.then(function() {
  console.log('promise1')
})
.then(function() {
  console.log('promise2')
})

console.log('script end')
// 			 1						2							3						4						5						6
// script start => Promise => script end => promise1 => promise2 => setTimeout
```

以上代码虽然 setTimeout 写在 Promise 之前，但是因为 Promise 属于微任务而 setTimeout 属于宏任务，所以会有以上的打印。

所以正确的一次 Event loop 顺序是这样的：

1. 一开始整段脚本作为第一个**宏任务**执行(main script)
2. 执行过程中同步代码(1)(2)(3)直接执行，**宏任务**进入宏任务队列，**微任务**进入微任务队列
3. 当前宏任务执行完出队，检查微任务队列，如果有则依次执行(4)(5)，直到微任务队列为空
4. 必要的话，执行浏览器 UI 线程的渲染工作
5. 检查是否有Web worker任务，有则执行
6. 执行队首新的宏任务(6)，回到2，开始下一轮 Event loop，依此循环，直到宏任务和微任务队列都为空

通过上述的 Event loop 顺序可知，如果宏任务中的异步代码有大量的计算并且需要操作 DOM 的话，为了更快的 界面响应，我们可以把操作 DOM 放入微任务中。

> ⚠️注意：Promise的executor是一个同步函数，即非异步，立即执行的一个函数，因此它(2)应该是和当前的任务一起执行的。而Promise的链式调用then，每次都会在内部生成一个新的Promise，然后执行then，在执行的过程中不断向微任务(microtask)推入新的函数，因此直至微任务的队列清空后才会执行下一波的macrotask。

> 墙裂推荐阅读：
> - [这一次，彻底弄懂 JavaScript 执行机制](https://juejin.im/post/59e85eebf265da430d571f89)
> - [面试问到 Event Loop，这样回答最完美](https://mp.weixin.qq.com/s/8xyccve0e9uA2mnk07CAWw) 👏
> - [Eventloop不可怕，可怕的是遇上Promise](https://juejin.im/post/5c9a43175188252d876e5903) 😫

## 垃圾回收机制

JavaScript 会在创建变量（对象，字符串等）时分配内存，并且在不再使用它们时“自动”释放。 而这个释放无用变量内存的过程被称为垃圾回收。

**内存模型**

基本类型数据以及复杂类型数据都是如何存放的呢？

- 基本类型普遍被存放在『栈』中，而复杂类型是被存放在堆内存的。

执行栈的函数是如何使用内存堆的复杂类型？

- 实际上，执行栈的函数上下文会保存一个内存堆对应复杂类型对象的内存地址，通过引用来使用复杂类型对象。

是否所有的基本类型都储存在栈中呢？

- 并不是，当一个基本类型被闭包引用之后，就可以长期存在于内存中，这个时候即使他是基本类型，也是会被存放在堆中的。

**生命周期**

不管什么程序语言，内存生命周期基本都是一样的：分配 => 使用（读、写）=> 释放

> 所有语言第二部分都是明确的。第一和第三部分在底层语言中是明确的，但在像 JavaScript 这些高级语言中，大部分都是隐含的。

**V8 下的垃圾回收机制**

分代回收机制

V8 实现了准确式 GC，GC 算法采用了分代式垃圾回收机制。因此，V8 将内存（堆）分为新生代和老生代两部分。



V8的垃圾回收策略基于分代回收机制，该机制又基于**世代假说**,该假说有两个特点:

- 大部分新生对象倾向于早死
- 不死的对象，会活得更久

基于这个理论，现代垃圾回收算法根据对象的存活时间将内存进行了分代，并对不同分代的内存采用不同的高效算法进行垃圾回收

内存分代

全停顿、Scavenge 算法、对象晋升

Mark-Sweep 和 Mark-Compact 算法

2011 增量标记 => 延迟清理？

2018 并发标记

**内存泄漏**

todo...

## 事件机制

### 事件触发三阶段

1. **捕获：** `window` 往事件触发处传播，遇到注册的捕获事件会触发。
2. 传播到事件触发处时触发注册的事件。
3. **冒泡：** 从事件触发处往 `window` 传播，遇到注册的冒泡事件会触发。

```js
// 以下会先打印冒泡然后是捕获
node.addEventListener(
  'click',
  event => {
    console.log('冒泡')
  },
  false
)
node.addEventListener(
  'click',
  event => {
    console.log('捕获 ')
  },
  true
)
```

- 阻止事件冒泡 e.stopPropagation()

### 注册事件

通常我们使用 `addEventListener` 注册事件，该函数的第三个参数可以是布尔值，也可以是对象。对于布尔值 `useCapture` 参数来说，该参数默认值为 `false` 。`useCapture` 决定了注册的事件是捕获事件还是冒泡事件。对于对象参数来说，可以使用以下几个属性

- `capture`，布尔值，和 `useCapture` 作用一样
- `once`，布尔值，值为 `true` 表示该回调只会调用一次，调用后会移除监听
- `passive`，布尔值，表示永远不会调用 `preventDefault`

一般来说，我们只希望事件只触发在目标上，这时候可以使用 `stopPropagation` 来阻止事件的进一步传播。通常我们认为 `stopPropagation` 是用来阻止事件冒泡的，其实该函数也可以阻止捕获事件。`stopImmediatePropagation` 同样也能实现阻止事件，但是还能阻止该事件目标执行别的注册事件。

```js
node.addEventListener(
  'click',
  event => {
    event.stopImmediatePropagation()
    console.log('冒泡')
  },
  false
)
// 点击 node 只会执行上面的函数，该函数不会执行
node.addEventListener(
  'click',
  event => {
    console.log('捕获 ')
  },
  true
)
```

### 事件代理

如果一个节点中的子节点是动态生成的，那么子节点需要注册事件的话应该注册在父节点上，即事件代理。

```html
<ul id="list">
  <li id="item1">项目 1</li>
  <li id="item2">项目 2</li>
  <li id="item3">项目 3</li>
  <!-- 随时会新增更多的 li 标签 -->
</ul>
<script>
  let ul = document.querySelector('#list')
  ul.addEventListener('click', event => {
    console.log(event.target)
  })
</script>
```

事件代理的方式相对于直接给目标注册事件来说，有以下优点

- 节省内存
- 不需要给子节点注销事件

## BOM 操作

BOM（浏览器对象模型）是浏览器本身的一些信息的设置和获取，例如获取浏览器的宽度、高度，设置让浏览器跳转到哪个地址。

- window.screen对象：包含有关用户屏幕的信息
- window.location对象：用于获得当前页面的地址(URL)，并把浏览器重定向到新的页面
- window.history对象：浏览历史的前进后退等
- window.navigator对象：常常用来获取浏览器信息、是否移动端访问等等

举几个例子🌰

- 获取屏幕的宽度和高度 `screen.width` 与 `screen.height`
- 复制代码获取网址、协议、path、参数、hash 等
```js
// 例如当前网址是 https://xxx.com/demo/frontend?a=10&b=10#some
console.log(location.href)  // https://xxx.com/demo/frontend?a=10&b=10#some
console.log(location.protocol) // https:
console.log(location.pathname) // /demo/frontend
console.log(location.search) // ?a=10&b=10
console.log(location.hash) // #some
```
- 复制代码另外，还有调用浏览器的前进、后退功能等 `history.back()`与`history.forward()`
- 复制代码获取浏览器特性（即俗称的UA）然后识别客户端，例如判断是不是 Chrome 浏览器
```js
var ua = navigator.userAgent
var isChrome = ua.indexOf('Chrome')
console.log(isChrome)
```

## Ajax 与 跨域

### Ajax

> 推荐阅读：[Ajax 知识体系大梳理](https://juejin.im/post/58c883ecb123db005311861a)

### 跨域
**同源策略：**

因为浏览器出于安全考虑，限制了从同一个源加载的文档或脚本与来自另一个源的资源进行交互，即同源策略，这是一个用于隔离潜在恶意文件的重要安全机制。

同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个ip地址，也非同源。

协议、域名或者端口有一个不同就算跨域，而且所有的跨域请求都必须经过信息提供方允许，否则 Ajax 请求就会失败。


浏览器中的大部分内容都是受同源策略限制的，但是以下三个 HTML 标签可以不受限制，可以跨域加载资源：

```html
<img src="xxx">
<link href="xxx">
<script src="xxx">
```

因此这三个标签分别有它们的使用场景：

> img 用于打点统计，统计网站可能是其他域
>
> link、script 可以使用 CDN，CDN 加载的也是其他域资源
>
> script 可以用于 JSONP

#### 几种实现跨域的常用方法

**1. JSONP**

jsonp本质上是一个Hack，它的原理就是利用`<script>`标签不受同源策略限制的特性，通过 `<script>` 标签指向一个需要访问的地址并提供一个回调函数来接收数据，从而实现跨域操作。

```js
<script src="http://domain/api?param1=a&param2=b&callback=jsonp"></script>
<script>
    function jsonp(data) {
    	console.log(data)
	}
</script>

// 或者是下面这种方式
<script>
window.callback = function (data) {
    console.log(data)
}
<script/>
<script src = "http://demo.com/api.js"><script/>
// 该接口将返回 callback({x:10, y:20}) 执行 callback 方法
```

1. 提前定义好跨域请求的接口要返回的函数
2. 通过 script 跨域加载 js 文件，绕过浏览器的同源策略
3. 加载请求的 js 文件，同时执行 callback 函数 得到请求的数据

JSONP 使用简单且兼容性不错，但是它只限于 `get` 请求。

在开发中可能会遇到多个 JSONP 请求的回调函数名是相同的，这时候就需要自己封装一个 JSONP，以下是简单实现

```js
function jsonp(url, jsonpCallback, success) {
  let script = document.createElement('script')
  script.src = url
  script.async = true
  script.type = 'text/javascript'
  window[jsonpCallback] = function(data) {
    success && success(data)
  }
  document.body.appendChild(script)
}
jsonp('http://xxx', 'callback', function(value) {
  console.log(value)
})
```

**2. CORS**

CORS 是目前主流的跨域解决方案，跨域资源共享(CORS) 是一种机制，它使用额外的 HTTP 头来告诉浏览器 让运行在一个 origin (domain) 上的Web应用被准许访问来自不同源服务器上的指定的资源。当一个资源从与该资源本身所在的服务器不同的域、协议或端口请求一个资源时，资源会发起一个跨域 HTTP 请求。

CORS 需要浏览器和后端同时支持。浏览器会自动进行 CORS 通信，实现 CORS 通信的关键是后端。只要后端实现了 CORS，就实现了跨域。

> IE 8 和 9 需要通过 `XDomainRequest` 来实现。

服务端通过设置 http header 的 `Access-Control-Allow-Origin` 属性就可以开启 CORS。

该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。

```js
// 不同的后端语言会有不同
response.setHeader("Access-Control-Allow-Origin", "http://test.com") // 不建议直接写 '*'
```

> 在生产环境中建议用成熟的开源中间件解决问题。

**其它跨域方案**

1. HTML5 XMLHttpRequest 有一个API，`postMessage()`方法允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本档、多窗口、跨域消息传递。

   ```js
   // 这种方式通常用于获取嵌入页面中的第三方页面数据。
   // 一个页面发送消息，另一个页面判断来源并接收消息。
   // 发送消息端
   window.parent.postMessage('message', 'http://test.com')
   // 接收消息端
   var mc = new MessageChannel()
   mc.addEventListener('message', event => {
     var origin = event.origin || event.originalEvent.origin
     if (origin === 'http://test.com') {
       console.log('验证通过')
     }
   })
   ```

2. WebSocket 是一种双向通信协议，在建立连接之后，WebSocket 的 server 与 client 都能主动向对方发送或接收数据，连接建立好了之后 client 与 server 之间的双向通信就与 HTTP 无关了，因此可以跨域。

3. window.name + iframe：window.name属性值在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值，我们可以利用这个特点进行跨域。

4. location.hash + iframe：a.html欲与c.html跨域相互通信，通过中间页b.html来实现。 三个页面，不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信。

5. document.domain + iframe： 该方式只能用于二级域名相同的情况下，比如 `a.test.com` 和 `b.test.com` 适用于该方式。我们只需要给页面添加 `document.domain = 'test.com'` 表示二级域名都相同就可以实现跨域，两个页面都通过js强制设置`document.domain`为基础主域，就实现了同域。

> 推荐阅读：[九种跨域方式](https://juejin.im/post/5c23993de51d457b8c1f4ee1#heading-19)

## 存储

### 前端存储有几种方式？区别是什么？🌟

**一共 5 种方式：** cookies、localstorage、sessionstorage、Web SQL（已废弃）、IndexedDB

1. **Cookies：**

   本身是用于客户端和服务端通信的，但是它有本地存储的功能，于是就被 ”借用“。是在 HTML5 标准前本地储存的主要方式。

   优点是是兼容性好，但缺点很多：数据存储量太小，只有 4kb。所有 http 请求头自动携带 cookie ，浪费流量，影响获取资源的效率。 每个 domain 限制 20 个 cookie，API 使用起来麻烦需要自行封装。

2. **localStorage：**

   HTML5 加入的以键值对 (Key-Value) 为标准的方式，专门为存储而设计。优点是操作方便。永久性储存（除非手动删除），并可用于所有同源（相同的域名、协议和端口）窗口（或标签页），大小为 5M，兼容 IE8+

   > IOS safari 隐身模式下，localStorage.getItem 会报错，建议统一使用 try-catch 封装。

3. **sessionStorage：**

   与 localStorage 基本类似，API 简单易用。区别是 sessionStorage 在当页面关闭后会被清理，而且与 cookie、localStorage 不同，他不能在所有同源窗口中共享，是会话级别的储存方式

   > 这里需要注意的是，页面及标签页仅指顶级窗口，如果一个标签页包含多个 iframe 标签且他们属于同源页面，那么他们之间是可以共享 sessionStorage 的。

4. **Web SQL：**

   2010 年被 W3C 废弃的本地数据库数据存储方案，但是主流浏览器（火狐除外）都已经有了相关的实现，web sql 类似于 SQLite，是真正意义上的关系型数据库，用 sql 进行操作，当我们用 JavaScript 时要进行转换，较为繁琐。

5. **IndexedDB：**

   是被正式纳入 HTML5 标准的数据库储存方案，它是 NoSQL 数据库，用键值对进行储存，可以进行快速读取操作，非常适合 web 场景，同时用 JavaScript 进行操作会非常方便。

速览表：

|     特性     |                   cookie                   |       localStorage       | sessionStorage |         indexDB          |
| :----------: | :----------------------------------------: | :----------------------: | :------------: | :----------------------: |
| 数据生命周期 |     一般由服务器生成，可以设置过期时间     | 除非被清理，否则一直存在 | 页面关闭就清理 | 除非被清理，否则一直存在 |
| 数据存储大小 |                     4K                     |            5M            |       5M       |           无限           |
| 与服务端通信 | 每次都会携带在 header 中，对于请求性能影响 |          不参与          |     不参与     |          不参与          |

**建议：** 从上表可以看出，`cookie` 已经不建议用于存储。如果没有大量数据存储需求的话，可以使用 `localStorage` 和 `sessionStorage` 。对于不怎么改变的数据尽量使用 `localStorage` 存储，否则可以用 `sessionStorage` 存储。

对于 `cookie`，我们还需要注意安全性。

|   属性    |                             作用                             |
| :-------: | :----------------------------------------------------------: |
|   value   | 如果用于保存用户登录态，应该将该值加密，不能使用明文的用户标识 |
| http-only |            不能通过 JS 访问 Cookie，减少 XSS 攻击            |
|  secure   |               只能在协议为 HTTPS 的请求中携带                |
| same-site |    规定浏览器不能在跨域请求中携带 Cookie，减少 CSRF 攻击     |

> 推荐阅读：[聊一聊前端存储那些事](https://segmentfault.com/a/1190000005927232)

### Service Worker

**Waiting for the update**

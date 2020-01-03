# 浏览器

## 常见内核

浏览器/RunTime	内核（渲染引擎）	JavaScript 引擎
Chrome	Blink（28~）
Webkit（Chrome 27）	V8
FireFox	Gecko	SpiderMonkey
Safari	Webkit	JavaScriptCore
Edge	EdgeHTML	Chakra(for JavaScript)
IE	Trident	Chakra(for JScript)
PhantomJS	Webkit	JavaScriptCore
Node.js	-	V8

## 组成部分

1. **用户界面** - 包括地址栏、前进/后退按钮、书签菜单等。除了浏览器主窗口显示的您请求的页面外，其他显示的各个部分都属于用户界面。
2. **浏览器引擎** - 在用户界面和渲染引擎之间传送指令。
3. **渲染引擎** - 负责显示请求的内容。如果请求的内容是 HTML，它就负责解析 HTML 和 CSS 内容，并将解析后的内容显示在屏幕上。
4. **网络** - 用于网络调用，比如 HTTP 请求。其接口与平台无关，并为所有平台提供底层实现。
5. **用户界面后端** - 用于绘制基本的窗口小部件，比如组合框和窗口。其公开了与平台无关的通用接口，而在底层使用操作系统的用户界面方法。
6. **JavaScript 解释器**。用于解析和执行 JavaScript 代码。
7. **数据存储**。这是持久层。浏览器需要在硬盘上保存各种数据，例如 Cookie。新的 HTML 规范 (HTML5) 定义了“网络数据库”，这是一个完整（但是轻便）的浏览器内数据库。

![img](../Images/browser/partOfBrowser.png)

> 值得注意的是，和大多数浏览器不同，Chrome 浏览器的每个标签页都分别对应一个渲染引擎实例。每个标签页都是一个独立的进程。

## Event Loop

**Event Loop(事件循环)是 JavaScript 的执行机制**，分为浏览器端与Node端两种。

```js
 setTimeout(() => {
  console.log(1)
  Promise.resolve(3).then(data => console.log(data))
}, 0)
      
setTimeout(() => {
  console.log(2)
}, 0)
//浏览器 1 3 2
//node 1 2 3
```

这里记录的是浏览器端的事件循环机制：

**众所周知 JS 是一门非阻塞单线程语言**，同一时间只能执行一个任务，即代码执行是同步并且阻塞的。
> 1. 首先是历史原因，在创建 JS 这门语言时，多进程多线程的架构并不流行，硬件支持并不好。
> 2. 其次是因为多线程的复杂性，多线程操作需要加锁，编码的复杂性会增高。
> 3. 最主要的是，JS 就是为了和浏览器交互而诞生的，如果在多个线程中同时操作 DOM ，在不加锁的情况下，最终会导致 DOM 渲染的结果不可预期（一个线程中新加节点，另一个线程中删除节点）。

> 尽管 HTML5中有Web-Worker，但javascript仍然是单线程的。一切 javascript 版的"多线程"都是用单线程模拟出来的。

JS 在执行的过程中会产生执行环境，这些执行环境会被顺序的加入到执行栈中。

如果遇到异步的代码，会被挂起并加入到 Task（有多种 task） 队列中。

一旦执行栈为空，Event Loop 就会从 Task 队列中拿出需要执行的代码并放入执行栈中执行，所以本质上来说 JS 中的异步还是同步行为。
```js
console.log('script start')

setTimeout(function() {
  console.log('setTimeout')
}, 0)

console.log('script end')
```
上面👆的代码虽然 setTimeout 延时为 0，其实还是异步的。所以 setTimeout 还是会在 script end 之后打印。
> 而且 HTML5 标准规定这个函数第二个参数不得小于 4 毫秒，不足会自动增加。

不同的任务源会被分配到不同的 Task 队列中，任务源可以分为 微任务（microtask） 和 宏任务（macrotask）。在 ES6 规范中，microtask 称为 jobs，macrotask 称为 task。
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
// script start => Promise => script end => promise1 => promise2 => setTimeout
```

以上代码虽然 setTimeout 写在 Promise 之前，但是因为 Promise 属于微任务而 setTimeout 属于宏任务，所以会有以上的打印。

- 微任务包括 process.nextTick ，promise ，Object.observe ，MutationObserver

- 宏任务包括 script ， setTimeout ，setInterval ，setImmediate ，I/O ，UI rendering

所以正确的一次 Event loop 顺序是这样的：

1. 执行同步代码，这属于宏任务
2. 执行栈为空，查询是否有微任务需要执行
3. 执行所有微任务
4. 必要的话渲染 UI
5. 然后开始下一轮 Event loop，执行宏任务中的异步代码

通过上述的 Event loop 顺序可知，如果宏任务中的异步代码有大量的计算并且需要操作 DOM 的话，为了更快的 界面响应，我们可以把操作 DOM 放入微任务中。

> 墙裂推荐阅读：
> - [这一次，彻底弄懂 JavaScript 执行机制](https://juejin.im/post/59e85eebf265da430d571f89)
> - [面试问到 Event Loop，这样回答最完美](https://mp.weixin.qq.com/s/8xyccve0e9uA2mnk07CAWw) 👏
> - [Eventloop不可怕，可怕的是遇上Promise](https://juejin.im/post/5c9a43175188252d876e5903) 😫

## 渲染机制

### 加载资源的形式

- 输入 url （或跳转页面） 加载 html
- 加载 html 中的静态资源 `<img>` `<script>` `<video>`  css 等

### 加载一个资源的过程

- 浏览器根据 DNS 服务器得到域名的 IP 地址
- 向这个 IP 的服务器发送 http 请求
- 服务器收到请求，处理并返回 http 请求
- 浏览器得到返回内容

### 浏览器渲染页面的过程

- 根据 HTML 结构生成 DOM Tree
- 根据 CSS 生成 CSSOM
- 将 DOM 和 CSSOM 整合形成 RenderTree
- 浏览器根据 RenderTree 开始渲染和展示
- 遇到`<script>` 时，会执行并阻塞渲染，因为 JS 有可能改变 DOM 树结构
- 而 img、 video 则是异步加载，不会阻塞渲染

### Load 和 DOMContentLoaded 区别

window.onload 

Load 事件触发代表页面中的 DOM，CSS，JS，图片已经全部加载完毕。

DOMContentLoaded 事件触发代表初始的 HTML 被完全加载和解析，不需要等待 CSS，JS，图片加载。

```js
window.addEventListener('load', function () {
    // 页面的全部资源加载完才会执行，包括图片、视频等
})

document.addEventListener('DOMContentLoaded', function () {
    // DOM 渲染完即可执行，此时图片、视频可能还没有加载完
})
```

> 推荐阅读：[你不知道的浏览器页面渲染机制](https://juejin.im/post/5ca0c0abe51d4553a942c17d)

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

[Ajax 知识体系大梳理](https://juejin.im/post/58c883ecb123db005311861a)

### 跨域
同源策略

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

我们可以通过以下几种常用方法解决跨域的问题

 实现跨域的方式

 1. JSONP

jsonp本质上是一个Hack，它利用<script>标签不受同源策略限制的特性进行跨域操作。

JSONP 的原理很简单，就是利用 `<script>` 标签没有跨域限制的漏洞。通过 `<script>` 标签指向一个需要访问的地址并提供一个回调函数来接收数据。

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

### CORS

CORS 需要浏览器和后端同时支持。IE 8 和 9 需要通过 `XDomainRequest` 来实现。

浏览器会自动进行 CORS 通信，实现 CORS 通信的关键是后端。只要后端实现了 CORS，就实现了跨域。

服务端通过设置 http header 的 `Access-Control-Allow-Origin` 属性就可以开启 CORS。 该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。

```js
// 不同的后端语言会有不同
response.setHeader("Access-Control-Allow-Origin", "http://test.com") // 不建议直接写 '*'
```

### document.domain

该方式只能用于二级域名相同的情况下，比如 `a.test.com` 和 `b.test.com` 适用于该方式。

只需要给页面添加 `document.domain = 'test.com'` 表示二级域名都相同就可以实现跨域

### postMessage

这种方式通常用于获取嵌入页面中的第三方页面数据。一个页面发送消息，另一个页面判断来源并接收消息

```js
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

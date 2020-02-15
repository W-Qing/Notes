# HTML
## SGML、HTML、XML、XHTML 有什么区别？

- SGML（Standard Globalized Markup Language ）：是用来定义标准的标记语言，简单的说，就是定义文档的元语言。DTD（文档定义类型）就是使用 SGML 语言创建的。
- HTML（超文本标记语言）: 是基于 SGML 的超链接语言，可以用于创建 Web 页面。而在 HTML4.0 之前，HTML 先有实现再有标准，所以导致 HTML 非常混乱和松散。
- XML（可扩展标记语言）: 从 SGML 衍生而来的，它主要处理互联网方面的需求，HTML 有很多限制，XML 是 SGML 的子集，可用于表示数据。主要用于存储数据和结构，可扩展。但因为  JSON 也具备相似的作用，却更加轻量高效，所以 XML 现在市场越来越小了。
- XHTML（可扩展超文本标记语言）: 基于上面两者而来，W3C 为了解决 HTML 混乱的问题而提出，并基于此诞生了 HTML5。开头加入`<!DOCTYPE html>`的做法也是因此而来，如果不加就是兼容混乱的 HTML，加了就是标准模式。

## DOCTYPE 的作用是什么？🌟

**首先来了解下上面提到的文档类型定义 DTD 是什么？**

**DTD** 是一套关于标记符的语法规则。 它是 html 文件的验证机制，属于 html 文件组成的一部分。 DTD 是一种保证 html 文档格式正确的有效方法，可以通过比较 html 文档和 DTD 文件来看文档是否符合规范，元素和标签使用是否正确。

**DOCTYPE 标签是一种标准通用标记语言的文档类型声明**

它的目的是要告诉标准通用标记语言解析器（如浏览器），应该使用什么样的文档类型定义 (DTD) 来解析这个文档。不同的渲染模式会影响到浏览器对于 CSS 代码甚至 JavaScript 脚本的解析。

举个例子：🌰

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

`<!DOCTYPE> `必须声明在 HTML 文档的第一行。

因为有了 Doctype，才引入了对应的 DTD（定义了 HTML 文档的组织结构），在页面中添加的所有标签才会是合法的。

> 但即使在没有引入 DTD 的情况下，很多浏览器也可以识别 HTML 元素，因为它们自身包含对 HTML 元素的定义，这就是为什么很多开发人员没有感受到 DTD 的存在。

## 文档解析类型有几种渲染模式？

- 标准模式 (standards mode)：浏览器使用 W3C 的标准解析渲染页面
- 怪异模式 (quirks mode) 模式： 浏览器使用自己的怪异模式解析渲染页面。（如果没有声明 DOCTYPE，默认就是这个模式）
- 近乎标准 (almost standards) 模式： 会实施一种表单元格尺寸的怪异行为（与 IE7 之前的单元格布局方式一致），除此之外符合标准定义，基本已淘汰

## HTML5 与 HTML4 的不同之处？

HTML4.01 基于 SGML，所以需要对 DTD 进行引用，才能让浏览器知道该文档所使用的文档类型。

而 HTML5 不是基于 SGML 语言的，因此不需要 DTD ，它是一种全新的标记语言，有自己的解析规则。

> 但是需要 DOCTYPE 声明来规范浏览器的行为，让浏览器按照它们应该的方式来运行。

HTML5 的语法规则与之前版本有很大的差别，可以称的上是一种全新的语言。

- 文件类型声明（<!DOCTYPE>）仅有一种：`<!DOCTYPE HTML>`。
- 新的解析顺序：不再基于 SGML 语言。
- 新的元素：section, video, progress, nav, meter, time, aside, canvas, command, datalist, details, embed, figcaption, figure, footer, header, hgroup, keygen, mark, output, rp, rt, ruby, source, summary, wbr。
- input 元素的新类型：date, email, url 等等。
- 新的属性：ping（用于 a 与 area）, charset（用于 meta）, async（用于 script）。
- 全域属性：id, tabindex, repeat。
- 新的全域属性：contenteditable, contextmenu, draggable, dropzone, hidden, spellcheck。
- 移除元素：acronym, applet, basefont, big, center, dir, font, frame, frameset, isindex, noframes, strike, tt。

## 怎么理解 HTML 结构的语义化？🌟

语义化是指使用恰当语义的 html 标签，让页面具有良好的结构与含义，比如`<nav>`标签就代表页面导航，`<article>`代表正文内容等等。

> 注意： 这些标签不提供特殊的渲染功能，仅仅使得 HTML 文档结构更具有意义。

**语义化主要有两点好处：**

1. 对开发者友好：使用语义类标签增强了代码可读性，开发者能够清晰地看出网页的结构，认识标签(markup)和属性(attribute)的用途和作用，也更方便于团队的开发和维护。
2. 对机器友好：带有语义的文字表现力丰富，更适合搜索引擎的爬虫爬取有效信息，有利于 SEO。语义类还可以支持读屏软件，根据文章可以自动生成目录。

> 这对于简书、知乎这种富文本类的应用很重要，语义化对于其网站的内容传播有很大的帮助，但是对于功能性的 web 软件重要性大打折扣，比如一个按钮、Skeleton 这种组件根本没有对应的语义，也不需要什么 SEO。

## 有哪些常用的 meta 标签？

meta 标签由 name 和 content 两个属性来定义，来描述一个 HTML 网页文档的元信息，例如作者、日期和时间、网页描述、关键词、页面刷新等。除了一些 http 标准规定了一些 name 作为大家使用的共识，开发者也可以自定义 name。

- charset，用于描述 HTML 文档的编码形式
 ```html
 <meta charset="UTF-8" >
 ```
- http-equiv，顾名思义，相当于 http 的文件头作用，比如下面的代码就可以设置 http 的缓存过期日期
 ```html
＜meta http-equiv="expires" content="Wed, 20 Jun 2019 22:33:00 GMT"＞
 ```
- viewport，移动前端最熟悉不过，Web 开发人员可以控制视口的大小和比例
 ```html
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
 ```
- apple-mobile-web-app-status-bar-style, 开发过 PWA 应用的开发者应该很熟悉，为了自定义苹果工具栏的颜色。
 ```html
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
 ```

> 拓展阅读：[Head 标签到底可以放什么？](https://github.com/xiaoyu2er/HEAD)

## src 和 href 的区别？

- src 是指向外部资源的位置，指向的内容会嵌入到文档中当前标签所在的位置，在请求 src 资源时会将其指向的资源下载并应用到文档内，如 js 脚本，img 图片和 frame 等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，知道将该资源加载、编译、执行完毕，所以一般 js 脚本会放在底部而不是头部。

- href 是指向网络资源所在位置（的超链接），用来建立和当前元素或文档之间的连接，当浏览器识别到它他指向的文件时，就会并行下载资源，不会停止对当前文档的处理。

## 知道 img 的 srcset 的作用是什么？（追问）

可以设计响应式图片，我们可以使用两个新的属性 srcset 和 sizes 来提供更多额外的资源图像和提示，帮助浏览器选择正确的一个资源。

srcset 定义了我们允许浏览器选择的图像集，以及每个图像的大小。

sizes 定义了一组媒体条件（例如屏幕宽度）并且指明当某些媒体条件为真时，什么样的图片尺寸是最佳选择。

所以，有了这些属性，浏览器会：

查看设备宽度
- 检查 sizes 列表中哪个媒体条件是第一个为真
- 查看给予该媒体查询的槽大小
- 加载 srcset 列表中引用的最接近所选的槽大小的图像
> srcset 提供了根据屏幕条件选取图片的能力
```html
<img src="clock-demo-thumb-200.png"
     alt="Clock"
     srcset="clock-demo-thumb-200.png 200w,
             clock-demo-thumb-400.png 400w"
     sizes="(min-width: 600px) 200px, 50vw">
```
## 还有哪一个标签能起到跟 srcset 相似作用？（追问）

`<picture>`元素通过包含零或多个`<source>`元素和一个`<img>`元素来为不同的显示/设备场景提供图像版本。浏览器会选择最匹配的子`<source>`元素，如果没有匹配的，就选择`<img>`元素的 src 属性中的 URL。然后，所选图像呈现在`<img>`元素占据的空间中。

> picture 同样可以通过不同设备来匹配不同的图像资源
```html
<picture>
    <source srcset="/media/examples/surfer-240-200.jpg"
            media="(min-width: 800px)">
    <img src="/media/examples/painted-hand-298-332.jpg" />
</picture>
```
## script 标签中 defer 和 async 的区别？🌟

1. 没有 `defer` 或 `async`，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 `script` 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。
2. 有 `defer`，页面加载后续文档元素的过程将和 `script.js` 的加载并行进行（异步），但是 `script.js` 的执行过程要在文档所有元素解析完成之后，`DOMContentLoaded` 事件触发之前完成。
3. 有 `async`，同样是异步加载脚本，区别是脚本加载完毕后立即执行，这导致 async 属性下的脚本是乱序的，对于 script 有先后依赖关系的情况，并不适用。 

![async-defer](../Images/html/async-defer.jpeg)

> 蓝色线代表网络读取，红色线代表执行时间，这俩都是针对脚本的；绿色线代表 HTML 解析

从实用角度来说，首先把所有脚本都丢到 `</body>` 之前是最佳实践，因为对于旧浏览器来说这是唯一的优化选择，此法可保证非脚本的其他一切元素能够以最快的速度得到加载和解析。

此图告诉我们以下几个要点：

1. *defer* 和 *async* 在网络读取（下载）这块儿是一样的，都是异步的（相较于 HTML 解析）。
2. 它俩的差别在于脚本下载完之后何时执行，显然 *defer* 是最接近我们对于应用脚本加载和执行的要求的。
3. 关于 *defer*，此图未尽之处在于它是按照加载顺序执行脚本的，这一点要善加利用。
4. *async* 则是一个乱序执行的主，反正对它来说脚本的加载和执行是紧紧挨着的，所以不管你声明的顺序如何，只要它加载完了就会立刻执行。
5. 仔细想想，*async* 对于应用脚本的用处不大，因为它完全不考虑依赖（哪怕是最低级的顺序执行），不过它对于那些可以不依赖任何脚本或不被任何脚本依赖的脚本来说却是非常合适的，最典型的例子：Google Analytics。
6. 因为浏览器的渲染机制 HTML 的解析与 JS 的执行过程必不可能同时执行，两个线程互斥。
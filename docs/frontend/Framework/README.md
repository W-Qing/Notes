# 通识

## MVVM

### 概念理解
MVVM 即 **Model-View-ViewModel** 模式。

1. **Model 层**

     对应数据层的域模型，它主要做域模型的同步。通过 Ajax/fetch 等 API 完成客户端和服务端业务 Model 的同步。在层间关系里，它主要用于抽象出 ViewModel 中视图的 Model。

2. **View 层**

    作为视图模板存在，在 MVVM 里，整个 View 是一个动态模板。除了定义界面的结构、布局外，它更是 ViewModel 层的数据和状态展示的地方。View 层不负责处理状态，View 层做的是 数据绑定的声明、 指令的声明、 事件绑定的声明。

3. **ViewModel 层**
  
    把 View 需要的层数据暴露，并对 View 层的 数据绑定声明、 指令声明、 事件绑定声明 负责，也就是处理 View 层的具体业务逻辑。ViewModel 底层会做好绑定属性的监听。当 ViewModel 中数据变化，View 层会得到更新；而当 View 中声明了数据的双向绑定（通常是表单元素），框架也会监听 View 层（表单）值的变化。一旦值变化，View 层绑定的 ViewModel 中的数据也会得到自动更新。

![MVVM](../Images/framework/mvvm.png)

在 JQuery 时期，如果需要刷新 UI 时，需要先取到对应的 DOM 再更新 UI，这样数据和业务的逻辑就和页面有强耦合。

在 MVVM 中，UI 是通过数据驱动的，数据一旦改变就会相应的刷新对应的 UI，UI 如果改变，也会改变对应的数据。这种方式就可以在业务处理中只关心数据的流转，而无需直接和页面打交道。

ViewModel 只关心数据和业务的处理，不关心 View 如何处理数据，在这种情况下，View 和 Model 都可以独立出来，任何一方改变了也不一定需要改变另一方，并且可以将一些可复用的逻辑放在一个 ViewModel 中，让多个 View 复用这个 ViewModel。

在 MVVM 中，最核心的也就是数据双向绑定，例如 Angluar 的脏数据检测，Vue 中的数据劫持。

todo: 双向绑定的实现原理

### MVVM 的优缺点？
优点：

1. 分离视图（View）和模型（Model）, 降低代码耦合，提高视图或者逻辑的重用性：比如视图（View）可以独立于 Model 变化和修改，一个 ViewModel 可以绑定不同的"View"上，当 View 变化的时候 Model 不可以不变，当 Model 变化的时候 View 也可以不变。你可以把一些视图逻辑放在一个 ViewModel 里面，让很多 view 重用这段视图逻辑
2. 提高可测试性：ViewModel 的存在可以帮助开发者更好地编写测试代码
3. 自动更新 dom: 利用双向绑定，数据更新后视图自动更新，让开发者从繁琐的手动 dom 中解放

缺点：

1. Bug 很难被调试：因为使用双向绑定的模式，当你看到界面异常了，有可能是你 View 的代码有 Bug，也可能是 Model 的代码有问题。数据绑定使得一个位置的 Bug 被快速传递到别的位置，要定位原始出问题的地方就变得不那么容易了。另外，数据绑定的声明是指令式地写在 View 的模版当中的，这些内容是没办法去打断点 debug 的
2. 一个大的模块中 model 也会很大，虽然使用方便了也很容易保证了数据的一致性，当时长期持有，不释放内存就造成了花费更多的内存
3. 对于大型的图形应用程序，视图状态较多，ViewModel 的构建和维护的成本都会比较高

## 路由原理

前端路由实现起来其实很简单，本质就是监听 URL 的变化，然后匹配路由规则，显示相应的页面，并且无须刷新。目前单页面使用的路由就只有两种实现方式

hash 模式
history 模式

todo: 两者的区别

## Virtual Dom

**什么是 Virtual DOM？**

Virtual DOM 是对 DOM 的抽象，本质上是 JavaScript 对象，这个对象就是更加轻量级的对 DOM 的描述。

![2019-07-27-17-02-23](https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/1b6e845647c60b0ce00ec91f679ec6cf.png)

**为什么需要 Virtual DOM？**

既然我们已经有了 DOM，为什么还需要对它额外加一层抽象？

首先，我们都知道前端性能优化的一个秘诀就是尽可能地减少操作 DOM，不仅仅是 DOM 相对较慢，更因为频繁变动 DOM 会造成浏览器的回流或者重绘，这些都会特别耗费性能。因此我们需要这一层抽象，在 patch 过程中尽可能地一次性将差异更新到 DOM 中，这样保证了 DOM 不会出现性能很差的情况。

> 当然在实际操作中，我们还需要给每个节点一个标识，作为判断是同一个节点的依据。所以这也是 Vue 和 React 中官方推荐列表里的节点使用唯一的 `key` 来保证性能。

其次，现代前端框架的一个基本要求就是无须手动操作 DOM，一方面是因为手动操作 DOM 无法保证程序性能，多人协作的项目中如果 review 不严格，可能会有开发者写出性能较低的代码，另一方面更重要的是省略手动 DOM 操作可以大大提高开发效率。

最后，也是 Virtual DOM 最初的目的，就是**更好的跨平台**，比如 Node.js 就没有 DOM，如果想实现 SSR（服务端渲染），那么一个方式就是借助 Virtual DOM，因为 Virtual DOM 本身是 JavaScript 对象。

**Virtual DOM 的关键要素：**

1. Virtual DOM 的创建

   ```js
   /**
    * 生成 vnode
    * @param  {String} type     类型，如 'div'
    * @param  {String} key      key vnode 的唯一 id
    * @param  {Object} data     data，包括属性，事件等等
    * @param  {Array} children  子 vnode
    * @param  {String} text     文本
    * @param  {Element} elm     对应的 dom
    * @return {Object}          vnode
    */
   function vnode(type, key, data, children, text, elm) {
     const element = {
       __type: VNODE_TYPE,
       type, key, data, children, text, elm
     }
   
     return element
   }
   ```
这个函数很简单，接受一定的参数，再根据这些参数返回一个对象，这个对象就是 DOM 的抽象。

2. Virtual DOM Tree 的创建

   上面我们已经声明了一个 vnode 函数用于单个 Virtual DOM 的创建工作，但是我们都知道 DOM 其实是一个 Tree，我们第二步要做的就是声明一个函数用于创建 DOM Tree 的抽象 -- Virtual DOM Tree。

3. Virtual DOM 的更新

   Virtual DOM 归根到底是 JavaScript 对象，我们得想办法将 Virtual DOM 与真实的 DOM 对应起来，也就是说，需要我们声明一个函数，此函数可以将 vnode 转化为真实 DOM。

4. Virtual DOM 的 Diff

   Virtual DOM 的 diff 才是整个 Virtual DOM 中最难理解也最核心的部分，diff 的目的就是比较新旧 Virtual DOM Tree 找出差异并更新。

   可见 diff 是直接影响 Virtual DOM 性能的关键部分。

   要比较 Virtual DOM Tree 的差异，理论上的时间复杂度高达 O(n^3)，这是一个奇高无比的时间复杂度，很显然选择这种低效的算法是无法满足我们对程序性能的基本要求的。

   好在我们实际开发中，很少会出现跨层级的 DOM 变更。通常情况下的 DOM 变更是同级的，因此在现代的各种 Virtual DOM 库都是只比较同级差异，在这种情况下我们的时间复杂度是 O(n)。

snabbdom.js 是社区内主流的 Virtual DOM 实现，vue 2.0 阶段与 snabbdom.js 一样都采用了「双端比较算法」。

其实，社区内有更快的算法，例如 inferno.js 就号称最快 react-like 框架（虽然 inferno.js 性能强悍的原因不仅仅是算法，但是其 diff 算法的确是目前最快的），而 vue 3.0 就会借鉴 inferno.js 的算法进行优化。

具体的优化思想可以先参考 [diff 算法原理概述](https://github.com/NervJS/nerv/issues/3), 其中一个核心的思想就是利用 LIS（最长递增子序列）的思想做动态规划，找到最小的移动次数。

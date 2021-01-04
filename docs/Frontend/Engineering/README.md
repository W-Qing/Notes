# 相关概念

https://juejin.cn/post/6844903588553048077#heading-33

## 什么是工程化

#### 定义

- 工程化即系统化、模块化、规范化的一个过程。
- 如果说计算机科学要解决的是系统的某个具体问题，或者更通俗点说是面向编码的，那么工程化要解决的是如何提高整个系统生产效率。
- 与其说软件工程是一门科学，不如说它更偏向于管理学和方法论。

#### 解决什么问题

- 工程化解决的问题是，如何提高编码、测试、维护阶段的生产效率。

## 工程化要解决什么

**1 制定各项规范，让工作有章可循**

- 目录结构、文件命名规范、编码规范、开发流程规范、接口规范等

**2 使用版本控制工具，高效安全的管理源代码**

- Git 分支管理、commit 描述规范、merge request、code review

**3 使用合适的前端技术和框架，提高生产效率，降低维护难度**

- 模块化的代码组织方式(JS模块化、CSS模块化)
- 组件化的编程思想，处理UI层(React、Vue)
- 数据层分离(reudx、mbox)

**4 提高代码的可测试性，引入单元测试，提高代码质量**

**5 通过使用各种自动化的工程工具，提升整个开发、部署效率**

## 模块化

**模块化主要解决的问题：**

解决代码分割、增强维护性、提高代码重用、作用域隔离、模块之间的依赖管理、发布的自动化打包与处理等多个方面。

### 都有哪几种方式可以实现模块化，各有什么特点？

[你可能不知道的 JavaScript 模块化野史](https://juejin.cn/post/6844904056847073293#heading-0)

**立即执行函数**

> 在早期，使用立即执行函数实现模块化是常见的手段，通过函数作用域解决了命名冲突、污染全局作用域的问题

```js
(function(globalVariable){
   globalVariable.test = function() {}
   // ... 声明各种变量、函数都不会污染全局作用域
})(globalVariable)
```

**AMD 和 CMD**

> 目前这两种实现方式已经过时，只需要了解这两者是如何使用的即可。

```js
// AMD
define(['./a', './b'], function(a, b) {
  // 加载模块完毕可以使用
  a.do()
  b.do()
})
// CMD
define(function(require, exports, module) {
  // 加载模块
  // 可以把 require 写在函数体的任意地方实现延迟加载
  var a = require('./a')
  a.doSomething()
})
```

**ES Module**

> 在有 Babel 的情况下，我们可以直接使用 ES6 的模块化 ES Module。这是原生实现的模块化方案。

```js
// 两种导出模块的 API
// file a.js
export function a() {}
export function b() {}
// file b.js
export default function() {}

// 引入模块的 API
import {a, b} from './a.js'
import XXX from './b.js'
```

**CommonJS**

> CommonJS 最早是Node 独有的规范，目前也仍然广泛使用，比如在 `Webpack` 中就能见到它。当然，浏览器中使用就需要用到 `Browserify` 解析了。另外目前在 Node 中的模块管理也已经和CommonJS 有一些区别了。

```js
// a.js
module.exports = {
    a: 1
}
// or
exports.a = 1

// b.js
var module = require('./a.js')
module.a // -> log 1
```

在上述代码中，`module.exports` 和 `exports` 很容易混淆，让我们来看看大致内部实现

```js
var module = require('./a.js')
module.a
// 这里其实就是包装了一层立即执行函数，这样就不会污染全局变量了，
// 重要的是 module 这里，module 是 Node 独有的一个变量
module.exports = {
    a: 1
}
// module 基本实现
var module = {
  id: 'xxxx', // 我总得知道怎么去找到它吧
  exports: {} // exports 就是个空对象
}
// 这个是为什么 exports 和 module.exports 用法相似的原因
var exports = module.exports
var load = function (module) {
    // 导出的东西
    var a = 1
    module.exports = a
    return module.exports
};
// 当我 require 的时候去找到独特的 id，然后将要使用的东西用立即执行函数包装下，over
```

另外虽然 `exports` 和 `module.exports` 用法相似，但是不能对 `exports` 直接赋值，不会有任何效果。

> 因为 `var exports = module.exports` 这句代码表明了 `exports` 和 `module.exports`享有相同地址，通过改变对象的属性值会对两者都起效，但是如果直接对 `exports` 赋值就会导致两者不再指向同一个内存地址，修改并不会对 `module.exports` 起效。

**对于 CommonJS 和 ES6 中的模块化的两者区别是：**

- 前者支持动态导入，也就是 `require(${path}/xx.js)`，后者目前不支持，但是已有提案。（webpack 中可用）
- 前者是同步导入，因为用于服务端，文件都在本地，同步导入即使卡住对主线程影响也不大。而后者是异步导入，因为用于浏览器，需要下载文件，如果也采用同步导入会对渲染有很大影响。
- 前者在导出时都是值拷贝，就算导出的值变了，导入的值也不会改变，所以如果想更新值，必须重新导入一次。但是后者采用实时绑定的方式，导入导出的值都指向同一个内存地址，所以导入值会跟随导出值变化。
- 后者会编译成 `require/exports` 执行。

## Babel 🌟

::: tip

[Babel](https://www.babeljs.cn/docs/) 是一个工具链，主要用于（**语法转换**）将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。另外还有通过 **Polyfill** 方式在目标环境中添加缺失的特性 (通过 [@babel/polyfill](https://www.babeljs.cn/docs/babel-polyfill) 模块)、以及**源码转换** (codemods)。

:::

**Babel 的本质就是一个 JavaScript 编译器** 它的转译过程即工作原理分为三个阶段：

![babel原理](~@frontendImg/engineering/babel.png)

1. **Parse 解析：将代码解析生成抽象语法树( 即AST )** 

   过程包括词法分析与语法分析：

   - 词法分析：将代码(字符串)分割为 token流，即语法单元成的数组
   - 语法分析：分析 token 流(上面生成的数组)并生成 AST

2. **Transform 转换：访问 AST 的节点进行变换操作生产新的 AST**

   - 对于 AST 进行变换一系列的操作，babel 接受得到 AST 并通过 babel-traverse 对其进行遍历，在此过程中对相应节点进行添加、更新及移除等操作。
   - [Taro](https://github.com/NervJS/taro/blob/master/packages/taro-transformer-wx/src/index.ts#L15)就是利用 babel 完成的小程序语法转换

3. **Generate 生成：以新的 AST 为基础生成代码**

   - 将变换后的 AST 再转换为 JS 代码, 使用到的模块是 babel-generator。

> 如何写一个babel插件，参考[官方的插件教程](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#builders)
>
> 如何一步步实现一个编译器，参考官网推荐的开源项目 [the-super-tiny-compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)


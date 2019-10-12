# Webpack

## 入门学习

- [Webpack4 基础入门与实践](https://juejin.im/post/5e46e1206fb9a07cbe345dac)
- [Webpack4 进阶与实践](https://juejin.im/post/5e5420e8e51d4526ea7ef35e)

## 构建流程

Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：

1. **初始化参数**：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
2. **开始编译**：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；
3. **确定入口**：根据配置中的 entry 找出所有的入口文件；
4. **编译模块**：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
5. **完成模块编译**：在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；
6. **输出资源**：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
7. **输出完成**：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。

在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。

> 拓展阅读 [细说 webpack 之流程篇](https://fed.taobao.org/blog/2016/09/10/webpack-flow/)

## Loader 与 Plugin

::: tip

**Loader **直译为"加载器"。Webpack 将一切文件视为模块，但是 webpack 原生是只能解析 js 文件，如果想将其他文件也打包的话，就会用到`loader`。 所以 Loader 的作用是让 webpack 拥有了加载和解析_非 JavaScript 文件_的能力。

:::

**常用 Loader：**

- file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件
- url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去
- source-map-loader：加载额外的 Source Map 文件，以方便断点调试
- image-loader：加载并且压缩图片文件
- babel-loader：把 ES6 转换成 ES5
- css-loader：加载 CSS，支持模块化、压缩、文件导入等特性
- style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。
- eslint-loader：通过 ESLint 检查 JavaScript 代码

::: tip

**Plugin **直译为"插件"。Plugin 可以扩展 webpack 的功能，让 webpack 具有更多的灵活性。 在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

:::

**常用 Plugin：**

- define-plugin：定义环境变量
- html-webpack-plugin：简化 html 文件创建
- uglifyjs-webpack-plugin：通过`UglifyES`压缩`ES6`代码
- webpack-parallel-uglify-plugin: 多核压缩，提高压缩速度
- webpack-bundle-analyzer: 可视化 webpack 输出文件的体积
- mini-css-extract-plugin: CSS 提取到单独的文件中，支持按需加载

**两者除了概念不同具体用法也不同：**

- **Loader **在`module.rules`中配置，也就是说他作为模块的解析规则而存在。 类型为数组，每一项都是一个`Object`，里面描述了对于什么类型的文件（`test`），使用什么加载 (`loader`) 和使用的参数（`options`）
- **Plugin **在`plugins`中单独配置。 类型为数组，每一项是一个`plugin`的实例，参数都通过构造函数传入。


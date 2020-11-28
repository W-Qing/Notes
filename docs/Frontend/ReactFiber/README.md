# React Fiber

[React 技术揭秘](https://react.iamkasong.com/) 🌟

> - [函数式组件与类组件有何不同](https://overreacted.io/zh-hans/how-are-function-components-different-from-classes/)
> - [useEffect 完整指南](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)

## 如何理解 Fiber 及 Time Slice？

**React Fiber 是一种基于浏览器的单线程调度算法：**

React 16 之前 ，`reconcilation` 算法实际上是递归，想要中断递归是很困难的。如果你拥有一个很复杂的复合组件，然后改动了最上层组件的 `state`，那么调用栈可能会很长。调用栈过长，再加上中间进行了复杂的操作，就可能导致长时间阻塞主线程，带来不好的用户体验。

在 React V16 版本中引入了 Fiber 机制使用循环来代替之前的递归算法来解决这个问题。这个机制在一定程度上的影响了部分生命周期的调用，并且也引入了新的 2 个 API 来解决问题。

**`Fiber`：一种将 `recocilation` （递归 diff），拆分成无数个小任务的算法；它随时能够停止，恢复。停止恢复的时机取决于当前的一帧（16ms）内，还有没有足够的时间允许计算。**

**Time Slice 时间分片：** 

![Fiber 分段示意图](../Images/react/fiber.png)

Fiber 本质上是一个虚拟的堆栈帧，新的调度器会按照优先级自由调度这些帧，从而将之前的同步渲染改成了异步渲染，在不影响体验的情况下去分段计算更新。时间分片正是基于可随时打断、重启的 Fiber 架构，可打断当前任务，优先处理紧急且重要的任务，保证页面的流畅运行。

> 对于如何区别优先级，React 有自己的一套逻辑。
>
> 1. 对于动画这种实时性很高的东西，也就是 16 ms 必须渲染一次保证不卡顿的情况下，React 会每 16 ms（以内） 暂停一下更新，返回来继续渲染动画
> 2. 根据事件类型来。打个比方，点击事件、用户输入事件，相比滚动事件的优先级要高 。目前 React 内部事件机制有简单区分优先级
> 3. 人工提示 React。参考实验版本里面的 useTransition，useDeferredValue  
> 4. 隐藏内容的更新优先级最低。这通常也需要提示 React 指定组件是隐藏的，目前没有公开 API

> 推荐阅读：[这可能是最通俗的 React Fiber（时间分片） 打开方式](https://juejin.im/post/5dadc6045188255a270a0f85) 

## React Hooks

- [React Hooks笔记](https://www.notion.so/React-Hooks-303a7c520bdd41d2921da51d83c85572)

## useState 的细粒度

在设计使用 state 之前，我们需要考虑状态拆分的「粒度」问题。如果粒度过细，代码就会变得比较冗余。如果粒度过粗，代码的可复用性就会降低。

那么，到底哪些 state 应该合并，哪些 state 应该拆分呢？🤔

1. **将完全不相关的 state 拆分为多组 state。比如 `size` 和 `position`。**
2. **如果某些 state 是相互关联的，或者需要一起发生改变，就可以把它们合并为一组 state。比如 `left` 和 `top`。**

```javascript
function Box() {
  const [position, setPosition] = usePosition();
  const [size, setSize] = useState({width: 100, height: 100});
 	// ...
}

function usePosition() {
  const [position, setPosition] = useState({left: 0, top: 0});

  useEffect(() => {
  // ...
  }, []);

  return [position, setPosition];
}
```

-  如果使用单个 state 对象变量，每次更新 state 时需要合并之前的 state。 因为 `useState` 返回的 `setState` 会替换原来的值。

## deps 依赖过多，导致 Hooks 难以维护？

1. 依赖数组依赖的值最好不要超过 3 个，否则会导致代码会难以维护。
2. 如果发现依赖数组依赖的值过多，我们应该采取一些方法来减少它。
   - 去掉不必要的依赖。
   - 将 Hook 拆分为更小的单元，每个 Hook 依赖于各自的依赖数组。
   - 通过合并相关的 state，将多个依赖值聚合为一个。
   - 通过 `setState` 回调函数获取最新的 state，以减少外部依赖。
   - 通过 `ref` 来读取可变变量的值，不过需要注意控制修改它的途径。

[deps 依赖过多](https://juejin.cn/post/6844903958968795149#heading-0)

## useMemo

应该使用 `useMemo` 的场景：

- 保持引用相等
- 成本很高的计算

无需使用 `useMemo` 的场景：

- 如果返回的值是原始值： `string`, `boolean`, `null`, `undefined`, `number`, `symbol`（不包括动态声明的 Symbol），一般不需要使用 `useMemo`。
- 仅在组件内部用到的 object、array、函数等（没有作为 props 传递给子组件），且没有用到其他 Hook 的依赖数组中，一般不需要使用 `useMemo`。
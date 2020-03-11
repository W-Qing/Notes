# Git

## 相关术语

```bash
repository  仓库
branch      分支
summary     摘要
track       跟踪
modify      修改
stage       暂存
commit      提交
push        推送
pull        拉取
clone       克隆
amend       修改
merge       合并
conflict    冲突
origin      源
upstream    上游
downstream  下游
verbose     详情
reflog      参照日志
```

## 基本操作

- 初始化新仓库

```bash
git init
```

- 查看文件状态

```bash
git status 
```

- 文件跟踪

```bash
git add xxx         //跟踪某个文件
git add .           //批量跟踪
```

- 文件提交本地仓库

```bash
git commit              //提交文件到本地仓库
git commit -m 'xxx'     //xxx是你本次提交的信息说明
git commit -am 'xxx'    //将所有已跟踪的文件暂存起来一并提交
```

- 推送远程仓库

```bash
git push origin xxx

// 可以通过 -u 指定一个默认的源 
git push -u origin xxx
// 这样以后 push 就不用加 origin
git push
```

- 拉取远程仓库

```bash
git pull origin xxx
// 可以简写 git pull， 如果提示no tracking information， 我们可以通过下面方法建立追踪，后续就可以直接 git pull了
git branch --set-upstream branch-name origin/branch-name
```

- 差异比较

```bash
git diff
```

- 查看提交历史

```bash
git log            //按提交时间列出所有的更新，最近的更新排在最上面
git log --oneline  //查看简要的历史记录
git reflog         //用来记录每一次命令， 常用来辅助版本切换
```


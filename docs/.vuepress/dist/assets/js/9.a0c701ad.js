(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{219:function(t,a,s){t.exports=s.p+"assets/img/gitFlow.0961107c.png"},220:function(t,a,s){t.exports=s.p+"assets/img/git-flow.128c9faf.png"},243:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),e("p",[e("img",{attrs:{src:s(219),alt:"git经典流程"}})]),t._v(" "),e("h2",{attrs:{id:"相关术语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关术语"}},[t._v("#")]),t._v(" 相关术语")]),t._v(" "),e("p",[e("code",[t._v("Repository 本地仓库")]),t._v("、"),e("code",[t._v("Remote 远程仓库")]),t._v("、"),e("code",[t._v("branch 分支")]),t._v("、"),e("code",[t._v("summary 摘要")]),t._v("、"),e("code",[t._v("track 跟踪")]),t._v("、"),e("code",[t._v("modify 修改")]),t._v("、"),e("code",[t._v("Workspace 工作区")]),t._v("、"),e("code",[t._v("Index/Stage 暂存区")]),t._v("、"),e("code",[t._v("commit 提交")]),t._v("、"),e("code",[t._v("push 推送")]),t._v("、"),e("code",[t._v("pull 拉取")]),t._v("、"),e("code",[t._v("clone 克隆")]),t._v("、"),e("code",[t._v("amend 修改")]),t._v("、"),e("code",[t._v("merge 合并")]),t._v("、"),e("code",[t._v("conflict 冲突")]),t._v("、"),e("code",[t._v("origin 源")]),t._v("、"),e("code",[t._v("upstream 上游")]),t._v("、"),e("code",[t._v("downstream 下游")]),t._v("、"),e("code",[t._v("verbose 详情")]),t._v("、"),e("code",[t._v("reflog 参照日志")])]),t._v(" "),e("p",[t._v("👉 "),e("a",{attrs:{href:"https://juejin.im/post/5e9e5fa2f265da480003bc31",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置 ssh 及关联账号"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"基本操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[t._v("#")]),t._v(" 基本操作")]),t._v(" "),e("ul",[e("li",[t._v("初始化新仓库")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n")])])]),e("ul",[e("li",[t._v("查看文件状态")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status \n")])])]),e("ul",[e("li",[t._v("文件跟踪")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" xxx         //跟踪某个文件\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("           //批量跟踪\n")])])]),e("ul",[e("li",[t._v("文件提交本地仓库")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit              //提交文件到本地仓库\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),t._v("     //xxx是你本次提交的信息说明\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -am "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),t._v("    //将所有已跟踪的文件暂存起来一并提交\n")])])]),e("ul",[e("li",[t._v("推送远程仓库")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin xxx\n\n// 可以通过 -u 指定一个默认的源 \n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin xxx\n// 这样以后 push 就不用加 origin\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])])]),e("ul",[e("li",[t._v("拉取远程仓库")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin xxx\n// 可以简写 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull， 如果提示no tracking information， 我们可以通过下面方法建立追踪，后续就可以直接 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull了\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --set-upstream branch-name origin/branch-name\n")])])]),e("ul",[e("li",[t._v("差异比较")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v("\n")])])]),e("ul",[e("li",[t._v("查看提交历史")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log            //按提交时间列出所有的更新，最近的更新排在最上面\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --oneline  //查看简要的历史记录\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog         //用来记录每一次命令， 常用来辅助版本切换\n")])])]),e("h2",{attrs:{id:"分支管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[t._v("#")]),t._v(" 分支管理")]),t._v(" "),e("p",[e("strong",[t._v("新建与删除分支：")])]),t._v(" "),e("p",[t._v("我们一般开发时都会从"),e("code",[t._v("master")]),t._v("分支分离出一个"),e("code",[t._v("dev")]),t._v("或者其他用来开发的分支， 这样即使开发出现问题也不会影响主分支。")]),t._v(" "),e("p",[t._v("使用"),e("code",[t._v("git branch xxx")]),t._v("创建一个新的分支。")]),t._v(" "),e("p",[t._v("使用"),e("code",[t._v("git checkout xxx")]),t._v("切换到新的分支。")]),t._v(" "),e("p",[e("code",[t._v("branch, checkout")]),t._v("常用命令:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b xxx         // 可以快速新建并切换到新的分支\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d xxx           // 当分支合并到主分支， 这个分支就可以通过-d删除了\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D xxx           // 删除那些没有被合并的分支\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a               // 查看所有分支\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -vv              // 查看当前的本地分支与远程分支的关联关系\n")])])]),e("p",[e("strong",[t._v("分支合并：")])]),t._v(" "),e("p",[e("strong",[t._v("注意： 分支合并时， 你一定要保证你在要合并到这个分支的目标分支上")])]),t._v(" "),e("p",[t._v("使用"),e("code",[t._v("git merge xxx")]),t._v("即可将xxx分支合并到你当前所在的分支。")]),t._v(" "),e("p",[t._v("如果在分支合并时，不同的分支修改了同一个文件的同一部分， 此时 git 是无法判断该使用哪个分支的代码的， 这样就会产生冲突，虽然 git 进行了合并， 但并没有提交，需要我们解决冲突后再重新提交。")]),t._v(" "),e("p",[t._v("我们可以通过"),e("code",[t._v("git status")]),t._v("查看是哪些文件发生了冲突，然后逐一解决， 把冲突的代码按正确的代码修复后， 需要重新"),e("code",[t._v("add")]),t._v(", "),e("code",[t._v("commit")]),t._v(", "),e("code",[t._v("push")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"远程仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[t._v("#")]),t._v(" 远程仓库")]),t._v(" "),e("p",[e("strong",[t._v("克隆远程仓库：")])]),t._v(" "),e("p",[t._v("通过"),e("code",[t._v("git clone url")]),t._v("来克隆远程仓库")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("// 默认会在拉取的路径下新建一个 blog-mason 的文件夹\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/MasonEast/blog-mason.git   \n\n// 如果不想要文件夹 blog-mason，可以在url后面，空格加上新名字\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/MasonEast/blog-mason.git newName\n\n// 如果就想要在当前路径下放项目文件， 不要那个外面的文件夹，直接在后面加点 "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/MasonEast/blog-mason.git "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),e("p",[e("strong",[t._v("查看远程仓库：")])]),t._v(" "),e("p",[t._v("我们克隆的仓库通过"),e("code",[t._v("git remote")]),t._v("会看到一个叫 origin 的远程库， 这是 git 默认标识克隆的原始仓库。")]),t._v(" "),e("p",[t._v("通过"),e("code",[t._v("git remote -v")]),t._v("或"),e("code",[t._v("git remote --verbose")]),t._v("我们可以查看到更加详细的信息，即对应的项目地址， 正常会有两个， 但如果你没有 push 权限的话就只能看到一个fetch的地址。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n\norigin  git@github.com:W-Qing/Notes.git "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\norigin  git@github.com:W-Qing/Notes.git "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[e("strong",[t._v("删除远程分支：")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin :xxx\n//也可以\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --delete xxx\n")])])]),e("p",[e("strong",[t._v("删除远程仓库：")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" xxx\n")])])]),e("p",[e("strong",[t._v("重命名远程仓库：")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rename")]),t._v(" oldName newName\n")])])]),e("h2",{attrs:{id:"关于误操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于误操作"}},[t._v("#")]),t._v(" 关于误操作")]),t._v(" "),e("p",[t._v("git 主要用于版本控制， 协同开发， 误操作可以撤销， 但是"),e("strong",[t._v("有的撤销是不可逆的， 我们一定要慎重对待， 不然可能导致部分代码丢失。")])]),t._v(" "),e("p",[e("strong",[t._v("移除暂存区的文件：")])]),t._v(" "),e("p",[t._v("场景： 有时候我们习惯性的使用"),e("code",[t._v("git add .")]),t._v("把所有修改的文件都提交到暂存区， 但有些文件是我们不应该提交的， 这时要从暂存区中移除文件。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD xxx      // xxx文件名\n")])])]),e("p",[e("strong",[t._v("移除本地仓库的文件：")])]),t._v(" "),e("p",[t._v("场景： 如果我们不但"),e("code",[t._v("git add XXX")]),t._v("将文件添加到暂存区了，而且还"),e("code",[t._v("git commit")]),t._v("将其提交到本地仓库后， 才想起来它是多余的想取出来。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" xxx  \n")])])]),e("p",[e("strong",[t._v("修改最后的一次提交：")])]),t._v(" "),e("p",[t._v("场景： 某次提交完后， 发现少提交了文件或者是最近一次提交的代码有问题怎么办？比起简答粗暴的再提交一次，更优雅的方式是：不进行再一次提交，而是修改这次提交。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" xxx             // 添加少提交的或修改的文件到暂存区\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend      // 往最后一次提交中追加少提交的文件，并修正提交信息\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend --no-edit\n// 快捷方式， 使用 --no-edit 参数，它表示提交信息不会更改，在 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" 上仅为一次提交。\n")])])]),e("blockquote",[e("p",[t._v("【amend】修正，会对最新一条 commit 进行修正，会把当前 commit 里的内容和暂存区（stageing area）里的内容合并起来后创建一个新的 commit，用这个新的 commit 把当前 commit 替换掉。")]),t._v(" "),e("p",[t._v("输入上面的命令后，Git 会进入提交信息编辑界面，然后你可以删除之前的 changeId，并且修改或者保留之前的提交信息，:wq 保存按下回车后，你的 commit 就被更新了。")])]),t._v(" "),e("p",[t._v("tips: 刚刚提交的代码文件没问题，只是提交信息写的有问题，该怎么修改？")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"新的提交信息"')]),t._v("\n")])])]),e("p",[e("strong",[t._v("关于暂存的问题")])]),t._v(" "),e("p",[t._v("假如正在开发手中的某个需求，这是突然又来了个紧急 bug 需要修复，这时候需要先 stash 已经写的部分代码，使自己返回到上一个 commit 版本，改完 bug 之后再从缓存栈中推出之前未写完的代码，继续工作。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash // 添加缓存栈\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash list // 查看缓存栈\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop // 推出缓存栈\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply stash@"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" // 取出特定缓存内容\n")])])]),e("p",[t._v("没有被 track 的文件（即从来没有被 add 过的文件不会被 stash 起来，因为 Git 会忽略它们。如果想把这些文件也一起 stash，可以加上 "),e("code",[t._v("-u")]),t._v(" 参数。它是 "),e("code",[t._v("--include-untracked")]),t._v(" 的简写。就像这样："),e("code",[t._v("git stash -u")])]),t._v(" "),e("p",[e("strong",[t._v("将一个分支的某次提交合并到另一个分支")])]),t._v(" "),e("p",[t._v("有时候代码写完，commit 之后打算 push 的时候，才发现自己在 master 分支上，而我们要是想把这次提交的记录合并到 dev 分支，这就需要用到"),e("code",[t._v("git cherry-pick")]),t._v("命令。")]),t._v(" "),e("ol",[e("li",[t._v("首先，在 master 分支上敲 git log 命令，查找需要合并的 commit 记录，比如commitID：3fab5dexff。")]),t._v(" "),e("li",[t._v("然后，切换到 dev 分支，使用"),e("code",[t._v("git cherry-pick 3fab5dexff")]),t._v("  命令，就把该条 commit 记录合并到了 dev 分支，当然这只是在本地合并到了 dev 分支。")]),t._v(" "),e("li",[t._v("最后，git push 提交到 dev 远程。至此，就把不小心在 master 分支上开发的这条 commit 所涉及的更改合并到了远程 dev 分支。")])]),t._v(" "),e("h2",{attrs:{id:"提交规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交规范"}},[t._v("#")]),t._v(" 提交规范")]),t._v(" "),e("p",[t._v("这个就是见仁见智啦，常用的几种提交格式类型：")]),t._v(" "),e("ul",[e("li",[t._v("feat：新功能（feature）")]),t._v(" "),e("li",[t._v("fix：修补 bug")]),t._v(" "),e("li",[t._v("docs：文档（documentation）")]),t._v(" "),e("li",[t._v("refactor: 重构（既不是新增功能，也不是修改bug而是优化现有项目的代码变动）")]),t._v(" "),e("li",[t._v("test：测试")]),t._v(" "),e("li",[t._v("chore：其他修改，比如构建过程或辅助工具的变动")])]),t._v(" "),e("h2",{attrs:{id:"开发实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发实践"}},[t._v("#")]),t._v(" 开发实践")]),t._v(" "),e("p",[e("img",{attrs:{src:s(220),alt:"git-flow"}})]),t._v(" "),e("h3",{attrs:{id:"branchs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#branchs"}},[t._v("#")]),t._v(" Branchs")]),t._v(" "),e("p",[e("strong",[t._v("master branch:")]),t._v(" from begining")]),t._v(" "),e("p",[e("strong",[t._v("develop branch:")]),t._v(" from begining")]),t._v(" "),e("p",[e("strong",[t._v("release(test) branch")]),t._v(": branch from develop, merge back to develop and master, and make tag(version) on master")]),t._v(" "),e("p",[t._v("Next is optional:")]),t._v(" "),e("p",[e("strong",[t._v("feature branch:")]),t._v("  branch from develop, merge back to develop")]),t._v(" "),e("p",[e("strong",[t._v("hotfixes branch:")]),t._v(" branch from master, merge back to develop and master, and make tag(version) on master")]),t._v(" "),e("h3",{attrs:{id:"flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flow"}},[t._v("#")]),t._v(" Flow")]),t._v(" "),e("ol",[e("li",[t._v("step1. "),e("strong",[t._v("owner")]),t._v(" init repo, create master branch, and dev branch from master")]),t._v(" "),e("li",[t._v("step2. "),e("strong",[t._v("developer")]),t._v(" git clone the repo, switch to dev branch to develop")])]),t._v(" "),e("ul",[e("li",[t._v("option1: start multiple features at the same time, developer can start feature1 branch, feature2 branch in the local branch, merge back to dev branch after development, push to origin/dev, and finally you can choose to delete or keep these feature branches")]),t._v(" "),e("li",[t._v("option2: develop directly on dev branch, commit, and finally push to origin/dev")]),t._v(" "),e("li",[t._v("option3: maintain a branch development of your own, merge to dev and then push before uploading")])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("step3. "),e("strong",[t._v("owner")]),t._v(" branch release(test) branch when iteration ends. maintain the version.")]),t._v(" "),e("li",[t._v("step4. "),e("strong",[t._v("developer")]),t._v(" continue develop on dev branch, fix bugs on release(test) branch.")]),t._v(" "),e("li",[t._v("step5. when the release(test) branch is ready(no severe bug), "),e("strong",[t._v("owner")]),t._v(" merge to master branch, tag the version, owner merge to dev branch.")]),t._v(" "),e("li",[t._v("step6. when there are any bugs after release to user. developer make hotfixes branch，after test, merge to dev branch and master branch.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);
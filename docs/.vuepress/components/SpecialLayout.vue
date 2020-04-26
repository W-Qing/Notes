<template>
  <div class="video">
    <div class="video-frame">
      <img src="../../About/overlay-hero.png" class='Decorative' alt="Decorative image frame">
    </div>
    <div class="video-media">
      <video class="the-video" playsinline="" autoplay="" loop="" muted="" data-autoplay="" poster="../../About/ocean.png" x5-video-player-type="h5">
        <source src="../../About/ocean.webm" type="video/webm">
        <p>Your user agent does not support the HTML5 Video element.</p>
      </video>
      <div class="video-overlay">
        <p>一个二流学校三流专业的四流毕业生 👨🏻‍🎓</p>
        <p>坐标上海，<del>前端开发</del>复制粘贴工程师 👨🏻‍💻</p>
        <p>社交很少，网上冲浪大多时候言辞温和 🙂</p>
        <p>习惯点亮新技术，目标实现作品式的成就 🙊</p>
        <!-- <p>热爱自由，讨厌被约束 💥</p> -->
        <!-- <p>偶尔玩游戏，被坑容易暴躁 🎮</p> -->
        <p>常住B站，宅而不肥，日常追剧追番看电影 🍻</p>
        <p>喜欢读书与饮酒，努力保持社会思考与无聊输出 🗿</p>
        <!-- <p>没有 Typora 就不会写博客，没有 VSCode 就不会敲代码 💻</p> -->
        <p>目前最大的愿望是<del>「找个温柔可爱的女朋友」</del>脱贫 🤦🏻‍♂️</p>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {}
  }
}
</script>

<style scoped>
.video {
  position: relative;
  height: auto;
}
.video-frame {
  position: absolute;
    z-index: 1;
    right: 0;
    bottom: 0;
    left: 0;
    min-width: 100%;
}
.Decorative {
  display: block;
  width: 100%;
}
.video-media {
  position: relative;
  z-index: 0;
  height: 100vh;
  overflow: hidden;
}
.the-video {
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
}
.video-overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(178,191,204,0.55);
}
</style>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.moveFromFront {
  animation-name: moveFromFront;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
@keyframes moveFromFront {
  from { opacity: 0; transform: scale(1.3); }
  to { opacity: 1; transform: scale(1); visibility: visible; }
}

.moveFromBackTwo {
  animation-name: moveFromFront;
  animation-duration: 2s;
  animation-delay: 1.6s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
@keyframes moveFromBack {
  from { opacity: 0; transform: scale(0.5); }
  to { opacity: 1; transform: scale(1); visibility: visible; }
}

.moveFromTop {
  animation-name: moveFromTop;
  animation-duration: 2s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromTopThree {
  animation-name: moveFromTop;
  animation-duration: 2s;
  animation-delay: 3.2s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
@keyframes moveFromTop {
  0% { transform: translateY(-30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; visibility: visible; }
}

.moveFromRight {
  animation-name: moveFromRight;
  animation-duration: 2s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromRightTwo {
  animation-name: moveFromRight;
  animation-duration: 2s;
  animation-delay: 1.6s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
@keyframes moveFromRight {
  from { transform: translateX(30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; visibility: visible; }
}

.moveFromLeft {
  animation-name: moveFromLeft;
  animation-duration: 2s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromLeftTwo {
  animation-name: moveFromLeft;
  animation-duration: 2s;
  animation-delay: 1.6s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
@keyframes moveFromLeft {
  from { transform: translateX(-30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; visibility: visible; }
}

.moveFromBottom {
  animation-name: moveFromBottom;
  animation-duration: 2s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
.moveFromBottomThree {
  animation-name: moveFromBottom;
  animation-duration: 2s;
  animation-delay: 3.2s;
  animation-fill-mode: forwards;
  visibility: hidden;
}
@keyframes moveFromBottom {
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; visibility: visible; }
}
</style>

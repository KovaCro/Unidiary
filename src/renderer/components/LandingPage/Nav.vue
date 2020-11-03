<template>
  <div class="nav darkBg">
    <img src="@/assets/icons/power-off-solid.svg" @click="onPowerClick">
  </div>
</template>

<script>
  import { remote } from 'electron'

  export default {
    methods: {
      onPowerClick (e) {
        remote.getCurrentWindow().close()
      }
    }
  }
</script>

<style scoped>
  .nav {
    display: flex;
    position: fixed;
    z-index: 100;
    top: 0;
    width: 100vw;
    padding-left: 1vw;
    padding-right: 1vw;
    padding-top: .5vh;
    padding-bottom: .5vh;
    justify-content: flex-end;
  }

  img {
    height: 2.5vh;
    opacity: .7;
    cursor: pointer;
  }

  img:hover {
    opacity: 1;
  }
</style>

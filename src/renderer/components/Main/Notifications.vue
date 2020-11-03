<template>
  <div class="wrapper">
    <transition-group name="fade">
      <div v-for="(notification, index) in $store.state.notifications.list" :key="index" class="notification">
        {{ notification }}
      </div>
    </transition-group>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .wrapper {
    position: absolute;
    max-width: 250px;
    z-index: 1000;
    left: 10px;
    bottom: 10px;
  }

  .notification {
    background-color: rgba(0, 0, 0, 0.7);
    color: #BDBABC;
    font-size: 11px;
    margin-bottom: 3px;
  }

  .fade-move {
    transition: transform 0.3s;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
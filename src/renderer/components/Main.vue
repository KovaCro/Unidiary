<template>
  <div class="wrapper textFont">
    <Nav></Nav>
    <Timeline></Timeline>
    <Notifications></Notifications>
  </div>
</template>

<script>
  import Nav from './Main/Nav'
  import Timeline from './Main/Timeline'
  import Notifications from './Main/Notifications'

  export default {
    components: { Nav, Timeline, Notifications }
  }
</script>

<style scoped>
</style>
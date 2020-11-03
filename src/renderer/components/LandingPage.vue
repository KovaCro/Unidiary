<template>
  <div class="wrapper textFont">
    <Nav></Nav>
    <div class="container appBg">
      <PathPopup></PathPopup>
    </div>
  </div>
</template>

<script>
  import Nav from './LandingPage/Nav'
  import PathPopup from './LandingPage/PathPopup'

  export default {
    components: { PathPopup, Nav }
  }
</script>

<style scoped>
  .container {
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
</style>
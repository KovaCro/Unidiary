<template>
  <div class="wrapper textFont">
    <Nav></Nav>
    <div class="container">
        <div class="left-section appBg">
          <InfoInput></InfoInput>
          <ControlButtons></ControlButtons>
        </div>
        <div class="right-section secondaryBg">
          <CodeSection></CodeSection>
        </div>
    </div>
  </div>
</template>

<script>
  import Nav from './Add/Nav'
  import InfoInput from './Add/InfoInput'
  import ControlButtons from './Add/ControlButtons'
  import CodeSection from './Add/CodeSection'

  export default {
    components: { Nav, InfoInput, ControlButtons, CodeSection }
  }
</script>

<style scoped>
  .container {
    display: flex;
    height: 100vh;
    width: 100vw;
  }
  .left-section {
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    width: 25vw;
  }
  .right-section {
    height: 100vh;
    width: 75vw;
  }
</style>
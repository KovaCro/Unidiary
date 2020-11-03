<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'unidiary'
  }
</script>

<style>
  @import '~@/classes.css';

  @font-face {
    font-family: "B612";
    src: url("~@/assets/fonts/B612-Regular.ttf")
  }
  @font-face {
    font-family: "AlfaSlabOne";
    src: url("~@/assets/fonts/AlfaSlabOne-Regular.ttf")
  }
  @font-face {
    font-family: "SourceCodePro";
    src: url("~@/assets/fonts/SourceCodePro-Regular.ttf")
  }

  body {
    overflow-x: hidden;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar {
    width: 8px;
    background-color: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: rgba(0, 0, 0, 0.2); 
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

.prism-editor-wrapper .prism-editor__editor, .prism-editor-wrapper .prism-editor__textarea {
  white-space: pre !important;
  overflow-wrap: break-word !important;
}
</style>

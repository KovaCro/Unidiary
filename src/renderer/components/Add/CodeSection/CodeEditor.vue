<template>
  <prism-editor class="my-editor" v-model="code" :highlight="highlighter" line-numbers @input="onCodeChange"></prism-editor>
</template>
 
<script>
  import { highlight, languages } from 'prismjs/components/prism-core'

  export default {
    data () {
      return {
        code: '// Empty page'
      }
    },
    methods: {
      highlighter (code) {
        return highlight(code, languages[this.$store.state.add.language.toLowerCase()])
      },
      onCodeChange (e) {
        this.$store.dispatch({type: 'setCode', code: this.code})
      }
    }
  }
</script> 
 
<style>
  .my-editor {
    background: rgb(42, 31, 45);
    color: #ccc; 
    font-family: "SourceCodePro";
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
  }

  .prism-editor__textarea:focus {
    outline: none;
  }
</style> 
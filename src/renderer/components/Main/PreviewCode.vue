<template>
  <div class="previewWrapper" @click="onClick">
    <div class="desc">{{ el.desc }}</div>
    <div class="code">
      <prism-editor class="my-editor" readonly :highlight="highlighter"></prism-editor>
    </div>
  </div>
</template>

<script>
  import { highlight, languages } from 'prismjs/components/prism-core'

  export default {
    props: ['el'],
    methods: {
      highlighter () {
        return highlight(this.el.code.join('\n'), languages[this.el.language.toLowerCase()])
      },
      onEsc (e) {
        if (e.code === 'Escape') {
          this.$emit('preview-close')
        }
      },
      onClick (e) {
        if (e.target.classList[0] !== 'prism-editor__textarea') {
          this.$emit('preview-close')
        }
      }
    },
    mounted () {
      document.body.style = 'overflow: hidden'
      document.body.addEventListener('keydown', this.onEsc)
    },
    destroyed () {
      document.body.style = ''
      document.body.removeEventListener('keydown', this.onEsc)
    }
  }
</script>

<style scoped>
  .previewWrapper {
    z-index: 1000001;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 5vh 5vw;
    background-color: rgba(0, 0, 0, 0.7)
  }

  .desc {
    color: #C4BFC2;
    margin-bottom: 5vh;
    width: 100%;
    height: 5vh;
    font-size: 14px;
  }

  .code {
    width: 100%;
    height: 80vh;
  }

  .my-editor {
    border-radius: 10px;
  }
</style>
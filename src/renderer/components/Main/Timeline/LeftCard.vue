<template>
  <div class="card">
    <div class="code">
      <prism-editor class="my-editor" readonly :highlight="highlighter"></prism-editor>
    </div>
    <div class="text">
      <div class="header titlesFont">
        <span style="color: #C4BFC2">{{ lang }}</span>
        <div class="break"></div>
        <span style="color: #FFF">{{ el.category }}</span>
        <div class="break"></div>
        <span style="color: #59C9A5">{{ el.day + '.' + el.month + '.' + el.year + '.'}}</span>
      </div>
      <h2>{{ el.title }}</h2>
      <p :class="el.io ? 'clampTwo' : 'clampFour'">
        {{ el.desc }}
      </p>
      <div v-if="this.el.io" class="io">
        <div class="input">
          <h3>Input:</h3>
          <div>{{ el.input }}</div>
        </div>
        <div class="output">
          <h3>Output:</h3>
          <div>{{ el.output }}</div>
        </div>
      </div>
      <a @click="$emit('preview-clicked')">Preview code <img src="~@/assets/icons/arrow-right-solid.svg"></a>
    </div>
    <div class="line"></div>
    <div class="circle">
      <svg viewBox="0 0 20 20" fill="#59C9A5">
        <circle cx="10" cy="10" r="10"/>
      </svg>
    </div>
  </div>
</template>

<script>
  import { highlight, languages } from 'prismjs/components/prism-core'

  export default {
    props: ['el'],
    computed: {
      lang () {
        switch (this.el.language.toLowerCase()) {
          case 'go':
            return 'go'
          case 'javascript':
            return 'js'
          case 'python':
            return 'py'
          case 'cpp':
            return 'c++'
          case 'haskell':
            return 'hs'
        }
      },
      code () {
        let code = [...this.el.code]
        code.splice(0, this.el.showLine - 1)
        code.splice(14)
        return code.join('\n')
      }
    },
    methods: {
      highlighter () {
        return highlight(this.code, languages[this.el.language.toLowerCase()])
      }
    }
  }
</script>

<style scoped>
  .card {
    display: flex;
    justify-content: end;
    margin-top: 75px;
    width: 600px;
    height: 150px;
  }

  .code {
    margin-right: 20px;
    padding: 5px;
    width: 300px;
    height: 100%;
    border-radius: 10px;
    background-color: #2A1F2D;
  }

  .my-editor {
    font-size: 9px;
    line-height: 1.1;
  }

  .io {
    margin-top: 5px;
  }

  .input, .output {
    margin-top: 0px;
  }

  .io div div {
    display: inline-block;
    color: #C4BFC2;
    font-size: 10px;
    line-height: 1.1;
    background-color: #2A1F2D;
    padding: 2px;
    border-radius: 10px;
  }

  h3 {
    display: inline-block;
    font-size: 12px;
    margin: 0;
    color: #FFF;
    font-weight: normal;
  }

  .line {
    margin: 9px 0 0 10px;
    width: 30px;
    height: 2px;
    background-color: #59C9A5;
  }

  .circle {
    z-index: 100;
    width: 20px;
    height: 20px;
    padding: 5px;
    background-color: rgb(59, 44, 53);
  }

  .text {
    width: 250px;
    height: 100%;
  }

  .header {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    height: 20px;
    width: 100%;
    text-transform: uppercase;
  }

  h2 {
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 5px;
    color: #FFF;
  }

  p {
    font-size: 12px;
    color: #C4BFC2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  .clampTwo {
    -webkit-line-clamp: 2;
  }

  .clampFour {
    -webkit-line-clamp: 4;
  }

  a {
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 12px;
    color: #59C9A5;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }

  a img {
    height: 11px;
    margin-left: 3px;
  }

  .break {
    background-color: #C4C4C4;
    width: 1px;
    height: 100%;
  }

  svg {
    display: block;
    width: 10px;
  }
</style>
<template>
  <div class="wrapper">
    <div v-if="lang == ''">
      <div class="container secondaryBg">
        <div>
          <h2>Choose language</h2>
          <ul class="grayText">
            <li v-for="language in languages" :key="language" @click="onLangClick(language)">
              {{ language }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>
      <CodeEditor></CodeEditor>      
    </div>
  </div>
</template>

<script>
  import CodeEditor from './CodeSection/CodeEditor'

  export default {
    components: { CodeEditor },
    data () {
      return {
        languages: this.$store.state.config.info.languages
      }
    },
    methods: {
      onLangClick (language) {
        this.$store.dispatch({
          type: 'setLang',
          lang: language
        })
      }
    },
    computed: {
      lang () {
        return this.$store.state.add.language
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    padding-top: 3vh;
    height: 100vh;
    width: 75vw;
  }

  .wrapper div {
    overflow: overlay;
  }
  
  .container {
    margin-top: -10vh;
    height: 95vh;
    width: 70vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
  }

  h2 {
    display: block;
    text-transform: uppercase;
    color: #736D75;
    margin-bottom: 3vh;
  }

  ul {
    list-style-type: none;
  }

  h2, li {
    display: inline-block;
    font-size: 36px;
    text-decoration: none;
  }

  li {
    cursor: pointer;
    margin: 0 15px;
  }

  li:hover {
    color: #FFF;
  }
</style>
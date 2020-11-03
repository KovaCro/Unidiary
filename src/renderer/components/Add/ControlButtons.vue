<template>
  <div class="wrapper">
    <ErrorPop class="fixed" v-if="error !== ''" :error="error" @error-close="error = ''"></ErrorPop>
    <button class="save" @click="onSave">Save</button>
    <button class="delete" @click="onDelete">Delete</button>
  </div>
</template>

<script>
  import fs from 'fs'
  import { sep } from 'path'
  import ErrorPop from '../Utility/ErrorPop'

  export default {
    components: { ErrorPop },
    data () {
      return {
        error: ''
      }
    },
    methods: {
      onSave (e) {
        let dataObj = {...this.$store.state.add}
        if (isNaN(Date.parse(`${dataObj.month} ${dataObj.day} ${dataObj.year}`))) {
          this.error = 'Date input is invalid.'
          return
        } else if (dataObj.code === '') {
          this.error = 'Code is empty.'
          return
        } else if (dataObj.title === '' || dataObj.desc === '' || dataObj.category === '' || dataObj.language === '' || dataObj.showLine[0] === 0 || dataObj.showLine[1] === 0) {
          this.error = 'All input fields must be filled.'
          return
        } else if (dataObj.toggleIo === true && (dataObj.input === '' || dataObj.output === '')) {
          this.error = 'IO is toggled, but input and output are empty.'
          return
        }
        let date = new Date(Date.now())
        let fileName = this.$store.state.config.directoryPath + sep + this.$store.state.add.year + '-' + this.$store.state.add.month + '-' + this.$store.state.add.day + '-' + date.getFullYear() + date.getMonth() + date.getDate() + date.getHours() + date.getMinutes() + '.json'
        dataObj.code = dataObj.code.split('\n')
        fs.writeFileSync(fileName, JSON.stringify(dataObj, null, 2))
        this.onDelete(e)
      },
      onDelete (e) {
        this.$store.dispatch({type: 'setTitle', title: ''})
        this.$store.dispatch({type: 'setDay', day: 0})
        this.$store.dispatch({type: 'setMonth', month: 0})
        this.$store.dispatch({type: 'setYear', year: 0})
        this.$store.dispatch({type: 'setDesc', desc: ''})
        this.$store.dispatch({type: 'setCategory', category: ''})
        this.$store.dispatch({type: 'setLang', lang: ''})
        this.$store.dispatch({type: 'setShowLine', index: 0, value: 0})
        this.$store.dispatch({type: 'setShowLine', index: 1, value: 0})
        this.$store.dispatch({type: 'toggleInput', toggleIo: false})
        this.$store.dispatch({type: 'setInput', input: ''})
        this.$store.dispatch({type: 'setOutput', output: ''})
        this.$store.dispatch({type: 'setCode', code: ''})
        this.$router.push('main')
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    width: 100%;
    padding: 0px 15px;
    align-self: flex-end;
    margin-bottom: 30px;
  }

  .fixed {
    position: fixed;
    top: 0;
    left: 0;
  }

  button {
    width: 100%;
    border: 0;
    padding: 5px 0;
    border-radius: 3px;
    color: #FFF;
    cursor: pointer;
  }

  button:focus {
    outline: 0;
  }

  .save {
    background-color: rgba(117, 173, 108, 0.62);
    margin-bottom: 10px;
  }

  .delete {
    background-color: rgba(200, 82, 82, 0.62);
  }
</style>
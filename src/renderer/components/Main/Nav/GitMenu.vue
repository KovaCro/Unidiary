<template>
  <div class="wrapper darkBg">
    <div class="cwd">
      <p>cwd:</p> 
      <input type="text" v-model="cwd">
    </div>
    <div class="cmd" @click.self="onCommandRun(cmd)">
      <input type="text" v-model="cmd" maxlength="100">
      <img src="~@/assets/icons/running-solid.svg" @click="onCommandRun(cmd)">
    </div>
    <h2>Shortcuts</h2>
    <div v-for="(shortcut, index) in shortcuts" :key="index" class="cmd" @click.self="onShortcutRun(index)">
      <input type="text" v-model="shortcuts[index]" maxlength="100">
      <img src="~@/assets/icons/running-solid.svg" @click="onShortcutRun(index)">
    </div>
  </div>
</template>

<script>
  import { exec } from 'child_process'
  import { remote } from 'electron'

  export default {
    data () {
      return {
        cwd: this.$store.state.config.directoryPath,
        cmd: '',
        shortcuts: [...this.$store.state.config.info.shortcuts]
      }
    },
    methods: {
      onCommandRun (command) {
        exec(command, { cwd: this.cwd }, (err, stdout, stderr) => {
          if (err) {
            this.$store.dispatch({
              type: 'addNotification',
              value: err
            })
          } else {
            this.$store.dispatch({
              type: 'addNotification',
              value: stdout
            })
          }
          remote.getGlobal('setTimeout')(() => {
            this.$store.dispatch({
              type: 'removeNotification',
              index: 0
            })
          }, 4000)
        })
      },
      onShortcutRun (index) {
        this.onCommandRun(this.shortcuts[index])
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    position: fixed;
    top: 3.5vh;
    right: 0;
    padding: 2vh;
  }

  .cmd {
    position: relative;
    background: #59C9A5;
    border-radius: 3px;
    height: 20px;
    width: 200px;
    cursor: pointer;
    margin: 10px 10px;
  }

  .cwd {
    margin: 0 10px 30px 10px;
  }

  .cwd input {
    position: static;
    width: 150px; 
  }

  p {
    display: inline-block;
    color: #BDBABC;
    font-size: 10px;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 180px;
    cursor: text;
    color: #FFF;
    background-color: #2E262B;
    font-size: 11px;
    padding: 5px;
    border: 0;
    border-radius: 3px;
  }

  input:focus {
    outline: 0;
  }

  img {
    margin: 4px 4px 4px 184px;
    cursor: pointer;
    height: 12px;
    width: 12px;
  }

  h2 {
    font-size: 12px;
    text-transform: uppercase;
    color: #BDBABC;
    margin: 25px 0 10px 0;
  }
</style>
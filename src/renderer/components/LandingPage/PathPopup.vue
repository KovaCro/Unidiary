<template>
  <div class="wrapper">
    <div class="holder darkBg">
      <div class="center">
        <p v-if="!failed" class="grayText">Select a file in a valid storage directory</p>
        <p v-else style="color:#B82525">Directory does not contain config</p>
      </div>      
      <label for="file-upload">
        <div class="imgBg greenBg">
          <img src="~@/assets/icons/crosshairs-solid.svg">
        </div>
      </label>
      <input type="file" id="file-upload" accept=".json" @change="onFileChange">
    </div>
  </div>
</template>

<script>
  import fs from 'fs'
  import { sep } from 'path'

  export default {
    data () {
      return {
        failed: false
      }
    },
    methods: {
      onButtonClick (e) {

      },
      onFileChange (e) {
        let fileObj
        let date = new Date(Date.now())
        let directoryPath = e.target.files[0].path.split(sep)
        directoryPath.pop()
        directoryPath = directoryPath.join(sep)
        try {
          fileObj = JSON.parse(fs.readFileSync(directoryPath + sep + 'config.json'))
        } catch (err) {
          this.failed = true
        }
        if (fileObj.keyword === 'unidiary') {
          this.$store.dispatch({
            type: 'setDirectoryPath',
            path: directoryPath
          })
          this.$store.dispatch({
            type: 'setInfo',
            info: fileObj
          })
          let filterObj = {
            string: '',
            dayFrom: '1',
            monthFrom: '8',
            yearFrom: '2020',
            dayTo: date.getDate(),
            monthTo: date.getMonth() + 1,
            yearTo: date.getFullYear()
          }
          fileObj.categories.forEach(el => {
            filterObj[el] = true
          })
          fileObj.languages.forEach(el => {
            filterObj[el] = true
          })
          this.$store.dispatch({
            type: 'setFilters',
            'obj': filterObj
          })
          this.$router.push('main')
        } else {
          this.failed = true
        }
      }
    }
  }
</script>

<style scoped>
  .holder {
    padding: 5vh 5vw;
    border-radius: 10px;
    border: 1px solid #000;
  }

  input[type="file"] {
    display: none;
  }

  p {
    display: block;
    margin: 0 1vw 3vh 1vw;
  }

  .imgBg {
    display: flex;
    justify-content: center;
    width: 400px;
    padding: 7px;
    margin-bottom: 2.5vh;
  }

  label img {
    height: 20px;
    vertical-align: bottom;
  }

  label {
    cursor: pointer;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

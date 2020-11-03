<template>
  <div class="wrapper grayText">
    <div class="title">
      <label for="title">Title</label>
      <input type="text" id="title" maxlength="22" @change="onInputUpdate($event, 'setTitle', 'title')">
    </div>
    <div class="date">
      <label for="date">Date</label>
      <input type="number" placeholder="d" id="date" maxlength="2" @change="onInputUpdate($event, 'setDay', 'day')">
      <input type="number" placeholder="m" id="date" maxlength="2" @change="onInputUpdate($event, 'setMonth', 'month')">
      <input type="number" placeholder="y" id="date" maxlength="4" @change="onInputUpdate($event, 'setYear', 'year')">
    </div>
    <div class="desc">
      <label for="desc">Description</label>
      <textarea id="desc" maxlength="210" @change="onInputUpdate($event, 'setDesc', 'desc')"></textarea>
    </div>
    <div class="language">
      <label for="language">Language</label>
      <SelectMenu width="90px" :options="languages" @select="onSelectUpdate('setLang', 'lang', $event)" :selected="lang"></SelectMenu>
    </div>
    <div class="category">
      <label for="category">Category</label>
      <SelectMenu width="110px" :options="categories" @select="onSelectUpdate('setCategory', 'category', $event)" :selected="category"></SelectMenu>
    </div>
    <div class="showLine">
      <label for="lStart">Show line</label>
      <input type="text" id="lStart" @change="onShowLineUpdate">
      <label for="lEnd">to</label>
      <input type="text" id="lEnd" :value="toLine" readonly>
    </div>
    <div class="io">
      <div class="ioLabels">
        <label>I/O E.g.</label>
      </div>
      <div class="ioInputs">
        <input type="text" :readonly="!ioToggled" maxlength="9" @change="onInputUpdate($event, 'setInput', 'input')">
        <img src="~@/assets/icons/arrow-down-solid.svg">
        <input type="text" :readonly="!ioToggled" maxlength="9" @change="onInputUpdate($event, 'setOutput', 'output')">
      </div>
      <div class="checkbox">
        <img v-if="!ioToggled" src="~@/assets/icons/check-square-regular-gray.svg" @click="onIOToggle">
        <img v-else src="~@/assets/icons/check-square-solid-gray.svg" @click="onIOToggle">
      </div>
    </div>
  </div>
</template>

<script>
  import SelectMenu from './InfoInput/SelectMenu'

  export default {
    components: { SelectMenu },
    data () {
      return {
        ioToggled: false,
        languages: this.$store.state.config.info.languages,
        categories: this.$store.state.config.info.categories,
        toLine: ''
      }
    },
    computed: {
      lang () {
        return this.$store.state.add.language
      },
      category () {
        return this.$store.state.add.category
      }
    },
    methods: {
      onIOToggle (e) {
        this.ioToggled = !this.ioToggled
        this.$store.dispatch({
          type: 'toggleInput',
          toggledIo: this.ioToggled
        })
      },
      onShowLineUpdate (e) {
        this.$store.dispatch({
          type: 'setShowLine',
          value: e.target.value
        })
        this.toLine = 14 + parseInt(e.target.value)
      },
      onInputUpdate (e, type, state) {
        this.$store.dispatch({
          'type': type,
          [state]: e.target.value
        })
      },
      onSelectUpdate (type, state, value) {
        this.$store.dispatch({
          'type': type,
          [state]: value
        })
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    width: 25vw;
    padding-top: 3vh;
  }

  .wrapper > * {
    margin: 40px 12px 0 12px;
  }

  .title, .desc, .date {
    margin-top: 20px;
  }

  .category, .language {
    display: flex;
    align-items: center;
  }

  .io {
    display: flex;
    align-items: center;
  }

  .io > * {
    display: inline-block;
    margin-right: 10px;
  }

  .ioInputs {
    display: inline-flex;
    width: 80px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .ioInputs > * {
    margin: 2px 0;
  }

  .ioInputs input {
    width: 80px;
  }
 
  input {
    height: 20px;
    color: #FFF;
    background-color: rgb(69, 55, 63);
    border: 0;
    border-radius: 3px;
    outline: 0;
    padding: 0 5px;
  }

  input:focus {
    outline: 0;
  }

  label {
    margin-right: 5px;
    font-size: 13px;
  }

  label[for=title], label[for=date], label[for=desc] {
    display: block;
    margin-bottom: 4px;
  }

  input[id=date], input[id=lStart], input[id=lEnd] {
    text-align: center;
    width: 40px;
  }

  input[id=date]{
    margin: 0 5px;
  }


  textarea[id=desc] {
    color: #FFF;
    background-color: rgb(69, 55, 63);
    border: 0;
    border-radius: 3px;
    outline: 0;
    padding: 0 5px;
    resize: none;
    width: 100%;
    display: block;
    height: 100px;
  }

  img {
    width: 15px;
    height: 13px;
  }

  .checkbox img {
    cursor: pointer;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
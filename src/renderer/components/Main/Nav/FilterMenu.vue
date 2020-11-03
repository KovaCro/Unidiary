<template>
  <div class="wrapper darkBg">
    <div class="search">
      <img src="~@/assets/icons/search-solid.svg">
      <input type="text" @keyup="onInputUpdate($event, 'string')" maxlength="50">
    </div>
    <div class="categories">
      <h2>Categories</h2>
      <div v-for="category in categories" :key="category" @click="onOptionClick(category)">
        <img v-if="filters[category]" src="~@/assets/icons/check-square-solid.svg">
        <img v-else src="~@/assets/icons/check-square-regular.svg">
        {{ category }}
      </div>
    </div>
    <div class="languages">
      <h2>Languages</h2>
      <div v-for="language in languages" :key="language" @click="onOptionClick(language)">
        <img v-if="filters[language]" src="~@/assets/icons/check-square-solid.svg">
        <img v-else src="~@/assets/icons/check-square-regular.svg">
        {{ language }}
      </div>
    </div>
    <div class="date">
      <h2>Date</h2>
      <h3>from</h3>
      <input type="text" value="1" maxlength="2" @keyup="onInputUpdate($event, 'dayFrom')">
      <input type="text" value="8" maxlength="2" @keyup="onInputUpdate($event, 'monthFrom')">
      <input type="text" value="2020" maxlength="4" @keyup="onInputUpdate($event, 'yearFrom')">
      <h3>to</h3>
      <input type="text" :value="date.getDate()" maxlength="2" @keyup="onInputUpdate($event, 'dayTo')">
      <input type="text" :value="date.getMonth() + 1" maxlength="2" @keyup="onInputUpdate($event, 'monthTo')">
      <input type="text" :value="date.getFullYear()" maxlength="4" @keyup="onInputUpdate($event, 'yearTo')">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        categories: this.$store.state.config.info.categories,
        languages: this.$store.state.config.info.languages,
        filters: this.$store.state.config.filters,
        date: new Date(Date.now())
      }
    },
    methods: {
      onInputUpdate (e, state) {
        this.$store.dispatch({
          type: 'updateFilter',
          'state': state,
          value: e.target.value
        })
      },
      onOptionClick (option) {
        this.$store.dispatch({
          type: 'updateFilter',
          state: option,
          value: !this.filters[option]
        })
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    position: fixed;
    top: 3.5vh;
    left: 0;
    padding: 2vh;
  }
  .search {
    background-color: #2E262B;
    padding: 0 8px;
  }

  input {
    color: #FFF;
    background-color: #2E262B;
    border: none;
    border-radius: 3px;
  }

  input:focus {
    outline: 0;
  }

  .date input {
    text-align: center;
    font-size: 12px;
    width: 35px;
    margin: 0 3px;
    padding: 2px 0;
  }

  img {
    height: 11px;
    width: 11px;
  }

  h2 {
    font-size: 12px;
    text-transform: uppercase;
    color: #BDBABC;
    margin: 30px 0 10px 0;
  }

  h3 {
    font-size: 11px;
    color: #BDBABC;
    margin: 10px 0 2px 5px;
  }

  .categories, .languages {
    font-size: 12px;
    color: #FFF;
  }

  .categories div, .languages div {
    cursor: pointer;
    margin: 5px 0;
  }
</style>
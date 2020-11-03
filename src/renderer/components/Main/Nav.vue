<template>
  <div class="nav darkBg">
    <FilterMenu v-show="isFilterOpen"></FilterMenu>
    <GitMenu v-show="isGitOpen"></GitMenu>
    <div class="left">
      <img src="@/assets/icons/sliders-h-solid.svg" @click="onFilterClick">
    </div>
    <div class="right">
      <img src="@/assets/icons/plus-solid.svg" @click="onAddClick">
      <img src="@/assets/icons/github-brands.svg" @click="onGitClick">
      <img src="@/assets/icons/power-off-solid.svg" @click="onPowerClick">
    </div>
  </div>
</template>

<script>
  import { remote } from 'electron'
  import FilterMenu from './Nav/FilterMenu'
  import GitMenu from './Nav/GitMenu'

  export default {
    components: { FilterMenu, GitMenu },
    data () {
      return {
        isFilterOpen: false,
        isGitOpen: false
      }
    },
    methods: {
      onFilterClick (e) {
        this.isFilterOpen = !this.isFilterOpen
      },
      onAddClick (e) {
        this.$router.push('add')
      },
      onGitClick (e) {
        this.isGitOpen = !this.isGitOpen
      },
      onPowerClick (e) {
        remote.getCurrentWindow().close()
      }
    }
  }
</script>

<style scoped>
  .nav {
    display: flex;
    position: fixed;
    z-index: 1000000;
    top: 0;
    width: 100vw;
    padding-left: 1vw;
    padding-right: 1vw;
    padding-top: .5vh;
    padding-bottom: .5vh;
    justify-content: space-between;
  }

  .right, .left {
    height: 2.5vh;
  }

  .right > * {
    margin-left: 60px;
  }

  img {
    height: 2.5vh;
    opacity: .7;
    cursor: pointer;
  }

  img:hover {
    opacity: 1;
  }
</style>

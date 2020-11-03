<template>
  <div :style="style" class="box" :class="[ !toggle ? 'roundCorners' : 'roundTopCorners']" @click="toggle = !toggle">
    <div class="selected"> {{ selected }} </div>
    <img :class="{ rotated: toggle }" src="~@/assets/icons/chevron-down-solid.svg">
    <div :style="style" v-show="toggle == true" class="dropdown">
      <ul>
        <li v-for="option in options" :key="option" @click="clicked">
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['width', 'options', 'selected'],
    data () {
      return {
        toggle: false
      }
    },
    computed: {
      style () {
        return 'width: ' + this.width
      }
    },
    methods: {
      clicked (e) {
        this.$emit('select', e.target.innerHTML.trim())
      }
    }
  }
</script>

<style scoped>
  .box {
    position: relative;
    font-size: 12px;
    display: inline-flex;
    height: 16px;
    padding: 0 3px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background-color: #45373F;
  }

  .dropdown {
    position: absolute;
    cursor: pointer;
    background-color: #45373F;
    z-index: 100;
    top: 16px;
    left: 0;
  }

  .selected {
    color: #FFF;
  }

  img {
    height: 8px;
  }

  ul {
    list-style-type: none;
  }

  ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
  }

  li:hover {
    color: #FFF;
  }

  .rotated {
    transform: rotate(180deg);
    transform-origin: center center;
  }

  .roundCorners {
    border-radius: 3px;
  }

  .roundTopCorners {
    border-radius: 3px 3px 0 0;
  }
</style>
<template>
  <div class="pop" @click="$emit('error-close')">
    <div class="box darkBg">
      <div class="topBar titlesFont">
        Error
      </div>
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    methods: {
      onEsc (e) {
        if (e.code === 'Escape') {
          this.$emit('error-close')
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
  .pop {
    display: flex;
    position: fixed;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .box {
    position: relative;
    color: #FFF;
    border: 1px #000 solid;
    border-radius: 10px;
  }

  p {
    margin: 50px 100px 40px 100px;
  }

  .topBar {
    font-size: 0.8em;
    color: rgba(255, 255, 255, 0.7);
    position: absolute;
    border-radius: 10px 10px 0 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    padding: 2px 10px;
  }
</style>
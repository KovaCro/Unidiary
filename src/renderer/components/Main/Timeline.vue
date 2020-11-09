<template>
  <div class="wrapper appBg">
    <PreviewCode v-if="preview != ''" :el="preview" @preview-close="preview = ''"></PreviewCode>
    <div class="timeline">
      <div class="left">
        <LeftCard v-for="element in leftElements" @preview-clicked="preview = element" :key="element.title" :el="element"></LeftCard>
      </div>
      <div class="center">
        <img class="plusIcon" width="20px" height="20px" src="~@/assets/icons/plus-circle-solid.svg" @click="$router.push('add')">
        <div class="line"></div>
        <img v-if="isLoading" height="20px" width="20px" ref="loader" src="~@/assets/icons/loader.svg">
        <p v-else class="end">5.10.2020.</p>
      </div>
      <div class="right">
        <RightCard v-for="element in rightElements" @preview-clicked="preview = element" :key="element.title" :el="element"></RightCard>
      </div>
    </div>
  </div>
</template>

<script>
  import fs from 'fs'
  import LeftCard from './Timeline/LeftCard'
  import RightCard from './Timeline/RightCard'
  import PreviewCode from './PreviewCode'

  export default {
    components: { LeftCard, RightCard, PreviewCode },
    data () {
      return {
        preview: '',
        isLoading: true,
        unparsedFileList: this.sortByDate(fs.readdirSync(this.$store.state.config.directoryPath).filter(e => e !== 'config.json')),
        filters: this.$store.state.config.filters,
        elements: [],
        cooldown: false
      }
    },
    methods: {
      sortByDate ([...arr]) {
        arr = arr.map((el) => {
          el = el.split('.')
          el.pop()
          el = el[0].split('-')
          return el.join('')
        })
        arr.sort()
        arr = arr.map((el) => {
          return el.slice(0, 4) + '-' + el.slice(4, 6) + '-' + el.slice(6, 8) + '-' + el.slice(8) + '.json'
        })
        return arr
      },
      getElements (amount) {
        for (let i = 0; i < amount; i++) {
          if (this.unparsedFileList.length === 0) {
            this.isLoading = false
            return
          }
          this.elements.push(JSON.parse(fs.readFileSync(this.$store.state.config.directoryPath + '/' + this.unparsedFileList.pop())))
        }
        this.cooldown = false
      },
      isLoaderInView () {
        const w = 1280
        const h = 720
        const { top, left, bottom, right } = this.$refs.loader.getBoundingClientRect()
        return ((top > 0 && top < h) || (bottom > 0 && bottom < h)) && ((left > 0 && left < w) || (right > 0 && right < w))
      },
      onScroll (e) {
        if (this.isLoaderInView() && !this.cooldown) {
          this.getElements(10)
          this.cooldown = true
        }
      }
    },
    computed: {
      filteredElements () {
        return this.elements.filter((el) => {
          return (el.desc.includes(this.filters.string) || el.title.includes(this.filters.string) || this.filters.string === '') && this.filters[el.category] && this.filters[el.language] && (new Date(`${el.month} ${el.day} ${el.year}`) <= new Date(`${this.filters.monthTo} ${this.filters.dayTo} ${this.filters.yearTo}`)) && (new Date(`${el.month} ${el.day} ${el.year}`) >= new Date(`${this.filters.monthFrom} ${this.filters.dayFrom} ${this.filters.yearFrom}`))
        })
      },
      leftElements () {
        return this.filteredElements.filter((el, index) => {
          return index % 2 === 0
        })
      },
      rightElements () {
        return this.filteredElements.filter((el, index) => {
          return index % 2 !== 0
        })
      }
    },
    mounted () {
      this.getElements(10)
      document.addEventListener('scroll', this.onScroll)
    },
    destroyed () {
      document.removeEventListener('scroll', this.onScroll)
    }
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    min-height: 100vh;
    width: 100vw;
    justify-content: center;
  }

  .timeline {
    display: flex;
    width: 100vw;
    padding-top: 50px;
    flex-wrap: nowrap;
    justify-content: center;
  }

  .left {
    margin-top: 0;
  }

  .right {
    margin-top: 110px;
    margin-left: -30px;
  }

  .center {
    margin-left: -30px;
    display: flex;
    width: 40px;
    flex-flow: column wrap;
    height: 100%;
    align-items: center;
  }

  .plusIcon {
    cursor: pointer;
    transition: transform 0.1s cubic-bezier(.17, .67, .83, .67);
  }

  .plusIcon:hover {
    transform: scale(1.3)
  }

  .line {
    width: 2px;
    margin-top: 4px;
    flex-grow: 3;
    background-color: #59C9A5;
  }

  .end {
    text-align: center;
    font-family: "AlfaSlabOne";
    padding-top: 2px;
    border-top: solid #59C9A5;
    color: #59C9A5;
    font-size: 8px;
  }
</style>
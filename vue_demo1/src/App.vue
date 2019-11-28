<template>
  <div class="affix" >
    <mt-button @click.native="handleClick">点击触发 handleClick</mt-button>
  </div>

</template>

<script>
  import {Toast} from 'mint-ui'
    export default {
      methods: {
          handleClick() {
              Toast('提示信息')
          }
      }
    }
</script>

<style scoped>
  .affix {
    margin: 0 auto;
    text-align: center;
  }
</style>

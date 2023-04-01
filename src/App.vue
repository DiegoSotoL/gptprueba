<template>
  
  <div>
    <black-textbox></black-textbox>
  </div>
</template>


<script>
import BlackTextbox from './components/BlackTextbox.vue';

export default {
  name: 'App',
  components: {
    BlackTextbox
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

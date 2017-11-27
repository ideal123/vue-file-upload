<template>
  <div id="app">
    <h1>vue-file-upload</h1>
    <div>
      <file-upload></file-upload>
    </div>
  </div>
</template>

<script>
import fileUpload from './file-upload'
export default {
  name: 'app',
  components: { fileUpload }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-weight: normal;
}
</style>

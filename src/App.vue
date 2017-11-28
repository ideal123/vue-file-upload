<template>
  <div id="app">
    <h1>vue-file-upload</h1>
    <div>
      <FileUpload :action="url" :multiple="true"></FileUpload>
    </div>
  </div>
</template>

<script>
import FileUpload from './file-upload'
export default {
  name: 'app',
  components: { FileUpload },
  data () {
    return { url: 'http://dev-nfs.sf8cloud.com/upload/file' }
  }
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

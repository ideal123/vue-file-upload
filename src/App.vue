<template>
  <div id="app">
    <h1>vue-file-upload</h1>
    <div>
      <FileUpload
        :action="url"
        :data="{ type: 'adad' }"
        :multiple="true"
        :onProgress="onProgress"
        :onSuccess="onSuccess"
        :onError="onError"
      ></FileUpload>
    </div>
    <div style="margin-top: 20px;">
      <progress min="0" max="100" :value="percent"></progress>
    </div>
  </div>
</template>

<script>
import FileUpload from './file-upload'

export default {
  name: 'app',
  components: { FileUpload },
  data () {
    return {
      url: 'http://nfs.westo.club/upload',
      percent: 0
    }
  },
  methods: {
    onProgress (e) {
      this.percent = e.percent
      console.log(e.percent)
    },
    onSuccess (data) {
      console.log(data)
      alert('success')
    },
    onError (e) {
      console.log(e)
      alert('error')
    }
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

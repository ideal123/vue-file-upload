<template>
  <div class="file-upload">
    <input class="file-upload-input" type="file" name="file" ref="input" @change="handleChange">
    <button class="file-upload-btn" @click="$refs.input.click()">选择文件</button>
  </div>
</template>

<script>
import upload from './upload'
export default {
  methods: {
    handleChange (e) {
      const files = e.target.files

      if (!files) {
        return
      }

      upload(files)
    }
  }
}
</script>

<style>
.file-upload {
  display: inline-block;
}
.file-upload .file-upload-input {
  display: none;
}
.file-upload .file-upload-btn {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: white;
  cursor: pointer;
  transition: .3s border-color, background-color;
}
.file-upload .file-upload-btn:hover,
.file-upload .file-upload-btn:active {
  border-color: #adadad;
  background-color: #e6e6e6;
}
</style>



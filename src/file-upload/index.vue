<template>
  <div class="file-upload">
    <button class="file-upload-btn" @click="$refs.input.click()">选择文件</button>
    <input
      class="file-upload-input"
      type="file"
      :name="name"
      :multiple="multiple"
      :accept="accept"
      ref="input"
      @change="handleChange"
    >
  </div>
</template>

<script>
import upload from './upload'

export default {
  props: {
    action: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: 'file'
    },
    data: {
      type: Object
    },
    multiple: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String
    },
    onProgress: {
      type: Function,
      default () {
        return {}
      }
    },
    onSuccess: {
      type: Function,
      default () {
        return {}
      }
    },
    onError: {
      type: Function,
      default () {
        return {}
      }
    }
  },
  methods: {
    handleChange (e) {
      const files = e.target.files

      if (!files) {
        return
      }

      upload.call(this, files)

      this.$refs.input.value = null // 上传后清空文件
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



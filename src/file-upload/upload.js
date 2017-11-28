/**
 * 构造返回的错误
 * @param {*} action
 * @param {*} xhr
 */
function  getError(action, xhr) {
  const msg = `fail to post ${action} ${xhr.status}`
  const err = new Error(msg)
  err.status = xhr.status
  err.method = 'post'
  err.url = action
  return err
}

/**
 * 解析成功返回的数据
 * @param {*} xhr
 */
function getBody (xhr) {
  const text = xhr.responseText || xhr.response
  if (!text) {
    return text
  }

  try {
    return JSON.parse(text)
  } catch (e) {
    return text
  }
}

/**
 * 上传某个文件
 * @param {*} file
 */
function post (file) {
  const formData = new FormData()

  formData.append(this.name, file)

  // 添加上传附带的额外参数
  if (this.data) {
    Object.keys(this.data).forEach(key => {
      formData.append(key, this.data[key])
    })
  }

  const xhr = new XMLHttpRequest()

  // 进度事件
  if (xhr.upload) {
    xhr.upload.onprogress = e => {
      if (e.total) {
        e.percent = e.loaded / e.total * 100
      }
      this.onProgress(e)
    }
  }

  xhr.open('POST', this.action)

  xhr.onerror = e => {
    this.onError(e)
  }

  xhr.onload = e => {
    if (xhr.status < 200 || xhr.status >= 300) {
      this.onError(getError(this.action, xhr))
      return
    }
    this.onSuccess(getBody(xhr))
  }

  xhr.send(formData)
}

/**
 * 分别上传每个文件
 * @param {*} files
 */
export default function (files) {
  if (!window.FormData) {
    return
  }

  const postFiles = Array.prototype.slice.call(files)

  postFiles.forEach(file => {
    post.call(this, file)
  })
}

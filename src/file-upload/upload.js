function post (file) {
  const formData = new FormData()

  formData.append(this.name, file)

  if (this.data) {
    Object.keys(this.data).forEach(key => {
      formData.append(key, this.data[key])
    })
  }
  console.log(this.data)
  const xhr = new XMLHttpRequest()

  xhr.open('POST', this.action)

  xhr.onerror = e => {
    // TODO
  }

  xhr.onload = e => {
    if (xhr.status < 200 || xhr.status >= 300) {
      // TODO
      return
    }
    // TODO
  }

  xhr.send(formData)
}

export default function (files) {
  if (!window.FormData) {
    return
  }

  const postFiles = Array.prototype.slice.call(files)

  postFiles.forEach(file => {
    post.call(this, file)
  })
}

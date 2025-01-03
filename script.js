var url = null

const editor = ace.edit('editor')
editor.setTheme('ace/theme/dracula')
editor.getSession().setMode('ace/mode/html')

function createUrl(html) {
  var blob = new Blob([html], { type: 'text/html' })
  return URL.createObjectURL(blob)
}

function removeUrl(url) {
  URL.revokeObjectURL(url)
  console.log('Revoked URL')
}

function getIframe() {
  var iframe = document.getElementById('iframe')
  return iframe
}

function setIframeUrl(url) {
  var iframe = getIframe()
  iframe.src = url
}

function getEditorCode() {
  return editor.getValue()
}

function runCode() {
  var code = getEditorCode()
  removeUrl(url)
  url = createUrl(code)
  setIframeUrl(url)
}

function downLoad() {
  let code = getEditorCode()
  const blob = new Blob([code], {type: 'text/html'})

  const lien = document.createElement('a')
  lien.href = URL.createObjectURL(blob)
  lien.download = "Fichier_html"
  lien.click()

}

document.addEventListener("DOMContentLoaded", () => {
  editor.setValue(`<!DOCTYPE html>
<html lang="en">
    <style>
        /* SOMETHING TO START WITH... */
    </style>

  <!-- LET'S COMMENT -->
  <h1>A big TITLE</h1>
  <p>A paragraph</p>
  
  </body>
</html>`)
  runCode()
})
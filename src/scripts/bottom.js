var body_height = document.body.clientHeight
var documentParent = window.parent.document

documentParent.getElementById("bottombar").style.height = `${body_height + 16}px`

console.log(documentParent.body)

window.parent.window.addEventListener("resize", (e) => {
  body_height = document.body.clientHeight
  documentParent.getElementById("bottombar").style.height = `${body_height + 16}px`
});

documentParent.body.addEventListener("click", (e) => {
  body_height = document.body.clientHeight
  documentParent.getElementById("bottombar").style.height = `${body_height + 16}px`
});
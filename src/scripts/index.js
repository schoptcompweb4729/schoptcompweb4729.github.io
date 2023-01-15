const sidebarBTN = document.getElementById("sidebar-btn");
const sidebar = document.getElementById("sidebar");
var unofficialWarningStatus = localStorage.getItem("unofficialWarning");


// enable global settings
document.addEventListener("DOMContentLoaded", () => {
  if (darkModeStatus === "true") {
    document.getElementsByTagName("body")[0].setAttribute("data-theme","dark");
  } else {
    document.getElementsByTagName("body")[0].removeAttribute("data-theme");
  }
  if (unofficialWarningStatus === "true") {
    setTimeout(() => {
      console.log()
      document.getElementById("bottombar").style.display = "none"
      console.log(document.getElementById("bottombar").style.bottom)
    }, 100);
  } else {
    document.getElementById("bottombar").style.display = "unset"
  }
}) 

if (localStorage.getItem("darkMode") === null) {
  localStorage.setItem("darkMode", "false")
}

if (localStorage.getItem("unofficialWarning") === null) {
  localStorage.setItem("unofficialWarning", "false")
}

var darkModeStatus = localStorage.getItem("darkMode");



// sidebar handler
sidebarBTN.addEventListener("click", (e) => {
  console.log("hello")
  if (sidebar.classList.contains("sidebar-show")) {
    sidebar.classList.remove("sidebar-show")
    document.body.style.overflow = "overlay"
  } else {
    sidebar.classList.add("sidebar-show")
    document.body.style.overflow = "hidden"
  }
});

document.addEventListener('mouseup', function(e) {
  if (!sidebar.contains(e.target) && !sidebarBTN.contains(e.target)) {
    sidebar.classList.remove("sidebar-show")
    document.body.style.overflow = "overlay"
  }
});


// remove .html from url
if (window.location.pathname.includes(".html") && window.location.hostname !== "app-test.gage") {
  var newPath = window.location.pathname.slice(1,-5)
  window.location.pathname = newPath
}
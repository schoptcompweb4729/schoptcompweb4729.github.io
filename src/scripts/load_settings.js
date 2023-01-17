var unofficialWarningStatus = localStorage.getItem("unofficialWarning");
var darkModeStatus = localStorage.getItem("darkMode");

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

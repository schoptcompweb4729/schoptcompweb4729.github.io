const darkModeBTN = document.getElementById("dark-mode-toggle-btn");
const noUnofficialWarningBTN = document.getElementById("unofficial-warning-toggle-btn")


function darkModeToggle(state) {
  if (state === true) {
    document.getElementsByTagName("body")[0].setAttribute("data-theme","dark");
    localStorage.setItem("darkMode", "true")
    console.log(state);
  } else {
    document.getElementsByTagName("body")[0].removeAttribute("data-theme","dark");
    console.log(state);
    localStorage.setItem("darkMode", "false")
    console.log(localStorage.getItem("darkMode"))
  }
}

function UnofficialWarningToggle(state) {
  if (state === true) {
    document.getElementById("bottombar").style.transition = "0.2s ease"
    document.getElementById("bottombar").style.bottom = `-${Number(String(document.getElementById("bottombar").style.height.slice(0,2))) + 10}px`
    setTimeout(() => {
      document.getElementById("bottombar").style.display = "none"
    }, 200);
    localStorage.setItem("unofficialWarning", "true")
  } else {
    document.getElementById("bottombar").style.transition = "0.2s ease"
    document.getElementById("bottombar").style.display = "unset"
    document.body.click()
    document.getElementById("bottombar").style.bottom = `-${Number(String(document.getElementById("bottombar").style.height.slice(0,2))) + 10}px`
    setTimeout(() => {
      document.getElementById("bottombar").style.bottom = "0px"
    }, 20);
    localStorage.setItem("unofficialWarning", "false")
  }
}

function checkForUnofficialWarning() {
  if (localStorage.getItem("unofficialWarning") === "true") {
    console.log(true)
    noUnofficialWarningBTN.checked = true
  } else {
    noUnofficialWarningBTN.checked = false
  }
}

function checkForDarkMode() {
  if (localStorage.getItem("darkMode") === "true") {
    darkModeBTN.checked = true
  } else {
    darkModeBTN.checked = false
  }
}

darkModeBTN.addEventListener("click", (e) => {
  if (localStorage.getItem("darkMode") === "true") {
    darkModeToggle(false)
  } else {
    darkModeToggle(true)
  }
});

noUnofficialWarningBTN.addEventListener("click", (e) => {
  if (localStorage.getItem("unofficialWarning") === "true") {
    UnofficialWarningToggle(false)
  } else {
    UnofficialWarningToggle(true)
  }
});

checkForUnofficialWarning()
checkForDarkMode()
const darkModeBTN = document.getElementById("dark-mode-toggle-btn");

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

checkForDarkMode()
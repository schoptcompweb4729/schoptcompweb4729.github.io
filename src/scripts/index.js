const sidebarBTN = document.getElementById("sidebar-btn");
const sidebar = document.getElementById("sidebar");
var unofficialWarningStatus = localStorage.getItem("unofficialWarning");

// sidebar handler
sidebarBTN.addEventListener("click", (e) => {
  console.log("hello")
  if (sidebar.classList.contains("sidebar-show")) {
    sidebar.classList.remove("sidebar-show")
    document.body.style.overflow = "auto"
  } else {
    sidebar.classList.add("sidebar-show")
    document.body.style.overflow = "hidden"
  }
});

document.addEventListener('mouseup', function(e) {
  if (!sidebar.contains(e.target) && !sidebarBTN.contains(e.target)) {
    sidebar.classList.remove("sidebar-show")
    document.body.style.overflow = "auto"
  }
});


// remove .html from url
if (window.location.pathname.includes(".html") && window.location.hostname !== "app-test.gage") {
  var newPath = window.location.pathname.slice(1,-5)
  window.location.pathname = newPath
}

// check for code blocks and run them
setTimeout(() => {
  var isCodeBlock = /\{\{[^}]*\}\}/i;
  var potentialCodeBlock = document.getElementsByClassName("codex")

  for (i = 0; i < potentialCodeBlock.length; i++) {
    if (isCodeBlock.test(potentialCodeBlock[i].innerText)) {
      potentialCodeBlock[i].innerText = eval(potentialCodeBlock[i].innerText.slice(3,-3))
    }
  }
}, 10);

const sidebarBTN = document.getElementById("sidebar-btn");
const sidebar = document.getElementById("sidebar");

document.addEventListener("DOMContentLoaded", () => {
  if (darkModeStatus === "true") {
    document.getElementsByTagName("body")[0].setAttribute("data-theme","dark");
  } else {
    document.getElementsByTagName("body")[0].removeAttribute("data-theme");
  }
}) 

if (localStorage.getItem("darkMode") === null) {
  localStorage.setItem("darkMode", "false")
}

var darkModeStatus = localStorage.getItem("darkMode");

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




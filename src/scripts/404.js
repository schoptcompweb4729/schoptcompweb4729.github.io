var uriDisplay = document.getElementById("p-uri-display")
uriDisplay.innerText = uriDisplay.innerText.replace("{{ window.location.pathname }}", `${window.location.pathname}`)
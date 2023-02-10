const urlparams = new URLSearchParams(window.location.search)
const email = urlparams.get("email")
var subject = urlparams.get("sub")
const message = urlparams.get("content")

if (subject === "" || subject === " ") {
  subject = "none"
}

var msgToSend = `Email: \`${email}\`, Subject: \`${subject}\`, Message: \`${message}\``
try {
  fetch(atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTA2NjA5NzM0NDg0OTkyMDA1MS90Mm9PSG05LWttVGsxQW14SVdzOHM2MDBTTk9jRFRBVkNxeU9ER3JrLWRaUm8yZDlSNkNZZ2V3R25TeGFGREx2NzZoRg=="), {
    method: 'POST',
    headers: {
        'Host': 'discord.com',
        'Content-Length': '31',
        'Sec-Ch-Ua': '"Not?A_Brand";v="8", "Chromium";v="108"',
        'Accept': '*/*',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Sec-Ch-Ua-Mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.125 Safari/537.36',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Origin': 'https://schoptcompweb4729.github.io/',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://schoptcompweb4729.github.io/',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-US,en;q=0.9'
    },
    body: new URLSearchParams({
        'content': msgToSend
    })
  }) // .then(window.location.href = "/support")
} catch (e) {
  alert(err)
  // window.location.href = "/support"
}
const redirToken = window.location.search.slice(1);

validTokens = {
  'email': 'mailto:plantable0@gmail.com'
};

if (redirToken == undefined || redirToken == null || redirToken == '') {
  window.location.href = "/";
} else {
  var redirectLink = eval(`validTokens.${redirToken}`)

  if (redirectLink == undefined || redirectLink == null) {
    window.location.href = "/";
  } else {
    window.location.href = redirectLink;
  }
}




function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    document.write("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 30);
    }
  }
}

function checkF1() {
  var fieldValue = document.forms["passForm"]["username"].value;
  var pw = document.forms["passForm"]["pass"].value;
  if (fieldValue.length === 0) {
    alert("Username is invalid");
    return false;
  }
  if (pw.length > 8) {
    alert("Your password must be at most 8 characters");
    return false;
  }
  if (pw.search(/[a-z]/i) < 0) {
    alert("Your password must contain at least one letter.");
    return false;
  }
  if (pw.search(/[0-9]/) < 0) {
    alert("Your password must contain at least one digit.");
    return false;
  }
  return true;
}

function checkF2(){

}
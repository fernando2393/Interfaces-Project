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

function checkCookieMail() {
  var mail = getCookie("mail");
  if (mail != "") {
    alert("Welcome again");
  } else {
    mail = document.getElementById("modalmail").value;
    if (mail != "" && mail != null) {
      setCookie("mail", mail, 30);
    }
  }
}

function checkCookiePass() {
  var password = getCookie("password");
  if (password != "") {
  } else {
    password = document.getElementById("modalpass").value;
    if (password != "" && password != null) {
      setCookie("password", password, 30);
    }
  }
}

function resetAllCookies(){
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function checkF1() {
  var fieldValue = document.forms["GlobalForm"]["username"].value;
  var pw = document.forms["GlobalForm"]["pass"].value;
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

function checkF2() {
  var name = document.forms["GlobalForm"]["FirstName"].value;
  if (name.length === 0) {
    alert("Invalid name");
    return false;
  }
  var surname = document.forms["GlobalForm"]["Surname"].value;
  if (surname.length === 0) {
    alert("Invalid surname");
    return false;
  }
  var email = document.getElementById("myEmail").value;
  if (email.length === 0) {
    alert("Invalid email");
    return false;
  }
  var date = document.getElementById("myDate").value;
  if (date.length === 0) {
    alert("Invalid date");
    return false;
  }
  return true;
}

function checkF3() {
  var address = document.forms["GlobalForm"]["Address"].value;
  if (address.length === 0) {
    alert("Invalid address");
    return false;
  }
  var payment = document.forms["GlobalForm"]["Payment"].value;
  if (payment === "Select") {
    alert("Invalid payment method");
    return false;
  }

  return true;
}

function checkModalPass(){
  var pw = document.getElementById("modalpass").value;
  if (pw.length > 8) {
    alert("Your password must be at most 8 characters");
  }
  if (pw.search(/[a-z]/i) < 0) {
    alert("Your password must contain at least one letter.");
  }
  if (pw.search(/[0-9]/) < 0) {
    alert("Your password must contain at least one digit.");
  }
}

function globalCheck() {
  if (checkF1() === false) {
    return false;
  }
  if (checkF2() === false) {
    return false;
  }
  if (checkF3() === false) {
    return false;
  }
  alert("All your data have been stored");
  return true;
}

function modalBox() {
  var modal = document.getElementById('myModal');
  modal.style.display = "block";
}

function modalBoxHide(){
  var modal = document.getElementById('myModal');
  modal.style.display = "none";
}

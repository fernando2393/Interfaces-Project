/*Test Commit*/

/*Photo Uploader*/

function previewFile() {
  var preview = document.querySelector(".photo"); //selects the query with class="photo"
  var file = document.querySelector('input[type=file]').files[0]; //Selects the first file input
  var reader = new FileReader();

  reader.onloadend = function() {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file); //reads the data as a URL
  } else {
    preview.src = "";
  }
}


/*Cookies Block*/

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
    if (mail === document.getElementById("modalmail").value) {
      return true;
    }
    else {
      alert("Invalid mail, try again.");
      return false;
    }
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
    if (password === document.getElementById("modalpass").value) {
      return true;
    } else {
      alert("Invalid password, try again.");
      return false;
    }
  } else {
    password = document.getElementById("modalpass").value;
    if (password != "" && password != null) {
      setCookie("password", password, 30);
      return true;
    }
    return false;
  }
}

function checkCookieMyMail() {
  var mail = getCookie("mail");
  if (mail != "") {
    document.cookie = "mail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    mail = document.getElementById("myEmail").value;
    setCookie("mail", mail, 30);
  } else {
    mail = document.getElementById("myEmail").value;
    if (mail != "" && mail != null) {
      setCookie("mail", mail, 30);
    }
  }
}

function checkCookieMyPassword() {
  var password = getCookie("password");
  if (password != "") {
    document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    password = document.getElementById("pass").value;
    setCookie("password", password, 30);
  } else {
    password = document.getElementById("pass").value;
    if (password != "" && password != null) {
      setCookie("password", password, 30);
    }
  }
}

function checkCookieUsrName() {
  var usr = getCookie("usr");
  if (usr != "") {
    document.cookie = "usr=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    usr = document.getElementById("Username").value;
    setCookie("usr", usr, 30);
  } else {
    usr = document.getElementById("Username").value;
    if (usr != "" && usr != null) {
      setCookie("usr", usr, 30);
    }
  }
}

function checkCookieFName() {
  var fname = getCookie("fname");
  if (fname != "") {
    document.cookie = "fname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    fname = document.getElementById("FirstName").value;
    setCookie("fname", fname, 30);
  } else {
    fname = document.getElementById("FirstName").value;
    if (fname != "" && fname != null) {
      setCookie("fname", fname, 30);
    }
  }
}

function checkCookieSurname() {
  var surname = getCookie("surname");
  if (surname != "") {
    document.cookie = "surname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    surname = document.getElementById("Surname").value;
    setCookie("surname", surname, 30);
  } else {
    surname = document.getElementById("Surname").value;
    if (surname != "" && surname != null) {
      setCookie("surname", surname, 30);
    }
  }
}

function checkCookieAddress() {
  var address = getCookie("address");
  if (address != "") {
    document.cookie = "address=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    address = document.getElementById("Address").value;
    setCookie("address", address, 30);
  } else {
    address = document.getElementById("Address").value;
    if (address != "" && address != null) {
      setCookie("address", address, 30);
    }
  }
}

function setPass() {
  document.getElementById("pass").value = getCookie("password");
}

function setMail() {
  document.getElementById("myEmail").value = getCookie("mail");
}

function setUsrName() {
    document.getElementById("Username").value = getCookie("usr");
}

function setFName() {
    document.getElementById("FirstName").value = getCookie("fname");
}

function setSurname() {
    document.getElementById("Surname").value = getCookie("surname");
}

function setAddress() {
    document.getElementById("Address").value = getCookie("address");
}



function resetAllCookies() {
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

/*Checks Block*/

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

function checkModalPass() {
  var pw = document.getElementById("modalpass").value;
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

function modalBoxHide() {
  if ((checkModalPass() === true && checkCookiePass() === true) && (checkCookieMail() === true)) {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }
}

/*Show payment method block*/

function showPay(){
  var x= document.getElementById("myPayment").value;
  switch(x){
    case "CreditCard":
      document.getElementById("creditCard").style.visibility= "visible";
      document.getElementById("bank").style.visibility= "hidden";
      document.getElementById("paypal").style.visibility= "hidden";
      break;

    case "Paypal":
      document.getElementById("creditCard").style.visibility= "hidden";
      document.getElementById("bank").style.visibility= "hidden";
      document.getElementById("paypal").style.visibility= "visible";
      break;

    case "BankTransfer":
      document.getElementById("creditCard").style.visibility= "hidden";
      document.getElementById("bank").style.visibility= "visible";
      document.getElementById("paypal").style.visibility= "hidden";
      break;

    default: //Bank Tranfer
      document.getElementById("creditCard").style.visibility= "hidden";
      document.getElementById("bank").style.visibility= "hidden";
      document.getElementById("paypal").style.visibility= "hidden";
  }
}

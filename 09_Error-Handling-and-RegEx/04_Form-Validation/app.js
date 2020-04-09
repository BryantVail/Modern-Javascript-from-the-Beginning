//form validation
//app.js

//form blur event
document.querySelector("#name").addEventListener("blur", validateName);
document.querySelector("#zipcode").addEventListener("blur", validateZip);
document.querySelector("#email").addEventListener("blur", validateEmail);
document.querySelector("#phone").addEventListener("blur", validatePhone);

function validateName() {
  const name = document.querySelector("#name");

  const regEx = /^[A-Za-z']{2,10}/i;

  if (!regEx.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}

function validateZip() {
  const zipcode = document.querySelector("#zipcode");

  //start [0-9]{5}, then optional '-'[0-9]{4}
  const regEx = /^[0-9]{5}(-?)([0-9]{4})?$/;

  if (!regEx.test(zipcode.value)) {
    zipcode.classList.add("is-invalid");
  } else {
    zipcode.classList.remove("is-invalid");
  }
}

function validateEmail() {
  const email = document.querySelector("#email");

  const regEx = /^([A-Za-z0-9_\.\-]+)@([a-zA-Z0-9\.\-]+)\.([a-zA-Z]){2,5}$/;

  if (!regEx.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}

function validatePhone() {
  const phone = document.querySelector("#phone");

  regEx = /^\(?\d{3})\d{4}$/;

  if (!regEx.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}

//

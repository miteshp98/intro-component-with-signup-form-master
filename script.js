"use strict";

const submitBtn = document.querySelector(".submit-btn");
const inputElem = document.querySelectorAll("input");
const errorMsg = document.querySelectorAll(".error-msg");
const errorImg = document.querySelectorAll(".error-img");

function checkValidEmail() {
  const regex = /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let emailAddress = regex.test(inputElem[2].value);

  if (!emailAddress) {
    showErrors(2, `<i>Looks like this is not an email</i>`);
    hideError(2);
    return false;
  } else {
    hideError(2);
    return true;
  }
}

function checkValidPassword() {
  const regex = /^[a-zA-Z0-9#@]{6,}$/;
  const minNumbersOfChar = 8;

  const userPassword = regex.test(inputElem[3].value);

  if (!userPassword || userPassword.length < minNumbersOfChar) {
    showErrors(3, `<i>Passwords cannot be empty</i>`);
    hideError(3);
    return false;
  } else {
    hideError(3);
    return true;
  }
}

function hideError(num) {
  setTimeout(() => {
    errorMsg[num].classList.remove("visible");
    errorImg[num].classList.remove("visible");
    inputElem[num].classList.remove("error-border-color");
  }, 3000);
}

function showErrors(index, message) {
  errorImg[index].classList.add("visible");
  errorMsg[index].classList.add("visible");
  inputElem[index].classList.add("error-border-color");
  errorMsg[index].innerHTML = message;
}

function checkValidNames() {
  let firstName = inputElem[0].value;
  let lastName = inputElem[1].value;
  let isValid = true;

  if (!firstName) {
    showErrors(0, `<i>FirstName cannot be empty</i>`);
    hideError(0);
    isValid = false;
  }

  if (!lastName) {
    showErrors(1, `<i>LastName cannot be empty</i>`);
    hideError(1);
    isValid = false;
  }
  return true;
}

submitBtn.addEventListener("click", function (e) {
  const isEmailValid = checkValidEmail();
  const isNamesValid = checkValidNames();
  const isPasswordValid = checkValidPassword();

  if (!isEmailValid || !isNamesValid || !isPasswordValid) {
    e.preventDefault();
  } else {
    e.preventDefault();
    alert("Succes");
  }
});

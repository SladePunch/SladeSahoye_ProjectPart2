"use strict";

const $ = (selector) => {
  return document.querySelector(selector);
};

const ready = () => {
  const emailPattern = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  return emailPattern;
};

// const areInputsFilled = () => {
//   const name = $("#client-name").value.trim();
//   const email = $("#client-email").value.trim();

//   return name !== "" && email !== "";
// };

const showError = (field, errorText) => {
  const errorElement = document.createElement("small");
  field.classList.add("error");
  errorElement.classList.add("error-text");
  errorElement.innerText = errorText;
  field.after(errorElement);
};

const clearError = () => {
  $("#client-email").classList.remove("error");
  $("#client-name").classList.remove("error");
  document
    .querySelectorAll(".error-text")
    .forEach((errorText) => errorText.remove());
};

const submit = (event) => {
  event.preventDefault();
  clearError();

  const email = $("#client-email").value.trim();
  const name = $("#client-name").value.trim();
  const emailPattern = ready();
  const isEmailValid = emailPattern.test(email);

  if (name === "") {
    showError($("#client-name"), "name is required");
  }

  if (!isEmailValid || email === "") {
    showError($("#client-email"), "email is invalid");
  }
  
  if (name !== "" && email !== "" && isEmailValid) {
    alert("Congratulations! you've booked a call.");
    $("#client-email").value = "";
    $("#client-name").value = "";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  $(".reserve-btn").addEventListener("click", submit);
});

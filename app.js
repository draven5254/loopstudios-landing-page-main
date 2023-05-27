"use strict";

const openButton = document.querySelector(".openbtn");
const closeButton = document.querySelector(".closebtn");
const navbar = document.querySelector(".navbar");

openButton.addEventListener("click", () => {
  navbar.classList.add("show");
});

closeButton.addEventListener("click", () => {
  navbar.classList.remove("show");
});

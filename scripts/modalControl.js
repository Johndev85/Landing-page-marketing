"use strict"

//open modal
const openModal = () => {
  const modal = document.querySelectorAll(".modal-disappear")
  Array.prototype.slice.call(modal).forEach(function (element) {
    element.classList.remove("modal-disappear")
    element.classList.add("modal-is-active")
  })
}

//close modal
const closeModal = () => {
  const modal = document.querySelectorAll(".modal-is-active")
  Array.prototype.slice.call(modal).forEach(function (element) {
    element.classList.remove("modal-is-active")
    element.classList.add("modal-disappear")
  })
}

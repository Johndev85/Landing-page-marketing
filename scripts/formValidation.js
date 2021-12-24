"use strict"

const formValidation = () => {
  const forms = document.querySelectorAll(".needs-validation")

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        console.log(event.target.value)

        form.classList.add("was-validated")
      },
      false
    )
  })
}

formValidation()

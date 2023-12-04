// alert message for submit button
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Your Message Sent Successfuly', 'success')
  })
}
// Validation for form 
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()




  // typ
  // var jobTitles = ["Software Engineer", "Photographer"];
  // var index = 0;
  // var currentText = '';
  // var speed = 100; // Adjust the speed as needed

  // function type() {
  //   if (index < jobTitles.length) {
  //     currentText = jobTitles[index].slice(0, currentText.length + 1);
  //     document.getElementById('typedText').textContent = currentText;
  //     if (currentText === jobTitles[index]) {
  //       index++;
  //       setTimeout(erase, 1000); // Wait for a second before erasing
  //     } else {
  //       setTimeout(type, speed);
  //     }
  //   } else {
  //     index = 0; // Reset index for infinite loop
  //     setTimeout(type, speed);
  //   }
  // }

  // function erase() {
  //   if (currentText.length > 0) {
  //     currentText = currentText.slice(0, currentText.length - 1);
  //     document.getElementById('typedText').textContent = currentText;
  //     setTimeout(erase, speed);
  //   } else {
  //     setTimeout(type, speed);
  //   }
  // }

  // // Start the typing effect
  // type();
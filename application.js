const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener("click", sendApplication );

function sendApplication() {
    let gender = ""
    let genderRadioButtons = document.getElementsByName('gender');

    for (let i = 0; i < genderRadioButtons.length; i++) {
      if (genderRadioButtons[i].checked) {
        gender = genderRadioButtons[i].value;
        break;
      }
    }

    let body = 'New registration with following data: <ul>' +
               '<li>name: ' + document.getElementById('name').value + '</li>' +
               '<li>surname: ' + document.getElementById('surname').value + '</li>' +
               '<li>gender: ' + gender + '</li>' +
               '<li>birth date: ' + document.getElementById('birthDate').value + '</li>' +
               '<li>address: ' + document.getElementById('address').value + '</li>' +
               '<li>city: ' + document.getElementById('city').value + '</li>' +
               '<li>zip: ' + document.getElementById('zip').value + '</li>' +
               '<li>email: ' + document.getElementById('email').value + '</li>' +
               '<li>phone: ' + document.getElementById('phone').value + '</li></ul>' +
               '<br>List of courses:<ul>';

    let courseCheckboxes = document.getElementsByName('course');
    for (let i = 0; i < courseCheckboxes.length; i++) {
        if (courseCheckboxes[i].checked) {
            body = body + '<li>' + courseCheckboxes[i].value + '</li>';
        }
      }
    body = body + '</ul>'
               
    Email.send({
        SecureToken : "put-secure-token-here",
        To : "olga.andreyevskikh@gmail.com",
        From : "olga.andreyevskikh@gmail.com",
        Subject : "New registration at Krioukov Academy",
        Body : body
    }).then(
      message => alert(message)
    );
}



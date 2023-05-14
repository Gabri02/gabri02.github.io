document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  if (!validateEmail(document.getElementById('Email1').value)) {
    alert('Indirizzo email non valido!');
    return;
  }

  emailjs.send("service_y6fyboq", "template_fd54yeu", {
    Email1: document.getElementById('Email1').value,
    messaggio: document.getElementById('messaggio').value,
  }).then(function (response) {
    console.log('SUCCESS!', response.status, response.text);
    alert('Email inviata con successo!');
  }, function (error) {
    console.log('FAILED...', error);
    alert('Errore nell\'invio dell\'email.');
  });
});

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

emailjs.init("FT9ZYNHp3peaBCHrE");

document.getElementById('contact-form2').addEventListener('submit', function (event) {
  event.preventDefault();

  if (!validateEmail(document.getElementById('Email2').value)) {
    alert('Indirizzo email non valido!');
    return;
  }

  emailjs.send("service_y6fyboq", "template_fd54yeu", {
    Email2: document.getElementById('Email2').value,
    messaggio2: document.getElementById('messaggio2').value,
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

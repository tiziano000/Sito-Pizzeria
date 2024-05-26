let form = document.getElementById("registrazione");
let inputs = document.querySelectorAll(".obbligatorio");
let nome = document.getElementById("nome");
let mail = document.getElementById("email");
let telefono = document.getElementById("telefono");
let privacy = document.getElementById("privacy");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  for (let index = 0; index < inputs.length; index++) {
    if (campoObbligatorio(inputs[index])) {
      inputs[index].classList.add("errore");
    } else {
      inputs[index].classList.remove("errore");
    }
    if (controllaNome(nome)) {
      nome.classList.remove("errore");
      nome.nextElementSibling.classList.remove("avviso");
      nome.nextElementSibling.innerHTML = "";
    } else {
      nome.classList.add("errore");
      nome.nextElementSibling.classList.add("avviso");
      nome.nextElementSibling.innerHTML = "Il campo nome e' obbligatorio";
    }
  }
  if (controllaEmail(mail)) {
    mail.classList.remove("errore");
    mail.nextElementSibling.classList.remove("avviso");
    mail.nextElementSibling.innerHTML = "";
  } else {
    mail.classList.add("errore");
    mail.nextElementSibling.classList.add("avviso");
    mail.nextElementSibling.innerHTML = "Il campo email e' obbligatorio";
  }
  if (controllaTelefono(telefono)) {
    telefono.classList.remove("errore");
    telefono.nextElementSibling.classList.remove("avviso");
    telefono.nextElementSibling.innerHTML = "";
  } else {
    telefono.classList.add("errore");
    telefono.nextElementSibling.classList.add("avviso");
    telefono.nextElementSibling.innerHTML = "Il telefono e' obbligatorio";
  }
  checkBox(privacy);
  let errori = document.querySelectorAll(".errore");
  if (errori.length == 0) {
    this.submit();
  }
});

// controllo degli inputs
function campoObbligatorio(input) {
  if (input.value.trim().length == 0) {
    return true;
  } else {
    return false;
  }
}
// funzione controlla nome
function controllaNome(nome) {
  const regex = /^[a-zA-Z ]{2,30}$/;
  return regex.test(nome.value.trim());
}
//funzione controlla email
function controllaEmail(email) {
  let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email.value.trim());
}
// funzione controlla telefono
function controllaTelefono(telefono) {
  let regex =
    /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/;
  return regex.test(telefono.value.trim());
}
//funzione controllo checkBox
function checkBox(privacy) {
  if (privacy.checked) {
    privacy.classList.remove("errore");
    privacy.nextElementSibling.nextElementSibling.innerHTML = "";
  } else {
    privacy.classList.add("errore");
    privacy.nextElementSibling.nextElementSibling.innerHTML =
      "Devi accettare le condizioni di utilizzo";
  }
}

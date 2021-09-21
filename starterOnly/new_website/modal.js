function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg    = document.querySelector(".bground");
const modalBtn   = document.querySelectorAll(".modal-btn");
const formData   = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close"); // Closing button
const formModal  = document.getElementById("formModal");

//success elements
const successModal = document.querySelector("#success-modal");
const closeSucessModal = document.querySelector("#success-modal__close");

// Elements of the form
var firstName = document.querySelector("#first");
var lastName  = document.querySelector("#last");
var email     = document.querySelector("#email");
var birthdate = document.querySelector("#birthdate");
var quantity  = document.querySelector("#quantity");
var locationIn = document.querySelector('input[name="location"]');
var accept    = document.querySelector("#checkbox1")

// Error divisions
var firstNameError = document.querySelector("#firstName-error");
var lastNameError = document.querySelector("#lastName-error");
var emailError = document.querySelector("#email-error");
var birthdateError = document.querySelector("#birthdate-error");
var locationError = document.querySelector("#location-error");
var acceptError = document.querySelector("#accept-error");
var quantityError = document.querySelector("#quantity-error");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// check firstname
function checkFirstName () {
  if (firstName.value.length < 2) {
    firstNameError.innerHTML = "Prénom non valide";
    firstNameError.style.display = "block";
    return false;
  } else {
    firstNameError.style.display = "none";
    return true;
  }
}

// check lastname
function checkLastName () {
  if (lastName.value.length < 2) {
    lastNameError.innerHTML = "Nom non valide";
    lastNameError.style.display = "block";
    return false;
  } else {
    lastNameError.style.display = "none";
    return true;
  }
}

// email regex
let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// email validity check
function checkEmail() {
  if (!email.value) {
    emailError.innerHTML = "Mail non valide";
    emailError.style.display = "block";
  } else if(emailRegExp.exec(email.value) == null) {
    emailError.innerHTML = "L'addresse n'est pas valide";
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
    return true;
  }
}

// check quantity
function checkParticipations () {
  if (!quantity.value || quantity.value > 99 ) {
    quantityError.innerHTML = "Number of participations must be between 0 and 99";
    quantityError.style.display = "block";
    return false;
  } else {
    quantityError.style.display = "none";
    return true;
  }
}

// radio option check
function checkAccept() {
  if (!accept.checked) {
    acceptError.innerHTML = "Veuillez accepter les conditions générales d'utilisation";
    acceptError.style.display = "block";
    return false;
  } else {
    acceptError.style.display = "false";
    return true;
  }
}


// putting location in arrays and walking through it
let locationArray = [
	document.getElementById('location1'),
	document.getElementById('location2'),
	document.getElementById('location3'),
	document.getElementById('location4'),
	document.getElementById('location5'),
	document.getElementById('location6')
];

function checkLocation() {
  var valid = false;
  for (let i = 0; i < locationArray.length; i++) {
    console.log(locationArray[i].checked);
    if (locationArray[i].checked) {
      valid = true;
    } 
  }
  if (!valid) {
    locationError.innerHTML = "Veuillez renseigner une ville";
    locationError.style.display = "block";
    return false
  } else {
    locationError.style.display = "none";
    return true;
  }
}

// function checkBirthdate
function checkBirthdate() {
  var convertedDate = new Date(birthdate.value);
  var currentDate = new Date();
  if (!birthdate.value) {
    console.log("birthdate error");
		birthdateError.innerHTML = "Veuillez renseigner une date de naissance"; 
		birthdateError.style.display = "block"; 
		return false; 
	} else if(convertedDate >= currentDate){ 
		birthdateError.innerHTML = "La date de naissance n'est pas valide"; 
		birthdateError.style.display = "block"; 
		return false; 
	} else{ 
		birthdateError.style.display = "none"; 
		return true; 
	}
}

// open the success modal
function launchSuccessModal() {
  successModal.style.display = "block";
}

closeSucessModal.addEventListener("click", e => {
  successModal.style.display = "none";
});

// check the submit
function submitForm (e) {
  console.log("test");
  e.preventDefault();
  if (checkFirstName() && checkLastName() && checkEmail() && checkBirthdate() && checkParticipations() && checkAccept() && checkLocation()) {
    formModal.reset();
    closeModal()
    launchSuccessModal();
    return true;
  }
}
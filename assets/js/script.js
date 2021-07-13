//Crypto Buttons
var bitcoinButton = document.querySelector(".bitcoin-button")
var ethereumButton = document.querySelector(".ethereum-button")
var tetherButton = document.querySelector(".tether-button")
var binanceButton = document.querySelector(".binance-button")
var dogeButton = document.querySelector(".doge-button")




//Bitcoin Button
bitcoinButton.addEventListener("click", function (event) {
  console.log(event)
  var crypto = 'bitcoin';

  


})


// Ethereum Button
ethereumButton.addEventListener("click", function (event) {
  console.log(event)
  var redirectUrl = ("./indexCoinSelected.html")
  document.location.replace(redirectUrl)

})


// Tether Button
tetherButton.addEventListener("click", function (event) {
  console.log(event)
  var redirectUrl = ("./indexCoinSelected.html")
  document.location.replace(redirectUrl)

})


// Binance Coin Button
binanceButton.addEventListener("click", function (event) {
  console.log(event)
  var redirectUrl = ("./indexCoinSelected.html")
  document.location.replace(redirectUrl)

})


//Doge Button
dogeButton.addEventListener("click", function (event) {
  console.log(event)
  var redirectUrl = ("./indexCoinSelected.html")
  document.location.replace(redirectUrl)

})


//localStorage Email Field
var formInputField = document.getElementById("name-input");
var emailInputField = document.getElementById("email-input")
var formArrayName = [];
var formArrayEmail = [];
var formSubmitButton = document.querySelector(".email-submit");

formSubmitButton.addEventListener('click', function storeName(event) {
  event.preventDefault();
  formArrayName.push(formInputField.value);
  formArrayEmail.push(emailInputField.value);
  localStorage.setItem('name', formArrayName);
  localStorage.setItem('email', formArrayEmail);
  console.log(localStorage);
});

var credList = document.querySelector('.credlist');
var dumpList = document.querySelector('.dumplist');

dumpList.addEventListener('click', function (event) {
  event.preventDefault();
});

credList.addEventListener('click', function (event) {
 event.preventDefault();
 
  dumpList.innerHTML = localStorage.getItem('name', formArrayName) + ' , ' + localStorage.getItem('email', formArrayEmail);
  if(formInputField && emailInputField == '') {
    dumpList.style.visibility = 'hidden';
  }

})
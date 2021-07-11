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
var formArray = [];
var formSubmitButton = document.querySelector(".email-submit");

formSubmitButton.addEventListener('click', function storeName(event) {
  event.preventDefault();
  formArray.push(formInputField.value);
  localStorage.setItem('name', formArray);
  console.log(localStorage);
})

//displayheader onload
document.addEventListener('load', function displayName(event) {
  event.preventDefault();
  var headerText = document.getElementById('localName');
  var localPush = localStorage.getItem('name', formArray);
  
  headerText.innerHTML = localPush;
});
























// console.log(data.results[i].link);
// https://cors-anywhere.herokuapp.com/
// https://salty-mountain-68764.herokuapp.com/
  // for (var i = 0; i < data.length; i++) {
    //     var userName = document.createElement('h3');
    //     var issueTitle = document.createElement('p');
    //     userName.textContent = data[i].user.login;
    //     issueTitle.textContent = data[i].title;
    //     issueContainer.append(userName);
    //     issueContainer.append(issueTitle);
    //   }
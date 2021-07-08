// bitcoin button
var bitcoinButton = document.querySelector(".bitcoin-button")


bitcoinButton.addEventListener("click", function (event) {
console.log(event)

var crypto = 'bitcoin';

var redirectUrl = ("./indexCoinSelected.html")

document.location.replace(redirectUrl)

})
// ethereum
var ethereumButton = document.querySelector(".ethereum-button")

ethereumButton.addEventListener("click", function (event) {
console.log(event)

var redirectUrl = ("./indexCoinSelected.html")

document.location.replace(redirectUrl)

})
// tether button
var tetherButton = document.querySelector(".tether-button")

tetherButton.addEventListener("click", function (event) {
console.log(event)

var redirectUrl = ("./indexCoinSelected.html")

document.location.replace(redirectUrl)

})
// binance coin button
var binanceButton = document.querySelector(".binance-button")

binanceButton.addEventListener("click", function (event) {
console.log(event)

var redirectUrl = ("./indexCoinSelected.html")

document.location.replace(redirectUrl)

})
// doge button
var dogeButton = document.querySelector(".doge-button")

dogeButton.addEventListener("click", function (event) {
console.log(event)

var redirectUrl = ("./indexCoinSelected.html")

document.location.replace(redirectUrl)

})





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
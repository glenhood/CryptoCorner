//Variables
var newsEl = document.querySelector('.news');
var newsElTwo = document.querySelector('.news-two');
var newsElThree = document.querySelector('.news-three');
var newsElFour = document.querySelector('.news-four');
var newsElFive = document.querySelector('.news-five');
var newsElSix = document.querySelector('.news-six');
var newsElSeven = document.querySelector('.news-seven');
var newsElEight = document.querySelector('.news-eight');
var newsElNine = document.querySelector('.news-nine');
var newsElTen = document.querySelector('.news-ten');

coin= document.querySelector('.coin').id;
console.log(coin)

// var tickerEl = document.querySelector('.ticker');

//Fetch Call: News IO
fetch(`https://salty-mountain-68764.herokuapp.com/https://newsdata.io/api/1/news?apikey=pub_51739a26cf8480212b56d293b1579383eb0&q=${coin}&language=en`)
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
        //News Title
        var textEl = document.querySelector('#news-title');
        textEl.textContent = data.results[0].title;
        newsEl.append(textEl);
        console.log(data.results[0].title);
        

        var urlEl = document.querySelector('#news-url');
        urlEl = document.createElement('a');
        urlEl.setAttribute('href', data.results[0].link);
        urlEl.textContent = data.results[0].link;
        newsEl.append(urlEl);

        //News Title
        var textEl = document.querySelector('#news-title-two');
        textEl.textContent = data.results[1].title;
        newsElTwo.append(textEl);
        console.log(data.results[1].title);
        

        var urlEl = document.querySelector('#news-url-two');
        urlEl = document.createElement('a');
        urlEl.setAttribute('href', data.results[1].link);
        urlEl.textContent = data.results[1].link;
        newsElTwo.append(urlEl);


        //News Title
        var textEl = document.querySelector('#news-title-three');
        textEl.textContent = data.results[2].title;
        newsElThree.append(textEl);
        console.log(data.results[2].title);
        

        var urlEl = document.querySelector('#news-url-three');
        urlEl = document.createElement('a');
        urlEl.setAttribute('href', data.results[2].link);
        urlEl.textContent = data.results[2].link;
        newsElThree.append(urlEl);


        //News Title
        var textEl = document.querySelector('#news-title-four');
        textEl.textContent = data.results[3].title;
        newsElFour.append(textEl);
        console.log(data.results[3].title);
        

        var urlEl = document.querySelector('#news-url-four');
        urlEl = document.createElement('a');
        urlEl.setAttribute('href', data.results[3].link);
        urlEl.textContent = data.results[3].link;
        newsElFour.append(urlEl);

        //News Title
        var textEl = document.querySelector('#news-title-five');
        textEl.textContent = data.results[4].title;
        newsElFive.append(textEl);
        console.log(data.results[4].title);
        

        var urlEl = document.querySelector('#news-url-five');
        urlEl = document.createElement('a');
        urlEl.setAttribute('href', data.results[4].link);
        urlEl.textContent = data.results[4].link;
        newsElFive.append(urlEl);

        //News Title
        var textEl = document.querySelector('#news-title-six');
        textEl.textContent = data.results[5].title;
        newsElSix.append(textEl);
        console.log(data.results[5].title);
        

        var urlEl = document.querySelector('#news-url-six');
        urlEl = document.createElement('a');
        urlEl.setAttribute('href', data.results[5].link);
        urlEl.textContent = data.results[5].link;
        newsElSix.append(urlEl);

        //News Title
        var textEl = document.querySelector('#news-title-seven');
        textEl.textContent = data.results[6].title;
        newsElSeven.append(textEl);
        console.log(data.results[6].title);
        

        var urlEl = document.querySelector('#news-url-seven');
        urlEl = document.createElement('a');
        urlEl.setAttribute('href', data.results[6].link);
        urlEl.textContent = data.results[6].link;
        newsElSeven.append(urlEl);

        //News Title
        var textEl = document.querySelector('#news-title-eight');
        textEl.textContent = data.results[7].title;
        newsElEight.append(textEl);
        console.log(data.results[7].title);
        

        var urlEl = document.querySelector('#news-url-eight');
        urlEl = document.createElement('a');
        urlEl.setAttribute('href', data.results[7].link);
        urlEl.textContent = data.results[7].link;
        newsElEight.append(urlEl);

        //News Title
        var textEl = document.querySelector('#news-title-nine');
        textEl.textContent = data.results[8].title;
        newsElNine.append(textEl);
        console.log(data.results[8].title);
        

        var urlEl = document.querySelector('#news-url-nine');
        urlEl = document.createElement('a');
        urlEl.setAttribute('href', data.results[8].link);
        urlEl.textContent = data.results[8].link;
        newsElNine.append(urlEl);

    
});

var tickerEl = document.querySelector('.ticker')
var tickerElOne = document.querySelector('.ticker-one')
var tickerElTwo = document.querySelector('.ticker-two')
var tickerElThree = document.querySelector('.ticker-three')
var tickerElFour = document.querySelector('.ticker-four')
var tickerElFive = document.querySelector('.ticker-five')


// function ticker()   {
//     var searchTerm;
//     if(coin==='binance'){
//         searchTerm='binancecoin'
//     }else{searchTerm=coin}
    fetch(`https://salty-mountain-68764.herokuapp.com/https://api.coingecko.com/api/v3/coins/${coin}/tickers?exchange_ids=exchange-ids&include_exchange_logo=include_exchange_logo`)
    .then(response => {
    return response.json();
    // console.log(response);


    
})
// }
// ticker()
.then(data => {
    console.log(data);
        var textEl = document.querySelector('#coinid');
        textEl.textContent = data.tickers[1].base;
        tickerEl.append(textEl)
        

        var textEl = document.querySelector('#name');
        textEl.textContent = data.tickers[1].coin_id;
        tickerElOne.append(textEl)

        var textEl = document.querySelector('#currency');
        textEl.textContent = data.tickers[1].target;
        tickerElTwo.append(textEl)

        var textEl = document.querySelector('#currentvalue');
        textEl.textContent = data.tickers[1].last;
        tickerElThree.append(textEl)

        var textEl = document.querySelector('#tradeurl');
        textEl.textContent = data.tickers[1].trade_url;
        tickerElFour.append(textEl)

        var textEl = document.querySelector('#trustscore');
        textEl.textContent = data.tickers[1].trust_score;
        tickerElFive.append(textEl)

  
  })




var mainButton = document.getElementById('main-button');


  //Bitcoin Button
mainButton.addEventListener("click", function (event) {
    console.log(event.target)
    redirectMain = ("./index.html");
    document.location.replace(redirectMain)
});
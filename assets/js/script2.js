

var newsEl = document.querySelector('.news');
// var urlLink = document.getElementById('url');
var tickerEl = document.querySelector('.ticker');


fetch("https://salty-mountain-68764.herokuapp.com/https://newsdata.io/api/1/news?apikey=pub_486ab7a2d3cb5f723e5c9de7e68dac7e0ba&q=bitcoin&language=en")
.then(response => {
    return response.json();
    // console.log(response);
})
.then(data => {
    console.log(data);
    // for (var i = 0; i < data.results.length; i++) {
       
        var textEl = document.querySelector('#one-one');
        textEl.textContent = data.results[0].title;
        newsEl.append(textEl)

        var urlEl = document.querySelector('#one-two');
        urlEl.textContent = data.results[0].link;
        newsEl.append(urlEl);
    
});




var tickerEl = document.querySelector('.ticker')

fetch("https://salty-mountain-68764.herokuapp.com/https://api.coingecko.com/api/v3/exchanges/bitcoin_com/tickers")
.then(response => {
    return response.json();
    // console.log(response);
})
.then(data => {
    console.log(data);
        var textEl = document.createElement('div');
        textEl.textContent = data.tickers[0].base;
        tickerEl.append(textEl)

        var textEl = document.createElement('div');
        textEl.textContent = data.tickers[0].coin_id;
        tickerEl.append(textEl)

        var textEl = document.createElement('div');
        textEl.textContent = data.tickers[0].target;
        tickerEl.append(textEl)

        var textEl = document.createElement('div');
        textEl.textContent = data.tickers[0].last;
        tickerEl.append(textEl)

        var textEl = document.createElement('div');
        textEl.textContent = data.tickers[0].trade_url;
        tickerEl.append(textEl)

        var textEl = document.createElement('div');
        textEl.textContent = data.tickers[0].trust_score;
        tickerEl.append(textEl)

        // var urlEl = document.createElement('div');
        // urlEl.textContent = data.results[i].link;
        // newsEl.append(urlEl);
    
});
    // for (var i = 0; i < data.results.length; i++) {
       
    //     // var textEl = document.createElement('div');
    //     // textEl.textContent = data.results[i].title;
    //     // titleEl.append(textEl)

    //     // var urlEl = document.createElement('div');
    //     // urlEl.textContent = data.results[i].link;
    // //     // titleEl.append(urlEl);
    // }
// });

//Variables
var newsEl = document.querySelector('.news');
var tickerEl = document.querySelector('.ticker');




//Fetch Call: News IO
fetch("https://salty-mountain-68764.herokuapp.com/https://newsdata.io/api/1/news?apikey=pub_516dfa61485d9a13df33b7be9a7ff5a6ec0&q=bitcoin&language=en")
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
        //News Title
        var textEl = document.querySelector('#news-one');
        textEl.textContent = data.results[0].title;
        newsEl.append(textEl)

        var urlEl = document.querySelector('#news-one');
        urlEl.textContent = data.results[0].link;
        document.createAttribute("class", "href=data.results[0].link")
        newsEl.append(urlEl);


        //News Title
        var textEl = document.querySelector('#news-two');
        textEl.textContent = data.results[1].title;
        newsEl.append(textEl)

        var urlEl = document.querySelector('#news-two');
        urlEl.textContent = data.results[1].link;
        newsEl.append(urlEl);


        //News Title
        var textEl = document.querySelector('#news-three');
        textEl.textContent = data.results[2].title;
        newsEl.append(textEl)

        var urlEl = document.querySelector('#news-three');
        urlEl.textContent = data.results[2].link;
        newsEl.append(urlEl);


        //News Title
        var textEl = document.querySelector('#news-four');
        textEl.textContent = data.results[3].title;
        newsEl.append(textEl)

        var urlEl = document.querySelector('#news-four');
        urlEl.textContent = data.results[3].link;
        newsEl.append(urlEl);

        //News Title
        var textEl = document.querySelector('#news-five');
        textEl.textContent = data.results[4].title;
        newsEl.append(textEl)

        var urlEl = document.querySelector('#news-five');
        urlEl.textContent = data.results[4].link;
        newsEl.append(urlEl);

        //News Title
        var textEl = document.querySelector('#news-six');
        textEl.textContent = data.results[5].title;
        newsEl.append(textEl)

        var urlEl = document.querySelector('#news-six');
        urlEl.textContent = data.results[5].link;
        newsEl.append(urlEl);

        //News Title
        var textEl = document.querySelector('#news-seven');
        textEl.textContent = data.results[6].title;
        newsEl.append(textEl)

        var urlEl = document.querySelector('#news-seven');
        urlEl.textContent = data.results[6].link;
        newsEl.append(urlEl);

        //News Title
        var textEl = document.querySelector('#news-eight');
        textEl.textContent = data.results[7].title;
        newsEl.append(textEl)

        var urlEl = document.querySelector('#news-eight');
        urlEl.textContent = data.results[7].link;
        newsEl.append(urlEl);

        //News Title
        var textEl = document.querySelector('#news-nine');
        textEl.textContent = data.results[8].title;
        newsEl.append(textEl)

        var urlEl = document.querySelector('#news-nine');
        urlEl.textContent = data.results[8].link;
        newsEl.append(urlEl);

        //News Title
        var textEl = document.querySelector('#news-ten');
        textEl.textContent = data.results[9].title;
        newsEl.append(textEl)

        var urlEl = document.querySelector('#news-ten');
        urlEl.textContent = data.results[9].link;
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

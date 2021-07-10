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
        newsEl.append(textEl);
        console.log(data.results[1].title);
        

        var urlEl = document.querySelector('#news-url-two');
        urlEl = document.createElement('a');
        urlEl.setAttribute('href', data.results[1].link);
        urlEl.textContent = data.results[1].link;
        newsEl.append(urlEl);


        //News Title
        var textEl = document.querySelector('#news-title-three');
        textEl.textContent = data.results[2].title;
        newsEl.append(textEl);
        console.log(data.results[2].title);
        

        var urlEl = document.querySelector('#news-url-three');
        urlEl = document.createElement('a');
        urlEl.setAttribute('href', data.results[2].link);
        urlEl.textContent = data.results[2].link;
        newsEl.append(urlEl);


        //News Title
        var textEl = document.querySelector('#news-title-four');
        textEl.textContent = data.results[3].title;
        newsEl.append(textEl);
        console.log(data.results[3].title);
        

        var urlEl = document.querySelector('#news-url-four');
        urlEl = document.createElement('a');
        urlEl.setAttribute('href', data.results[3].link);
        urlEl.textContent = data.results[3].link;
        newsEl.append(urlEl);

        //News Title
        var textEl = document.querySelector('#news-title-five');
        textEl.textContent = data.results[4].title;
        newsEl.append(textEl);
        console.log(data.results[4].title);
        

        var urlEl = document.querySelector('#news-url-five');
        urlEl = document.createElement('a');
        urlEl.setAttribute('href', data.results[4].link);
        urlEl.textContent = data.results[4].link;
        newsEl.append(urlEl);

        //News Title
        var textEl = document.querySelector('#news-title-six');
        textEl.textContent = data.results[5].title;
        newsEl.append(textEl);
        console.log(data.results[5].title);
        

        var urlEl = document.querySelector('#news-url-six');
        urlEl = document.createElement('a');
        urlEl.setAttribute('href', data.results[5].link);
        urlEl.textContent = data.results[5].link;
        newsEl.append(urlEl);

        //News Title
        var textEl = document.querySelector('#news-title-seven');
        textEl.textContent = data.results[6].title;
        newsEl.append(textEl);
        console.log(data.results[6].title);
        

        var urlEl = document.querySelector('#news-url-seven');
        urlEl = document.createElement('a');
        urlEl.setAttribute('href', data.results[6].link);
        urlEl.textContent = data.results[6].link;
        newsEl.append(urlEl);

        //News Title
        var textEl = document.querySelector('#news-title-eight');
        textEl.textContent = data.results[7].title;
        newsEl.append(textEl);
        console.log(data.results[7].title);
        

        var urlEl = document.querySelector('#news-url-eight');
        urlEl = document.createElement('a');
        urlEl.setAttribute('href', data.results[7].link);
        urlEl.textContent = data.results[7].link;
        newsEl.append(urlEl);

        //News Title
        var textEl = document.querySelector('#news-title-nine');
        textEl.textContent = data.results[8].title;
        newsEl.append(textEl);
        console.log(data.results[8].title);
        

        var urlEl = document.querySelector('#news-url-nine');
        urlEl = document.createElement('a');
        urlEl.setAttribute('href', data.results[8].link);
        urlEl.textContent = data.results[8].link;
        newsEl.append(urlEl);

        //News Title
        var textEl = document.querySelector('#news-title-ten');
        textEl.textContent = data.results[9].title;
        newsEl.append(textEl);
        console.log(data.results[9].title);
        

        var urlEl = document.querySelector('#news-url-ten');
        urlEl = document.createElement('a');
        urlEl.setAttribute('href', data.results[9].link);
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

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


var tickerEl = document.querySelector('.ticker');

//Fetch Call: News IO
fetch("https://salty-mountain-68764.herokuapp.com/https://newsdata.io/api/1/news?apikey=pub_51739a26cf8480212b56d293b1579383eb0&q=bitcoin&language=en")
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

        //News Title
        var textEl = document.querySelector('#news-title-ten');
        textEl.textContent = data.results[9].title;
        newsElTen.append(textEl);
        console.log(data.results[9].title);
        

        var urlEl = document.querySelector('#news-url-ten');
        urlEl = document.createElement('a');
        urlEl.setAttribute('href', data.results[9].link);
        urlEl.textContent = data.results[9].link;
        newsElTen.append(urlEl);
    
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

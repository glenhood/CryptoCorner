var titleEl = document.getElementById('title');


fetch("https://salty-mountain-68764.herokuapp.com/https://newsdata.io/api/1/news?apikey=pub_486ab7a2d3cb5f723e5c9de7e68dac7e0ba&q=crypto")
.then(response => {
    return response.json();
    // console.log(response);
})
.then(data => {
    console.log(data);
    for (var i = 0; i < data.results.length; i++) {
        var textEl = document.createElement('div');
        textEl.textContent = data.results[i].title;
        titleEl.append(textEl)
    }
});





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
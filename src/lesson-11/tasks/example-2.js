'use strict';

import fetch from 'isomorphic-fetch';

const first = fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=03a3403fe48b417191c714d60baf7fdf&country=us', )
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    });
const second = fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=03a3403fe48b417191c714d60baf7fdf&country=uskaka', )
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    });
const third = fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=03a3403fe48b417191c714d60baf7fdf&country=us', )
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    });

Promise.all([first,second,third]).then(function(stories) {
    stories.forEach(({articles}) => {
        articles.forEach(({author, title, description}) => {
            console.log("Author: ", author);
            console.log("Title: ", title);
            console.log("Description: ", description)
        })
    });
}, function (message) {
    console.log(message)

});

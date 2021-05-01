import {API_KEY} from './ApiKey'

export function ApiFetch(url) {

  return fetch(url, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "imdb8.p.rapidapi.com"
    }
  })
  .then((response) => response.json())
    .then((json) => {
      return(json);
    })
    .catch((error) => {
      console.error(error);
    });
  
  };//"https://imdb8.p.rapidapi.com/title/find?q=game%20of%20thr"
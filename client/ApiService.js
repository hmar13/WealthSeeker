import { BASE_URL, IEX_URL, NEWS_URL, IEX_TOKEN, NEWS_TOKEN } from './appConfig';

function loginInformation (data) {
    try {
      return fetchRequest('login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
    } catch (error) {
      console.error('Login Error: ', error)
    }
}

function createUser (data) {
  try {
    return fetchRequest('signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
  } catch (error) {
    console.error('Create User Error: ', error)
  }
}

function addToWatchlistDB (data) {
  try {
    return fetchRequest('addtowatchlist', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
  } catch (error) {
    console.error('Add To Watch List DB Error: ', error);
  }
}

function deleteTickerWatchlist (data) {
  try {
    return fetchRequest('deleteticker', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
  } catch (error) {
    console.error('Delete Ticker in Watchlist Error: ', error);
  }
}

function getTicker (ticker) {
  try {
    const result = fetchRequestIEX(`${ticker}/quote?token=${IEX_TOKEN}`);
    return result;
  } catch (error) {
    console.error('Get Ticker Error: ', error);
  }
}

function getNews (ticker) {
  try {
    return fetchRequestNews(`${ticker}&from=2021-03-08&to=2021-03-08&sortBy=popularity&apiKey=${NEWS_TOKEN}`);
  } catch (error) {
    console.error('Get News Ticker Error: ', error);
  }
}

function getStats (ticker) {
  try {
    return fetchRequestIEX(`${ticker}/stats?token=${IEX_TOKEN}`)
  } catch (error) {
    console.error('Get News Ticker Error: ', error)
  }
}

function getChart (ticker) {
  try {
    return fetchRequestIEX(`${ticker}/chart?token=${IEX_TOKEN}`)
  } catch (error) {
    console.error('Get Chart Ticker Error: ', error)
  }
}

function fetchRequest (url, options) {
  return fetch(BASE_URL + url, options)
  .then(res => res.status <= 400 ? res : Promise.reject())
  .then(res => res.status === 204 ? res : res.json())
  .catch(error => {
    console.log(`Error fetching ${url}:`, error);
  })
}

function fetchRequestIEX (url) {
  return fetch(IEX_URL + url)
  .then(res => res.status <= 400 ? res : Promise.reject())
  .then(res => res.status === 204 ? res : res.json())
  .catch(error => {
    console.log(`Error fetching ${url}:`, error);
  })
}

function fetchRequestNews (url) {
  return fetch(NEWS_URL + url)
  .then(res => res.status <= 400 ? res : Promise.reject())
  .then(res => res.status === 204 ? res : res.json())
  .catch(error => {
    console.log(`Error fetching ${url}:`, error);
  })
}

export default {
  loginInformation,
  createUser,
  getTicker,
  addToWatchlistDB,
  deleteTickerWatchlist,
  getNews,
  getStats,
  getChart
};

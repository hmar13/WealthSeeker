//Instead of localhost, put your IP address:
const BASE_URL = 'http://192.168.0.80:3001/'
const IEX_URL = 'https://sandbox.iexapis.com/stable/stock/';


//Confirm if a user is in the DB to login:
function loginInformation (body) {
    try {
      return fetchRequest('login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      })
    } catch (error) {
      console.error('Login Error: ', error)
    }
}

// Create a user in the DB:
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

// Add to Watchlist in DB
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

// Delete Ticker in Watchlist DB
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

// Get WatchList Ticker Information
function getTicker (ticker) {
  try {
    return fetchRequestIEX(`${ticker}/quote?token=Tpk_3fe75aad367342a89be38099c730b1a3`)
  } catch (error) {
    console.error('Get Ticker Error: ', error)
  }
}

//DB Fetch Request
function fetchRequest (url, options) {
  return fetch(BASE_URL + url, options)
  .then(response => response.json())
  .then(responseJson => {return responseJson})
  .catch(error => {
    console.error(`Error fetching ${url}: `, error);
  })
}

//API Fetch Request
function fetchRequestIEX (url) {
  return fetch(IEX_URL + url)
  .then(response => response.json())
  .then(responseJson => {return responseJson})
  .catch(error => {
    console.error(`Error fetch ${url}: `, error)
  })
}

export default {
  loginInformation,
  createUser,
  getTicker,
  addToWatchlistDB,
  deleteTickerWatchlist
};

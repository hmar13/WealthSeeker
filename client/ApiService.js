const BASE_URL = 'http://localhost:3001'


//Confirm if a user is in the DB to login:
function loginInformation (body) {
    try {
      return fetchRequest('/login', {
        method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body)
      })
    } catch (error) {
      console.error('Login Error:', error)
    }
}

//Create a user in the DB:
// const createUser = async () => {
//   try {

//   } catch (error) {
//     console.error('Create User Error:', error);
//   }
// }

function fetchRequest (url, options) {
  return fetch(BASE_URL + url, options)
  .then(response => response.json())
  .then(responseJson => {return responseJson})
  .catch(error => {
    console.error(`Error fetching ${url}:`, error);
  })
}

export default { loginInformation };

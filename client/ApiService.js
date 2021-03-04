const DBURL = 'http://localhost:3001'


//Confirm if a user is in the DB to login:
const confirmUserLogin = async () => {
    try {
      let response = await fetch(
        `${DBURL}/login`
      )
      let users = await response.json();
      return users;
    } catch (error) {
      console.error('Confirm Login Error:', error)
    }
}

//Create a user in the DB:
// const createUser = async () => {
//   try {

//   } catch (error) {
//     console.error('Create User Error:', error);
//   }
// }

export default { confirmUserLogin };

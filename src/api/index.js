import axios from 'axios';

// this file holds your frontend network request adapters
// think about each function as a service that provides data
// to your React UI through AJAX calls

// for example, if we need to display a list of users
// we'd probably want to define a getUsers service like this:

/* 
  export async function getUsers() {
    try {
      const { data: users } = await axios.get('/api/users')
      return users;
    } catch(err) {
      console.error(err)
    }
  }
*/

export async function getAPIHealth() {
  try {
    const { data } = await axios.get('/api/health');
    return data;
  } catch (err) {
    console.error(err);
    return { healthy: false };
  }
}

export const registerUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:3000/api/users/register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      })
    })

    const data = await response.json()
    console.log("this is the registerUser data", data)
    
    return data
  } catch (error) {
    console.error(error)
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:3000/api/users/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      })
    })
    const { 
      token
    } = await response.json();
    console.log("this is the loginUser data", token)

    return token
  } catch (error) {
    console.error(error)
  }
};
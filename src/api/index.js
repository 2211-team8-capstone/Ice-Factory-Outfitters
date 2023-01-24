import axios from "axios";

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
    const { data } = await axios.get("/api/health");
    return data;
  } catch (err) {
    console.error(err);
    return { healthy: false };
  }
}

export const registerUser = async (email, password) => {
  // console.log("REGGGGGG", email);
  try {
    const response = await fetch("http://localhost:4001/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const { token } = await response.json();
    console.log("this is the registerUser token", token);

    return token;

    // const data = await response.json();
    // console.log("this is the registerUser data.token", data.token);
    // return data;
  } catch (error) {
    console.error("Error registering user", error);
  }
};

export const loginUser = async (email, password) => {
  // console.log("YOOOOOOOOOOOOOO", email);
  try {
    const response = await fetch("http://localhost:4001/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const { token } = await response.json();
    console.log("this is the loginUser data", token);

    return token;
  } catch (error) {
    console.error(error);
  }
};



// ***************************** ALL PRODUCTS FUNCTIONS **************************

export const getAllProducts = async (setProducts) => {
  try {
    const response = await fetch("http://localhost:4001/api/products", {
      header: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("UUUUUUUUU", data.products);
    setProducts(data.products);
    // return data.products;
  } catch (error) {
    console.error(error);
  }
};

export const getSingleProduct = async (productID, setSelectedProduct) => {
  
  console.log(productID);
  try {
    const response = await fetch(`http://localhost:4001/api/products/${productID}`, {
      header: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("this is data.prodcuts in getSinleProd FE API", data.product);

    // set the state of selected product to the single product received form the call 
    setSelectedProduct(data.product);
  } catch (error) {
    console.error(error);
  }
};
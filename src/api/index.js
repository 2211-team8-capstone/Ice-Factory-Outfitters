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

    const result = await response.json();
    const token = result.token;
    const userID = result.user.id;
    console.log(result);
    console.log("this is the registerUser token", token);

    return result;

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
    const result = await response.json();
    console.log("LOGIN", result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const loginAdmin = async (adminEmail, adminPassword) => {
  try {
    const response = await fetch("http://localhost:4001/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        adminEmail,
        adminPassword,
      }),
    });
    const result = await response.json();
    console.log("LOGIN", result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMe = async (token, email) => {
  // console.log("EMAIL", email)
  try {
    const response = await fetch(`http://localhost:4001/api/users/profile/${email}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();
    console.log("This is the fetchMe data", data)
    return data;
  } catch (error) {
    console.error(error)
  }
}

// ***************************** ALL PRODUCTS FUNCTIONS **************************

export const getAllProducts = async () => {
  try {
    const response = await fetch("http://localhost:4001/api/products", {
      header: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // console.log("UUUUUUUUU", data.products);

    return data.products;
  } catch (error) {
    console.error(error);
  }
};

export const getSingleProduct = async (productID, setSelectedProduct) => {
  try {
    const response = await fetch(
      `http://localhost:4001/api/products/${productID}`,
      {
        header: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    // set the state of selected product to the single product received form the call
    setSelectedProduct(data.product);
    return data.product;
  } catch (error) {
    console.error(error);
  }
};

// ************************ Cart Functions Below *******************************

export const createCart = async (userId, token) => {
  try {
    const response = await fetch("http://localhost:4001/api/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId,
      }),
    });

    const data = await response.json();
    console.log("this is data in createCart ", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getCartByCartId = async (cartId) => {
  try {
    const response = await fetch(`http://localhost:4001/api/carts/${cartId}`, {
      header: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // console.log("getCARTBYID API", data);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getCartIdByUserId = async (userId, token) => {
  try {
    const response = await fetch(
      `http://localhost:4001/api/carts/cartNum/${userId}`,
      {
        header: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    console.log("getCARTBYIDBYUSERIDDDD API", data);

    return data;
  } catch (error) {
    console.error(error);
  }
};


export const addProductToCart = async (productId, cartId, quantity, token) => {
  console.log('this is in addprodtocart prod ID',productId); 
  console.log('this is in addprodtocart quantity',quantity); 
  
  try {
    const response = await fetch(`http://localhost:4001/api/carts/addprod/${cartId}`, {
        method: "POST",
        header: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId,
          quantity,
        }),
      });
      
    const data = await response.json();
    console.log("product in addproducttocart FE api", data);

    return data;
  } catch (error) {
    console.error(error);
  }
}
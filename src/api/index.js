import axios from "axios";


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
  } catch (error) {
    console.error("Error registering user", error);
  }
};

export const loginUser = async (email, password) => {
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
  try {
    const response = await fetch(`http://localhost:4001/api/users/profile/${email}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error(error)
  }
}

// ***************************** ALL PRODUCTS FUNCTIONS **************************

export const getAllProducts = async () => {
  try {
    const response = await fetch("http://localhost:4001/api/products", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

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
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
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
        Authorization: `Bearer ${token}`,
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
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

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
        headers: {
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

  try {
    const response = await fetch(
      `http://localhost:4001/api/carts/addprod/${cartId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId,
          quantity,
        }),
      }
    );

    const data = await response.json();
    console.log("product in addproducttocart FE api", data);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteProductFromCart = async (cartItemId, token) => {
  try {
    const response = await fetch(`http://localhost:4001/api/carts`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        cartItemId,
      }),
    });

    const data = await response.json();
    console.log("DELETE FE api", data);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateProductQty = async (newQuantity, cartItemsId, token) => {
  try {
    const response = await fetch(`http://localhost:4001/api/carts/updateqty`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        cartItemsId,
        newQuantity,
      }),
    });

    const data = await response.json();
    console.log("this is data in updatecartQTY FE API", data);

    return data;
  } catch (error) {
    console.error(error)
  }
}
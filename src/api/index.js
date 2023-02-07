export const getAPIHealth = async () => {
  try {
    const data = await fetch("/api/health", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (err) {
    console.error(err);
    return { healthy: false };
  }
};

export const registerUser = async (email, password) => {
  try {
    const response = await fetch("/api/users/register", {
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
    return result;
  } catch (error) {
    console.error("Error registering user", error);
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await fetch("/api/users/login", {
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
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMe = async (token, email) => {
  try {
    const response = await fetch(
      `/api/users/profile/${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await fetch("/api/users", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error(error);
  }
};

// ***************************** ALL ADMIN FUNCTIONS **************************
export const loginAdmin = async (adminEmail, adminPassword, isAdmin) => {
  try {
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        adminEmail,
        adminPassword,
        isAdmin,
      }),
    });

    const adminResult = await response.json();
    return adminResult;
  } catch (error) {
    console.error(error);
  }
};

export const getUsersList = async () => {
  try {
    const response = await fetch(`/api/users`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const editUser = async (
  token,
  userId,
  userEmail,
  userPassword,
  userFirstName,
  userLastName,
  userPhone,
  userAddressNum,
  userAddressSt,
  userCity,
  userState,
  userZip
) => {
  const parseZip = parseInt(userZip);
  const parseAddressNum = parseInt(userAddressNum);
  try {
    const response = await fetch(`/api/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userEmail,
        userPassword,
        userFirstName,
        userLastName,
        userPhone,
        parseAddressNum,
        userAddressSt,
        userCity,
        userState,
        parseZip,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const destroyUser = async (userId, token) => {
  try {
    const response = await fetch(`/api/users`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
// ***************************** ALL PRODUCTS FUNCTIONS **************************

export const createProduct = async (productToAdd) => {
  const { category,
    name,
    description,
    price,
    size,
    color,
    image } = productToAdd;
  try {
    const response = await fetch("/api/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category,
        name,
        description,
        price,
        size,
        color,
        image,
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error adding product", error);
  }
};

export const getAllProducts = async () => {
  try {
    const response = await fetch("/api/products", {
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
      `/api/products/${productID}`,
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

export const getProductByName = async (productId, setSelectedProduct) => {
  try {
    const response = await fetch(
      `/api/products/${productId}`,
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
    const response = await fetch("/api/carts", {
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
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getCartByCartId = async (cartId) => {
  try {
    const response = await fetch(`/api/carts/${cartId}`, {
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
      `/api/carts/cartNum/${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addProductToCart = async (productId, cartId, quantity, token) => {
  try {
    const response = await fetch(
      `/api/carts/addprod/${cartId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId,
          quantity,
        }),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteProductFromCart = async (cartItemId, token) => {
  try {
    const response = await fetch(`/api/carts`, {
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
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateProductQty = async (newQuantity, cartItemsId, token) => {
  try {
    const response = await fetch(`/api/carts/updateqty`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        cartItemsId,
        newQuantity,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

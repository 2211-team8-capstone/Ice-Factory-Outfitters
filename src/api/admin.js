export const deleteSingleProduct = async (token, productID) => {
  try {
    const response = await fetch(
      `http://localhost:4001/api/products/${productID}`,
      {
        method: "DELETE",
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

export const editSingleProduct = async (
  token,
  productID,
  productName,
  productDesc,
  productPrice
) => {
  try {
    const response = await fetch(
      `http://localhost:4001/api/products/${productID}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productName,
          productDesc,
          productPrice,
        }),
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteSingleUser = async (token, userID) => {
  try {
    const response = await fetch(`http://localhost:4001/api/users/${userID}`, {
      method: "DELETE",
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

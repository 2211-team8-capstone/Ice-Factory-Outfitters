import React, { useEffect } from "react";
import "../style/Products.css";
import { getAllProducts, getSingleProduct } from "../api";
import SingleProduct from "./SingleProduct";
import { deleteSingleProduct } from "../api/admin";

const GoalieGear = (props) => {
  const {
    setSelectedProduct,
    selectedProduct,
    products,
    setProducts,
    token,
    setEditSelected,
    editSelected,
    cartRender,
    setCartRender,
    adminAccess,
  } = props;

  const handleDelete = async (productIdToDelete) => {
    const response = await deleteSingleProduct(token, productIdToDelete);

    if (response && !response.error) {
      const getProducts = async () => {
        const data = await getAllProducts();
        setProducts(data);
      };
      getProducts();
    }
  };

  useEffect(() => {
    setSelectedProduct(0);
  }, []);

  const filteredProducts = props.products.filter((_product) =>
    _product.category.includes("Goalie Gear")
  );

  return (
    <div className="all-products">
      {selectedProduct ? (
        <SingleProduct
          selectedProduct={selectedProduct}
          editSelected={editSelected}
          token={token}
          setProducts={setProducts}
          setEditSelected={setEditSelected}
          cartRender={cartRender}
          setCartRender={setCartRender}
          setSelectedProduct={setSelectedProduct}
        />
      ) : (
        filteredProducts.map((product) => {
          return (
            <div className="product-container" key={product.id}>
              <div className="single-product">
                <img className="product-thumbnail" src={product.image} />
                <h2 className="headers">{product.name}</h2>
                <h3 className="headers">${product.price}</h3>
                <div className="sub-container">
                  <div className="btn-container">
                    {adminAccess ? (
                      <div className="btn-container">
                        <button
                          className="edit-btn"
                          onClick={() => {
                            getSingleProduct(product.id, setSelectedProduct);
                            setEditSelected(true);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(product.id)}
                        >
                          Delete
                        </button>
                      </div>
                    ) : (
                      ""
                    )}

                    <button
                      id="moreinfo-btn"
                      className="prod-btn"
                      onClick={() =>
                        getSingleProduct(product.id, setSelectedProduct)
                      }
                    >
                      More Info
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default GoalieGear;

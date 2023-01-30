import React, { useEffect } from "react";
import "../style/Products.css";
import { getAllProducts, getSingleProduct } from "../api";
import SingleProduct from "./SingleProduct";
import { deleteSingleProduct } from "../api/admin";

const Helmets = (props) => {
  const { setSelectedProduct, selectedProduct, products, setProducts, token } =
    props;
  const handleDelete = async (productIdToDelete) => {
    const response = await deleteSingleProduct(token, productIdToDelete);
    // console.log("error?", response);

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
    _product.category.includes("Helmets")
  );

  return (
    <div className="all-products">
      {selectedProduct ? (
        <SingleProduct selectedProduct={selectedProduct} />
      ) : (
        filteredProducts.map((product) => {
          return (
            <div className="product-container" key={product.id}>
              <div className="single-product">
                <img className="headers" src={product.image} />
                <h2 className="headers">{product.name}</h2>
                <h3 className="headers">${product.price}</h3>
                <div className="sub-container">
                  <div className="btn-container">
                    {/* <button
                      className="prod-btn"
                      onClick={() =>
                        editSingleProduct(product.id, setSelectedProduct)
                      }
                    >
                      Edit
                    </button> */}
                    <button
                      className="prod-btn"
                      onClick={() =>
                        getSingleProduct(product.id, setSelectedProduct)
                      }
                    >
                      More Info
                    </button>
                    <button
                      className="prod-btn"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
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

export default Helmets;

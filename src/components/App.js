import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// getAPIHealth is defined in our axios-services directory index.js
// you can think of that directory as a collection of api adapters
// where each adapter fetches specific info from our express server's /api route
import { getAllProducts, getAPIHealth, getCartByCartId } from "../api";
import LoginRegister from "./LoginRegister";
import Home from "./Home";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import Profile from "./Profile";
import "../style/App.css";
import Sticks from "../products/Sticks";
import Skates from "../products/Skates";
import Helmets from "../products/Helmets";
import Pucks from "../products/Pucks";
import ProtectiveGear from "../products/ProtectiveGear";
import GoalieGear from "../products/GoalieGear";
import Accessories from "../products/Accessories";
import TeamApparel from "../products/TeamApparel";
import Cart from "./Cart";
import AddProducts from "./AddProducts";
import AdminLogin from "./AdminLogin";
import AdminProfile from "./Admin";

const App = () => {
  const [APIHealth, setAPIHealth] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [userCart, setUserCart] = useState();
  const [cartPriceTotal, setCartPriceTotal] = useState(0);

  useEffect(() => {
    // const result = await getAllProducts
    const getProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    const getCart = async () => {
      const cartId = localStorage.getItem("cart#")
      const data = await getCartByCartId(cartId);
      setUserCart(data);
    };

    getProducts();
    getCart();
    // const getAPIStatus = async () => {
    //   const { healthy } = await getAPIHealth();
    //   setAPIHealth(healthy ? "api is up! :D" : "api is down :/");
    // };
    // getAPIStatus();
  }, []);


  // update cartTotal everytime cart adds/deleetes item
  // useEffect((userCart) => {
  //   let totalPrice = 0;
  //   for (let i=0; i < userCart.length; i++) {
  //     totalPrice + userCart.price
  //     setCartPriceTotal(totalprice)

  //   }

  //   return totalPrice; 
  // }, userCart)


  return (
    <>
      <Header setToken={setToken} token={token} />
      <NavBar />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            path="/sticks"
            element={
              <Sticks
                products={products}
                setSelectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
                setProducts={setProducts}
                token={token}
              />
            }
          ></Route>
          <Route
            path="/pucks"
            element={
              <Pucks
                products={products}
                setSelectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
                setProducts={setProducts}
                token={token}
              />
            }
          ></Route>
          <Route
            path="/skates"
            element={
              <Skates
                products={products}
                setSelectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
                setProducts={setProducts}
                token={token}
              />
            }
          ></Route>

          <Route
            path="/helmets"
            element={
              <Helmets
                products={products}
                setSelectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
                setProducts={setProducts}
                token={token}
              />
            }
          ></Route>
          <Route
            path="/protectiveGear"
            element={
              <ProtectiveGear
                products={products}
                setSelectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
                setProducts={setProducts}
                token={token}
              />
            }
          ></Route>
          <Route
            path="/goalieGear"
            element={
              <GoalieGear
                products={products}
                setSelectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
                setProducts={setProducts}
                token={token}
              />
            }
          ></Route>
          <Route
            path="/accessories"
            element={
              <Accessories
                products={products}
                setSelectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
                setProducts={setProducts}
                token={token}
              />
            }
          ></Route>
          <Route
            path="/teamApparel"
            element={
              <TeamApparel
                products={products}
                setSelectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
                setProducts={setProducts}
                token={token}
              />
            }
          ></Route>
          <Route
            path="/LoginRegister"
            element={<LoginRegister setToken={setToken} />}
          ></Route>
          <Route
            path="/Profile"
            element={<Profile setToken={setToken} />}
          ></Route>
          <Route
            path="/cart"
            element={<Cart userCart={userCart} setUserCart={setUserCart} />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/AddProducts" element={<AddProducts />}></Route>
          <Route path="/AdminLogin" element={<AdminLogin />}></Route>
          <Route path="/Admin" element={<AdminProfile />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  getAllProducts,
  getAPIHealth,
  getCartByCartId,
  fetchMe,
  getAllUsers,
} from "../api";
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
import Checkout from "./Checkout";
import AddProducts from "./AddProducts";
import AdminLogin from "./AdminLogin";
import AdminProfile from "./Admin";
import AllUsersList from "./AllUsers";
import Search from "./Search";

const App = () => {
  const [APIHealth, setAPIHealth] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [userCart, setUserCart] = useState([]);
  const [cartPriceTotal, setCartPriceTotal] = useState(0);
  const [editSelected, setEditSelected] = useState(false);
  const [users, setUsers] = useState([]);
  const [cartRender, setCartRender] = useState(false);
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [profileRender, setProfileRender] = useState(false);

  const [adminAccess, setAdminAccess] = useState(
    localStorage.getItem("isAdmin")
  );

  const cartId = localStorage.getItem("cart#");

  useEffect(() => {
    // const getAPIStatus = async () => {
    //   const healthy = await getAPIHealth();
    //   setAPIHealth(healthy ? "api is up! :D" : "api is down :/");
    // };
    // getAPIStatus();


    if (cartId) {
      const getCart = async () => {
        const data = await getCartByCartId(cartId);
        setUserCart(data);
      };
      getCart();
    }


  }, [cartRender]);

  useEffect(() => {
    if (token) {
      const getMe = async () => {
        const data = await fetchMe(token, email);
        setUser(data);
      };
      getMe();
    }
  }, [profileRender]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
      console.log("GGGGG", data)
    };
    if (token) {
      const getUsersList = async () => {
        const data = await getAllUsers();
        setUsers(data);
      };
      getUsersList();
    }
    getProducts();
  }, []);

  useEffect(() => {
    const findSum = (array) => {
      let sum = 0;

      for (let i = 0; i < array?.length; i++) {
        let prodTotal = array[i].price * array[i].quantity;
        sum += prodTotal;
      }
      return sum;
    };

    const totalCartPrice = findSum(userCart);
    setCartPriceTotal(totalCartPrice);
  }, [userCart]);

  return (
    <>
      <Header
        setToken={setToken}
        token={token}
        setUserCart={setUserCart}
        setAdminAccess={setAdminAccess}
      />
      <NavBar
        setEditSelected={setEditSelected}
        setSelectedProduct={setSelectedProduct}
      />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            path="/sticks"
            element={
              <Sticks
                products={products}
                setProducts={setProducts}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
                token={token}
                editSelected={editSelected}
                setEditSelected={setEditSelected}
                cartRender={cartRender}
                setCartRender={setCartRender}
                adminAccess={adminAccess}
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
                setEditSelected={setEditSelected}
                editSelected={editSelected}
                cartRender={cartRender}
                setCartRender={setCartRender}
                adminAccess={adminAccess}
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
                setEditSelected={setEditSelected}
                editSelected={editSelected}
                cartRender={cartRender}
                setCartRender={setCartRender}
                adminAccess={adminAccess}
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
                setEditSelected={setEditSelected}
                editSelected={editSelected}
                cartRender={cartRender}
                setCartRender={setCartRender}
                adminAccess={adminAccess}
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
                setEditSelected={setEditSelected}
                editSelected={editSelected}
                cartRender={cartRender}
                setCartRender={setCartRender}
                adminAccess={adminAccess}
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
                setEditSelected={setEditSelected}
                editSelected={editSelected}
                cartRender={cartRender}
                setCartRender={setCartRender}
                adminAccess={adminAccess}
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
                setEditSelected={setEditSelected}
                editSelected={editSelected}
                cartRender={cartRender}
                setCartRender={setCartRender}
                adminAccess={adminAccess}
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
                setEditSelected={setEditSelected}
                editSelected={editSelected}
                cartRender={cartRender}
                setCartRender={setCartRender}
                adminAccess={adminAccess}
              />
            }
          ></Route>
          <Route
            path="/LoginRegister"
            element={
              <LoginRegister
                setToken={setToken}
                cartRender={cartRender}
                setCartRender={setCartRender}
              />
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <Profile
                token={token}
                user={user}
                setUser={setUser}
                email={email}
                setEmail={setEmail}
                profileRender={profileRender}
                setProfileRender={setProfileRender}
              />
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                userCart={userCart}
                setUserCart={setUserCart}
                cartPriceTotal={cartPriceTotal}
                setCartPriceTotal={setCartPriceTotal}
                token={token}
                setCartRender={setCartRender}
                cartRender={cartRender}
              />
            }
          ></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route
            path="/AddProducts"
            element={<AddProducts setProducts={setProducts} />}
          ></Route>
          <Route
            path="/AdminLogin"
            element={
              <AdminLogin setToken={setToken} setAdminAccess={setAdminAccess} />
            }
          ></Route>
          <Route
            path="/Admin"
            element={<AdminProfile setToken={setToken} />}
          ></Route>
          <Route
            path="/AllUsers"
            element={<AllUsersList users={users} setUsers={setUsers} />}
          ></Route>
          <Route
            path="/checkout"
            element={<Checkout token={token} userCart={userCart} setUserCart={setUserCart} />}
          >
          </Route>
          <Route
            path="/Search"
            element={<Search />}
          ></Route>
        </Routes>
      </div>
      <Footer
        token={token}
        setToken={setToken}
        setAdminAccess={setAdminAccess}
        adminAccess={adminAccess}
      />
    </>
  );
};

export default App;

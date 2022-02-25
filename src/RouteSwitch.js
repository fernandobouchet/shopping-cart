import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import { NavBar } from "./components/NavBar/NavBar";
import { useState } from "react";

const RouterSwitch = () => {
  const [cart, setCart] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [cantProducts, setcantProducts] = useState(0);

  function addItemToCart(item) {
    if (!cartProducts.includes(item.product)) {
      setCartProducts((prevState) => {
        return [...prevState, item.product];
      });
    } else {
      item.product.quantity = item.product.quantity + 1;
    }
    setcantProducts(cantProducts + 1);
  }

  function changeCartState() {
    setCart(!cart);
  }

  return (
    <BrowserRouter>
      <NavBar setCart={changeCartState} cantProducts={cantProducts} />
      {cart && <Cart setCart={changeCartState} products={cartProducts} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop addItem={addItemToCart} />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterSwitch;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import { NavBar } from "./components/NavBar/NavBar";
import { useState } from "react";

const RouterSwitch = () => {
  const [cart, setCart] = useState(false);

  function changeCartState() {
    setCart(!cart);
  }

  return (
    <BrowserRouter>
      <NavBar setCart={changeCartState} />
      {cart && <Cart setCart={changeCartState} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterSwitch;

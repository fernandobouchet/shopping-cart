import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import { NavBar } from "./components/NavBar/NavBar";
import { useEffect, useState } from "react";

const RouterSwitch = () => {
  const [cart, setCart] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const cartItemsNumber = cartProducts.reduce((a, b) => a + b.quantity, 0);

  async function getApi() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(filterShopProducts(data));
    } catch (error) {
      console.log(error);
    }
  }

  function filterShopProducts(array) {
    const filteredArray = array.filter(
      (item) =>
        item.category === "men's clothing" ||
        item.category === "women's clothing"
    );
    addQuantityProperty(filteredArray);
    return filteredArray;
  }

  function addQuantityProperty(array) {
    array.forEach((item) => {
      item.quantity = 0;
    });
  }

  function increseItemQuantity(item) {
    setProducts(
      products.map((product) => {
        if (product.id === item.id)
          return {
            ...product,
            quantity: item.quantity + 1,
          };
        return product;
      })
    );
  }

  function decreseItemQuantity(item) {
    if (item.quantity >= 1)
      setProducts(
        products.map((product) => {
          if (product.id === item.id)
            return {
              ...product,
              quantity: item.quantity - 1,
            };
          return product;
        })
      );
  }

  function setQuantity(item) {
    if (item.quantity >= 1)
      setCartProducts(
        cartProducts.map((product) => {
          if (product.id === item.id)
            return {
              ...product,
              quantity: item.quantity,
            };
          return product;
        })
      );
  }

  function resetItemQuantity(item) {
    if (item.quantity >= 1)
      setProducts(
        products.map((product) => {
          if (product.id === item.id)
            return {
              ...product,
              quantity: 0,
            };
          return product;
        })
      );
  }

  function addItemToCart(item) {
    if (
      !cartProducts.some((product) => product.id === item.id) &&
      item.quantity >= 1
    ) {
      setCartProducts((prevState) => {
        return [...prevState, item];
      });
    } else {
      setQuantity(item);
    }
  }

  function removeFromCart(item) {
    setCartProducts(cartProducts.filter((product) => product.id !== item.id));
    resetItemQuantity(item);
  }

  function changeCartState() {
    setCart(!cart);
  }

  return (
    <BrowserRouter>
      <NavBar setCart={changeCartState} cartItemsNumber={cartItemsNumber} />
      {cart && (
        <Cart
          setCart={changeCartState}
          products={cartProducts}
          removeFromCart={removeFromCart}
        />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Shop"
          element={
            <Shop
              addItem={addItemToCart}
              products={products}
              increseItemQuantity={increseItemQuantity}
              decreseItemQuantity={decreseItemQuantity}
            />
          }
        />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterSwitch;

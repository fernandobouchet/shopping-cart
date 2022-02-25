import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import { CardsContainer } from "./ShopStyles";

function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, SetCart] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

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
    return filteredArray;
  }

  function addItemToCart(item) {
    SetCart((prevState) => {
      return [...prevState, item];
    });
    console.log(cart);
  }

  const ProductsCards = products.map((product) => {
    return (
      <Cards
        title={product.title}
        price={product.price}
        image={product.image}
        rate={product.rating.rate}
        key={product.id}
        addItem={() => addItemToCart({ product })}
        cart={cart}
      />
    );
  });

  return (
    <div>
      <CardsContainer>{ProductsCards}</CardsContainer>
    </div>
  );
}

export default Shop;

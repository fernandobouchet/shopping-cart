import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import { CardsContainer, ShopContainer } from "./ShopStyles";

function Shop(props) {
  const [products, setProducts] = useState([]);

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

  const ProductsCards = products.map((product) => {
    return (
      <Cards
        title={product.title}
        price={product.price}
        image={product.image}
        key={product.id}
        addItem={() => props.addItem({ product })}
      />
    );
  });

  return (
    <ShopContainer>
      <CardsContainer>{ProductsCards}</CardsContainer>
    </ShopContainer>
  );
}

export default Shop;

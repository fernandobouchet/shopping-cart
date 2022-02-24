import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import { NavBar } from "../NavBar/NavBar";
import { CardsContainer } from "./ShopStyles";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  async function getApi() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  const ProductsCards =
    products &&
    products.map((product) => {
      return (
        <Cards
          title={product.title}
          price={product.price}
          image={product.image}
          key={product.id}
        />
      );
    });

  return (
    <div>
      <NavBar />
      <CardsContainer>{ProductsCards}</CardsContainer>
    </div>
  );
}

export default Shop;

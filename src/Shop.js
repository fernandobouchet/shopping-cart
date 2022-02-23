import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "./components/Cards";

function Shop() {
  let navigate = useNavigate();

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
    <>
      <h1>Shop</h1>
      {ProductsCards}
      <button onClick={() => navigate("/Cart")}>Cart</button>
      <button onClick={() => navigate("/")}>Main Page</button>
    </>
  );
}

export default Shop;

import { useNavigate } from "react-router-dom";

function Shop() {
  let navigate = useNavigate();

  return (
    <>
      <h1>Shop</h1>
      <button onClick={() => navigate("/Cart")}>Cart</button>
      <button onClick={() => navigate("/")}>Main Page</button>
    </>
  );
}

export default Shop;

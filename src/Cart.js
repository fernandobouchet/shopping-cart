import { useNavigate } from "react-router-dom";

function Cart() {
  let navigate = useNavigate();

  return (
    <>
      <h1>Cart</h1> <button onClick={() => navigate("/Shop")}>Shop</button>
    </>
  );
}

export default Cart;

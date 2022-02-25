import { CartModal, CartContainer } from "./CartStyles";

function Cart(props) {
  return (
    <CartContainer>
      <CartModal>
        <h1>Cart</h1>
        <button onClick={props.setCart}>Close</button>
      </CartModal>
    </CartContainer>
  );
}

export default Cart;

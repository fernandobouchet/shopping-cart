import { CartModal, CartContainer } from "./CartStyles";
import ProductContainer from "./ProductContainer";

function Cart(props) {
  const { setCart, products } = props;

  const ProductList = products.map((product) => {
    return (
      <ProductContainer
        title={product.title}
        price={product.price}
        key={product.id}
        quanty={0}
      />
    );
  });

  const Total = products.reduce((a, b) => a + b.price, 0).toFixed(2);

  return (
    <CartContainer>
      <CartModal>
        <h1>Cart</h1>
        {ProductList}
        <h2>Total: $ {Total}</h2>
        <button onClick={setCart}>Close</button>
      </CartModal>
    </CartContainer>
  );
}

export default Cart;

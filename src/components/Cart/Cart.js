import { CartModal, CartContainer } from "./CartStyles";
import ProductContainer from "./ProductContainer";

function Cart(props) {
  const { setCart, products } = props;

  const ProductList = products.map((product) => {
    const items = product.product;
    return (
      <ProductContainer
        title={items.title}
        price={items.price}
        key={items.id}
        quanty={0}
      />
    );
  });

  const Total = products.reduce((a, b) => a + b.product.price, 0).toFixed(2);

  console.log(Total);
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

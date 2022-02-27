import {
  CartModal,
  CartContainer,
  CartTitle,
  CartInfo,
  TopContainer,
  BottomContainer,
} from "./CartStyles";
import ProductContainer from "./ProductContainer";

function Cart(props) {
  const { setCart, products } = props;

  const ProductList = products.map((product) => {
    return (
      <ProductContainer
        title={product.title}
        price={product.price}
        key={product.id}
        quantity={product.quantity}
      />
    );
  });

  const Total = products
    .reduce((a, b) => a + b.price * b.quantity, 0)
    .toFixed(2);

  return (
    <CartContainer>
      <CartModal>
        <TopContainer>
          <CartTitle>Cart</CartTitle>
          <button onClick={setCart}>X</button>
        </TopContainer>
        <BottomContainer>
          {ProductList}
          <CartInfo>Total: $ {Total}</CartInfo>
        </BottomContainer>
      </CartModal>
    </CartContainer>
  );
}

export default Cart;

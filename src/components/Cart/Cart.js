import {
  CartModal,
  CartContainer,
  CartTitle,
  CartInfo,
  TopContainer,
  BottomContainer,
  CloseButton,
} from "./CartStyles";
import ProductContainer from "./ProductContainer";

function Cart(props) {
  const { setCart, products, removeFromCart } = props;

  const ProductList = products.map((product) => {
    return (
      <ProductContainer
        title={product.title}
        price={product.price}
        key={product.id}
        quantity={product.quantity}
        removeFromCart={() => removeFromCart(product)}
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
          <CloseButton onClick={setCart}>X</CloseButton>
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

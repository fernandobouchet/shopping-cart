import {
  Card,
  ProductImage,
  ProductInfo,
  AddToCartButton,
  IncrementButton,
  CounterContainer,
  Counter,
} from "./CardStyles";

function Cards(props) {
  const {
    title,
    image,
    price,
    addItem,
    decreseItemQuantity,
    increseItemQuantity,
    quantity,
  } = props;

  return (
    <Card>
      <ProductInfo>{title}</ProductInfo>
      <ProductImage src={image} alt="" />
      <ProductInfo>$ {price}</ProductInfo>
      <CounterContainer>
        <IncrementButton onClick={decreseItemQuantity}>-</IncrementButton>
        <Counter>{quantity}</Counter>
        <IncrementButton onClick={increseItemQuantity}>+</IncrementButton>
      </CounterContainer>

      <AddToCartButton onClick={addItem}>Add To Cart</AddToCartButton>
    </Card>
  );
}

export default Cards;

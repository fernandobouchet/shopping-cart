import {
  Card,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddToCartButton,
} from "./CardStyles";

function Cards(props) {
  const { title, image, price, rate, addItem } = props;

  return (
    <Card>
      <ProductTitle>{title}</ProductTitle>
      <ProductImage src={image} alt="" />
      <ProductPrice>$ {price}</ProductPrice>
      <h2>{rate}</h2>
      <AddToCartButton onClick={addItem}>Add To Cart</AddToCartButton>
    </Card>
  );
}

export default Cards;

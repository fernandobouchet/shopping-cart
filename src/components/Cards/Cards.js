import { Card, ProductImage, ProductInfo, AddToCartButton } from "./CardStyles";

function Cards(props) {
  const { title, image, price, addItem } = props;

  return (
    <Card>
      <ProductInfo>{title}</ProductInfo>
      <ProductImage src={image} alt="" />
      <ProductInfo>$ {price}</ProductInfo>
      <AddToCartButton onClick={addItem}>Add To Cart</AddToCartButton>
    </Card>
  );
}

export default Cards;

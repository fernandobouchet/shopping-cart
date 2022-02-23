import { Card, ProductImage, ProductTitle, ProductPrice } from "./CardStyles";

function Cards(props) {
  return (
    <Card>
      <ProductTitle>{props.title}</ProductTitle>
      <ProductImage src={props.image} alt="" />
      <ProductPrice>$ {props.price}</ProductPrice>
    </Card>
  );
}

export default Cards;

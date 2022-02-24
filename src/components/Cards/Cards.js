import { Card, ProductImage, ProductTitle, ProductPrice } from "./CardStyles";

function Cards(props) {
  return (
    <Card>
      <ProductTitle>{props.title}</ProductTitle>
      <ProductImage src={props.image} alt="" />
      <ProductPrice>$ {props.price}</ProductPrice>
      <h2>{props.rate}</h2>
      <button>Add To Cart</button>
    </Card>
  );
}

export default Cards;

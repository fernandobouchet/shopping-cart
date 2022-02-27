import { Product, ProductInfo, CloseButton } from "./CartStyles";
import { ShowOnlyFirstLetters } from "../Utils";

function ProductContainer(props) {
  const { title, price, quantity, removeFromCart } = props;

  return (
    <Product>
      <ProductInfo>{ShowOnlyFirstLetters(title)}</ProductInfo>
      <ProductInfo>$ {price}</ProductInfo>
      <ProductInfo> X {quantity}</ProductInfo>
      <CloseButton onClick={removeFromCart}>X</CloseButton>
    </Product>
  );
}

export default ProductContainer;

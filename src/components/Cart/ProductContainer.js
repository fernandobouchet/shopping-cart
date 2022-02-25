import { Product, ProductInfo } from "./CartStyles";
import { ShowOnlyFirstLetters } from "../Utils";

function ProductContainer(props) {
  const { title, price, quantity } = props;

  return (
    <Product>
      <ProductInfo>{ShowOnlyFirstLetters(title)}</ProductInfo>
      <ProductInfo>$ {price}</ProductInfo>
      <ProductInfo> X {quantity}</ProductInfo>
    </Product>
  );
}

export default ProductContainer;

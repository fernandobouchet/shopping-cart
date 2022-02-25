import { Product, ProductInfo } from "./CartStyles";
import { ShowOnlyFirstLetters } from "../Utils";

function ProductContainer(props) {
  const { title, price, quanty } = props;

  return (
    <Product>
      <ProductInfo>{ShowOnlyFirstLetters(title)}</ProductInfo>
      <ProductInfo>$ {price}</ProductInfo>
      <ProductInfo>{quanty}</ProductInfo>
    </Product>
  );
}

export default ProductContainer;

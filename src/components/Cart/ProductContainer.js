import { Product, ProductInfo, CloseButton } from "./CartStyles";
import { ShowOnlyFirstLetters } from "../Utils";

function ProductContainer(props) {
  const { title, price, quantity, removeFromCart } = props;

  return (
    <Product>
      <ProductInfo>{ShowOnlyFirstLetters(title)}</ProductInfo>
      <ProductInfo>$ {price}</ProductInfo>
      <ProductInfo> X {quantity}</ProductInfo>
      <CloseButton onClick={removeFromCart}>
        <ion-icon name="trash" size="small"></ion-icon>
      </CloseButton>
    </Product>
  );
}

export default ProductContainer;

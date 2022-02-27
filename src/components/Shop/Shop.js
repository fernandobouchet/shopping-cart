import Cards from "../Cards/Cards";
import { CardsContainer, ShopContainer } from "./ShopStyles";

function Shop(props) {
  const { products, addItem, increseItemQuantity, decreseItemQuantity } = props;

  const ProductsCards = products.map((product) => {
    return (
      <Cards
        title={product.title}
        price={product.price}
        image={product.image}
        key={product.id}
        addItem={() => addItem(product)}
        quantity={product.quantity}
        increseItemQuantity={() => increseItemQuantity(product)}
        decreseItemQuantity={() => decreseItemQuantity(product)}
      />
    );
  });

  return (
    <ShopContainer>
      <CardsContainer>{ProductsCards}</CardsContainer>
    </ShopContainer>
  );
}

export default Shop;

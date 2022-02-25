import { useNavigate } from "react-router-dom";
import { Nav, ShopTitle, Link, Quantity, NavCointainer } from "./NavBarStyles";

export function NavBar(props) {
  let navigate = useNavigate();

  return (
    <NavCointainer>
      <Nav>
        <div>
          <ShopTitle onClick={() => navigate("/")}>Fake Store</ShopTitle>
        </div>
        <div>
          <Link href="/Shop">Shop</Link>
          <Link href="/Contact">Contact</Link>
          <Link onClick={props.setCart}>
            <ion-icon name="cart"></ion-icon>
            <Quantity>{props.cantProducts}</Quantity>
          </Link>
        </div>
      </Nav>
    </NavCointainer>
  );
}

export default NavBar;

import { useNavigate } from "react-router-dom";
import { Nav, ShopTitle, Button } from "./NavBarStyles";

export function NavBar() {
  let navigate = useNavigate();

  return (
    <Nav>
      <ShopTitle>Fake Store</ShopTitle>
      <Button onClick={() => navigate("/")}>Home</Button>
      <Button onClick={() => navigate("/Cart")}>Contact</Button>
      <Button onClick={() => navigate("/Cart")}>Cart</Button>
    </Nav>
  );
}

export default NavBar;

import { useNavigate } from "react-router-dom";

export function NavBar() {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Fake Store</h1>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/Cart")}>Cart</button>
    </div>
  );
}

export default NavBar;

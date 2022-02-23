import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <h1>Main Page</h1>
      <button onClick={() => navigate("/Shop")}>Shop</button>
    </div>
  );
}

export default App;

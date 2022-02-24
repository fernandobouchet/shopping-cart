import { useNavigate } from "react-router-dom";
import { HomeContainer, ShopButton, HomeTitle } from "./HomeStyles";

function Home() {
  let navigate = useNavigate();

  return (
    <HomeContainer>
      <HomeTitle>Fake Store</HomeTitle>
      <ShopButton onClick={() => navigate("/Shop")}>Lets Shop!</ShopButton>
    </HomeContainer>
  );
}

export default Home;

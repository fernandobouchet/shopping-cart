import styled from "styled-components";
import shopImage from "../Images/pexels.jpg";

export const CardsContainer = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  justify-content: center;

  @media (max-width: 480px) {
    padding: 3.5rem 0;
    justify-content: center;
  }
`;

export const ShopContainer = styled.div`
  background-image: url(${shopImage});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;

  @media (max-width: 480px) {
    background-position: 50%;
  }
`;

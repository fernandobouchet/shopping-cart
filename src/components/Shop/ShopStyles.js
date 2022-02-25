import styled from "styled-components";
import shopImage from "../Images/pexels.jpg";

export const CardsContainer = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
`;

export const ShopContainer = styled.div`
  background-image: url(${shopImage});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

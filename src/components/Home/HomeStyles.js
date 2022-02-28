import styled from "styled-components";
import shopImage from "../Images/shop.jpg";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  background-image: url(${shopImage});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 480px) {
    background-position: 50%;
  }
`;

export const ShopButton = styled.button`
  font-family: "Amiri", serif;
  color: white;
  font-size: 3rem;
  width: 20rem;
  background-color: transparent;
  backdrop-filter: blur(4px);
  height: 5rem;
  cursor: pointer;
  border: solid;
  transition: all 500ms ease 0s;
  animation: bounce 1.1s infinite alternate;

  &:hover {
    transform: scale(1.03);
    animation: none;
  }

  @-webkit-keyframes bounce {
    to {
      -webkit-transform: scale(1.03);
    }
  }
  @-moz-keyframes bounce {
    to {
      -moz-transform: scale(1.03);
    }
  }
  @keyframes bounce {
    to {
      transform: scale(1.03);
    }
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    width: 15rem;
  }
`;

export const HomeTitle = styled.h1`
  font-family: "Cinzel", serif;
  color: white;
  font-size: 6rem;
  border: solid;
  padding: 1rem 2rem;
  backdrop-filter: blur(4px);

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

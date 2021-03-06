import styled from "styled-components";

export const CartModal = styled.div`
  position: relative;
  background-color: white;
  width: 30rem;
  height: 30rem;
  border-radius: 15px;
  padding: 1rem;

  @media (max-width: 480px) {
    padding: 0.5rem;
    width: 20rem;
    height: 25rem;
  }
`;

export const CartContainer = styled.div`
  font-family: "Thasadith", sans-serif;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 25rem;
  width: auto;
  padding: 0 1rem;
  margin: 0.5rem;
  border-bottom: solid;
  border-bottom-width: 0.1rem;
  align-items: center;

  @media (max-width: 480px) {
    min-width: 15rem;
    width: 18rem;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductInfo = styled.h2`
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const CartInfo = styled.h3`
  font-size: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const CartTitle = styled.h2`
  font-size: 2rem;
  margin: auto;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const CloseButton = styled.button`
  border: none;
  color: white;
  font-family: inherit;
  font-size: 1rem;
  font-weight: bold;
  background-color: #171717;
  cursor: pointer;
  border-radius: 1.8rem;
  height: 1.8rem;
  width: 1.8rem;
  margin-bottom: 0.2rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    height: 1.5rem;
    width: 1.5rem;
  }

  > ion-icon {
    height: 0.9rem;
    width: 0.9rem;
  }
`;

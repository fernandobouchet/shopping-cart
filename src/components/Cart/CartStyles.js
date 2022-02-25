import styled from "styled-components";

export const CartModal = styled.div`
  position: relative;
  background-color: white;
  width: 30rem;
  height: 30rem;
  border-radius: 15px;
`;

export const CartContainer = styled.div`
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
  font-family: "Thasadith", sans-serif;
  display: flex;
  justify-content: space-between;
  background-color: white;
  min-width: 25rem;
  width: auto;
  padding: 1rem;
  margin: 1rem;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 10px;
`;

export const ProductInfo = styled.h2`
  font-size: 1rem;
`;

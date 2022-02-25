import styled from "styled-components";

export const Card = styled.div`
  font-family: "Thasadith", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  width: 15rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 10px;
  transition: all 100ms ease 0s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProductImage = styled.img`
  width: 8rem;
  align-self: center;
`;

export const ProductTitle = styled.h1`
  font-size: 1rem;
`;

export const ProductPrice = styled.h2`
  font-size: 1rem;
`;

export const AddToCartButton = styled.button`
  cursor: pointer;
`;

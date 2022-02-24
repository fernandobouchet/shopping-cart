import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 7rem;
  background-color: #0a0a0a;
  border: solid;
  border-color: white;
`;

export const ShopTitle = styled.h1`
  font-family: "Cinzel", serif;
  color: white;
  font-size: 4rem;
`;

export const Button = styled.button`
  font-family: "Amiri", serif;
  color: white;
  font-size: 2rem;
  background-color: inherit;
  cursor: pointer;
  border: none;
  border-bottom: solid;
  border-color: #0a0a0a;
  transition: all 100ms ease-in-out 0s;

  &:hover {
    border-bottom: solid;
  }
`;

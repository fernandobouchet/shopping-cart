import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  height: 3.5rem;
  background-color: #0a0a0a;
  border-bottom: solid;
  border-bottom-width: 0.1rem;
  border-color: white;
`;

export const ShopTitle = styled.h1`
  font-family: "Cinzel", serif;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
`;

export const Link = styled.a`
  font-family: "Amiri", serif;
  margin: 0 3rem;
  color: white;
  height: 3rem;
  font-size: 1.8rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 500ms ease-in-out 0s;

  &:hover {
    color: #ffffff79;
  }
`;

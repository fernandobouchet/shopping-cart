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

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;
export const NavCointainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
`;

export const ShopTitle = styled.h1`
  font-family: "Cinzel", serif;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Quantity = styled.span`
  font-family: "Amiri", serif;
  color: white;
  font-size: 1.5rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
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

  @media (max-width: 480px) {
    margin: 0 0.5rem;
    font-size: 1rem;
  }

  > ion-icon {
    height: 1rem;
    margin-bottom: 0.3rem;
  }
`;

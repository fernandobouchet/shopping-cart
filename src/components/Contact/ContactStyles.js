import styled from "styled-components";
import shopImage from "../Images/pexels.jpg";

export const ContactsContainer = styled.div`
  font-family: "Thasadith", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${shopImage});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;

  @media (max-width: 480px) {
    background-position: 50%;
  }
`;

export const Contacts = styled.div`
  background-color: white;
  width: 30rem;
  height: 30rem;
  border-radius: 15px;
  padding: 1rem;

  @media (max-width: 480px) {
    width: 20rem;
    height: 25rem;
    padding: 1rem;
  }
`;

export const ContactTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const ContactInfo = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const ShopMap = styled.img`
  width: 18rem;
  border-radius: 1rem;

  @media (max-width: 480px) {
    width: 16rem;
  }
`;

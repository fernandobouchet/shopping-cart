import {
  ContactsContainer,
  Contacts,
  ContactTitle,
  ShopMap,
  ContactInfo,
} from "./ContactStyles";

function Contact() {
  return (
    <ContactsContainer>
      <Contacts>
        <ContactTitle>Contact Us!</ContactTitle>
        <ContactInfo>Tel: 5555-5555</ContactInfo>
        <ContactInfo>Dir: Fake Street 123, CA.</ContactInfo>
        <ShopMap
          src="https://fernandobouchet.github.io/resto-page/4fa27862c6344d9a34a0.png"
          alt="store ubication"
        />
      </Contacts>
    </ContactsContainer>
  );
}

export default Contact;

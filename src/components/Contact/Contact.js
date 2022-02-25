import { useNavigate } from "react-router-dom";

function Contact() {
  let navigate = useNavigate();

  return (
    <>
      <h1>Contact</h1> <button onClick={() => navigate("/Shop")}>Shop</button>
    </>
  );
}

export default Contact;

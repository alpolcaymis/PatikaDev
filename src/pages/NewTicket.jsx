import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Form from "../components/Form";

function NewTicket() {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    navigate("/ticket-success");
  };

  return (
    <>
      <BackButton url="/" />
      <Form />
    </>
  );
}

export default NewTicket;

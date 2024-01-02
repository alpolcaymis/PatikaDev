import BackButton from "../components/BackButton";
import CreateTicket from "../components/CreateTicket";

function NewTicket() {
  return (
    <>
      <BackButton url="/" />
      <CreateTicket />
    </>
  );
}

export default NewTicket;

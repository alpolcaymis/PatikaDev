import BackButton from "../components/BackButton";

function SuccessTicket() {
  return (
    <div>
      <BackButton url="/ticket-search" />
      <h1>Thank you</h1>
      <h3>We recieved your application!</h3>
      <h4>Soon...</h4>
    </div>
  );
}

export default SuccessTicket;

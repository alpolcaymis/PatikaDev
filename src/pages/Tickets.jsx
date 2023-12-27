import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

function Tickets() {
  if (false) {
    return <Spinner />;
  }

  return (
    <>
      <BackButton url="/" />
      <h1>Tickets</h1>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Tickets;

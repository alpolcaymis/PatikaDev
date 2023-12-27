import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useParams, useNavigate } from "react-router-dom";

function Ticket() {
  const params = useParams();
  const { ticketId } = useParams();
  const navigate = useNavigate();

  // const onTicketClose = () => {
  //   dispatch(closeTicket(ticketId));
  //   toast.success("Ticket Closed");
  //   navigate("/tickets");

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url="/admin/tickets" />
        <h2>
          Ticket ID : {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>
          Date Submitted: {new Date(ticket.createdAt).toLocaleString("en-US")}
        </h3>
        <h3>Product: {ticket.product}</h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description of Issue</h3>
          <p>{ticket.description}</p>
        </div>
      </header>

      {ticket.status !== "closed" && (
        <button onClick={onTicketClose} className="btn btn-block btn-danger">
          Close Ticket
        </button>
      )}
    </div>
  );
}

export default Ticket;

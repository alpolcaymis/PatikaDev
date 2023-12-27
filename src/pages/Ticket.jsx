import BackButton from "../components/BackButton";
import { useParams, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/cart-context";

function Ticket() {
  const { ticket } = useCartContext();
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
          Ticket ID : {ticket.id}
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
          <h3>Note</h3>
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            placeholder={ticket.note}
          ></textarea>
        </div>
      </header>

      {ticket.status !== "closed" && (
        <button className="btn btn-block btn-danger">Close Ticket</button>
      )}
    </div>
  );
}

export default Ticket;

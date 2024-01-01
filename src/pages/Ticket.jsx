import BackButton from "../components/BackButton";
import { useParams, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/cart-context";
import { useRef, useEffect } from "react";

function Ticket() {
  const { foundTicketObj } = useCartContext();
  const NoteTextArea = useRef();

  const ticket = foundTicketObj;

  const edit = () => {
    ticket.note = NoteTextArea.current.value;
  };
  const { ticketId } = useParams();

  return (
    <div className="ticket-page">
      <h1>Adana: {ticketId}</h1>
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
        <h3>name: {ticket.name}</h3>
        <hr />
        <div className="ticket-desc">
          <h3>Note</h3>
          <textarea
            ref={NoteTextArea}
            name=""
            id=""
            cols="30"
            rows="6"
            placeholder={ticket.note}
          ></textarea>
        </div>
      </header>

      {ticket.status !== "closed" && (
        <button className="btn btn-block btn-danger" onClick={() => edit()}>
          Close Ticket
        </button>
      )}
    </div>
  );
}

export default Ticket;

// const onTicketClose = () => {
//   dispatch(closeTicket(ticketId));
//   toast.success("Ticket Closed");
//   navigate("/tickets");

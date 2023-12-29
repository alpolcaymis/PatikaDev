import React from "react";
import { Link } from "react-router-dom";

import { useCartContext } from "../context/cart-context";

function TicketItem({ ticket }) {
  const { findInTickets } = useCartContext();

  return (
    <div className="ticket">
      {/* <div>{new Date(ticket.createdAt).toLocaleString("en-US")}</div>
      <div>{ticket.product}</div>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <Link to={`/ticket/${ticket.id}`} className="btn btn-reverse btn-sm">
        View
      </Link> */}
      <div>{"27/12/2023"}</div>
      <div>{ticket.name}</div>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <Link
        to={`/admin/ticket/${ticket.id}`}
        className="btn btn-reverse btn-sm"
        onClick={() => findInTickets(ticket.id)}
      >
        View
      </Link>
    </div>
  );
}

export default TicketItem;

import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import TicketItem from "../components/TicketItem";
import { useCartContext } from "../context/cart-context";

function Tickets() {
  if (false) {
    return <Spinner />;
  }
  const { tickets } = useCartContext();

  return (
    <>
      <BackButton url="/admin" />
      <h1>Tickets</h1>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div></div>
        </div>
        {tickets.map((ticket) => {
          return <TicketItem key={ticket.id} ticket={ticket} />;
        })}
      </div>
    </>
  );
}

export default Tickets;

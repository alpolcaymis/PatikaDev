import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import TicketItem from "../components/TicketItem";

function Tickets() {
  if (false) {
    return <Spinner />;
  }
  const tickets = [
    {
      id: "123",
      createdAt: "12/12/2023",
      product: "Apple",
      status: "new",
    },
    {
      id: "567",
      createdAt: "24/24/2023",
      product: "Samsung",
      status: "open",
    },
    {
      id: "789",
      createdAt: "27/12/2023",
      product: "OnePlus",
      status: "closed",
    },
  ];

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

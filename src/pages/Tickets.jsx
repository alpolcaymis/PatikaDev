import BackButton from "../components/BackButton";
import TicketItem from "../components/TicketItem";
import { useCartContext } from "../context/cart-context";

import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase-config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

function Tickets() {
  const [tickets, setTickets] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        // Get reference
        const ticketsRef = collection(db, "tickets");

        // Create a query
        const q = query(ticketsRef, orderBy("timestamp", "desc"), limit(10));
        // Execute query
        const querySnap = await getDocs(q);

        console.log(querySnap);

        const tickets = [];

        querySnap.forEach((doc) => {
          return tickets.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setTickets(tickets);
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch tickets");
      }
    };

    fetchTickets();
  }, [params.ticketId]);

  return (
    <>
      <BackButton url="/admin" />
      <h1>Tickets</h1>
      <div className="ticket-headings">
        <div>Date</div>
        <div>Name</div>
        <div>Status</div>
        <div></div>
      </div>
      {loading ? (
        <Spinner />
      ) : tickets && tickets.length > 0 ? (
        <>
          <main>
            <ul>
              {tickets.map((ticket) => {
                return (
                  <TicketItem
                    ticket={ticket.data}
                    id={ticket.id}
                    key={ticket.id}
                  />
                );
              })}
            </ul>
          </main>
        </>
      ) : (
        <p>No tickets for {params.ticketId}</p>
      )}
    </>
  );
}

export default Tickets;

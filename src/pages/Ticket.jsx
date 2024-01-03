import BackButton from "../components/BackButton";
import { useParams, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import shareIcon from "../assets/svg/shareIcon.svg";
import { db } from "../firebase-config";
import { toast } from "react-toastify";

import { useCartContext } from "../context/cart-context";

function Ticket() {
  const { isLoggedIn } = useCartContext();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);

  const NoteTextArea = useRef();

  const navigate = useNavigate();
  const params = useParams();

  const closeTicket = async (id) => {
    const ticketDoc = doc(db, "tickets", id);
    const newFields = {
      status: "closed",
      note: NoteTextArea.current.value,
    };
    await updateDoc(ticketDoc, newFields);
    toast.success("Successfully Saved & Closed");
    navigate("/admin/tickets/");
  };

  const updateTicketStatus = async (id) => {
    console.log("status open");
    const ticketDoc = doc(db, "tickets", id);
    const newFields = {
      status: "open",
    };
    await updateDoc(ticketDoc, newFields);
  };

  useEffect(() => {
    setLoading(true);
    const fetchTicket = async () => {
      const docRef = doc(db, "tickets", params.ticketId);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setTicket(docSnap.data());
        setLoading(false);
      } else {
        navigate("/ticket-search");
        toast.error("given ticket ID is not correct!");
        setLoading(false);
      }
    };
    fetchTicket();
  }, [navigate, params.ticketId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <main>
      <div
        className="shareIconDiv"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          setShareLinkCopied(true);
          setTimeout(() => {
            setShareLinkCopied(false);
          }, 2000);
        }}
      >
        <img src={shareIcon} alt="" />
      </div>

      {shareLinkCopied && <p className="linkCopied">Link Copied!</p>}

      <div className="ticket-page">
        <header className="ticket-header">
          <BackButton url="/admin/tickets" />
          <h2>
            Ticket ID : {params.ticketId}
            <span className={`status status-${ticket.status}`}>
              <button
                onClick={() => {
                  updateTicketStatus(params.ticketId, ticket.note),
                    (ticket.status = "new");
                }}
              >
                {ticket.status}
              </button>
            </span>
          </h2>
          <h3>
            Date Submitted:{" "}
            {new Date(ticket.timestamp.toDate()).toLocaleString("tr-TR", {
              timeZone: "Europe/Istanbul",
              hour12: false,
            })}
          </h3>
          <h3>Name: {ticket.name}</h3>
          <h3>Surname : {ticket.surname}</h3>
          <h3>Age : {ticket.age}</h3>
          <h3>T.C No : {ticket.tcNo}</h3>
          <h3>Reason : {ticket.reason}</h3>
          <h3>Address : {ticket.address}</h3>
          <hr />
        </header>
        <>
          <div className="ticket-desc">
            <h3>Note</h3>
            <textarea
              ref={NoteTextArea}
              name=""
              id=""
              cols="40"
              rows="6"
              placeholder={ticket.note}
              disabled={!isLoggedIn}
            ></textarea>
          </div>
          {isLoggedIn && (
            <button
              className="btn btn-block btn-danger"
              onClick={() => {
                closeTicket(params.ticketId, ticket.note);
              }}
            >
              Close Ticket
            </button>
          )}
        </>
      </div>
    </main>
  );
}

export default Ticket;

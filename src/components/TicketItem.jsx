import { Link } from "react-router-dom";
import EditIcon from "../assets/svg/editIcon.svg";

function TicketItem({ ticket, id, onEdit }) {
  return (
    <div className="ticket">
      <div> {new Date(ticket.timestamp.toDate()).toUTCString()}</div>
      <div>{ticket.name}</div>

      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <Link to={`/admin/ticket/${id}`} className="btn btn-reverse btn-sm">
        View
      </Link>
      {onEdit && (
        <img src={EditIcon} className="editIcon" onClick={() => onEdit(id)} />
      )}
    </div>
  );
}

export default TicketItem;

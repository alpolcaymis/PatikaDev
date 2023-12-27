import React from "react";
import { FaTicketAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function AdminPanel() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>AdminPanel</h1>
      <button>
        <Link to="/admin/tickets" className="btn btn-block">
          <FaTicketAlt /> View My Tickets
        </Link>
      </button>
    </div>
  );
}

export default AdminPanel;

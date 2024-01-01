import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function SearchTicket() {
  const input = useRef();
  const navigate = useNavigate();

  return (
    <div>
      <h1>SearchTicket</h1>
      <div className="form-group">
        <input
          ref={input}
          type="text"
          placeholder="enter your code ticket ID"
        />
        <button
          className="btn btn-block"
          onClick={() => {
            navigate(`/admin/ticket/${input.current.value}`);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchTicket;

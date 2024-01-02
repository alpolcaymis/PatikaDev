import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
          required
        />
        <button
          className="btn btn-block"
          onClick={() => {
            input.current.value !== ""
              ? navigate(`/ticket/${input.current.value}`)
              : toast.error("please enter given ticket ID code");
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchTicket;

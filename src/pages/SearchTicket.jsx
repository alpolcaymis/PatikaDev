import React from "react";

function SearchTicket() {
  return (
    <div>
      <h1>SearchTicket</h1>
      <div className="form-group">
        <input type="text" placeholder="enter your code ticket ID" />
        <button className="btn btn-block">Search</button>
      </div>
    </div>
  );
}

export default SearchTicket;

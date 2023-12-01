import React, { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  console.log(filtered, "filtered");

  return (
    <div id="list">
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul>
        {filtered.map((contact, index) => (
          <li key={index}>
            <span>{contact.fullname}</span>
            <span className="phone_number">
              <button>
                📞
                <a href={`tel:${contact.phone_number}`}>
                  {contact.phone_number}
                </a>
              </button>
            </span>
          </li>
        ))}
      </ul>
      {filtered.length === 0 && <h2>No matching results.</h2>}
    </div>
  );
}

export default List;

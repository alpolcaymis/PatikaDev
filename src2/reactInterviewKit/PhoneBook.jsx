import React, { useState } from "react";
// import ReactDOM from "react-dom";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

const PhoneBookForm = ({ submitUser }) => {
  const [formDetails, setFormDetails] = useState({
    userFirstname: "Coder",
    userLastname: "Byte",
    userPhone: "8885559999",
  });

  const updateField = (e, key) => {
    e.preventDefault();
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    submitUser(formDetails);
  };

  return (
    <form onSubmit={submitForm} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        placeholder="Joe"
        onChange={updateField}
        value={formDetails.userFirstname}
        required
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        placeholder="Smith"
        onChange={updateField}
        value={formDetails.userLastname}
        required
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        placeholder="1234567890"
        onChange={updateField}
        value={formDetails.userPhone}
        required
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
};

const InformationTable = (props) => {
  const sortedUsers = props.users.sort((a, b) =>
    a.userLastname.localeCompare(b.userLastname)
  );

  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.length > 0 &&
          sortedUsers.map((user, index) => (
            <tr key={index}>
              <td style={style.tableCell}>{user.userFirstname}</td>
              <td style={style.tableCell}>{user.userLastname}</td>
              <td style={style.tableCell}>{user.userPhone}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

const PhoneBook = () => {
  const [users, setUsers] = useState([]);

  const submitUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  return (
    <section>
      <PhoneBookForm submitUser={submitUser} />
      <InformationTable users={users} />
    </section>
  );
};

export default PhoneBook;
// ReactDOM.render(
//   <Application />,
//   document.getElementById('root')
// );

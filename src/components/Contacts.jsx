import React, { useEffect, useState } from "react";
import List from "./List";
import Form1 from "./Form1";

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Anıl Altan", phone_number: "123456" },
    { fullname: "Baha Saraçoğlu", phone_number: "234567" },
    { fullname: "Barış Sonar", phone_number: "345678" },
    { fullname: "Damla Kara", phone_number: "456789" },
    { fullname: "İbrahim Üzüm", phone_number: "567890" },
    { fullname: "Muaz Erdem Yiğit", phone_number: "678901" },
  ]);

  return (
    <>
      <Form1 addContact={setContacts} />
      <List contacts={contacts} />
    </>
  );
}

export default Contacts;

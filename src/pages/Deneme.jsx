import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
function Deneme() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [tickets, setTickets] = useState([]);
  const ticketsCollectionRef = collection(db, "tickets");

  const createUser = async () => {
    await addDoc(ticketsCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateTicket = async (id, age) => {
    const ticketDoc = doc(db, "tickets", id);
    const newFields = {
      age: age + 1,
    };
    await updateDoc(ticketDoc, newFields);
  };

  useEffect(() => {
    const getTickets = async () => {
      const data = await getDocs(ticketsCollectionRef);
      // console.log(data);
      setTickets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getTickets();
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="write name"
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(e) => {
          setNewAge(e.target.value);
        }}
      />
      <button onClick={createUser}>Create Ticket</button>
      <h1>Deneme</h1>
      {tickets.map((ticket) => {
        return (
          <div key={ticket.id}>
            <h1>Name : {ticket.name}</h1>
            <h1>Age : {ticket.age}</h1>
            <button
              onClick={() => {
                updateTicket(ticket.id, ticket.age);
              }}
            >
              increase age
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Deneme;

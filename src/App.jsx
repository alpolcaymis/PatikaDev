import React from "react";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div id="container">
      <header>
        <img src="../public/logo.png" alt="" />
        <h1>
          Your <em>Personal</em> Contact Book
        </h1>
        <p>Keep your contacts organized and up to date</p>
      </header>
      <Contacts />
    </div>
  );
}

export default App;

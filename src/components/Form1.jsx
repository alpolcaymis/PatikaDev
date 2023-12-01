import React, { useRef, useState } from "react";

const initialFormValues = { fullname: "", phone_number: "" };

function Form1({ addContact }) {
  const [form, setForm] = useState(initialFormValues);

  const fullnameInputRef = useRef();
  const phone_numberInputRef = useRef();

  const onChangeInput = (e) => {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (
      fullnameInputRef.current.value === "" ||
      phone_numberInputRef.current.value === ""
    ) {
      return false;
    }
    addContact((prevContacts) => [form, ...prevContacts]);
    console.log(form);

    fullnameInputRef.current.value = "";
    phone_numberInputRef.current.value = "";
  };
  return (
    <form id="form" onSubmit={onSubmit}>
      <input
        name="fullname"
        placeholder="Full Name"
        ref={fullnameInputRef}
        onChange={onChangeInput}
      />

      <input
        name="phone_number"
        placeholder="Phone Number"
        ref={phone_numberInputRef}
        onChange={onChangeInput}
      />

      <button>Add</button>
    </form>
  );
}

export default Form1;

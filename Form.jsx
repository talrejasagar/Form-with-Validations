import { Component } from "react";
import { useState } from "react";
/* const Input = () => {


} */

const Saga = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  return (
    <div>
      <label for="first-name">First Name</label>
      <input
        type="text"
        title="first-name"
        onChange={(e) => setFirst(e.target.value)}
      />
      <p>{first}</p>
      <label for="last-name">Last Name</label>
      <input
        type="text"
        title="last-name"
        onChange={(e) => setLast(e.target.value)}
      />
      <p>{first + last}</p>
      <label for="mobile">Mobile No.</label>
      <input
        type="number"
        title="mobile"
        onChange={(e) => setMobile(e.target.value)}
      />
      <p>{mobile}</p>
      <label for="email">Email</label>
      <input
        type="email"
        title="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>{email}</p>
      <label for="city">City</label>
      <input
        type="text"
        title="city"
        onChange={(e) => setCity(e.target.value)}
      />
      <p>{city}</p>
    </div>
  );
};

export default Saga;

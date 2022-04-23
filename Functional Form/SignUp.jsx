import { Component, useState } from "react";

const SignUp = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpass, setCpass] = useState("");

  const [errfname, setFnameError] = useState("");
  const [errlname, setLnameError] = useState("");
  const [erremail, setEmailError] = useState("");
  const [errpassword, setPasswordError] = useState("");
  const [errconfirm, setConfirmError] = useState("");

  function Validate() {
    if (first == "") {
      setFnameError("Please enter First Name");
    }
    if (last == "") {
      setLnameError("Please enter Last Name");
    }
    if (email == "") {
      setEmailError("Please enter Email");
    }

    if (password == "" || cpass == "") {
      setPasswordError("Please enter password");
    }

    if (cpass !== password) {
      setConfirmError("Passwords does not match");
    }
  }

  return (
    <>
      <label for="first">First Name</label>
      <input
        type="text"
        name="first"
        onChange={(e) => setFirst(e.target.value)}
        value={first}
      />
      <br />
      {errfname && <span>{first === "" ? errfname : setFnameError("")}</span>}
      <br />
      <label for="Last">Last Name</label>
      <input
        type="text"
        name="last"
        onChange={(e) => setLast(e.target.value)}
        value={last}
      />
      <br />
      {errlname && <span>{last === "" ? errlname : setLnameError("")}</span>}
      <br />

      <label for="email">Email</label>

      <input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br />
      {erremail && <span>{email === "" ? erremail : setEmailError("")}</span>}
      <br />
      <label for="password">Password</label>
      <input
        type="password"
        name="pass"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <br />
      {errpassword && (
        <span>{password === "" ? errpassword : setPasswordError("")}</span>
      )}
      <br />
      <label for="cpass">Confirm Password</label>
      <input
        type="password"
        name="cpass"
        onChange={(e) => setCpass(e.target.value)}
        value={cpass}
      />
      <br />
      {errconfirm && (
        <span>{errconfirm === "" ? errconfirm : setConfirmError("")}</span>
      )}

      <br />
      <button
        onClick={() => {
          Validate();
        }}
      >
        submit
      </button>
    </>
  );
};

export default SignUp;

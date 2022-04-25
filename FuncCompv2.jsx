import { Component, useState } from "react";

const FuncComponentV2 = (props) => {
  const [profile, setProfile] = useState({
    profile: {
      name: "Sankskrati",
      city: "Jabalpur",
    },
  });

  const _handleInputChange = (e) => {
    const { name, value } = e.target;
    const profile = { ...profile };
    profile[name] = value;
    setProfile(profile);
  };

  return (
    <>
      <input
        onChange={this._handleInputChange}
        name="name"
        type="text"
        placeholder="Enter name"
      />
      <input
        onChange={this._handleInputChange}
        type="text"
        name="city"
        placeholder="Enter city"
      />

      {/*  <Boxes bg="red" color="white" />
          <Boxes bg="orange" color="black" />
          <Boxes bg="blue" color="white" /> */}
    </>
  );
};
export default FuncComponentV2;

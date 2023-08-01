import React, { useState } from "react";
import axios from "axios";

const SearchPlayerState = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submitNames = async () => {
    try {
      const body = { firstName, lastName };
      const response = await axios
        .get(`http://localhost:8080/api/v1/`, {
          method: "GET",
          body,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => response)
        .then((json) => console.log(json));
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <>
      <input
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          submitNames();
        }}
      >
        Submit
      </button>
    </>
  );
};

export default SearchPlayerState;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const SearchPlayer = () => {
  const [playerStats, setPlayerStats] = useState([])
  const schema = yup.object().shape({
    firstName: yup.string(),
    lastName: yup.string().required("Player's last name is required!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const submitForm = async (data) => {
    try {
      const body = { lastName: data.lastName };
      const response = await axios
        .post(`http://localhost:8080/api/v1/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body,
        })
      console.log(response.data)
      setPlayerStats(response.data)
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <h3>Player First Name</h3>
        <input type="text" placeholder="Michael..." {...register("firstName")} />
        <p className="formErrMsg">{errors.firstName?.message}</p>
        <h3>Player Last Name</h3>
        <input type="text" placeholder="Jordan..." {...register("lastName")} />
        <p className="formErrMsg">{errors.lastName?.message}</p>
        <input type="submit" />
      </form>
      <h3>{JSON.stringify(playerStats)}</h3>
    </>
  );
};

export default SearchPlayer;

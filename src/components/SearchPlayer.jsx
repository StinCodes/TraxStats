import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const SearchPlayer = () => {
  const [playerStats, setPlayerStats] = useState([])
  const schema = yup.object().shape({
    playerName: yup.string().required("Player's  name is required!")
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
      const body = { playerName: data.playerName };
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
        <h3>Player Name</h3>
        <input type="text" placeholder="Michael Jordan..." {...register("playerName")} />
        <p className="formErrMsg">{errors.playerName?.message}</p>
        <input type="submit" />
      </form>
      <h3>{JSON.stringify(playerStats)}</h3>
    </>
  );
};

export default SearchPlayer;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const SearchPlayer = () => {
  const [playerInfo, setPlayerInfo] = useState([]);
  const schema = yup.object().shape({
    playerName: yup.string().required("Player's  name is required!"),
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
      const response = await axios.post(`http://localhost:8080/api/v1/`, {
        playerName: data.playerName,
      });
      console.log(response.data);
      setPlayerInfo(response.data);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <h3>Player Name</h3>
        <input
          type="text"
          placeholder="Michael Jordan..."
          {...register("playerName")}
        />
        <p className="formErrMsg">{errors.playerName?.message}</p>
        <input type="submit" />
      </form>
      <div>
        {playerInfo.map((info, index)=>(
          <h3 key={index}>{JSON.stringify(info)}</h3>
        ))}
      </div>
    </>
  );
};

export default SearchPlayer;

import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const SearchPlayer = () => {
  const schema = yup.object().shape({
    firstName: yup.string(),
    lastName: yup.string().required("Player's last name is required!"),
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(
    "🚀 ~ file: SearchPlayer.jsx:17 ~ SearchPlayer ~ lastName:",
    getValues("lastName")
  );

  // const options = {
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //   },
  //   params: { lastName: getValues("lastName") },
  // };

  // const submitForm = () => {
  //   axios.get(`http://localhost:8080/api/v1/`, { options }).then((res) => {
  //     console.log(res);
  //   });
  // };

  const submitForm = async () => {
    try {
      const response = await axios
        .get(`http://localhost:8080/api/v1/`, {
          method: "GET",
          body: JSON.stringify({
            lastName: getValues("lastName"),
          }),
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Content-Type": "application/json",
          },
        })
        .then((response) => response)
        .then((json) => console.log(json));
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <h3>Player First Name</h3>
      <input type="text" placeholder="Michael..." {...register("firstName")} />
      <p className="formErrMsg">{errors.firstName?.message}</p>
      <h3>Player Last Name</h3>
      <input type="text" placeholder="Jordan..." {...register("lastName")} />
      <p className="formErrMsg">{errors.lastName?.message}</p>
      <input type="submit" />
    </form>
  );
};

export default SearchPlayer;

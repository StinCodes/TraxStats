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


  const submitForm = async () => {
    try {
      const body = { firstName: getValues("lastName") };
      const response = await axios
        .get(`http://localhost:8080/api/v1/`, {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify(body)
        })
        .then((response) => console.log(response))
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

import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SearchPlayer = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required("Player's first name is required!"),
    lastName: yup.string().required("Player's last name is required!"),
  });
  const submitForm = (data) => {
    console.log(data);
  };
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });
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



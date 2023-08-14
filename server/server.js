const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const axios = require("axios");

const players = require("./routes/players");

// const circularJSON = require('circular-json');

const PORT = process.env.PORT || 8080;

//to access info from forms
app.use(bodyParser.urlencoded({ extended: true }));
//allows you to use data from react via json objects
app.use(bodyParser.json());
app.use(bodyParser.raw());

const cors = require("cors");

const corsOption = {
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOption));

app.post(`/api/v1/`, (req, res) => {
  //   try {
  //     let json = circularJSON.stringify(req);
  //     res.send(json);
  // } catch(e) {
  //     console.log(e);
  //     res.send({ error: e.message });
  // }

  //declare value below as variable, make a req to API, then fill variable as template literal to URL

  const lastName = req.body.body.lastName;
  getPlayers(lastName, res);
  // try {
  //   const res = axios
  //     .get(`https://balldontlie.io/api/v1/players?search=${lastName}`, {
  //       method: "GET",
  //       // headers: {
  //       //   "Access-Control-Allow-Origin": "*",
  //       //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //       //   "Content-Type": "application/json",
  //       // },
  //     })
  //     .then((response) => console.log(response))
  //     .then((json) => console.log(json));
  //   res.send(res);
  // } catch (error) {
  //   console.warn(error);
  // }
});

async function getPlayers(lastName, res) {
  // Fetch the API and convert it to json.
  // const players = []s

  const response = await axios
    .get(`https://balldontlie.io/api/v1/players?search=${lastName}`)
    .then((res) => console.log(res.data))
    .then((json) => console.log("json"));

  // Save the returned data as an array.
  // const players = data.data;
  // console.log(players);

  // Create an element to display each individual player's information.
  // response.array.forEach(player => {
  //   displayPlayer(player);
  // });
}

app.listen(PORT, ()=>{
  console.log(`Server started at ${PORT}`)
})



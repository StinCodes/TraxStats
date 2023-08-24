const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");

const players = require("./routes/players");

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
  //declare value below as variable, make a req to API, then fill variable as template literal to URL
  const playerName = req.body.body.playerName;
  getPlayers(playerName, res);

});

const getPlayers = async (lastName, res) => {
  // Fetch the API and convert it to json.
  try {
    const apiResponse = await axios.get(
      `https://balldontlie.io/api/v1/players?search=${lastName}`
    );
    const playerData = apiResponse.data.data;
    res.json(playerData);
  } catch (error) {
    console.error("Error fetching players:", error);
    res.status(500).json({ error: "Error fetching players" });
  }
  // Save the returned data as an array.
  // const players = data.data;
  // console.log(players);

  // Create an element to display each individual player's information.
  // response.array.forEach(player => {
  //   displayPlayer(player);
  // });
};

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});

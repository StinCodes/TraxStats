const express = require("express");
const app = express();
const players = require('./routes/players')

const PORT = process.env.PORT || 8080

// https://balldontlie.io/api/v1/players?search=lebronjames

//to access info from forms
app.use(express.urlencoded({ extended: true }))

app.get(`/api/v1`, (req, res) => {
  res.send("helloWorld!");
});

app.use(`/api/v1/players?search=${lastName}`, players)

app.listen(PORT, ()=>{
  console.log(`Server started at ${PORT}`)
})



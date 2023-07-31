const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const players = require('./routes/players')


const PORT = process.env.PORT || 8080

const cors = require('cors');

const corsOption = {
    origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));

app.use(cors())

//to access info from forms
app.use(bodyParser.urlencoded({ extended: true }));
//allows you to use data from react via json objects
app.use(bodyParser.json());
app.use(bodyParser.raw());


// https://balldontlie.io/api/v1/players?search=lebronjames

app.get(`/api/v1/`, (req, res) => {
  console.log(req)
  res.send(req);
});

// app.use(`/api/v1/players?search=${lastName}`, players)

app.listen(PORT, ()=>{
  console.log(`Server started at ${PORT}`)
})



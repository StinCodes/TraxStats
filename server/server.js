const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const players = require('./routes/players')

// const circularJSON = require('circular-json');



const PORT = process.env.PORT || 8080

//to access info from forms
app.use(bodyParser.urlencoded({ extended: true }));
//allows you to use data from react via json objects
app.use(bodyParser.json());
app.use(bodyParser.raw());

const cors = require('cors');

const corsOption = {
    origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));




// https://balldontlie.io/api/v1/players?search=lebronjames

app.get(`/api/v1/`, (req, res) => {
//   try {
//     let json = circularJSON.stringify(req);
//     res.send(json);
// } catch(e) {
//     console.log(e);
//     res.send({ error: e.message });
// }
  res.send(req.body);
  console.log(req.body)
});

// app.use(`/api/v1/players?search=${lastName}`, players)

app.listen(PORT, ()=>{
  console.log(`Server started at ${PORT}`)
})



const router = require('express').Router()

router.get(`/players?search=${lastName}`, (req, res)=>{
  res.send(`Searched for ${req.body.lastName}`)
})

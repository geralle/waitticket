var express = require('express');
var router = express.Router();

// const knex = require('../db/connection')
const db = require('../db/query')

router.get('/', (req, res, next) => {
  let token = req.cookies['token']
  db.getUserByUserToken(token)
  .then(user => {
   
    db.getTicketsByUserId(user.id)
    .then((tickets) => {
      //console.log(tickets)
      res.render('myprofile',{
        tickets: tickets
       })
    })
  })  
})

router.get('/', (req, res, next)=>{
  var token = req.cookies['token']
  db.getUserByUserToken(token)
  .then(user =>{
    res.render('myprofile',{
        title: "waitticket",
        name: user.name
      })
    })
  })

module.exports = router;

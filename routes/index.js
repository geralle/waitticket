var express = require('express');
var router = express.Router();

// const knex = require('../db/connection')
 const db = require('../db/query')

 router.get('/', (req, res, next) => {
   var token = req.cookies['token']
   if(Object.keys(req.cookies).length == 0){
     db.getAllTickets()
     .then((tickets) => {
       res.render('index', {
         tickets: tickets
       })
     })
   }else{
     db.getUserByUserToken(token)
     .then(user =>{
       db.getAllTickets()
       .then((tickets) => {
         res.render('index', {
          tickets: tickets,
          name: user.name
         })
       })
     })
   }
 })

module.exports = router;

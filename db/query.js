const db = require('./connection')

getAllTickets = () => {
  return db.select('*').from('tickets')
}

getAllUsers = () => {
  return db.select('*').from('users')
}

getUserByUserName = (username) => {
  return db('users').first().where('username', username)
}

getTicketsByUserId = id => {
  return db('tickets').where('user_id', id)
}

getTicketsByType = (type, location) => {
  return db('tickets').where({
    type: type,
    location: location
    }).select('*')
}

addTicket = (data, userId) => {
  return db('tickets').insert({
    event: data.event,
    date: data.date,
    time: data.time,
    venue: data.venue,
    location: data.location,
    type: data.type,
    pdf_link: data.pdf_link,
    user_id: userId
  })
}

createAccount = (data) => {
  return db('users').insert(data)
}

loginAccount = (username,password) => {
  return db('users').select().where(
    {
      'username': username,
      'password': password
    }
  )
}

generateToken = () =>{
  var code = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 30; i++){
    code += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return code;
}

updateToken = (username, token) => {
  return db('users').select().update('token',token).where('username',username)
}

releaseToken = (token) => {
  return db('users').select().update('token','').where('token',token)
}

getUserByUserToken = (token) => {
  return db('users').first().where('token', token)
}

updateUserData = (username, data) => {
  return db('users').select().update({
    name: data.name,
    email: data.email,
    username: data.username,
    password: data.password
  }).where('username',username)
}

getTicketsByTicketId = () => {

}

module.exports = {
  getAllTickets,
  getAllUsers,
  getUserByUserName,
  getTicketsByUserId,
  getTicketsByType,
  addTicket,
  createAccount,
  loginAccount,
  updateToken,
  generateToken,
  getUserByUserToken,
  releaseToken,
  updateUserData,
  getTicketsByTicketId
}

var cookie = document.cookie
if(cookie.search('token') < 0){
  // console.log('not logged in')
  $('#logoutButton').hide()
  $('#loginButton').show()
  $('#myProfileButton').hide()
  $('#addTicketButton').hide()
}else{
  // console.log('logged in')
  $('#logoutButton').show()
  $('#loginButton').hide()
  $('#myProfileButton').show()
  $('#addTicketButton').show()
}

var dt = new Date();
var logoutButton = document.getElementById('logoutButton')
logoutButton.addEventListener('click',function(event){
  console.log('click')
  document.cookie = `token=; expires=${dt}`;
  window.location = "/";
})

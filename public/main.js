let div = document.getElementById('searchFormatting')

const form = document.getElementById('typeform')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  div.innerHTML =''
  let id2 = event.target[1].value
  let id1 = event.target[0].value
  getInfoByCategory(id2, id1)
})

getInfoByCategory = (id2, id1) => {
  fetch(`http://waitticket.herokuapp.com/api/tickets/type/${id2},${id1}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      for(let i in data) {
        let event = (data[i].event)
        let venue = (data[i].venue)
        console.log(venue)
        let location = data[i].location
        let date = data[i].date
        let time = data[i].time
        createElement(event, venue, location, date, time)
      }

    })
  }


createElement = (event, venue, location, date, time) => {
  let divCreate = document.createElement('div')
  divCreate.className = 'event'

  let p = document.createElement('p')
  p.className = 'textTitle'
  p.textContent = event

  let p2 = document.createElement('p')
  p2.textContent = venue

  let p3 = document.createElement('p')
  p3.textContent = location

  let p4 = document.createElement('p')
  p4.textContent = date

  let p5 = document.createElement('p')
  p5.textContent = time

  divCreate.appendChild(p)
  divCreate.appendChild(p2)
  divCreate.appendChild(p3)
  divCreate.appendChild(p4)
  divCreate.appendChild(p5)
  div.appendChild(divCreate)
}


//
// var cookieParse = document.cookie.split(';')
// console.log(cookieParse)
var cookie = document.cookie
if(cookie.search('token') < 0){
  console.log('not logged in')
}else{
  console.log('logged in')
}


// MAP JS

var url1 = 'https://galvanize-cors.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.7392,-104.9903&radius=10000&keyword='
var url2 = '&key=AIzaSyCpvVaIU3KFri6ORGeukdz3TqFN_GRhXn0'


const venue = document.getElementsByClassName('venue')
let keywords = []

for(let i = 0; i < venue.length; i++){
  keywords.push(venue[i].textContent)
}
console.log(keywords);


var urls = []

function makeUrl(url1, url2, keywords) {
	for (var i = 0; i < keywords.length; i++) {
		urls.push(url1 + keywords[i] + url2)
	}
}
makeUrl(url1, url2, keywords)

//console.log(urls);


var coords = []

function makeCoords(arr) {
  for (var i = 0; i < arr.length; i++) {
    fetch(arr[i])
    	.then(function(response) {
    		return response.json()
    	})
      .then(function(data) {
        console.log(data)
        coords.push(data.results["0"].geometry.location)
      })
  }
  console.log(coords);
}
makeCoords(urls)

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 39.7392, lng: -104.9903},
    styles: [{
        elementType: 'geometry',
        stylers: [{
          color: '#242f3e'
        }]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#242f3e'
        }]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#746855'
        }]
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#d59563'
        }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#d59563'
        }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{
          color: '#263c3f'
        }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#6b9a76'
        }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{
          color: '#38414e'
        }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#212a37'
        }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#9ca5b3'
        }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{
          color: '#746855'
        }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#1f2835'
        }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#f3d19c'
        }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{
          color: '#2f3948'
        }]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#d59563'
        }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          color: '#17263c'
        }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#515c6d'
        }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#17263c'
        }]
      }
    ]
  })

  function newMarkers(arr) {
    for (var i = 0; i < arr.length; i++) {
      var marker = new google.maps.Marker({
        position: arr[i],
        map: map
      })
    }
  }
  newMarkers(coords)
}





//Lizz's new shit
let loginButton = document.getElementById('loginButton')
let loginForm = document.getElementById('loginform')
loginButton.addEventListener('click', event => {
  event.preventDefault()
  loginForm.style.display = 'block'
})
let closeForm = document.getElementsByClassName('closeform')[0]
closeForm.addEventListener('click', event => {
  loginForm.style.display = 'none'
})


let ticketButton = document.getElementsByClassName('addticketformButton')[0]
let addticketform = document.getElementById('addticketform')
ticketButton.addEventListener('click', event => {
  event.preventDefault()
  addticketform.style.display = 'block'
})
let closeTicketForm = document.getElementsByClassName('closeform')[1]
closeTicketForm.addEventListener('click', event => {
  addticketform.style.display = 'none'
})


let createAccountButton = document.getElementsByClassName('createAccountButton')[0]
let createaccount = document.getElementById('createaccount')
createAccountButton.addEventListener('click', event => {
  event.preventDefault()
  loginForm.style.display = 'none'
  createaccount.style.display = 'block'
})
let closeCreateAccount = document.getElementsByClassName('closeform')[2]
closeCreateAccount.addEventListener('click', event => {
  createaccount.style.display = 'none'
})

//Geralle's shit

// var cookieParse = document.cookie.split(';')
// console.log(cookieParse)
var cookie = document.cookie
if(cookie.search('token') < 0){
  // console.log('not logged in')
  $('#logoutButton').hide()
  $('#loginButton').show()
  $('#myProfileButton').hide()
  $('#addTicketButton').hide()
  $('#usersnameDisplay').hide()
}else{
  // console.log('logged in')
  $('#logoutButton').show()
  $('#loginButton').hide()
  $('#myProfileButton').show()
  $('#addTicketButton').show()
  $('#usersnameDisplay').show()
}

var dt = new Date();
var logoutButton = document.getElementById('logoutButton')
logoutButton.addEventListener('click',function(event){
  document.cookie = `token=; expires=${dt}`;
  location.reload()
})

div.addEventListener('click',function(event){
  console.log(event.target.id)
  
})

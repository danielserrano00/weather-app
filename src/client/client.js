const sun = 'http://portugalresident.com/sites/default/files/styles/node-detail/public/field/image/sunny-pics-005.jpg?itok=9ZCt9YUU'
const rain = 'https://d1w9csuen3k837.cloudfront.net/Pictures/1280x720/8/9/2/129892_shutterstock_433625311-crop.jpg'
const snow = 'http://460xn7309grtq8dgf9er612l-wpengine.netdna-ssl.com/wp-content/uploads/2015/02/6-Tips-for-Moving-When-Its-Snowing-Clear-a-Path.jpg'
const cloud = 'https://cdn-cloudflare.pelfusion.com/wp-content/uploads/2009/07/treeinclouds.jpg'

document.getElementById('body').background=sun
document.getElementById('city').textContent='Charlotte'

//find button and add click event handler
document.getElementById('button-get')
  .addEventListener('click', function (e) {
    //on click, set pre tag to Loading...
    setElementText('json-block', 'Loading...')

    //get value from our input
    const value = document.getElementById('text-field').value

    //pass that value to our callApi function
    callApi(value, 'GET')
      .then(function(response){
        //call render users
        //renderUsers(response)

        setElementText('json-block', JSON.stringify(response, null, 2))
    })

  })
const data = ''

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     data = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
//   }
// }
// console.log(data)
/**
 * API Call Handler
 */

const BASE_URL = 'http://localhost:8080'
const API_ENDPOINT = '/api/users/'

const API_HEADERS = {
  Origin: BASE_URL,
  Accept: "application/json",
  "Content-Type": "application/json"
}

// fetch API call - takes an endpoint
const callApi = function(endpoint, method, body){
  //combine our pre definied baseUrl, apiEndpoint, our dynamic name endpoint
  return window.fetch(BASE_URL + API_ENDPOINT + endpoint, {
    cache: 'no-cache',
    mode: 'cors',
    headers: API_HEADERS,
    method,
    body: JSON.stringify(body)
  })
    .then(function (response) {

      const json = response.json()
      if(!response.ok)
        return Promise.reject({response, json})

      return json
    })
}

/**
 * Helpers
 */
function setElementText(id, text){
  document.getElementById(id).innerHTML = text
}




// const userTemplate = (user) =>{
//   return `<div style="color: white;background-color: #f000${user.age};">${user.displayName}: ${user.age}</div>`
// }

// function renderUsers(users){
//
//   //get the users keys ['phil', 'erik', 'danny', 'bob']
//   const names = Object.keys(users)
//
//
//   if(names.length) {
//
//     //iterate through the users and return a user template
//     const userTemplates = names.map(name => userTemplate(users[name]))
//
//     //gets the element and sets the inner html do our user templates
//     const element = document.getElementById('users')
//     element.innerHTML = userTemplates
//   }
// }

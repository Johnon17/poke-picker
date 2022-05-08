//Event listeners - One for the click of the button 
document.querySelector("button").addEventListener("click", pokemon)

function pokemon() {
  //get and store the user input of pokemon name and convert it to lowercase so that it doesn't clash with the API
  let name = document.querySelector("input").value.toLowerCase()

  //Interaction with the API
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    //parse response as JSON
    .then(response => response.json())
    //Working with the response data
    .then(data => {
      //Announce 'Pokemon I choose you as h1'
      document.querySelector("h1").innerText = `${name} I choose You!`
      //Insert image from API to the img tag on the DOM
      document.querySelector("img").src = data.sprites["front_shiny"]
    })
    //Error Message
    .catch(err => console.log(err))
}
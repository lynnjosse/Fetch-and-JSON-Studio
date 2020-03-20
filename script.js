window.addEventListener("load", function(){

  this.fetch("https://handlers.education.launchcode.org/static/astronauts.json")
  .then(function(response){
    response.json()
    .then(function(response){
      console.table(response)
      const container = document.getElementById("container");
      container.innerHTML = astronautParser(response)
    })
  })
})

function astronautParser(astronauts) {
  let astronautHTML = ''
  for (astronaut of astronauts) {
    astronautHTML += 
    `<div class="astronaut">
      <div class="bio">
        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
        <ul>
            <li>Hours in space: ${astronaut.hoursInSpace}</li>
            <li>Active: ${astronaut.active}</li>
            <li>Skills: ${astronaut.skills.join(', ')}</li>
        </ul>
      </div>
      <img class="avatar" src=${astronaut.picture}>
  </div>`

  }
  return astronautHTML
}
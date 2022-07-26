/*
1.Validate the user response with preventDefault()
2. With validation, update a list of what is currently ready or notready for the shuttle launch
3. Indicate what is good or bad about the shuttle and whether it is ready for launch by using 
the DOM to update CSS styles.
4.Fetch some planetary JSON to update the mission destination with vital facts and figures 
about where the shuttle is headed.
*/
window.addEventListener("load", function(){
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event){
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      if(pilotInput.value === ""|| copilotInput.value === ""||fuelLevelInput.value === ""|| cargoMassInput.value ===""){
         alert("All fields are required!")
         event.preventDefault();
      }
   });
});







// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/
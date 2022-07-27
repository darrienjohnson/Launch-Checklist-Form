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

   let pilotInput = document.getElementById('pilotName');
   let copilotInput = document.getElementById('copilotName');
   let fuelLevelInput = document.getElementById("fuelLevel");
   let cargoMassInput = document.getElementById("cargoMass");
   
   let pilotStatus = document.getElementById('pilotStatus');
   let copilotStatus = document.getElementById('copilotStatus');
   let fuelStatus = document.getElementById('fuelStatus');
   let cargoStatus = document.getElementById('cargoStatus');
   let launchStatus = document.getElementById('launchStatus');
   

   // validate number for fuel level and cargo mass input field
   function validateNumber(number) {
      return !isNaN(parseFloat(number) && isFinite(number));
  }


  form.addEventListener("submit", (event) => {

   //alert for incase input field is left empty
    if(pilotInput.value === ''|| copilotInput.value === '' || fuelLevelInput.value === ''|| cargoMassInput.value === ''){
       alert("All fields are required!")
       event.preventDefault();

   //alert for incase input field for fuel level is not a number

    }else if(!validateNumber(fuelLevelInput.value)){
       alert("Fuel Level must be a number")
       event.preventDefault();

   //alert for incase input field for fuel level is not a number

    }else if(!validateNumber(cargoMassInput.value)){
       alert("Cargo Mass must be a number")
       event.preventDefault();
    }  

      pilotStatus.innerHTML = pilotInput.value
      copilotStatus.innerHTML = copilotInput.value
    //If shuttle fuel too low display a red warning
      if(fuelLevelInput.value < 10000){
         fuelStatus.style.color= "red";
         launchStatus.style.color= "red";
         fuelStatus.innerHTML = `NOT ENOUGH FUEL FOR SHUTTLE TO TAKE OFF!`;
         launchStatus.innerHTML = `Shuttle not ready for launch`
      }else {fuelStatus.innerHTML = `Fuel Level Check: Passed`;
      fuelStatus.style.color = "inherit"
      }
   //if shuttle mass too heavy display a red warning
      if(cargoMassInput.value > 10000){
         cargoStatus.style.color= "red";
         launchStatus.style.color= "red";
         cargoStatus.innerHTML = `TOO MUCH MASS FOR SHUTTLE TO TAKE OFF!`;
         launchStatus.innerHTML = `Shuttle not ready for launch`
      }else {cargoStatus.innerHTML = `Cargo Mass Check: Passed`;
      cargoStatus.style.color = "inherit"
   //if shuttle fuel and mass level are correct range ready for launch  
      if(fuelLevelInput.value > 10000 && cargoMassInput.value < 10000){
         
         launchStatus.innerHTML = `Shuttle is ready for launch`
         launchStatus.style.color = "green"}
      }
      
         
   event.preventDefault();
   
         
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
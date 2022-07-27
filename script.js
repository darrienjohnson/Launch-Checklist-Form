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

//Planetary JSON Fetch
fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
    response.json().then(function(data){
        const missionTarget = document.getElementById("missionTarget");
        missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ul>
            <li>Name: ${data[0].name}</li>
            <li>Diameter: ${data[0].diameter}</li>
            <li>Star: ${data[0].star}</li>
            <li>Distance: ${data[0].distance}</li>
            <li>Number of Moons: ${data[0].moons}</li>
         </ul>
         <img src="${data[0].image}">
        `
    });    
    });


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
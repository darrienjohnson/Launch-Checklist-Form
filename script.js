window.addEventListener("load", function(){
   let form = document.getElementById("launchForm");
   //button to submit form
   let submit = document.getElementById('submit');

   //button to generate a random planet
   let randomPlanetButton = document.getElementById('planetButton')
   
   
   //Planetary JSON Fetch
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(data){
         const missionTarget = document.getElementById("missionTarget");
            let random = data[Math.floor(Math.random()*data.length)]
            missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ul>
            <li>Name: ${random.name}</li>
            <li>Diameter: ${random.diameter}</li>
            <li>Star: ${random.star}</li>
            <li>Distance: ${random.distance}</li>
            <li>Number of Moons: ${random.moons}</li>
            </ul>
            <img src="${random.image}">
            `
      }); //End of then function
   }); //End of Data Fetch

   //Potential Bonus Refresh Button
   // //Planetary JSON Fetch
   // fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
   //    response.json().then(function(data){
   //       const missionTarget = document.getElementById("missionTarget");
   //       randomPlanetButton.addEventListener("click", ()=>{
   //          let random = data[Math.floor(Math.random()*data.length)]
   //          missionTarget.innerHTML = `
   //          <h2>Mission Destination</h2>
   //          <ul>
   //          <li>Name: ${random.name}</li>
   //          <li>Diameter: ${random.diameter}</li>
   //          <li>Star: ${random.star}</li>
   //          <li>Distance: ${random.distance}</li>
   //          <li>Number of Moons: ${random.moons}</li>
   //          </ul>
   //          <img src="${random.image}">
   //          `
   //       });    
   //    });
   // }); //End of Data Fetch
   
   
   
   //Function to Validate inputs of form
   function validateForm(){

      let pilotInput = document.getElementById('pilotName');
      let copilotInput = document.getElementById('copilotName');
      let fuelLevelInput = document.getElementById("fuelLevel");
      let cargoMassInput = document.getElementById("cargoMass");
      
      let pilotStatus = document.getElementById('pilotStatus');
      let copilotStatus = document.getElementById('copilotStatus');
      let fuelStatus = document.getElementById('fuelStatus');
      let cargoStatus = document.getElementById('cargoStatus');
      let launchStatus = document.getElementById('launchStatus');
   
      let itemStatus = document.getElementById('itemStatus');
      
         
         let pilotInputValue = String(pilotInput.value);

         let copilotInputValue = String(copilotInput.value);
 
         let fuelLevelInputValue = parseFloat(fuelLevelInput.value);

         let cargoMassInputValue = parseFloat(cargoMassInput.value);

         let fuelCheck = false;
         let cargoCheck = false;
  
         //Emput Field Check
         if(pilotInputValue === "" || copilotInputValue === "" || fuelLevelInputValue === "" || cargoMassInputValue === ""){
            alert("All fields are require")
            return
         }
         //Pilot input Check
         if(!isNaN(pilotInputValue)){
            alert("Please enter the pilot's name. ")
            return
         }
         //Copilot input Check
         if(!isNaN(copilotInputValue)){
            alert("Please enter the copilot's name.")
            return
         }
         
         
         if(isNaN(fuelLevelInputValue)){
            alert("Please enter a number for fuel.")
            return
         }else if(fuelLevelInput.value < 10000){
            fuelStatus.innerHTML = `NOT ENOUGH FUEL FOR SHUTTLE TO TAKE OFF!`;
         }else{
         fuelCheck = true;
         fuelStatus.innerHTML = `Fuel Level Check: Passed`;
         }
         
         
         
         if(isNaN(cargoMassInputValue)){
            alert("Please enter a number cargo mass.")
            
            return
         }else if(cargoMassInput.value > 10000 || cargoMassInput.value < 0){
            cargoStatus.innerHTML = `TOO MUCH MASS FOR SHUTTLE TO TAKE OFF!`;
         }else{
            cargoCheck = true;
            cargoStatus.innerHTML = `Cargo Mass Check: Passed`;
         }

         if(fuelCheck && cargoCheck){
            // pilotStatus.innerHTML = `${pilotInput.value} is ready for launch`
            pilotStatus.innerHTML = pilotInput.value
            copilotStatus.innerHTML = `${copilotInput.value} is ready for launch`
            launchStatus.style.color = "green"
            launchStatus.innerHTML = `Shuttle is ready for launch`
         }else{
            launchStatus.innerHTML = `Shuttle is not ready for launch`
            launchStatus.style.color = "red"
         }

         itemStatus.style.visibility= "visible"

   }//End of Function to validate input
   
   //Form Submit
   form.addEventListener("submit", (event) => {
      
      validateForm()
      event.preventDefault();
      
   });//End of Submit Form
   
   
   
   
   
});//End of Event Load Function
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
      
         
         let pilotInputValue = String(pilotInput.value)
         let pilotInputCheck;

         let copilotInputValue = String(copilotInput.value)
         let copilotInputCheck;
 
         let fuelLevelInputValue = parseFloat(fuelLevelInput.value)
         let fuelLevelInputCheck;

         let cargoMassInputValue = parseFloat(cargoMassInput.value)
         let cargoMassInputCheck;
  
         //Emput Field Check
         if(pilotInputValue === "" || copilotInputValue === "" || fuelLevelInputValue === "" || cargoMassInputValue === ""){
            alert("All fields are require")
         }
         //Pilot input Check
         if(!isNaN(pilotInputValue) || pilotInputValue === "" ){
            alert("Please enter the pilot's name. ")
            pilotInputCheck = false;
         }else{
            pilotInputCheck = true;
            // pilotStatus.innerHTML = `${pilotInput.value} is ready for launch`
         }
         //Copilot input Check
         if(!isNaN(copilotInputValue) || copilotInputValue === "" ){
            alert("Please enter the copilot's name.")
            copilotInputCheck = false;
         }else{
            copilotInputCheck = true;
            // copilotStatus.innerHTML = `${copilotInput.value} is ready for launch`
         }
         
         
         if(fuelLevelInputValue === "" ){
            alert("Please enter a number for fuel.")
            fuelLevelInputCheck = false;
         }else if(isNaN(fuelLevelInputValue)){
            alert("Please enter a number for fuel.")
            fuelStatus.innerHTML = ` `;
            fuelLevelInputCheck = false;
         }else if(fuelLevelInput.value < 10000){
            alert(`NOT ENOUGH FUEL FOR SHUTTLE TO TAKE OFF!`);
            launchStatus.innerHTML = `Shuttle not ready for launch`
         }else{
            // fuelStatus.innerHTML = `Fuel Level Check: Passed`;
            fuelLevelInputCheck = true
         }


         if(cargoMassInputValue === "" ){
            alert("Please enter a number for cargo mass.")
            cargoMassInputCheck = false
         } else if(isNaN(cargoMassInputValue)){
            alert("Please enter a number cargo mass.")
            cargoStatus.innerHTML = ` `;
            cargoMassInputCheck = false;
         }else if(cargoMassInput.value > 10000 || cargoMassInput.value < 0){
            alert(`TOO MUCH MASS FOR SHUTTLE TO TAKE OFF!`);
            launchStatus.innerHTML = `Shuttle not ready for launch`
         }else{
            // cargoStatus.innerHTML = `Cargo Mass Check: Passed`;
            cargoMassInputCheck = true
         }
         
         if(pilotInputCheck === true && copilotInputCheck === true && fuelLevelInputCheck === true && cargoMassInputCheck === true){
         pilotStatus.innerHTML = `${pilotInput.value} is ready for launch`
         copilotStatus.innerHTML = `${copilotInput.value} is ready for launch`
         fuelStatus.innerHTML = `Fuel Level Check: Passed`;
         cargoStatus.innerHTML = `Cargo Mass Check: Passed`;
         launchStatus.innerHTML = `Shuttle is ready for launch`
         launchStatus.style.color = "green"
         }else{
            pilotStatus.innerHTML = ``
         copilotStatus.innerHTML = ``
         fuelStatus.innerHTML = ``;
         cargoStatus.innerHTML = ``;
            launchStatus.innerHTML = `Shuttle is not ready for launch` 
            launchStatus.style.color = "red"
         }

   }//End of Function to validate input
   
   //Form Submit
   form.addEventListener("submit", (event) => {
      
      validateForm()
      event.preventDefault();
      
   });//End of Submit Form
   
   
   
   
   
});//End of Event Load Function
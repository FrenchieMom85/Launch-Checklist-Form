window.addEventListener("load", function () {
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      const pilotInput = document.querySelector("input[name=pilotName]");
      const copilotInput = document.querySelector("input[name=copilotName]");
      const fuelInput = document.querySelector("input[name=fuelLevel]");
      const cargoInput = document.querySelector("input[name=cargoMass]");
      const faultList = document.getElementById("faultyItems");
      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }

      if (isNaN(fuelInput.value) == true) {
         alert("Fuel must be numeric!")
         event.preventDefault();
      }

      if (isNaN(cargoInput.value) == true) {
         alert("Cargo must be numeric!")
         event.preventDefault();
      }

      if (isNaN(pilotInput.value) == false || isNaN(copilotInput.value) == false) {
         alert("Please enter alphabet characters only!")
         event.preventDefault();
      }
      let pilot = document.getElementById("pilotStatus")
      let copilot = document.getElementById("copilotStatus")
      let fuelStatus = document.getElementById("fuelStatus")
      let cargoStatus = document.getElementById("cargoStatus")
      let launch = document.getElementById("launchStatus")

      pilot.innerHTML = `Pilot ${pilotInput} Ready`
      copilot.innerHTML = `Co-pilot ${copilotInput.value} Ready`

      console.log(pilot.innerHTML)

      if (fuelInput.value < 10000){
         faultList.style.visibility = "visible";
         launch.innerHTML = "Shuttle not ready for launch" 
         
      }
      // let div = `
      //       <div  id="faultyItems">
      //           <ol>
      //               <li id="pilotStatus">Pilot ${pilotInput.value} Ready</li>
      //               <li id="copilotStatus">Co-pilot ${copilotInput.value} Ready</li>
      //               <li id="fuelStatus">Fuel level high enough for launch</li>
      //               <li id="cargoStatus">Cargo mass low enough for launch</li>
      //           </ol>
      //       </div> `

      // faultList.innerHTML += div

   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${}</li>
            <li>Diameter: ${}</li>
            <li>Star: ${}</li>
            <li>Distance from Earth: ${}</li>
            <li>Number of Moons: ${}</li>
         </ol>
         <img src="${}">
            */

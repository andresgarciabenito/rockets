// Identificar el número de tarjeta, para poder registrar los thrusters. 
// Asignar un card-body-(número)
var counterDiv: number=1;


class UI{

    addRocket(rocket: Rocket){
    //accedo al div
    const rocketList=document.getElementById('show-settings');
    const element=document.createElement('div');
    element.innerHTML=
                    `<div class="card text-center mb-2">
                      <h6 class="text-success mt-2">New Rocket Created</h6>
                      <div class="card-body mt-1" id="card-body-${counterDiv}">
                         <div class="row justify-content-around">
                          <div class="col-5">
                           <strong>Rocket CODE</strong> ${rocket.name}
                          </div>
                          <div class="col-5">
                           <strong>Number of Thrusters:</strong> ${rocket.thrusters}
                         </div>
                        </div>
                      </div>
                    </div>
                    `;
    rocketList.appendChild(element);
    counterDiv++;
    }

    restoreForm(){
    //Elimina el formulario anterior y crea uno nuevo
    const divCard2= document.createElement('div');
    divCard2.setAttribute('id', 'divCard2');
    //Agregar la clase col-md-5 al elemento anterior
    divCard2.classList.add('col-md-5');
    const divCard1=document.getElementById('divcard1');
    document.getElementById('app').replaceChild(divCard2, divCard1);
    //se agregan inputs segun el valor de thrusterNumber1
    
    divCard2.innerHTML=
                      `<div class="card" id="card">
                          <div class="card-header">
                            <h4>ROCKETS!</h4>
                          </div>
                          <div class="card-body">
                           <form action="" id="thrusters-form">
                           <div id="buttons"></div>
                           <input type="submit" class="btn btn-warning btn-block" value="Set Thrusters" id="submitbutton">  
                           </form>
                          </div>
                        </div>
                        `
    const buttondiv=document.getElementById('buttons');

    
    //agregamos un div con el label Rocket 1
    const divformgroup1=document.createElement('div');
    divformgroup1.classList.add('form-group');
    divformgroup1.classList.add('pt-3');
    divformgroup1.innerHTML=`<label for=""><strong>Rocket 1</strong> Select max power for each thruster</label><br>`; 
    buttondiv.appendChild(divformgroup1);  

    //agregarmos un div con la clase row, que contiene los div col-4
    const allthrusters=document.createElement('div');
    allthrusters.classList.add('row');
    divformgroup1.appendChild(allthrusters);

    for (var i=1; i<=thrusterNumber1; i++){
      const eachthruster=document.createElement('div');
      eachthruster.classList.add('col-4');
      
      eachthruster.innerHTML=`                                
                              
                                <label for="">Thruster ${i}</label>
                                <input type="number" step="10" id="R1Number${i}" placeholder="--" class="form-control">
                              
                              `
      allthrusters.appendChild(eachthruster);  
      }
    
    //agregamos un div con el label Rocket 2 
    const divformgroup2=document.createElement('div');
    divformgroup2.classList.add('form-group');
    divformgroup2.classList.add('pt-3');
    divformgroup2.innerHTML=`<label for=""><strong>Rocket 2</strong> Select max power for each thruster</label><br>`; 
    buttondiv.appendChild(divformgroup2); 
    
    //agregarmos un div con la clase row, que contiene los div col-4
    const allthrusters2=document.createElement('div');
    allthrusters2.classList.add('row');
    divformgroup2.appendChild(allthrusters2);

    for (var i=1; i<=thrusterNumber2; i++){
      const eachthruster2=document.createElement('div');
      eachthruster2.classList.add('col-4');

      eachthruster2.innerHTML=`                                
                                <label for="">Thruster ${i}</label>
                                <input type="number" step="10" id="R2Number${i}" placeholder="--" class="form-control">
                              `
      allthrusters2.appendChild(eachthruster2);  
      }
                          
    }
    
    addPowers(rocket: Rocket, rocketDiv: string){
            //accedo al div
            //rocketDiv va a contener el valor de card-body-1 (o 2 respectivamente), las tarjetas con la info de cada rocket
            const rocketDetails=document.getElementById(rocketDiv);
            const element=document.createElement('div');
            element.classList.add('row');
            element.setAttribute('class', 'justify-content-center');
            element.innerHTML=
                            `<h6 class="text-warning mt-2">Thrusters Details (max power)</h6>
                            `;
            rocketDetails.appendChild(element);
    
            for (var i=0; i<temp; i++){
            const element2=document.createElement('div');
            //necesitamos que el i sea cero para iterar el array, pero sumarle uno al identifcar el número de thruster
            element2.innerHTML=`<strong>Thruster ${i+1}  Power:</strong> ${rocket.thrustersPower[i].power}`
            rocketDetails.appendChild(element2);
            }
    }

    restoreFormControlButtons(){
              //Elimina el formulario anterior y crea uno nuevo
            const divCard3= document.createElement('div');
            //Agregar la clase col-md-5 al elemento anterior
            divCard3.classList.add('col-md-5');
            const replaced=document.getElementById('divCard2');
            document.getElementById('app').replaceChild(divCard3, replaced);
            
            divCard3.innerHTML=
                      `<div class="card" id="card">
                          <div class="card-header">
                            <h4>Start Race</h4>
                          </div>
                          <div class="card-body" id="card-body">
                           <form action="" id="button-controller">
                           
                           <input type="submit" class="btn btn-dark btn-block" value="Show All rockets" id="allrocketsbutton"> 
                           </form>
                          </div>
                       </div>
                       `;

      //se agregan los botones de control, dentro de un form
      var buttonController=document.getElementById('card-body');
      for (var i=1; i<=2; i++){ //se puede reemplazar el 2, por el valor de un input al inicio de la app
      var divButtons=document.createElement('div');
      divButtons.classList.add('mt-2');
      divButtons.innerHTML=`
       <form action="" id="button-controller${i}">
        <input type="button" class="btn btn-primary btn-block" value="Accelerate Rocket ${i}" id="acceleratebutton${i}">  
        <input type="button" class="btn btn-info btn-block" value="Break Rocket ${i}" id="breakbutton${i}">
        <input type="submit" class="btn btn-secondary btn-block" value="Show Rocket ${i} Status" id="showrocketbutton${i}">
       </form> 
        `;
       buttonController.appendChild(divButtons);        
      }
    }

    /* addTotalPowers(rocket: Rocket){
      //accedo al div
      const rocketDetails=document.getElementById('card-body');
      const element=document.createElement('div');
      element.classList.add('row');
      element.innerHTML=
                      `<h6 class="text-warning mt-2">Thrusters Details (max power)</h6>
                              <div class="row justify-content-around" id="card-row">
                              </div>
                          </div>
                      `;
      rocketDetails.appendChild(element);

      const cardBody=document.getElementById('card-row');

      for (var i=0; i<temp; i++){
      const element2=document.createElement('div');
      
      
      element2.innerHTML=`<strong>Thruster ${i+1}  Power:</strong> ${rocket.thrustersPower[i].power}`
      cardBody.appendChild(element2);
      }
    } */

    addStatus(rocket: Rocket){
        //accedo al div
        var powerList=document.getElementById('show-results');
        var statusDiv1=document.createElement('div');
        statusDiv1.innerHTML=
                            `
                            <div class="card text-center mb-2" >
                              <h6 class="text-primary mt-2">Rocket ${rocket.name} Status</h6>
                              <div class="card-body mt-1" id="cardStatus">
                                  <div class="row justify-content-around">
                                      
                                  </div>
                              </div>
                            </div>  
                            `;
        powerList.appendChild(statusDiv1);
        //hasta acá se crea el div principal
    
        var cardStatus=document.getElementById('cardStatus');
        
        for (var i=0; i<temp; i++){
              var elementStatus=document.createElement('div');
              elementStatus.classList.add('col-4');
              //necesitamos que el i sea cero para iterar el array, pero sumarle uno al identifcar el número de thruster
              elementStatus.innerHTML=`        
                                    <strong>Power Status</strong> ${rocket.thrustersPower[i].power}
                                    `; 
              cardStatus.appendChild(elementStatus);
        }      

    }


    /* showStatusAll(){
      

    } */
}
class UI{

    addRocket(rocket: Rocket){
    //accedo al div
    const rocketList=document.getElementById('card-details');
    const element=document.createElement('div');
    element.innerHTML=
                    `<div class="card text-center mb-4">
                      <h6 class="text-success mt-2">New Rocket Created</h6>
                      <div class="card-body">
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
    }

    restoreForm(){
    //Elimina el formulario anterior y crea uno nuevo
    const divCard2= document.createElement('div');
    //Agregar la clase md-5 al elemento anterior
    divCard2.classList.add('col-md-5');
    const divCard1=document.getElementById('divcard1');
    document.getElementById('app').replaceChild(divCard2, divCard1);
    divCard2.innerHTML=
                      `<div class="card" id="card">
                          <div class="card-header">
                            <h4>ROCKETS!</h4>
                          </div>
                          <div class="card-body">
                           <form action="" id="thrusters-form">
                              <div class="form-group">
                                <label for=""><strong>Rocket 1</strong></label><br>
                                <div class="row mt-2">
                                    <div class="col-4">
                                      <label for="">Thruster 1</label>
                                      <input type="number" step="10" id="R1Number1" placeholder="--" class="form-control">
                                    </div>
                                    <div class="col-4">
                                      <label for="">Thruster 2</label>
                                    <input type="number" step="10" id="R1Number2" placeholder="--" class="form-control">
                                    </div>
                                    <div class="col-4">
                                      <label for="">Thruster 3</label>
                                    <input type="number" step="10" id="R1Number3" placeholder="--" class="form-control">
                                    </div>
                                </div>
                              </div>
                          
                              <div class="form-group">
                                <label for=""><strong>Rocket 2</strong></label><br>
                                <div class="row mt-2">
                                <div class="col-4">
                                  <label for="">Thruster 1</label>
                                  <input type="number" step="10" id="R2Number1" placeholder="--" class="form-control">
                                </div>
                                <div class="col-4">
                                  <label for="">Thruster 2</label>
                                <input type="number" step="10" id="R2Number2" placeholder="--" class="form-control">
                                </div>
                                <div class="col-4">
                                  <label for="">Thruster 3</label>
                                <input type="number" step="10" id="R2Number3" placeholder="--" class="form-control">
                                </div>
                                <div class="col-4">
                                  <label for="">Thruster 4</label>
                                  <input type="number" step="10" id="R2Number4" placeholder="--" class="form-control">
                                </div>
                                <div class="col-4">
                                  <label for="">Thruster 5</label>
                                <input type="number" step="10" id="R2Number5" placeholder="--" class="form-control">
                                </div>
                                <div class="col-4">
                                  <label for="">Thruster 6</label>
                                <input type="number" step="10" id="R2Number6" placeholder="--" class="form-control">
                                </div>
                            </div>
                              </div>
                              <input type="submit" class="btn btn-warning btn-block" value="Create Rockets">
                            </form>
                          </div>
                        </div>
                      `
    }

    addThruster(thruster: Rocket){
      //accedo al div
      const rocketList=document.getElementById('card-details');
      const element=document.createElement('div');
      element.innerHTML=`
                      <div class="card text-center mb-4">
                        <h6 class="text-success mt-2">New Rocket Created</h6>
                        <div class="card-body">
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
      }

      addPowers(rocket: Rocket){
            //accedo al div
            const rocketList=document.getElementById('card-details');
            const element=document.createElement('div');
            element.innerHTML=
                            `<div class="card text-center mb-4">
                                <h6 class="text-success mt-2">Rocket Details</h6>
                                <div class="card-body" id="card-body">
                                  <div class="row justify-content-around" id="card-row">

                                  </div>
                                </div>
                            </div>
                            `;
            rocketList.appendChild(element);

            const cardBody=document.getElementById('card-row');

            for (var i=0; i<=thrusterNumber1; i++){
            const element2=document.createElement('div');
              element2.innerHTML=`                                
                                    <strong>Thruster  Power:</strong> ${rocket.thrustersPower[i].power}
                                  `
              cardBody.appendChild(element2);
            }

          }
}
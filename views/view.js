// Identificar el número de tarjeta, para poder registrar los thrusters. 
// Asignar un card-body-(número)
var counterDiv = 1;
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.prototype.addRocket = function (rocket) {
        //accedo al div
        var rocketList = document.getElementById('show-settings');
        var element = document.createElement('div');
        element.innerHTML =
            "<div class=\"card text-center mb-2\">\n                      <h6 class=\"text-success mt-2\">New Rocket Created</h6>\n                      <div class=\"card-body mt-1\" id=\"card-body-" + counterDiv + "\">\n                         <div class=\"row justify-content-around\">\n                          <div class=\"col-5\">\n                           <strong>Rocket CODE</strong> " + rocket.name + "\n                          </div>\n                          <div class=\"col-5\">\n                           <strong>Number of Thrusters:</strong> " + rocket.thrusters + "\n                         </div>\n                        </div>\n                      </div>\n                    </div>\n                    ";
        rocketList.appendChild(element);
        counterDiv++;
    };
    UI.prototype.restoreForm = function () {
        //Elimina el formulario anterior y crea uno nuevo
        var divCard2 = document.createElement('div');
        divCard2.setAttribute('id', 'divCard2');
        //Agregar la clase col-md-5 al elemento anterior
        divCard2.classList.add('col-md-5');
        var divCard1 = document.getElementById('divcard1');
        document.getElementById('app').replaceChild(divCard2, divCard1);
        //se agregan inputs segun el valor de thrusterNumber1
        divCard2.innerHTML =
            "<div class=\"card\" id=\"card\">\n                          <div class=\"card-header\">\n                            <h4>ROCKETS!</h4>\n                          </div>\n                          <div class=\"card-body\">\n                           <form action=\"\" id=\"thrusters-form\">\n                           <div id=\"buttons\"></div>\n                           <input type=\"submit\" class=\"btn btn-warning btn-block\" value=\"Set Thrusters\" id=\"submitbutton\">  \n                           </form>\n                          </div>\n                        </div>\n                        ";
        var buttondiv = document.getElementById('buttons');
        //agregamos un div con el label Rocket 1
        var divformgroup1 = document.createElement('div');
        divformgroup1.classList.add('form-group');
        divformgroup1.classList.add('pt-3');
        divformgroup1.innerHTML = "<label for=\"\"><strong>Rocket 1</strong> Select max power for each thruster</label><br>";
        buttondiv.appendChild(divformgroup1);
        //agregarmos un div con la clase row, que contiene los div col-4
        var allthrusters = document.createElement('div');
        allthrusters.classList.add('row');
        divformgroup1.appendChild(allthrusters);
        for (var i = 1; i <= thrusterNumber1; i++) {
            var eachthruster = document.createElement('div');
            eachthruster.classList.add('col-4');
            eachthruster.innerHTML = "                                \n                              \n                                <label for=\"\">Thruster " + i + "</label>\n                                <input type=\"number\" step=\"10\" id=\"R1Number" + i + "\" placeholder=\"--\" class=\"form-control\">\n                              \n                              ";
            allthrusters.appendChild(eachthruster);
        }
        //agregamos un div con el label Rocket 2 
        var divformgroup2 = document.createElement('div');
        divformgroup2.classList.add('form-group');
        divformgroup2.classList.add('pt-3');
        divformgroup2.innerHTML = "<label for=\"\"><strong>Rocket 2</strong> Select max power for each thruster</label><br>";
        buttondiv.appendChild(divformgroup2);
        //agregarmos un div con la clase row, que contiene los div col-4
        var allthrusters2 = document.createElement('div');
        allthrusters2.classList.add('row');
        divformgroup2.appendChild(allthrusters2);
        for (var i = 1; i <= thrusterNumber2; i++) {
            var eachthruster2 = document.createElement('div');
            eachthruster2.classList.add('col-4');
            eachthruster2.innerHTML = "                                \n                                <label for=\"\">Thruster " + i + "</label>\n                                <input type=\"number\" step=\"10\" id=\"R2Number" + i + "\" placeholder=\"--\" class=\"form-control\">\n                              ";
            allthrusters2.appendChild(eachthruster2);
        }
    };
    UI.prototype.addPowers = function (rocket, rocketDiv) {
        //accedo al div
        //rocketDiv va a contener el valor de card-body-1 (o 2 respectivamente), las tarjetas con la info de cada rocket
        var rocketDetails = document.getElementById(rocketDiv);
        var element = document.createElement('div');
        element.classList.add('row');
        element.setAttribute('class', 'justify-content-center');
        element.innerHTML =
            "<h6 class=\"text-warning mt-2\">Thrusters Details (max power)</h6>\n                            ";
        rocketDetails.appendChild(element);
        for (var i = 0; i < temp; i++) {
            var element2 = document.createElement('div');
            //necesitamos que el i sea cero para iterar el array, pero sumarle uno al identifcar el número de thruster
            element2.innerHTML = "<strong>Thruster " + (i + 1) + "  Power:</strong> " + rocket.thrustersPower[i].power;
            rocketDetails.appendChild(element2);
        }
    };
    UI.prototype.restoreFormControlButtons = function () {
        //Elimina el formulario anterior y crea uno nuevo
        var divCard3 = document.createElement('div');
        //Agregar la clase col-md-5 al elemento anterior
        divCard3.classList.add('col-md-5');
        var replaced = document.getElementById('divCard2');
        document.getElementById('app').replaceChild(divCard3, replaced);
        divCard3.innerHTML =
            "<div class=\"card\" id=\"card\">\n                          <div class=\"card-header\">\n                            <h4>Start Race</h4>\n                          </div>\n                          <div class=\"card-body\" id=\"card-body\">\n                           <form action=\"\" id=\"button-controller\">\n                           \n                           <input type=\"submit\" class=\"btn btn-dark btn-block\" value=\"Show All rockets\" id=\"allrocketsbutton\"> \n                           </form>\n                          </div>\n                       </div>\n                       ";
        //se agregan los botones de control, dentro de un form
        var buttonController = document.getElementById('card-body');
        for (var i = 1; i <= 2; i++) { //se puede reemplazar el 2, por el valor de un input al inicio de la app
            var divButtons = document.createElement('div');
            divButtons.classList.add('mt-2');
            divButtons.innerHTML = "\n       <form action=\"\" id=\"button-controller" + i + "\">\n        <input type=\"button\" class=\"btn btn-primary btn-block\" value=\"Accelerate Rocket " + i + "\" id=\"acceleratebutton" + i + "\">  \n        <input type=\"button\" class=\"btn btn-info btn-block\" value=\"Break Rocket " + i + "\" id=\"breakbutton" + i + "\">\n        <input type=\"submit\" class=\"btn btn-secondary btn-block\" value=\"Show Rocket " + i + " Status\" id=\"showrocketbutton" + i + "\">\n       </form> \n        ";
            buttonController.appendChild(divButtons);
        }
    };
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
    UI.prototype.addStatus = function (rocket) {
        //accedo al div
        var powerList = document.getElementById('show-results');
        var statusDiv1 = document.createElement('div');
        statusDiv1.innerHTML =
            "\n                            <div class=\"card text-center mb-2\" >\n                              <h6 class=\"text-primary mt-2\">Rocket " + rocket.name + " Status</h6>\n                              <div class=\"card-body mt-1\" id=\"cardStatus\">\n                                  <div class=\"row justify-content-around\">\n                                      \n                                  </div>\n                              </div>\n                            </div>  \n                            ";
        powerList.appendChild(statusDiv1);
        //hasta acá se crea el div principal
        var cardStatus = document.getElementById('cardStatus');
        for (var i = 0; i < temp; i++) {
            var elementStatus = document.createElement('div');
            elementStatus.classList.add('col-4');
            //necesitamos que el i sea cero para iterar el array, pero sumarle uno al identifcar el número de thruster
            elementStatus.innerHTML = "        \n                                    <strong>Power Status</strong> " + rocket.thrustersPower[i].power + "\n                                    ";
            cardStatus.appendChild(elementStatus);
        }
    };
    return UI;
}());

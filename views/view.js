var UI = /** @class */ (function () {
    function UI() {
    }
    UI.prototype.addRocket = function (rocket) {
        //accedo al div
        var rocketList = document.getElementById('card-details');
        var element = document.createElement('div');
        element.innerHTML =
            "<div class=\"card text-center mb-4\">\n                      <h6 class=\"text-success mt-2\">New Rocket Created</h6>\n                      <div class=\"card-body\">\n                        <div class=\"row justify-content-around\">\n                          <div class=\"col-5\">\n                           <strong>Rocket CODE</strong> " + rocket.name + "\n                          </div>\n                          <div class=\"col-5\">\n                           <strong>Number of Thrusters:</strong> " + rocket.thrusters + "\n                         </div>\n                        </div>\n                      </div>\n                    </div>\n                    ";
        rocketList.appendChild(element);
    };
    UI.prototype.restoreForm = function () {
        //Elimina el formulario anterior y crea uno nuevo
        var divCard2 = document.createElement('div');
        //Agregar la clase md-5 al elemento anterior
        divCard2.classList.add('col-md-5');
        var divCard1 = document.getElementById('divcard1');
        document.getElementById('app').replaceChild(divCard2, divCard1);
        divCard2.innerHTML =
            "<div class=\"card\" id=\"card\">\n                          <div class=\"card-header\">\n                            <h4>ROCKETS!</h4>\n                          </div>\n                          <div class=\"card-body\">\n                           <form action=\"\" id=\"thrusters-form\">\n                              <div class=\"form-group\">\n                                <label for=\"\"><strong>Rocket 1</strong></label><br>\n                                <div class=\"row mt-2\">\n                                    <div class=\"col-4\">\n                                      <label for=\"\">Thruster 1</label>\n                                      <input type=\"number\" step=\"10\" id=\"R1Number1\" placeholder=\"--\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"col-4\">\n                                      <label for=\"\">Thruster 2</label>\n                                    <input type=\"number\" step=\"10\" id=\"R1Number2\" placeholder=\"--\" class=\"form-control\">\n                                    </div>\n                                    <div class=\"col-4\">\n                                      <label for=\"\">Thruster 3</label>\n                                    <input type=\"number\" step=\"10\" id=\"R1Number3\" placeholder=\"--\" class=\"form-control\">\n                                    </div>\n                                </div>\n                              </div>\n                          \n                              <div class=\"form-group\">\n                                <label for=\"\"><strong>Rocket 2</strong></label><br>\n                                <div class=\"row mt-2\">\n                                <div class=\"col-4\">\n                                  <label for=\"\">Thruster 1</label>\n                                  <input type=\"number\" step=\"10\" id=\"R2Number1\" placeholder=\"--\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-4\">\n                                  <label for=\"\">Thruster 2</label>\n                                <input type=\"number\" step=\"10\" id=\"R2Number2\" placeholder=\"--\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-4\">\n                                  <label for=\"\">Thruster 3</label>\n                                <input type=\"number\" step=\"10\" id=\"R2Number3\" placeholder=\"--\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-4\">\n                                  <label for=\"\">Thruster 4</label>\n                                  <input type=\"number\" step=\"10\" id=\"R2Number4\" placeholder=\"--\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-4\">\n                                  <label for=\"\">Thruster 5</label>\n                                <input type=\"number\" step=\"10\" id=\"R2Number5\" placeholder=\"--\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-4\">\n                                  <label for=\"\">Thruster 6</label>\n                                <input type=\"number\" step=\"10\" id=\"R2Number6\" placeholder=\"--\" class=\"form-control\">\n                                </div>\n                            </div>\n                              </div>\n                              <input type=\"submit\" class=\"btn btn-warning btn-block\" value=\"Create Rockets\">\n                            </form>\n                          </div>\n                        </div>\n                      ";
    };
    UI.prototype.addThruster = function (thruster) {
        //accedo al div
        var rocketList = document.getElementById('card-details');
        var element = document.createElement('div');
        element.innerHTML = "\n                      <div class=\"card text-center mb-4\">\n                        <h6 class=\"text-success mt-2\">New Rocket Created</h6>\n                        <div class=\"card-body\">\n                          <div class=\"row justify-content-around\">\n                            <div class=\"col-5\">\n                             <strong>Rocket CODE</strong> " + rocket.name + "\n                            </div>\n                            <div class=\"col-5\">\n                             <strong>Number of Thrusters:</strong> " + rocket.thrusters + "\n                           </div>\n                          </div>\n                        </div>\n                      </div>\n                      ";
        rocketList.appendChild(element);
    };
    UI.prototype.addPowers = function (rocket) {
        //accedo al div
        var rocketList = document.getElementById('card-details');
        var element = document.createElement('div');
        element.innerHTML =
            "<div class=\"card text-center mb-4\">\n                                <h6 class=\"text-success mt-2\">Rocket Details</h6>\n                                <div class=\"card-body\" id=\"card-body\">\n                                  <div class=\"row justify-content-around\" id=\"card-row\">\n\n                                  </div>\n                                </div>\n                            </div>\n                            ";
        rocketList.appendChild(element);
        var cardBody = document.getElementById('card-row');
        for (var i = 0; i <= thrusterNumber1; i++) {
            var element2 = document.createElement('div');
            element2.innerHTML = "                                \n                                    <strong>Thruster  Power:</strong> " + rocket.thrustersPower[i].power + "\n                                  ";
            cardBody.appendChild(element2);
        }
    };
    return UI;
}());

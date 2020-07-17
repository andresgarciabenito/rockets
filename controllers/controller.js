var rocket;
var ui = new UI;
addMainFormEventListener();
function addMainFormEventListener() {
    var form = document.getElementById('main-form');
    //capturar el submit
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();
        var errors = 0;
        //contenido de los inputs
        var code1 = document.getElementById('code1').value;
        var thrusterNumber1 = Number(document.getElementById('thrusterNumber1').value);
        var code2 = document.getElementById('code2').value;
        var thrusterNumber2 = Number(document.getElementById('thrusterNumber2').value);
        //funciones de validación
        if (code1 === "") {
            errors++;
        }
        if (code2 === "") {
            errors++;
        }
        if (errors > 0) {
            alert("Fill the fields");
            return;
        }
        //Validaciones primer formulario (rocket1)
        if (thrusterNumber1 < 2 || thrusterNumber1 > 6) {
            alert("min 1 max 6");
            return;
        }
        if (!validateCode(code1)) {
            alert("Insert code, 8 characters long A-Z-0-9");
            return;
        }
        //Validaciones primer formulario (rocket2)
        if (thrusterNumber2 < 2 || thrusterNumber2 > 6) {
            alert("min 1 max 6");
            return;
        }
        if (!validateCode(code2)) {
            alert("Insert code, 8 characters long A-Z-0-9");
            return;
        }
        //creo un nuevo objeto con la estructura de la clase Rocket
        var rocket1 = new Rocket(code1, thrusterNumber1);
        var rocket2 = new Rocket(code2, thrusterNumber2);
        ui.addRocket(rocket1);
        ui.addRocket(rocket2);
    });
}
;
function validateCode(e) {
    var regex = /[A-Z-0-9]{8}/g;
    return regex.test(e) ? true : false;
}

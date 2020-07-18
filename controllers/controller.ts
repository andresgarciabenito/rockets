var rocket: Rocket;
var rocket1: Rocket;
var rocket2: Rocket;
//var cantidad de propulsores
var thrusterNumber1: number;
var thrusterNumber2: number;

var ui= new UI;
addMainFormEventListener()

function addMainFormEventListener(){

    var form=document.getElementById('main-form') as HTMLFormElement;
    //capturar el submit

    form.addEventListener("submit", function (event){

        event.preventDefault();
        event.stopPropagation();
        var errors: number=0;
        //contenido de los inputs
        var code1: string= (document.getElementById('code1') as HTMLFormElement).value;
        thrusterNumber1= Number((document.getElementById('thrusterNumber1')as HTMLFormElement).value);
        var code2: string= (document.getElementById('code2')as HTMLFormElement).value;
        thrusterNumber2= Number((document.getElementById('thrusterNumber2')as HTMLFormElement).value);    
        
        //funciones de validación
        if (code1 === ""){
            errors++;
        }
        if (code2 === ""){
            errors++;
        }
        if (errors>0){
            alert("Fill the fields");
            return;
        }
        //Validaciones primer formulario (rocket1)
        if(thrusterNumber1<2||thrusterNumber1>6){
            alert("min 1 max 6");
            return;
        }   
        if (!validateCode(code1)){
            alert("Insert code, 8 characters long A-Z-0-9");
            return;
        }

        //Validaciones segundo formulario (rocket2)
        if(thrusterNumber2<2||thrusterNumber2>6){
            alert("min 1 max 6");
            return;
        }   
        if (!validateCode(code2)){
            alert("Insert code, 8 characters long A-Z-0-9");
            return;
        }

        //creo un nuevo objeto con la estructura de la clase Rocket
        rocket = new Rocket(code1, thrusterNumber1);
        rocket1= rocket;
        ui.addRocket(rocket1);
        rocket = new Rocket(code2, thrusterNumber2);
        rocket2= rocket;
        ui.addRocket(rocket2);
        ui.restoreForm();
        addThrustersEventListener();

    });

}

function validateCode(e: Any){
    var regex= /[A-Z-0-9]{8}/g;
    return regex.test(e) ? true : false;
}

function addThrustersEventListener(){
  var thrustersForm= document.getElementById('thrusters-form') as HTMLFormElement;
  //capturar el evento submit
  thrustersForm.addEventListener('submit', function(){
    event.preventDefault();
    event.stopPropagation();

/* 
    var maxPowerR1= new Array();
    var maxPowerR2= new Array(); */

    //Validaciones de los inputs 
    for (var i = 1; i<=thrusterNumber1; i++){
            //captura el input (potencia de cada propulsor)
            var rocketpower1 = Number((document.getElementById("R1Number" + i)  as HTMLInputElement).value);
            if (rocketpower1===null){
                alert("Please enter thruster power for thruster" +i);
                break;
            }else if(rocketpower1 < 10 || rocketpower1 > 80){
                alert("Please enter a number between 10 and 80");
                break;    
            }else{
            //almacena la info en el array
            var thrustersTemp = new Thruster(rocketpower1);
            rocket1.addThruster(thrustersTemp);    
            }   
    }
    rocket=rocket1;
    ui.addPowers(rocket);
    
    /* maxPowerR1.push(rocketpower);  */
    
    for (var i = 1; i<=thrusterNumber2; i++){
            //captura el input (potencia de cada propulsor)
            var rocketpower2 = Number((document.getElementById("R2Number" +i) as HTMLInputElement).value);
            
            if (rocketpower2===null){
                alert("Please enter thruster power for thruster" +i);
                break;
            }else if(rocketpower2 < 10 || rocketpower2 > 90){
                alert("Please enter a number between 10 and 80");
                break;    
            }else{
            //almacena la info en el array
            var thrustersTemp = new Thruster(rocketpower2);
            //resetear la variable rocket
            rocket;
            rocket2.addThruster(thrustersTemp);
            }          
    }
    rocket=rocket2;    
    ui.addPowers(rocket);
    
    
    /* maxPowerR1.push(rocketpower);  */
      
  }) 

}


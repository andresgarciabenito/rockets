var rocket: Rocket;
var rocket1: Rocket;
var rocket2: Rocket;
//var cantidad de propulsores
var thrusterNumber1: number;
var thrusterNumber2: number;

//var copia del array con las potencias máximas
var maxthrusterpowerR1: Thruster[]=Array();
var maxthrusterpowerR2: Thruster[]=Array();

var temp:number;
var sumR1:number=0;
var sumR2:number=0;
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
            //almacena la info en el arrays
            var thrustersTemp = new Thruster(rocketpower1);
            rocket1.addThruster(thrustersTemp);    
            }   
    }

    //hacemos una copia del array con las potencias máximas
    maxthrusterpowerR1=rocket1.thrustersPower;
    //asignamos el valor de rocket1 a rocket, para poder ingresarlo en la vista
    rocket=rocket1;
    temp=thrusterNumber1;
    //ui.addPowers(rocket);
    ui.addPowers(rocket, 'card-body-1');
    
     //Validaciones de los inputs 
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
    //hacemos una copia del array con las potencias máximas
    maxthrusterpowerR2=rocket2.thrustersPower;
    //asignamos el valor de rocket2 a rocket, para poder ingresarlo en la vista
    rocket=rocket2;    
    temp=thrusterNumber2;
    //ui.addPowers(rocket);
    ui.addPowers(rocket, 'card-body-2');
    ui.restoreFormControlButtons();
    startRaceEventListener();
  }); 
}


function startRaceEventListener(){

    //Potencia actual 0
    sumR1=0;
    for(var i=0; i<thrusterNumber1; i++){
        rocket1.thrustersPower[i].power=0;
        sumR1=+rocket.thrustersPower[i].power;
    }

    sumR2=0;
    for(var i=0; i<thrusterNumber2; i++){
        rocket2.thrustersPower[i].power=0;
        sumR2=+rocket.thrustersPower[i].power;
    }

    //Accelerate R1
    var buttonAccelerateR1=document.getElementById('acceleratebutton1');
    buttonAccelerateR1.onclick= function (event) {
        event.preventDefault();
        
        //sumar 10 a cada propulsor
        /*  for(var i=0; i<thrusterNumber1; i++){
            rocket1.thrustersPower[i].power=(rocket1.thrustersPower[i].power)+10;
            sumR1=+rocket1.thrustersPower[i].power;
        } */

        for(var i=0; i<thrusterNumber1; i++){
            if (rocket1.thrustersPower[i].power<=maxthrusterpowerR1[i].power){
                rocket1.thrustersPower[i].power=(rocket1.thrustersPower[i].power)+10;
                sumR1=+rocket1.thrustersPower[i].power;
            }
        }

    //Break R1
    var buttonBreakR1=document.getElementById('breakbutton1');
    buttonBreakR1.onclick= function(event){
        event.preventDefault();
        //restar 10 a cada propulsor
        /*for(var i=0; i<thrusterNumber1; i++){
            rocket1.thrustersPower[i].power=(rocket1.thrustersPower[i].power)-10;
            sumR1=-rocket1.thrustersPower[i].power;
        } */

        for(var i=0; i<thrusterNumber1; i++){
            if (rocket1.thrustersPower[i].power<=maxthrusterpowerR1[i].power){
                rocket1.thrustersPower[i].power=(rocket1.thrustersPower[i].power)-10;
                sumR1=-rocket1.thrustersPower[i].power;
            }
        }


    }
    //Accelerate R2
    var buttonAccelerateR2=document.getElementById('acceleratebutton2');
    buttonAccelerateR2.onclick=function(event){
        event.preventDefault();

        //sumar 10 a cada propulsor
        /* for(var i=0; i<thrusterNumber2; i++){
            rocket2.thrustersPower[i].power=(rocket2.thrustersPower[i].power)+10;
            sumR1=+rocket2.thrustersPower[i].power;
        } */

        for(var i=0; i<thrusterNumber2; i++){
            if (rocket2.thrustersPower[i].power<=maxthrusterpowerR2[i].power){
                rocket2.thrustersPower[i].power=(rocket2.thrustersPower[i].power)+10;
                sumR2=+rocket2.thrustersPower[i].power;
            }
        }
        
    }

    //Break R2
    var buttonBreakR2=document.getElementById('breakbutton2');
    buttonBreakR2.onclick=function(event){
        event.preventDefault();
        //restar 10 a cada propulsor
        /* for(var i=0; i<thrusterNumber2; i++){
            rocket2.thrustersPower[i].power=(rocket2.thrustersPower[i].power)-10;
            sumR1=+rocket2.thrustersPower[i].power;
        } */

        for(var i=0; i<thrusterNumber2; i++){
            if (rocket2.thrustersPower[i].power<=maxthrusterpowerR2[i].power){
                rocket2.thrustersPower[i].power=(rocket2.thrustersPower[i].power)-10;
                sumR2=-rocket2.thrustersPower[i].power;
            }
        }
        
    }

    showResultsEventListener();

}

function showResultsEventListener(){

    //Evento de escucha, Show Rocket 1 Status (form1)
    var formButtonController1=document.getElementById('button-controller1');
    formButtonController1.addEventListener('submit', function(event){
        //se puede reemplazar el 2, por el valor de un input al inicio de la app (en un bucle for)
        event.preventDefault;
        event.stopPropagation;
        
        rocket=rocket1;
        temp=thrusterNumber1;
        ui.addStatus(rocket);
       
    });    
    
    //Evento de escucha, Show Rocket 2 Status (form2)
    var formButtonController2=document.getElementById('button-controller2');
    formButtonController2.addEventListener('submit', function(event){
        //se puede reemplazar el 2, por el valor de un input al inicio de la app (en un bucle for)
        event.preventDefault;
        event.stopPropagation;
        rocket=rocket2;
        temp=thrusterNumber2;
        ui.addStatus(rocket);

    });

    /* //Evento de escucha, Show Rocket All Status (form general)
    var formButtonControllerAll=document.getElementById('button-controller');
    formButtonControllerAll.addEventListener('submit', function(event){
        //se puede reemplazar el 2, por el valor de un input al inicio de la app (en un bucle for)
        event.preventDefault;
        event.stopPropagation;
        ui.showStatusAll();    
    }); */
}
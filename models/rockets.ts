class Rocket {
    name: string;
    //cantidad de propulsores
    thrusters: number;
    //potencia de cada uno de los propulsores
    thrustersPower:Thruster[]=new Array();

    constructor(name: string, thrusters: number){
    this.name=name;
    this.thrusters=thrusters;
    }

    addThruster(thruster:Thruster):void{
        this.thrustersPower.push(thruster);
    }
}

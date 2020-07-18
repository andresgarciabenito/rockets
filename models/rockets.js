var Rocket = /** @class */ (function () {
    function Rocket(name, thrusters) {
        //potencia de cada uno de los propulsores
        this.thrustersPower = new Array();
        this.name = name;
        this.thrusters = thrusters;
    }
    Rocket.prototype.addThruster = function (thruster) {
        this.thrustersPower.push(thruster);
    };
    return Rocket;
}());

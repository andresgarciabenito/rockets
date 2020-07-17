var UI = /** @class */ (function () {
    function UI() {
    }
    UI.prototype.addRocket = function (rocket) {
        //accedo al div
        var rocketList = document.getElementById('card-details');
        var element = document.createElement('div');
        element.innerHTML =
            "<div class=\"card text-center mb-4\">\n    <h6 class=\"text-success mt-2\">New Rocket Created</h6>\n    <div class=\"card-body\">\n      <div class=\"row justify-content-around\">\n        <div class=\"col-5\">\n          <strong>Rocket CODE</strong> " + rocket.name + "\n        </div>\n        <div class=\"col-5\">\n          <strong>Number of Thrusters:</strong> " + rocket.thrusters + "\n        </div>\n      </div>\n\n    </div>\n  </div>\n    ";
        rocketList.appendChild(element);
    };
    return UI;
}());

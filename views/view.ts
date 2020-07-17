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
}
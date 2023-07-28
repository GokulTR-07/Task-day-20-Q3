var res = fetch("http://api.citybik.es/v2/networks")
.then((data)=>data.json()).then((data1)=>{
  for(let i in data1){
    //console.log(data1[i]);
    for(let j in data1[i]){
      console.log(data1[i][j])
      var div = document.createElement("div")
      div.setAttribute("class","box");
      div.innerHTML = `
      <div class="flex-container">
      <div class="row">
        <div class="col col-sm-12">
        <div class="card text-white bg-dark mb-3">
      <div class="card-header"><h5 class="d-inline">Company: </h5>${data1[i][j].company}</div>
      <div class="card-body">
        <h5 class="card-title">Name: ${data1[i][j].name}</h5>
        <p class="card-text">City: ${data1[i][j].location.city}</p>
        <p class="card-text">Country: ${data1[i][j].location.country}</p>
      </div>
    </div>
        </div>
      </div>
    </div>
      `

    document.body.append(div);
    }
  }
})


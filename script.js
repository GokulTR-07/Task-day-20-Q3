var res = fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand")
.then((data)=>data.json()).then((data1)=>{
  for(var i=0; i<data1.length; i++){
    console.log(data1[1]);
    
    var div = document.createElement("div")
      div.setAttribute("class","box");
      div.innerHTML = `
      <div class="flex-container">
      <div class="row">
        <div class="col col-sm-12">
        <div class="card text-white bg-dark mb-3">
      <div class="card-header"><h5 class="d-inline">Title: ${data1[i].title.rendered}</div>
      <div class="card-body">
        <h5 class="card-title">Content: ${data1[i].content.rendered}</h5>
      </div>
    </div>
        </div>
      </div>
    </div>
      `

    document.body.append(div);
  }
})

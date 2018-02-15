
const imagen = document.getElementById('people');

imagen.addEventListener('click', function(e) {
  e.preventDefault();
  getModal();
});

function getModal() {
  const starWarsReq = new XMLHttpRequest;
  const star = starWarsReq.open('GET', 'https://swapi.co/api/people/');
  console.log(star);
  starWarsReq.onload = addModal;
  starWarsReq.onerror = handleError;
  starWarsReq.send();
}

function handleError() {
  console.log('Se ha presentado un error');
}
  
function addModal() {
  const data = JSON.parse(this.response);
  console.log(data);
  const article = data.results;
  console.log(article);
  
  for (const doc of article) {
    console.log(doc);
    
   
    if (doc.name === 'Luke Skywalker') {
 
 let output = ''
      const title = doc.name;
      const birth = doc.birth_year;
      console.log(title + birth);
      output += `      
           <div class="modal-header">
           <button type="button" class="white close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
           <h4 class="modal-title">${title}</h4>
           </div>
           <div class="modal-body">
           <div class="row">
           <div class="col-xs-12 col-sm-6">
           <p class="mod-subtitle">Birthday: <span class="mod-info">${birth}</span></p>
         </div>
         </div>
         </div>
         `;

         $('.apimodal').html(output)
    }
  }
}



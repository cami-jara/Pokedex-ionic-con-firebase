window.personas = [];

window.cargarPersona = ()=>{
  let cards = document.querySelector(".cards"); 
  cards.innerHTML="";
  window.personas.forEach((p)=>{
    let card = document.createElement("div");
    card.classList.add("card","col-lg-4");
    let cardHeader = document.createElement("div");
    let cardBody = document.createElement("div");
    let cardFooter = document.createElement("div");
    
    let nombreCard = document.createElement("span");
    nombreCard.innerText= p.nombre;
    let tipoCard = document.createElement("h4");
    tipoCard.innerText="Total a pagar" + p.tipo;
    let pagoCard = document.createElement("div");
    let opcionCard = document.createElement("p");

    if (p.pago === 'efectivo'){
      pagoCard.style="width: 80px";
      let imagen = document.createElement("img");
      imagen.src = 'img/efectivo.png';
      imagen.classList.add("img-fluid");
      pagoCard.appendChild(imagen);
      
    }else{
      pagoCard.style="width:80px";
      let imagen = document.createElement("img");
      imagen.src = 'img/tarjeta.png';
      imagen.classList.add("img-fluid");
      pagoCard.appendChild(imagen);

    }
    
    if(p.opcion === true){
      opcionCard.innerText='Pagado';
      cardFooter.appendChild(opcionCard);
    }else{
      opcionCard.innerText='Adeudado';
      opcionCard.classList.add("text-danger");
      cardFooter.appendChild(opcionCard);
    } 
    
    cardHeader.appendChild(nombreCard);
    cardBody.appendChild(tipoCard);
    cardBody.appendChild(pagoCard);
    
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    cards.appendChild(card);
  });
}

window.guardarPersona = (persona)=>{
  window.personas.push(persona)
  window.cargarPersona()

}


const boton = document.getElementById("agregar-btn");

boton.addEventListener('click',()=>{
  let erroresDiv = document.getElementById("errores-div");
  
  erroresDiv.innerHTML="";

 let nombre = document.getElementById("nombre-txt").value;
 let tipo = document.getElementById("tipo-select").value;
 let pago = document.getElementById("pago-select").value;
 let opcion = document.getElementById("opcion-switch").checked;

 if(nombre === ""){
   let error = document.createElement("p");
   error.classList.add("alert","alert-danger");
   error.innerText= "Debe ingresar nombre";
   erroresDiv.appendChild(error);

 }else{
  let persona = {}
  persona.nombre = nombre;
  persona.tipo = tipo;
  persona.pago = pago;
  persona.opcion = opcion;

  window.guardarPersona(persona);
 }


});
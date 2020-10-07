window.cargarTarjeta = ()=>{
    const tarjeta = document.querySelector("#confesiones-table > tbody");
    tarjeta.innerHTML = "";
    for(let i=0; i < window.confesiones.length; ++i){
        let confesionActual = window.confesiones[i];
        let tr = document.createElement("tr");

        let tdNombre = document.createElement("td");
        let tdTexto = document.createElement("td");
        let tdCarrera = document.createElement("td");
        let tdAcciones = document.createElement("td");
        tdNombre.innerText = confesionActual.nombre;
        tdTexto.innerHTML = confesionActual.texto;
        tdCarrera.innerText = confesionActual.carrera;
        let boton = document.createElement("button");
        boton.classList.add("btn","btn-danger","btn-sm");
        boton.innerText = "Descartar comentario";
        boton.nroConfesion = i;
        boton.addEventListener('click', window.eliminar);
        tdAcciones.appendChild(boton);
        tr.appendChild(tdNombre);
        tr.appendChild(tdTexto);
        tr.appendChild(tdCarrera);
        tr.appendChild(tdAcciones);
        tabla.appendChild(tr);  
    }
}
window.mostrarErrores = (errores)=>{
    let erroresDiv = document.querySelector("#errores-div");
    let ul = document.createElement("ul");
    ul.classList.add("alert","alert-warning");
    errores.forEach(e=>{
        let li = document.createElement("li");
        li.innerText = e;
        ul.appendChild(li);
    });
    erroresDiv.appendChild(ul);
};
const boton = document.querySelector("#ingresar-btn");

boton.addEventListener('click', ()=>{

    document.querySelector("#errores-div").innerHTML = "";
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let texto = tinymce.get("texto-txt").getContent();
    let carrera = document.querySelector("#carrera-select").value;

    let errores = [];

    if(nombre === ''){
        errores.push("Debe ingresar un nombre");
    }

    if(texto === ''){
        errores.push("Debe ingresar la confesion");
    }

    if(errores.length === 0){
        //Crear la confesion
        let confesion = {};
        confesion.nombre = nombre;
        confesion.texto = texto;
        confesion.carrera = carrera;
        window.confesiones.push(confesion);
        window.cargarTabla();
    } else {

        //Mostrar errores
        window.mostrarErrores(errores);
    }



});

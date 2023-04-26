import Pelicula from "./classPelicula.js";
import {sumarioValidaciones} from "./helpers.js";

const btnEditar = document.querySelector('#btnEditar');
const btnAgregar = document.querySelector('#btnAgregar');
const titulo = document.getElementById('titulo');
const codigo = document.getElementById('codigo');
const descripcion = document.getElementById('descripcion');
const duracion = document.getElementById('duracion');
const anio = document.getElementById('anio');
const genero = document.getElementById('genero');
const pais = document.getElementById('pais');
const reparto = document.getElementById('reparto');
const imagen = document.getElementById('imagen');
const msjFormulario = document.getElementById('msjFormulario');
const formularioPelicula = document.getElementById('formAdministrarPelicula');
const modalPelicula = new bootstrap.Modal(document.querySelector('#modalAgregar'));
//btnEditar.addEventListener('click', crearPeli);
btnAgregar.addEventListener('click', mostrarModalPeli);
formularioPelicula.addEventListener('submit', cargarPelicula);


//trabajar las peliculas para que vuelvan a ser un objeto Pelicula.
// let listaPeliculas = JSON.parse(localStorage.getItem('listaPeliculas')) || []; esto me devuelve un objeto de tipo Object
 let listapeliculas = localStorage.getItem("listapeliculas");

if (!listapeliculas) {
  //si lista peliculas no existe en Localstorage
  listapeliculas = [];
} else {
  //si lista Peliculas tiene datos, quiero transformarlo en un array de objetos Pelicula
  listapeliculas = JSON.parse(listapeliculas).map(
    (pelicula) =>
      new Pelicula(
        pelicula.codigo,
        pelicula.titulo,
        pelicula.descripcion,
        pelicula.imagen,
        pelicula.genero,
        pelicula.anio,
        pelicula.duracion,
        pelicula.pais,
        pelicula.reparto
      )
  );
}

console.log(listapeliculas);
cargaInicial();

function cargaInicial() {
  // verificar si listaPeliculas tiene datos
  if (listapeliculas.length > 0) {
    //dibujes los datos en la tabla
    listapeliculas.map((pelicula, indice) => crearFila(pelicula, indice));
  }
  //el else seria mostrar un mensaje q no hay datos para cargar o dejo la tabla vacia
}

function crearFila(pelicula, indice) {
  //aqui dibujo el TR
  let datosTablaPelicula = document.querySelector("tbody");
  datosTablaPelicula.innerHTML += `<tr>
    <th>${indice + 1}</th>
    <td>${pelicula.titulo}</td>
    <td class="text-truncate">${pelicula.descripcion}</td>
    <td class="text-truncate">${pelicula.imagen}</td>
    <td>${pelicula.genero}</td>
    <td>
        <button class="bi bi-pencil-square btn btn-warning" id="btnEditar"></button>
        <button class="bi bi-x-square btn btn-danger" onclick="borrarPelicula('${pelicula.codigo}')"></button>
    </td>
  </tr>`;
}






function crearPeli(){
    // crear una nueva peli
    let nuevaPeli = new Pelicula('Super mario','algo','url','aventura',2023, '2hs','EEUU','-');
    console.log(nuevaPeli)
    
    }

    function mostrarModalPeli(){
        //abrir la ventana modal
        modalPelicula.show();
        console.log('aqui vamos a crear una peli')
    }
    
    function cargarPelicula(e){
        e.preventDefault();
         //validar los datos

        let sumario = sumarioValidaciones(
            titulo.value,
            descripcion.value,
            imagen.value,
            duracion.value,
            genero.value,
            anio.value,
            pais.value,
            reparto.value
          );
          if (sumario.length === 0) {
            console.log("creando la pelicula...");
            let nuevaPeli = new Pelicula(
                undefined,
                titulo.value,
                descripcion.value,
                imagen.value,
                genero.value,
                anio.value,
                duracion.value,
                pais.value,
                reparto.value
              );
              listapeliculas.push(nuevaPeli);
              console.log(nuevaPeli);
              //almacenar la peli en Localstorage
              guardarEnLocalStorage();
              //limpiar el formulario
              limpiarFormularioPeliculas();
              //crear modal
              modalPelicula.hide();
              //dibujar la fila
              let indicePeli = listapeliculas.length - 1;
              crearFila(nuevaPeli, indicePeli);
              //mostrar un cartel al usuario
          
              Swal.fire("Pelicula creada", "La pelicula ingresada fue creada correctamente", "success");
              // Tarea verificar cantidad de caracteres en el campo de la descripcion
              // ocultar pasado x tiempo o una vez enviado la pelicula el alert con los errores.
            } else{
            msjFormulario.className = 'alert alert-danger mt-3';
            msjFormulario.innerHTML = sumario ;
        }
       
    }
    function guardarEnLocalStorage(){
        localStorage.setItem('listapeliculas', JSON.stringify(listapeliculas)); //para objetos Publicos funciona
    }
    
    function limpiarFormularioPeliculas(){
        formularioPelicula.reset();
    }

    window.borrarPelicula = (codigo)=>{
      Swal.fire({
        title: '¿Esta seguro de borrar la pelicula?',
        text: "No se puede revertir este proceso posteriomente",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
      console.log(codigo, typeof codigo)
      //busco en el array de peliculas la peli que quiero borrar
      let posicionPeli = listapeliculas.findIndex( pelicula => pelicula.codigo === codigo)
      console.log(posicionPeli);
      //borrar del array el objeto pelicula
      listapeliculas.splice(posicionPeli, 1)
      //igualar los datos del local storege
     guardarEnLocalStorage();
      //quitar la fila de la tabla
      let datosTablaPelicula = document.querySelector("tbody");
      //console.log(datosTablaPelicula.children[posicionPeli])
      datosTablaPelicula.removeChild(datosTablaPelicula.children[posicionPeli]);
    
      //actualizar la fila de la tabla
      Swal.fire(
        'Borramos la pelicula',
        'La pelicula seleccionada fue eliminada correctamente',
        'success'
      )
    }
  })

 }
    
    
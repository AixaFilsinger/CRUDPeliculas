import Pelicula from "./classPelicula.js";

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


cargarPeli();

function cargarPeli (){
 // verificar si listaPeliculas tiene datos
 if (listapeliculas.length > 0) {
  //dibujes los datos en la tabla
  listapeliculas.map((pelicula, indice) => crearCard(pelicula, indice));
}
}

function crearCard(pelicula){

  let datosCardPelicula = document.getElementById("lista-cards");
  datosCardPelicula.innerHTML += `
  <article class="col-md-4 col-lg-3 mb-4">
          <div class="card h-100">
            <img
              src="${pelicula.imagen}"
              class="card-img-top"
              alt="${pelicula.titulo}"
            />
            <div class="card-body">
              <h5 class="card-title">${pelicula.titulo}</h5>
            </div>
            <div class="card-footer">
              <a href="./pages/detalle.html" class="btn btn-primary">Detalle</a>
            </div>
          </div>
        </article>`

}



import Pelicula from "./classPelicula.js";

const btnEditar = document.querySelector('#btnEditar');


function crearPeli(){
    // crear una nueva peli
    let nuevaPeli = new Pelicula('Super mario','algo','url','aventura',2023, '2hs','EEUU','-');
    console.log(nuevaPeli)
    
    }
    
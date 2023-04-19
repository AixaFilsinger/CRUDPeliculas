import Pelicula from "./classPelicula.js";
import { cantidadCaracteres } from "./helpers.js";

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

const formularioPelicula = document.getElementById('formAdministrarPelicula');
let listapeliculas = [];

btnEditar.addEventListener('click', crearPeli);
btnAgregar.addEventListener('click', mostrarModalPeli);
formularioPelicula.addEventListener('submit', cargarPelicula);
const modalPelicula = new bootstrap.Modal(document.querySelector('#modalAgregar'));


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
        console.log('creando la pelicula...')
        //validar los datos
        if(cantidadCaracteres(titulo.value, 3, 100))
        //crear pelicula
        //almacenar la peli en Localstorage
        //crear modal
        modalPelicula.hide();
    }
    
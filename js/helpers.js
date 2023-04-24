export function cantidadCaracteres(texto, min, max){
    if(texto.length >= min && texto.length <= max){

        console.log('cantidad de caracteres correcto');
        return true;
    }else{
        console.log('cantidad de caracteres incorrectos');
        return false;
    }
}

function validarDuracion(value){
    let patron = /^[0-9]{4,8}$/;
    if(patron.test(value)){
        console.log('digito valido de 1 a 3 caracteres');
        return true;
    }else{
        console.log('no paso la expresion regular del tiempo');
        return false;
    }
}
function validarURLImagen(value){
    let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/;
    if(patron.test(value)){
        console.log('url valida');
        return true;
    }else{
        console.log('url invalida');
        return false;
    }
}

function validarGenero(texto){
    if(texto.length > 0 && (texto === 'Aventura' || texto === 'Accion' || texto === 'Drama' || texto === 'Terror')){
        console.log('genero valido');
        return true;
    }else{
        console.log('genero invalido');
        return false;
    }
}

export function sumarioValidaciones(titulo, descripcion, imagen, duracion, genero){
    let resumen = '';
    if(!cantidadCaracteres(titulo, 3, 100)){
        resumen += 'Corregir el campo del titulo debe contener entre 3 y 150 caracteres <br>'

    }
    if(!cantidadCaracteres(descripcion, 4, 300)){

        resumen += 'Corregir el campo descripión <br>'
    }
    if(!validarDuracion(duracion)){
        resumen += 'Corregir la duracion, debe ser un numero de 3 digitos como maximo <br>'
    }
    if(!validarURLImagen(imagen)){
        resumen += 'Corregir la URL de la imagen, la extension debe ser .jpg, .gif o .png <br>'
    }
    if(!validarGenero(genero)){
        resumen += 'Seleccione un genero de la lista de opciones <br>'
    }
    if(resumen.length !== 0){

       return resumen;
    }else{
        return '';
    }
}
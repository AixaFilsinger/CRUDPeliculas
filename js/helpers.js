export function cantidadCaracteres(texto, min, max){
    if(texto.length >= min && texto.length <= max){
        console.log('cantidad de caracteres correcto');
        return true;
    }else{
        console.log('cantidad de caracteres incorrectos');
        return false;
    }
}
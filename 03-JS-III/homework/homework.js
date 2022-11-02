// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var acumulador = 0;
    for(var i = 0; i <= 10; i++){
      acumulador = acumulador + i;
    }
    return acumulador
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  /* var arrayDePares = [];
  for(var i = 0; i < array.length; i++){
    if(array[i] % 2 == 0){
      arrayDePares.unshift(array[i]);
    }
  } return arrayDePares */
  var pares = array.filter((elemento) => elemento % 2 === 0);
  return pares
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
/*   var arrayElevadoAlCuadrado = [];
  for(var i = 0; i < array.length; i++){
    arrayElevadoAlCuadrado.unshift(Math.pow(array[i], 2));
  }
  return arrayElevadoAlCuadrado */
  var cuadrado = array.map((elemento) => elemento ** 2)
  return cuadrado
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var suma = 0;
  for(var i = 0; i < array.length; i++){
    suma = suma + array[i];
  }
  return suma
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  return num.toString().length
  }

  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };

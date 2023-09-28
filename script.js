//Ejercicio 1:
//Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase
function contarLetra(str, letra) {
  let contadorLetras = 0; //almacena la cuenta de letras
  for (let i = 0; i < str.length; i++) {
    //bucle for para iterar por el str
    if (str[i] === letra) {
      //de manera estricta
      contadorLetras++; //tras la iteracion de la frase suma de cada repeticion de letras
    }
    return contadorLetras; //devuelve la cantidad de veces que aparece letra
  }
}

//Ejercicio 2:
//Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 impares
const ingresoNumero = parseInt(prompt("Ingrese un número")); //prompt de ingreso de num
if (ingresoNumero) {
  let contadorImpares = 0; //almacena la cuenta de impares

  for (let i = ingresoNumero; contadorImpares < 50; i++) {
    //bucle for empezando por el num que ingrese el usuario hasta 50 mas
    if (i % 2 !== 0) {
      //si i es impar se imprime
      contadorImpares++; //incremento del contador de impares
      console.log(i); //imprime los números impares entre el numero dado y los siguiente 50
    }
  }
}

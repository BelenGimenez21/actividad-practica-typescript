import './style.css'

/*Quitar los comentarios de las porciones de código para probarlos*/

/*-----------------------1)CALCULADORA SIMPLE---------------------*/
// Definimos un tipo para las operaciones válidas
type Operation = "suma" | "resta" | "multiplicacion" | "division";

// Función para realizar la operación deseada
function calcular(num1: number, num2: number, operacion: Operation): number {
    switch (operacion) {
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicacion":
            return num1 * num2;
        case "division":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                throw new Error("No se puede dividir por cero.");
            }
        default:
            throw new Error("Operación no válida.");
    }
}

// Función principal que interactúa con el usuario
function main() {

  const inputNum1 = prompt("Ingrese el primer número:");
  const inputNum2 = prompt("Ingrese el segundo número:");
  const operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):");

  if (inputNum1 !== null && inputNum2 !== null && operacion !== null) {
    const num1 = parseFloat(inputNum1);
    const num2 = parseFloat(inputNum2);

    try {
      const resultado = calcular(num1, num2, operacion as Operation);
      console.log(`El resultado es: ${resultado}`);
    } catch (error) {
        console.log(error);
    }
  }
}

// Llamamos a la función principal para comenzar la interacción
main();



/*--------------------2)NUMEROS PARES E IMPARES-------------------*/
// function contarNumerosParesImpares(inicio: number, fin: number): void {
//   let pares = 0;
//   let impares = 0;

//   for (let i = inicio; i <= fin; i++) {
//       if (i % 2 === 0) {
//           pares++;
//       } else {
//           impares++;
//       }
//   }

//   console.log(`Cantidad de números pares: ${pares}`);
//   console.log(`Cantidad de números impares: ${impares}`);
// }

// // const rangoInicio = 1;
// // const rangoFin = 9;
// // contarNumerosParesImpares(rangoInicio, rangoFin);

// // Función principal que interactúa con el usuario
// function main() {
//   const inputNum1 = prompt("Ingrese el número inicial del rango:");
//   const inputNum2 = prompt("Ingrese el número final del rango:");

//   if (inputNum1 !== null && inputNum2 !== null) {
//     const rangoInicio = parseFloat(inputNum1);
//     const rangoFin = parseFloat(inputNum2);

//     contarNumerosParesImpares(rangoInicio, rangoFin);
//   }
// }

// // Llamamos a la función principal para comenzar la interacción
// main();



/*---------------------3)TABLA DE MULTIPLICAR---------------------*/
// // Función para mostrar la tabla de multiplicar hasta cierto valor
// function mostrarTablaDeMultiplicar(numero: number, limite: number): void {
//   console.log(`Tabla de multiplicar del ${numero} hasta el ${limite}:`);
//   for (let i = 1; i <= limite; i++) {
//     const resultado = numero * i;
//     console.log(`${numero} x ${i} = ${resultado}`);
//   }
// }

// // Función para obtener la entrada del usuario
// function prompt(message: string): string {
//   return (window as any).prompt(message);
// }

// // Función para imprimir en la consola
// function print(message: string): void {
//   console.log(message);
// }

// // Obtener el número y el límite del usuario
// const numeroStr = prompt('Ingrese un número: ');
// const limiteStr = prompt('Ingrese el límite: ');

// const numero = parseInt(numeroStr);
// const limite = parseInt(limiteStr);

// if (isNaN(numero) || isNaN(limite)) {
//   print('Por favor, ingrese valores numéricos válidos.');
// } else {
//   mostrarTablaDeMultiplicar(numero, limite);
// }



/*------------------------4)FIBONACCI-------------------------*/
// function fibonacciSequence(n: number): number[] {
//     const sequence: number[] = [];
  
//     if (n >= 1) {
//       sequence.push(0);
//     }
//     if (n >= 2) {
//       sequence.push(1);
//     }
  
//     for (let i = 2; i < n; i++) {
//       const nextNumber = sequence[i - 1] + sequence[i - 2];
//       sequence.push(nextNumber);
//     }
  
//     return sequence;
// }
  
// function displayFibonacciSequence(sequence: number[]): void {
//     console.log("Fibonacci Sequence:");
//         for (let i = 0; i < sequence.length; i++) {
//             console.log(sequence[i]);
//         }
// }
  
// // const N = 10; // Cambiar N al valor deseado
// const inputNum = prompt("Ingrese la cantidad de números de la secuencia:");

// if (inputNum !== null) {
//     const N = parseFloat(inputNum);
//     const fibonacciSeq = fibonacciSequence(N);
//     displayFibonacciSequence(fibonacciSeq);
// }



/*---------------------5)CONVERTIDOR DE TEMPERATURA---------------------*/
// function celsiusToFahrenheit(celsius: number): number {
//   return (celsius * 9/5) + 32;
// }

// function fahrenheitToCelsius(fahrenheit: number): number {
//   return (fahrenheit - 32) * 5/9;
// }

// const opcionInput = prompt("Seleccione una opción:\n1. Convertir de Celsius a Fahrenheit\n2. Convertir de Fahrenheit a Celsius");

// if (opcionInput !== null) {
//   const opcion = parseInt(opcionInput);

//   if (!isNaN(opcion) && (opcion === 1 || opcion === 2)) {
//     const valorInput = prompt("Ingrese el valor a convertir:");

//     if (valorInput !== null) {
//       const valor = parseFloat(valorInput);

//       if (!isNaN(valor)) {
//         if (opcion === 1) {
//           const fahrenheit = celsiusToFahrenheit(valor);
//           alert(`${valor}°C es igual a ${fahrenheit.toFixed(2)}°F`);
//         } else {
//           const celsius = fahrenheitToCelsius(valor);
//           alert(`${valor}°F es igual a ${celsius.toFixed(2)}°C`);
//         }
//       } else {
//         console.log("Ingrese un valor numérico válido.");
//       }
//     } else {
//       console.log("No ingresó un valor válido.");
//     }
//   } else {
//     console.log("Seleccione una opción válida.");
//   }
// } else {
//   console.log("No seleccionó una opción.");
// }



/*---------------------6)CONTADOR DE PALABRAS---------------------*/
// const oracionInput = prompt("Ingrese una oración:");

// if (oracionInput !== null) {
//   const palabras = oracionInput.trim().split(/\s+/);
//   const cantidadPalabras = palabras.length;

//   alert(`La oración tiene ${cantidadPalabras} ${cantidadPalabras === 1 ? "palabra" : "palabras"}.`);
// } else {
//   alert("No ingresó una oración válida.");
// }
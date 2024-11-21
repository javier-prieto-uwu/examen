console.log('Hacer un script que pida el número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas se escribirá un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 5x5, los números irán del 25 al 1.')

let altura = parseInt(prompt("Ingrese la altura:"));
let ancho = parseInt(prompt("Ingrese el ancho:"));

let total = altura * ancho;
let numeroActual = total;

for (let contador1 = 0; contador1 < altura; contador1++) {
    let fila = "";  
    for (let contador2 = 0; contador2 < ancho; contador2++) {
        fila = fila + " -|- " + numeroActual;  
        numeroActual--;  
    }

    console.log(fila + " -|-");  
}

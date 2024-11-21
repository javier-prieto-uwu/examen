console.log("Haz un script que pida 3 edades y 3 nombres en el teclado e indica el nombre del mayor.")

contador = 0


let edad = 0
let nombre = ""

let edad1 = 0
let nombre1 = ""

let edad2 = 0 
let nombre2 = ""

let edad3 = 0
let nombre3 = ""



while (contador != 3) {
    
    nombre=prompt("ingrese el nombre ", contador+1)
    edad=prompt("ingrese la edad ", contador+1)

    if (contador == 0) {
        nombre1 = nombre;
        edad1 = edad;
    } else if (contador == 1) {
        nombre2 = nombre;
        edad2 = edad;
    } else if (contador == 2) {
        nombre3 = nombre;
        edad3 = edad;
    }

    contador = contador+1;

}

    if (edad1 > edad2 && edad1 > edad2)  {
        console.log("la la persona más grande es", nombre1, " teniendo ", edad1)
    } else{
        if (edad2 > edad1 && edad2 > edad3) {
         
            console.log("la la persona más grande es", nombre2, " teniendo ", edad2)

        } else {
            console.log("la la persona más grande es", nombre3, " teniendo ", edad3)

        }
    }
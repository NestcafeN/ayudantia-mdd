//1.-Crea una funcion que reciba como parametro un array de numeros y retorne la suma de todos los numeros del array.
function sumaArray(array) {
    let resultado = 0
    for (let i = 0; i < array.length; i++) {
        resultado += array[i]
    }
    return resultado
}
let resultado1 = sumaArray([1, 2, 3, 4, 5])
console.log(resultado1);

//2.-Crea una funcion ( o varias) que reciba como parametro un array de numeros y retorne el promedio de todos los numeros del array.
function promedioArray(array) {
    let resultado = 0
    for (let i = 0; i < array.length; i++) {
        resultado += array[i]
    }
    return resultado / array.length
}
let resultado2 = promedioArray([1, 2, 3, 4, 5])
console.log(resultado2);

//3.-Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
function mayusculasArray(array) {
    let resultado = []
    for (let i = 0; i < array.length; i++) {
        resultado.push(array[i].toUpperCase())
    }
    return resultado
}
let resultado3 = mayusculasArray(["jose", "acuña"])
console.log(resultado3);

//4.-Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
function paresArray(array) {
    let resultado = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            resultado.push(array[i])
        }
    }
    return resultado
}
let resultado4 = paresArray([1, 2, 3, 4, 5])
console.log(resultado4);
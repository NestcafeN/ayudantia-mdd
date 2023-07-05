//1.-Crea una funcion que reciba como parametro un numero y retorne el cuadrado de ese numero.
function cuadrado(numero) {
    return numero * numero
}
let resultado1 = cuadrado(5)
console.log(resultado1);

//2.-Crea una funcion que reciba como parametro un numero y retorne el factorial de ese numero.
function factorial(numero) {
    let resultado = 1
    for (let i = 1; i <= numero; i++) {
        resultado *= i
    }
    return resultado
}
let resultado2 = factorial(5)
console.log(resultado2);

//3.-Crea una funcion que reciba un string y retorne el string en mayusculas.
function mayusculas(string) {
    return string.toUpperCase()
}
let resultado3 = mayusculas("hola")
console.log(resultado3);

//4.-Crea una función que tome un número como parámetro y devuelva "par" si el número es par o "impar" si el número es impar.
function parImpar(numero) {
    if (numero % 2 == 0) {
        return "par"
    } else {
        return "impar"
    }
}
let resultado4 = parImpar(5)
console.log(resultado4);

//5.-Crea una función que tome dos números como parámetros y devuelva la suma de esos dos números.
function suma(numero1, numero2) {    
    return numero1 + numero2
}
let resultado5 = suma(5, 10) 
console.log(resultado5);

//6.-Crea una función que tome un string como parámetro y devuelva la longitud del string.
function longitud(string) {
    return string.length
}
let resultado6 = longitud("hola")
console.log(resultado6);

//7.-Crea una función que tome dos números como parámetros y devuelva true si ambos números son iguales, de lo contrario devolver false.
function iguales(numero1, numero2) {
    if (numero1 == numero2) {
        return true
    } else {
        return false
    }
}
let resultado7 = iguales(5, 5)
console.log(resultado7);
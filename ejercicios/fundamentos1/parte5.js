//1.-Imprimir en consola los numeros del 1 al 10.
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

//2.-Imprimir en consola los numeros del 10 al 1.
for (let i = 10; i >= 0; i--) {
    console.log(i)
}

//3.-Imprimir en consola los numeros del 1 al 10 pero solo los pares.
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

//4.-Imprimir en consola los numeros del 1 al 10 pero solo los impares.
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

//5.-Imprimir en consola los numeros del 1 al 10 pero solo los multiplos de 3.
for (let i = 0; i <= 10; i++) {
    if (i % 3 == 0) {
        console.log(i)
    }
}

//6.-Imprimir en consola los numeros del 1 al 10 pero solo los multiplos de 5.
for (let i = 0; i <= 10; i++) {
    if (i % 5 == 0) {
        console.log(i)
    }
}

//7.-Imprimir en consola los numeros del 1 al 10 pero solo los multiplos de 3 y 5.
for (let i = 0; i <= 10; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i)
    }
}

//8.-Imprimir en consola los numeros del 1 al 10 pero solo los multiplos de 3 o 5.
for (let i = 0; i <= 10; i++) {   
    if (i % 3 == 0 || i % 5 == 0) {
        console.log(i)
    }
}

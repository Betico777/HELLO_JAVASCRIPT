// // 1. Crea un bucle que imprima los numero del 1 al 20

for (let i = 1; i <= 20 ; i++){
    console.log(i)
}

// // 2. Crea un bucle que sume  todos los numeros del 1 al 100 y muestre el resultado

let suma = 0

for(let i = 0; i <=100; i++ ){
    suma = suma + i
}console.log(suma)

// // 3. Crea un bucle que imprima  todos los numeros pares entre 1 y 100

let i = 0

while(i < 100){
    if( i % 2 == 0){
        console.log(i)
    }i++
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let array1 = ["Alberto", "Betico", "Beto", "Laura", "Pedro"]

for(let valor of array1){
    console.log(valor)
}

// 5. Escribe un bucle que cuente el numero de vocales en una cadena de texto

myVocals = "Hola como estan soy betico seven seven seven"
contador_vocales= 0
const vocales = "aeiouAEIUO"

for(let valor of myVocals){
    if(vocales.includes(valor)){
        contador_vocales++;
    }
}console.log(contador_vocales)

// 6. Dado un array de numeros, usa un bucle para multiplicar todos los numeros y mostrar el producto

let arrayNumber= [1,2,3,4,5,6]
let result = 1

for(let i = 0; i < arrayNumber.length; i++){
    result = result * arrayNumber[i]
}console.log(result)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let five = 5

for(let i = 0; i <= 10; i++ ){
    console.log(five*i)
}

// 8. Usa un bucle para invertir una cadena de texto 

let myRevert = "Hola mundo de yutu"
let revert = ""

for(let i = myRevert.length -1; i >= 0; i--){
    revert = revert + myRevert[i]
}console.log(revert)

// 9. Usa un bucle para generar los primeros 10 numeros de la secuencia de Fibonacci

let a = 0
let b = 1
for(let i = 0; i < 10; i++){
    console.log(a)
    let fibonacci = a + b
    a = b
    b = fibonacci
}

// 10. Dado un array de numeros, usa un bucle para crear un nuevo array que contenga solo los numeros mayores a 10

let array2 = [11,12,13,14,15]
let arrayCero = []

for(let i = 0; i <= array2.length; i++){
    if(array2[i]>10){
    arrayCero.push(array2)
    }break
}console.log(arrayCero)
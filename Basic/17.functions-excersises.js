// 1.Crea un funcion que reciba 2 numeros y devuelva su suma

function sum (a, b){
    return a + b
}
console.log(sum(4, 6))

// 2.Crea una funcion que reciba un array de numeros y devuelva el mayor de ellos

const myArray = [1,2,3,4,5,50]

function mostGreat(arr){
    let mayor = arr[0];
    for(let i = 0; i < arr.length; i++){
        const x = arr[i];
        if(x > mayor) mayor = x
    }
    return mayor;
}

console.log(mostGreat(myArray))

// 3.Crea una funcion que reciba un string y devuelva el numero de vocales que contiene

let myString= "Hola soy betico"
const myVocals = "aeiouaEIOU"
let contadorVocals = 0

function vocals (stg){
    for(let valor of stg){
        if(myVocals.includes(valor)){
            contadorVocals++;
        }
    }return contadorVocals
}

console.log(vocals(myString))

// 4.Crea una funcion que reciba un array de strings y devuelva un nuevo array con las strings minusculas

let myArraySt = ["Hola", "Mundo", "Soy", "Betico"]


function lowerCase (arr){
    let newArray = []
    for(let i = 0; i < arr.length; i++){
        let elemento = arr[i]
        let minusculas = elemento.toLowerCase()
        newArray.push(minusculas)
    }
    return newArray
}

console.log(lowerCase(myArraySt))

// 5.Crea una funcion que reciba un numero y devuelva true si es primo, y false en caso contrario

function primos (numero){
    if(numero <= 1){
        return false
    }
    for(i = 2; i <= Math.sqrt(numero); i++){
        if( numero % i == 0)
            return false
    }return true
}

console.log(primos(4))

// 6.Crea una funcion que reciba 2 array de numeros y devuelva un nuevo array que contenga los elementos comunes entre ambos

let array1 = [1,2,3,4,5,6,7,10]
let array2 = [4,3,2,8,9,1,10]

function arraysComun(arr1, arr2){
    let array3 =[]
    for(let value of arr1){
        if(arr2.includes(value))
        array3.push(value)
    }
    return array3
}

console.log(arraysComun(array1, array2))

// 7.Crea una funcion que reciba un array de numeros y devuelva la suma de todos los numeros pares

let arrayNumbers = [1,2,3,4,5,6,7,8,9,10]

function sumPairs(arrNum){
    let arrayPairs = 0
    for(let value of arrNum){
        if( value%2 == 0){
            arrayPairs = arrayPairs+ value
        }
    }return arrayPairs
}

console.log(sumPairs(arrayNumbers))

// 8.Crea una funcion que reciba un array de numeros y devuelva un nuevo array con cada numero elevado al cuadrado

let arrayNum = [1,2,3,4,5,6,7,8,9]

function reTwo (arr){
    arrayTwo = []
    for(let value of arr){
        let cuadrado = value ** 2
        arrayTwo.push(cuadrado)
    }
    return arrayTwo
}

console.log(reTwo(arrayNum))

// 9.Crea una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

let myStg = "Avengers Endgame"

function reverse (stg){
    let reverses = ""
    for(let i = stg.length -1 ; i >= 0; i--){
        reverses = reverses + stg[i]
    }
    return reverses
}

console.log(reverse(myStg))

// 10.Crea una funcion que calcule el factorial de un numero dado


function factorial (num){
    if(num == 0 || num == 1){
        return 1
    }
    let result = 1
    for(i = 2 ; i <= num; i++){
        result = result * i
    }
    return result
}

console.log(factorial(100))

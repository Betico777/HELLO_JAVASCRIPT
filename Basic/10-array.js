// //Estructura de datos permite almacenar varios valores en una sola variable 

// //Arrays

// //declaracion 

let myArray = []

// let myArray2 = new Array ()

// //Inicializacion 

// myArray = [1]
// console.log(myArray)

// myArray = [1,2,3,4]
// myArray2= new Array (1,2,3,4)

// console.log(myArray)
// console.log(myArray2)

// myArray = ["Betico", "Cruz", "Correa", 50, true]
// myArray2= new Array ("Betico", "Cruz", "Correa")

// console.log(myArray)
// console.log(myArray2)

// myArray2 = new Array (3)

// myArray2[2] = "Hola"
// myArray2[1] = "Betico"
// myArray2[0] = 777

// console.log(myArray2)


// myArray = []
// myArray[2] = 777
// myArray[1] = "Betico"

// console.log(myArray)

//Metodos comunes 

myArray = []

//push y pop

myArray.push("Betico")
myArray.push("Cruz")
myArray.push(777)

// console.log(myArray)

// console.log(myArray.pop()) // para ver el elemento q se borro
// // myArray.pop()  //elimina el ultimo elemento del array

console.log(myArray)


//shift y unshift


console.log(myArray.shift()) // remueve el primer elemento del array y nos muestra cual fue ese elemento eliminado
myArray.shift() // remueve el primer elemento del array


myArray.unshift("Avengers") //agrega elemento al inicio del array
console.log(myArray)


//lenght

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 //alternativa
console.log(myArray)

//slice 
myArray = ["Betico", "Cruz", "Correa"] 
let newArray = myArray.slice( 0 , 2 ) //no ayuda crear un nuevo array dependiendo de lo que queramos q tenga segun su posicion en el array
console.log(myArray)
console.log(newArray)

// splice
myArray = ["Betico", "Cruz", "Correa"] 
myArray.splice (0,2 ,"Hola mundo")
console.log(myArray)

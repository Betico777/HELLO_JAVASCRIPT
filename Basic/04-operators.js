//Operadores aritmeticos 

let a = 10
let b =20


// console.log( a + b)
// console.log( a - b)
// console.log( a * b)
// console.log( a / b)
// console.log( a % b) //resto de la division
// console.log( a ** b) //exponente


// a++ //Incremento en 1
// console.log (a)

b-- //Decremento en 1
console.log (b)


//Operadores de asignacion 


let myVariable = 2
myVariable += 2 //hace la suma al dato de la variable mostrando su resultado es igual que hacer myVariable = myVariable + 2
myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2


//Operadores de comparacion 
 
console.log (a > b)
console.log (a < b)
console.log (a >= b)
console.log (a <= b)
console.log (a == a)
console.log (a == 10) // Igualdad por valor
console.log (a === a) //igualdad por identidad (tipo y valor)
console.log (a === 10)
console.log (a === "10")
console.log (a != 10) //es para saber si es distinto a el otro valor por ejemplo a es diferente a 10 pos si
console.log (a !== "10")// compara si es distinto y si tiene un tipo de dato diferente 
console.log (0 == false)
console.log (0 == "")
console.log (0 == " ")
console.log (0 == "Hola")
console.log (0 === "")
console.log (undefined == null)
console.log (undefined == null)
console.log (undefined === null)
console.log ("hola" == "Hola")
console.log (1.0 == 1)
console.log ( 1n == 1)

//Truthy (valores  verdaderos)

//Todos los numeros positivos y negativos menos el cero 
//Todas las cadenas de texto menos las vacias
//el boolean true


//Falsy (valores falsos)

//0
//0n
//null
//undefined
//Nan
//boolean false
//caderas de texto vacias 


//Operdores logicos

// and (&&)
console.log( 5 > 10 && 15 > 20) //si las 2 condiciones son falsas es false
console.log( 5 < 10 && 15 > 20) //si algunas de las 2 condiciones no se cumple es false


// or (||)
console.log( 5 > 10 || 15 > 20)
console.log( 5 < 10 || 15 > 20) //basta con q se una sea verdadera para q todo sea true
console.log( 5 < 10 && 15 >10 || 15 < 20) 

//not (!)
console.log (!true)
console.log(!( 5 > 10 && 15 > 20)) // se usa otro par de parentecis para referenciar a todo lo q esta dentro de los parentesis


//Operadores ternarios 

const isRain = false

isRain ?  console.log("esta lloviendo") : console.log("no esta lloviendo")

 
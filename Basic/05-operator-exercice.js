// 1. Variable para cada operacion aritmetica
let a = 10
let b = 30

let suma = a + b
let resta = a - b
let multiplicacion = a * b
let division = a / b
let potencia = a ** b
let modulo = a & b


// 2.  Variable por cada tipo de asignacion con uso  de las variables de operaciones artimeticas 

let comparacionOperadores = 40
comparacionOperadores +=a
comparacionOperadores -=b
comparacionOperadores *=a
comparacionOperadores /=b
comparacionOperadores **=b
comparacionOperadores %=a

// 3.Impresion de 5  comparaciones verdaderas con diferentes operadores de comparacion 
let num1= 20
let num2= 50

console.log(num1<num2)
console.log(num1 == 20)
console.log(num1 == "20")
console.log(num1 != num2)
console.log(num1 == 20n)


// 4.Impresion de 5  comparaciones falsas con diferentes operadores de comparacion 

let num3 = 40
let num4 = 20

console.log(num3 < num4)
console.log (num3 === num4)
console.log(num3 != 40)
console.log(num3 == null)
console.log(0 !== 0.0)

// 5. Operador logico AND

console.log (20 > 50 && 30 < 100)

// 6. Operador logico OR

console.log (40 > 20 || 20 >= 20)

// 7. Combinacion de AND y OR

console.log ( 40 > 20 && 48 > 89 || 50 > 30)

// 8. Negacion 

console.log (!( "Hola mundo" === "Hola mundo"))

// 9. Operador ternario 

const adult = true

adult ? console.log("Es mayor de edad") : console.log("Es menor de edad")

// 10. Combinación de operadores aritmeticos, de comparacion y logicos 

const numero1= 90
let numero2= 50

let mensaje=
numero1 + numero2 >= 140 || numero1 == 90 && numero2 == 50 || numero1 ? "El numero es 90": "El numero es otro"

console.log(mensaje)
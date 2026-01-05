let myName = "Betico"
let  greeting = "Un saludo de parte de " + myName + "!"

console.log(greeting)

//concatenacion (longitud)

console.log(greeting.length)


//acceso a caracteres

console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[2])

//metodos comunes 

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Betico"))
console.log(greeting.includes("Betico"))
console.log(greeting.replace("Betico" , "Beto"))

//templates literals

let mensaje= `Este es mi curso de JS,
espero les guste`

console.log(mensaje)

//Inerpolar variable

let apellido = "cruz"

console.log(`Hola peruanos, soy ${myName} ${apellido}`)


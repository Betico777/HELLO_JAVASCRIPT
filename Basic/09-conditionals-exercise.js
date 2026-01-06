// 1. Imprime por consola tu nombre si una variable toma su valor
let name1 = "Alberto"
if (name1 == "Alberto"){
    console.log(`Hola ${name1}`)
}else {
    console.log("No tienes tu nombre guardado")
}
// 2. Imprime por consola un mensaje si el usuario y contraseña coninciden con  unos establecidos

const user = "Betico"
const password = "Ironman2025*"

if (user === "Betico" && password === "Ironman2025*"){
    console.log(`Bienvenido ${user}`)
}else {
    console.log("Tu nombre de usuario o constraseña son incorrectos ")
}


// 3. Verifica si un numero es positivo, negativo, o cero e imprime un mensaje

let numerop = 0.1

if(numerop > 0){
    console.log(`${numerop}`+ " es positivo")
}else if (numerop < 0){
    console.log(`${numerop}`+ " es negativo")
}else {
    console.log("tu valor es 0")
}

// 4. Verifica si una persona  puede votar o no(mayor o igual q 18) e indica cuantos años le faltan 

let age = 17
let agePermited = 18 - age

if (age >= 18){
    console.log("Puedes votar sin problemas, eres mayor de edad")
}else{
    console.log(`No puedes votar, eres menor de edad, pero puedes votar en ${agePermited}`+ " años")
}

// 5. Usa el operador ternario para asignar el valor adulto  o menor a una variable  dependiendo de la edad

let person
const message = age >= 18 ? person = "Adulto" : person = "Menor de edad"
console.log (message)


// 6. Muestra en que estacion del año nos encontramos dependiendo el valor de una variable mes

let month = 2

if (month == 2 || month == 3 || month == 4 || month == 5 ){
    console.log("Estamos en Primavera")
}else if ( month == 6 || month == 7 || month == 8 ){
    console.log("Estamos en verano")
}else if ( month == 9 || month == 10){
    console.log("Estamos en Otoño")
}else{
    console.log("Estamos en Invierno")
}

// 7. Muestra el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior 

if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11 ){
    console.log("Este mes tiene 31 dias")
}else if (month == 3|| month == 5 || month == 8|| month == 9){
    console.log ("Este mes tiene 30 dias")
}else{
    console.log("Este mes tiene 29 o 28 dias")
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo el idioma

let language= "portugues"
let saludo 

switch(language){
    case "spanish":
        saludo = "Hola como estas"
        break
    case "english":
        saludo = "Hello, how are you?"
        break
    case "portugues" :
        saludo = "Olá como vai"
        break
    default: 
        saludo = "idioma no reconocido"        
}

console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let months = 5
let station

switch(months){
    case 0:
        station = "Estamos en invierno"
        break
    case 1:
        station = "Estamos en invierno"
        break
    case 2:
        station = "Estamos en primavera"
        break
    case 3:
        station = "Estamos en primavera"
        break
    case 4:
        station = "Estamos en primavera"
        break
    case 5:
        station = "Estamos en primavera"
        break
    case 6:
        station = "Estamos en verano"
        break
    case 7:
        station = "Estamos en verano"
        break
    case 8:
        station = "Estamos en verano"
        break
    case 9:
        station = "Estamos en otoño"
        break
    case 10:
        station = "Estamos en otoño"
        break
    case 11:
        station = "Estamos en invierno"
        break
    default:
        station = "Ingresa el mes correcto"
}

console.log(station)

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let daysMonth

switch(months){
    case 0:
        station = "Este mes tiene 31 dias"
        break
    case 1:
        station = "Este mes tiene 28 o 29 dias"
        break
    case 2:
        station = "Este mes tiene 31 dias"
        break
    case 3:
        station = "Este mes tiene 30 dias"
        break
    case 4:
        station = "Este mes tiene 31 dias"
        break
    case 5:
        station = "Este mes tiene 30 dias"
        break
    case 6:
        station = "Este mes tiene 31 dias"
        break
    case 7:
        station = "Este mes tiene 31 dias"
        break
    case 8:
        station = "Este mes tiene 30 dias"
        break
    case 9:
        station = "Este mes tiene 31 dias"
        break
    case 10:
        station = "Este mes tiene 30 dias"
        break
    case 11:
        station = "Este mes tiene 31 dias"
        break
    default:
        station = "Ingresa el mes correcto"
}

console.log(station)
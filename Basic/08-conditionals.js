// if, else if, else 

//if (si)
let age = 17

if(age == 37){
    console.log(`tienes ${age}` + " años")
}

//else (si no)

if(age == 37){
    console.log(`tienes ${age}` + " años")
}else {
    console.log("No tiene 37 años")
}

//else (si no si) este siempre va tener otra condicion como un if y se pone luego de el primer if 

if(age == 37){
    console.log(`tienes ${age}` + " años")
}else if( age < 18) {  
    console.log("Eres menor de edad")
}
else {
    console.log("No tiene 37 años")
}


//ternarios forma compacta de escribir un if simple 

const message= age  == 37 ? "tienes 37" : "No tienes 37"
console.log(message)

//switch es para revisar condiciones q se verifican contra una misma variable

let day = 3
let dayName

switch(day){
    case 0:
        dayName= "Lunes"
        break
    case 1:
        dayName= "Martes"
        break
    case 2:
        dayName= "Miercoles"
        break
    case 3:
        dayName= "Jueves"
        break
    case 4:
        dayName= "Viernes"
        break
    case 5:
        dayName= "Sabado"
        break
    case 6:
        dayName= "Domingo"
        break
    default:
        dayName= "Numero de dia incorrecto"
}

console.log (dayName)
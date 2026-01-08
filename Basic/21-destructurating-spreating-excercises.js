// 1. Usa destructuracion para extraer los dos primeros elementos de un array

let array = [9,7,3,4,5,6]

let[myValue1, myValue2] = array

console.log(myValue1)
console.log(myValue2)

// 2. Usa destructuracion en un array y asigna un valor predeterminado a una varible

let array1 = [6,7,5]

let[myValue3, myValue4, myValue5, myValue6 = 0] = array1

console.log(myValue6)

// 3. Usa destructuracion para extraer dos propiedades de un objeto 

let film = {
    movie : "Avengers",
    genre : "Action",
    yearOfSale: 2019
}

let{movie, genre} = film

console.log(movie)
console.log(genre)

// 4. Usa destructuracion para extraer 2 propiedades de un objeto y asignalas a nuevas variables con
// nombres diferentes

let car = {
    model: 1,
    yearSale: 2025,
}

let{model:model1, yearSale: yearSale1} = car

console.log(model1)
console.log(yearSale1)

// 5. Usa destructuracion para extraer 2 propiedades de un objeto anidado

let person3 = {
    name: "Betico",
    age: 37,
    alias: "Beto",
    job: {
        name : "Programador",
        exp:15,
        work : function (){
        console.log("la persona trabaja")
    }
    }
}

let{name: name4, job :{name:jobName} } = person3

console.log(name4)
console.log(jobName)

// 6. Usa propagacion para combinar dos arrays en uno nuevo

let array2 = [1,2,3,4,5]
let array3 = [6,7,8,9,10]

let array4 = [...array2, ...array3]
console.log(array4)

// 7. Usa propagacion para crear una copia de un array

let array5 = [...array2]
console.log(array5)

// 8. Usa propagacion para combinar 2 objetos en uno nuevo

let phones={
    brand : "Samsung",
    model : "A 15",
    sale: 2023
}
let laptops = {
    brand1 : "Lenovo",
    model1 : "e14",
    sale1 : 2020,
    gpu: "Asus 5000 series"
}

let technology = {...phones ,...laptops} //no pueden tener propiedades repetidas si no el valor lo va tomar la propiedad del ultimo elemento propagado

console.log(technology)

// 9. Usa propagacion para crear una copia de un objeto 

let phones2 = {...phones}
console.log(phones2)

// 10. Combina destructuracion y propagacion    

let myArray = [1,2,3,4,5]
let myArray2 = [6,7,8,9,10]

let[value1, value2,value3,value4,value5] = myArray
console.log(value1)
console.log(value2)
console.log(value3)
console.log(value4)
console.log(value5)

let myArray3 = [value1,value2,value3,value4,value5,...myArray2] 
console.log(myArray3)
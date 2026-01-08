//destructuracion, permite extraer valores de arrays o objetos y asignarlos a variables de manera concisa

let myArray = [1,2,3,4]

let person = {
    name: "Betico",
    age: 37,
    alias: "Beto"
}

let myValue = myArray[1]
console.log(myArray)

let myName = person.name
console.log(myName)

//desestructuracion 

//sintaxis  arrays 

let [myValue0 , myValue1, myValue2, myValue3] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)


//sintaxis arrays con valores  predeterminados

let [myValue4 = 0, myValue5 = 0, myValue6 = 0, myValue7 = 0] = myArray
// console.log(myValue4)
// console.log(myValue5)
// console.log(myValue6)
// console.log(myValue7)

//ignorar elementos del array 

let [myValue11, , , myValue14] = myArray

console.log(myValue11)
console.log(myValue14)


//sintaxis de object

let {name, age, alias} = person 
console.log(name)
console.log(age)
console.log(alias)

//sintaxis object con valores predeterminados 
let {name2, age2, alias2, email = "email@email.com"} = person 
console.log(name2)
console.log(age2)
console.log(alias2)
console.log(email)

//sintaxis object con nuevos  nombres de variables 

let {name: name3, age:age3, alias:alias3} = person 
console.log(name3)
console.log(age3)
console.log(alias3)

//objetos anidados 

let person3 = {
    name: "Betico",
    age: 37,
    alias: "Beto",
    walk : function (){
        console.log("la persona camina")
    },
    job: {
        name : "Programador",
        exp:15,
        work : function (){
        console.log("la persona trabaja")
    }
    }
}

let{name: name4, job :{name:jobName} }= person3
console.log(name4)
console.log(jobName)


//Propagacion (...)

let array2 = [...myArray]

console.log(array2)

let array4 = [... myArray, 5,6]

console.log(array4)



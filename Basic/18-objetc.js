//coleccion de propiedades


//sintaxis

let person = {
    name: "Betico",
    age: 37,
    alias: "Beto"
}

//acceso a propiedades


//notacion por punto 

console.log(person.name)

//notacion corchetes

console.log(person["name"])

//modificacion de propiedades

person.name = "Alberto"
console.log(person.name)


person.age = "37"
console.log(person.age)

//eliminacion de propiedades

delete person.age 
console.log(person)

//nueva propiedad

person.email = "cruz@gmail.com"
person["age"] = 37

console.log(person)

//metodos o funciones

let person2 = {
    name: "Betico",
    age: 37,
    alias: "Beto",
    walk : function (){
        console.log("la persona camina ")
    }
}

person2.walk()

//anidar objetos 

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

console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

//igualdad de object

 let person4 = {
    name: "Alberto",    
    age: 37,
    alias: "Beto"
}

console.log(person == person4)
console.log(person === person4)
console.log(person.name == person4.name)

//iteracion 

for(let key in person4){
    console.log(key + ": " + person4[key])
}


let person5 = {
    name: "Betico",
    age: 37,
    alias: "Beto",
    walk : function (){
        console.log(`"la persona camina"`)
    },
    job: {
        name : "Programador",
        exp:15,
        work : function (){
        console.log(`La persona de ${this.exp} años de experencia trabaja`)
    }
    }
}   

person5.job.work()


// funciones como objetis no es una buena practica deberia ser una clase 

function Person(name, age){
    this.name = name
    this.age = age 
}

let person6 = new Person("Beto", 12)
console.log(person6)

console.log(typeof person6)
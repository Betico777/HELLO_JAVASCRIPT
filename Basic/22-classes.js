//Clases


class Person {
    constructor(name,age,alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

//Sintaxis 

let person = new Person("Beto", 17, "Betico")

console.log(person)

//valores por defecto

class DefaultPerson {
    constructor(name = "Beto",age = 0 ,alias = "Sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new DefaultPerson("Betolover", 18)

console.log(person3)

//acceso a propiedades

console.log(person.alias)
console.log(person["alias"])

person3.alias = "Betico1"

console.log(person3.alias)

//funciones 

class Person2 {

    constructor(name ,age ,alias ){
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk(){
        console.log("La persona camina")
    }
}

let person4 = new Person2 ("Beto", 24, "Goku")
person4.walk()

//Propiedades privadas 

class PrivatePerson {

    #bank //para poner las propiedades privadas para q nadie mas entre a esa

    constructor(name ,age ,alias, bank ){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay(){
        this.bank
    }
}

let person5 = new PrivatePerson("Alberto",23,"Betico","IBAN212121212")

// getter y setter

class GetPerson {

    #name
    #age
    #alias
    
    constructor(name ,age ,alias, bank ){
        this.#name = name
        this.#age = age
        this.#alias = alias
    }

    get name (){  //obtener el valor para ver pero no pued editarlo
        return this.#name
    }
}

let person6 = new GetPerson ("Betico", 18, "Messi")

console.log(person6.name)

//set 

class SetPerson {

    #name
    #age
    #alias
    #bank
    
    constructor(name ,age ,alias, bank ){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    set bank (newBank){  
         this.#name = newBank
    }
}

let person7 = new SetPerson ("Betico", 18, "Messi", "IBAN1246514265142")

console.log(person7.name)

person7.bank = "new IBAN1878271827187"


//Herencia

class Animal {

    constructor(name){
        this.name = name
    }

    sound(){
        console.log("Emite un sonido")
    }
}

class Fish extends Animal {

    constructor(name, size){
        super(name)
        this.size = size
    }

    swim(){
        console.log("El pez nada")
    }
}

let myFish = new Fish ("Nemo", 23)

myFish.sound()
myFish.swim()

class Dog extends Animal {

    sound(){
        console.log("Guau")
    }

    run(){
        console.log("El perro corre")
    }
}

let myDog = new Dog ("Tobby")
myDog.run()
myDog.sound()

//Metodos estaticos 

class MathOperations {

    static sum(a,b){
        return a + b
    }
}

console.log(MathOperations.sum(1,3)) // se debe llamar desde la clase no en el objeto

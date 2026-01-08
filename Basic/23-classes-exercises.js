// 1. Crea una clase que reciba 2 propiedas

class Cars {

    constructor(model,price){
        this.model = model
        this.price = price
    }
    start(){
        console.log("Con gasolina")
    }
}

let car1 = new Cars("G63", 200.000)

console.log(car1)

// 2. Añade un metodo a la clase que utilice las propiedades  //metodo es una funcion dentro de un objeto

class Tvs {

    constructor(model,price,width,height ){
        this.model = model
        this.price = price
        this.width = width
        this.height = height
    }
    mirror(){
        if ( this.width >= 3840 && this.height >= 2160 ){
            console.log("Tv 8k")
        }else {
            console.log("No es 8k")
        }
    }
}

let tv = new Tvs("Samsung", 1800000, 3842 , 2161)

// 3. Muestra todos los valores de las propiedades e invoca la funcion

console.log(tv)
tv.mirror()


// 4. Añade un metodo estatico a la primera clase 

class Cars1 {

    constructor(model,price){
        this.model = model
        this.price = price
    }
    static sum (a,b){
        return a * b
    }
}



// 5. Haz uso del metodo estatico 

let car2 = new Cars1 ("SUV", 1230303)
console.log(Cars1.sum(6,8))

// 6. Crea una clase que haga uso de herencia

class Tesla extends Cars{

    type (){
        console.log("Es electrico")
    }
}

let modelS = new Tesla("SUV", 20000)
modelS.type()

// 7. Crea una clase que haga uso de getters y setters

class Client {


    constructor(name,phone,documentNumber,cash){
        this.name = name
        this.phone = phone
        this.documentNumber = documentNumber
        this.cash = cash
    }
    get documentNumber(){
        return this.documentNumber
    }
    set cash(newCash){
        this.cash = newCash
    }
}


// 8. Modifica la clase con getters y setters para que se use propiedades privadas

class Client1 {
    #documentNumber
    #cash

    constructor(name,phone,documentNumber,cash){
        this.name = name
        this.phone = phone
        this.#documentNumber = documentNumber
        this.#cash = cash
    }
    get documentNumber(){
        return this.#documentNumber
    }
    set cash(newCash){
        this.#cash = newCash
    }
}



// 9. Utiliza los get y set y muestra sus valores

let client1 = new Client1("Betico", 3232511423, 1033715882, 78787838473)

console.log(client1.documentNumber)

client1.cash = "1201920192"
console.log(client1.cash)

// 10. Sobreescribe un metodo de una clase que utilice herencia

class Teslas extends Cars{

    start(){
        console.log("Con electricidad")
    }
    type (){
        console.log("Es electrico")
    }
}

let cybertruck = new Teslas("SUV", 12000000)
cybertruck.start()
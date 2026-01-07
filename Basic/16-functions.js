//Es un bloque realizado para realizar una tarea especifica 


//simple

function myFunc(){
    console.log("Hola, mi function")
}
for(let i = 0 ; i < 2 ; i++){
    myFunc()
}


//Con parametros 

function myFuncWithParams(name){
    console.log(`Hola, ${name}`)
}

myFuncWithParams("Betico")

//Funciones anonimas 

const myFunct2 = function (name){
    console.log(`Hola, ${name}`)
}

myFunct2("Betobe")

//Arrow functions 

const myArrow =(name) => {
    console.log(`Hola, ${name}`)
}

myArrow("Messi")

const myFunct3 = (name1) => console.log(`Hola, ${name1}`)

myFunct3("Ronaldo") 


//Parametros 

function sum (a, b){
    console.log(a + b)
}

function defaultSum (a = 0, b = 0){
    console.log(a + b)
}

//Por defecto

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 1)

//Retorno de valores

function mult (a, b){
    return  a * b
}

console.log(mult(5,10))

let result = mult(4,10)
console.log(result)

//Funciones animadas

function extern (){
    console.log("Funcion externa")
    function intern (){
        console.log("Funcion interna")
    }
    intern()
}

extern()
// intern() fuera del scope es un error se debe llamar adentro una vez nosotros llames

//Funcion de orden superior

function applyFunction(func, param){
    func(param)
}

applyFunction(myFunct2,"Funcion de orden superior")


//ForEach

myArray = [1,2,3,4,5,6]

myArray.forEach((value) => console.log(value));
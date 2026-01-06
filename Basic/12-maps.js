// Es una coleccion de elementos 

//declaracion 

let myMap = new Map()
console.log(myMap)


//Inicializacion

myMap = new Map ([
    ["name",  "Betico"], // el primer elemento es la clave luego de la coma se pone el valor de esa clave
    ["email", "cruz@gmail.com"],
    ["number", 50]
])

console.log(myMap)


//metodos y propiedades

//set permite agregar una nueva clave mas su valor , tambien permite modificar el valor de un clave 
myMap.set("alias", "Beto")
myMap.set("email", "cruzcorreaalberto15@gmail.com")
console.log(myMap)

//get  // trae el valor de la clave que queramos buscar 

console.log(myMap.get("email"))


// has //nos muestra en boolean si se encuentra esa clave

console.log(myMap.has("email"))

// delete

myMap.delete("email")
console.log(myMap)

// keys nos retorna el listado de las claves

console.log(myMap.keys())

// values nos retorna el valor de las claves

console.log(myMap.values())

// entries no itera los pares(clave, valor)

console.log(myMap.entries())

//size nos muestra el tamaño q tiene el mapa 

console.log(myMap.size)

//clear
myMap.clear()
console.log(myMap)
// 1. Crea un objeto con 3 propiedades

let myObjetc = {
    movieName: "Avengers Endgame",
    premiere: 2020,
    director : "Robert Downey Jr"
}

// 2. Accede y muestra su valor 

console.log(myObjetc.movieName)
console.log(myObjetc.premiere)
console.log(myObjetc.director)

// 3. Agrega una nueva propiedad

myObjetc.actors = "Cris Evans"
console.log(myObjetc.actors)

// 4. Elimina una de las 3 primeras propiedades

delete myObjetc.director
console.log(myObjetc)

// 5. Agrega una funcion e invocala

myObjetc.view = function (){
    console.log("estas viendo la pelicula")
}

myObjetc.view()

// 6. Itera las propiedades del objetos

for(let value in myObjetc){
    console.log(value + ": " + myObjetc[value])
}

console.log(myObjetc.value)

// 7. Crea un objeto anidado

let objectAnided ={
    song : "Save your tears",
    premiere : 2020,
    album : "After Hours",
    artist : {
        name: "The Weeknd",
        age: 35,
        nacionality: "Canadiense"
    }
}

console.log(objectAnided)

// 8. Accede y muestra su valor de las propiedades anidadas

console.log(objectAnided.artist)

// 9. Comprueba si los dos objetos creados son iguales

console.log(objectAnided == myObjetc)

// 10. Comprueba si dos propiedades diferentes son iguales 

console.log(objectAnided.album == myObjetc.movieName)
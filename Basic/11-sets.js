// declaracion 

let mySet = new Set()

// inicializacion 

mySet = new Set(["Betico", "Cruz", "Correa", 31]) //ese no se organiza como por indices

console.log(mySet)

//metodos comunes 

// add  y delete

mySet.add("https://betico.com")
console.log(mySet)

mySet.delete("Correa") //si o si toca poner el valor a borrar 
console.log(mySet.delete(31)) //podemos ver si el elemento se borra correctamente por boolean


//has  es para verifificar si ese elemento esta o no 
console.log(mySet.has("Correa"))
console.log(mySet.has("Betico"))

//size es para verificar cuantos elementos tiene el set 

console.log(mySet.size)

// Convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set 

mySet = new Set(myArray)
console.log(mySet)

//no admite duplicados tiene q ser exactamente igual 

mySet.add("Betico")
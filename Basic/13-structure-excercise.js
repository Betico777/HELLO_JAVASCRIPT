// 1. Crea un array que almacene 5 animales

let array1 = ["Perro", "Gato", "Leon", "Pajaro", "Pez"]

// 2. Añade dos más, Uno al inicio y otro al final

array1.unshift("Jirafa")
array1.push("Camello")
console.log(array1)

// 3. Elimina el que se encuentra en tercera posicion

array1.splice(3, 1)
console.log(array1)

// 4. Crea un set que almacene 5 libros

let set1= new Set(["100 años de soledad", "Divina comedia", "Los secretos de yt", "La biblia", "Un verano sin ti"])
console.log(set1)

// 5. Añade dos más, Uno de ellos repetido

set1.add("El tunel", "100 años de soledad")
console.log(set1)

// 6. Elimina un concreto a tu eleccion

set1.delete("La biblia")
console.log(set1)

// 7. Crea un mapa que asocie el numero del mes a su nombre

let map1 = new Map([
    [1, "enero"],
    [2, "febrero"],
    [3, "marzo"],
    [4, "abril"],
    [5, "mayo"],
    [6, "junio"],
    [7, "julio"],
    [8, "agosto"],
    [9, "septiembre"],
    [10, "octubre"],
    [11, "noviembre"],
    [12, "diciembre"],
])

console.log(map1)

// 8. Comprueba si el mes numero 5 existe en el map e imprime su valor

console.log(map1.has(5))

// 9. Añade  al mapa una clave con un array  que almacene los meses de verano

let array2= ["Junio","Julio", "Agosto", "Septiembre"]
map1.set("meses en verano", array2)  
console.log(map1)

// 10. Crea un array, transformalo a un set  y almacenalo a un map 

let arrayTrans = [1,2,3,4,5]

console.log(arrayTrans)

let setTrans = new Set(arrayTrans)

console.log(setTrans)

let mapTrans = new Map([
    
    ["numeros", arrayTrans]
])

console.log(mapTrans)
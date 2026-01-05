// 1. Concatena 2 cadenas de texto
let movie = "Avengers Endgame"
let summary = "Los avengers regresan este enero para salvar el mundo "
let film = "Hola la pelicula que se va estrenar en enero es " + movie  + " y nos cuenta como " + summary
console.log(film)

// 2. Muestra la longitud  de una cadena  de texto 

console.log(movie.length)

// 3. Muestra el primer y ultimo caracter de un string

console.log(movie [0])
console.log(movie [15])

// 4. Convierte a mayusculas y minusculas un string

console.log(movie.toLowerCase())
console.log(summary.toUpperCase())
console.log(film.toUpperCase())

// 5. Crea una cadena de texto en varias lineas

const drink = `Las bebidas son liquidos que podemos
consumir para darnos hidratacion y de mas`

console.log(drink)

// 6. Interpola el valor de una variable en un string

console.log(`Hola mundo del cine el dia de hoy les vamos a hablar sobre ${movie}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones  

console.log(movie.replace (" ", "-"))
console.log(summary.replaceAll (" " , "-"))

// 8. Comprueba si una cadena de texto contiene una palabra correcta

console.log(movie.includes("Avengers"))

// 9 .Comprueba si dos strings son iguales 

console.log(movie == "Avengers Endgame")

// 10. Comprueba si dos string tienen la misma longitud

console.log(movie.length == summary.length)
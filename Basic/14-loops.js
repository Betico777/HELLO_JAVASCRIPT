//Bucles


//for 

for (let i = 0; i < 5; i++){
    console.log(`Hola mundo ${i}`)
    
}

const numbers = [1,2,3,4,5]

for (let i = 0 ; i < numbers.length; i++){
    console.log(`Elemento: ${numbers[i]}`)
}

//while es para revisar una variable definida con anterioridad
let i = 0

while ( i < 5){
    console.log(`Hola mundo ${i}`)
    i++
}
// //bucle infinito
// while (true){
// }


//do while
i = 6 
do {
    console.log(`Hola mundo ${i}`)
    i++
}while(i < 5)

//for of

myArray = [1,2,3,4]
mySet = new Set (["Betico", "Cruz", "Segundo", 18, true ,"cruzcorreaalberto15@gmail.com"])
myMap = new Map ([
    ["name", "Betinho"],
    ["email", "cruzcorreaalbeto15@gmail.com"],
    ["age", 17]
])

myString = "Hola gente de yutub"

for (let valor of myArray){
    console.log(valor)
}
for (let valor of mySet){
    console.log(valor)
}
for (let valor of myMap){
    console.log(valor)
}
for (let valor of myString){
    console.log(valor)
}

//good practice

//break y continue

for (let i = 0 ; i < 10; i++){
    if(i == 5){
        continue
    }else if (i == 7){
        break
    }
    console.log(`Hola ${i}`)
        
}
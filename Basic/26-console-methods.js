//Console

//log

console.log("Hola mundo");

//errores

console.error("Esto es un msj de error");
// console.error("Esto es un msj de error", new Error("Conexion failed"));

//warn

console.warn("Esto es advertencia");

//info

console.info("Esto es un mensaje de info adicional");

//table

let data = [
  ["Betico", 37],
  ["Alberto", 18],
];

console.table(data);

//group

console.group("Usuario");
console.log("name: betico");
console.groupEnd();

//time

console.time("Tiempo ejecucion");

for (let i = 0; i < 1000; i++) {}

console.timeEnd("Tiempo ejecucion");

//assert

let age = 17;

console.assert(age >= 18, "el usuario debe ser mayor");

//count

console.count("Click");

console.countReset("Click");

//trace

function funcA() {
  funcB();
}
function funcB() {
  console.trace("Seguimieto");
}

funcA();

//clear
console.clear();

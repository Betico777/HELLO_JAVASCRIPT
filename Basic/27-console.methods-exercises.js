// 1. Crea una funcion que utilice error correctamente

function myError(a, b) {
  if (a == 0 || b == 0) {
    console.error("Esto es un error, no se puede permite el valor 0");
  }
  return a - b;
}
myError(0, 2);

// 2. Crea una funcion que utilice warn correctamente

function myWarn(a, b) {
  if (a < b) {
    console.warn("El valor de puede dar en negativo");
  }
  return a - b;
}

console.log(myWarn(4, 10));

// 3. Crea una funcion que utilice info correctamente

function myInfo(a, b) {
  if (a == 0 || b == 0) {
    console.info("Estas agregando un numero con valor cero");
  }
  return a + b;
}

myInfo(1, 2);

// 4. Utiliza table

let myTable = [["Betico", 18], [("Susana", 30)]];

console.table(myTable);

// 5. Utiliza group

console.group("Usuario");
console.log("name: Betico");
console.log("age: ", 17);
console.log("alias:", "Betolover");
console.groupEnd();

// 6. Utiliza time

console.time("Tiempo de ejecucion");
myError();
console.timeEnd("Tiempo de ejecucion");

// 7. Valida con assert si un numero es positivo

let numberPositive = -1;

console.assert(numberPositive > 0, "Este numero es negativo");

// 8. Utiliza count

console.count("clic");

function myCount() {}

console.count("clic");

// 9. Utiliza trace

function funcA() {
  funcB();
}
function funcB() {
  console.trace("Seguimieto");
}

funcA();

// 10. Utiliza clear

console.clear();

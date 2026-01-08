//excepcion

// let myObject

//captura de errores

//try cash

// try{
//     console.log(myObject.email) //codigo q intenta ejecutar
//     console.log("Todo bien todo correcto")
// }catch (error){
//     console.log("Se ha producido un error", error.message) // bloque de error
// }

//finally
// try{
//     console.log(myObject)
//     console.log("Todo bien todo correcto")
// }catch (error){
//     console.log("Se ha producido un error", error.message)
// }finally{
//     console.log("Esto se ejecuta siempre")
// }

//lanzar errores

//throw

// throw new Error ("Ahi un error :(");

function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Esto solo acepta numeros");
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Solo se aceptan numeros enteros");
  }
  if (a == 0 || b == 0) {
    throw new MyCustomError("Se esta intentando sumar con cero", a, b);
  }
  return a + b;
}

// try{
//     console.log(sum(5,10))
//     console.log(sum(5.5,10))
//     console.log(sum("5",10))
// }catch(error){
//     console.log("Se a producido un error :", error.message)
// }

//capturar varios errores tipos de errores

try {
  // console.log(sum(5.5,10))
  console.log(sum("5", 10));
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Se a producido un error de tipo:", error.message);
  } else if (error instanceof Error) {
    console.log("Se a producido un error :", error.message);
  }
}

//Crea excepciones

class MyCustomError extends Error {
  constructor(message, a, b) {
    super(message);
    this.a = a;
    this.b = b;
  }
  printNumbers() {
    console.log(this.a, " + ", this.b);
  }
}

try {
  console.log(sum(0, 10));
} catch (error) {
  console.log("Se a producido un error de perzonalizado:", error.message);
}

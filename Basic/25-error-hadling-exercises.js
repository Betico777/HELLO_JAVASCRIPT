// 1. Captura una  excepcion utilizando try-catch

let myError;

try {
  console.log(myError.name);
} catch (error) {
  console.log("Se a producido un error", error.message);
}

// 2. Captura una expecion utilizando try-catch y finally

let myFault;
try {
  console.log(myFault.email);
} catch (error) {
  console.log("Se a producido un error :(", error.message);
} finally {
  console.log("Esto siempre se muestra jijijaja");
}

// 3. Lanza una excepcion generica

function restNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Solo se aceptan numeros");
  }
  if (a < 0 || b < 0) {
    throw new Error("Ingrese un numero positivo");
  }
  if (a == 0 || b == 0) {
    throw new myErrorCustom("Se intento dividir en 0 sus valor son: ", a, b);
  }
  return a - b;
}

console.log(restNumbers(1, 3));

// 4. Crea una excepcion personalizada

class myErrorCustom extends Error {
  constructor(message, a, b) {
    super(message);
    this.a = a;
    this.b = b;
  }
  printValues() {
    console.log(this.a, "", this.b);
  }
}

// 5. Lanza un excepcion personalizada

try {
  console.log(restNumbers(1, 2));
} catch (error) {
  console.log("Se a producido un error personalizado", error.message);
}

// 6. Lanza varias excepciones segun la logica definida

function restNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Solo se aceptan numeros");
  }
  if (a < 0 || b < 0) {
    throw new Error("Ingrese un numero positivo");
  }
  if (a == 0 || b == 0) {
    throw new myErrorCustom("Se intento dividir en 0 sus valor son: ", a, b);
  }
  return a - b;
}

// 7. Captura varias excepciones en un mismo try-catch

try {
  console.log(restNumbers(0, 2));
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Se ha producido un error de tipo", error.message);
  } else if (error instanceof Error) {
    console.log("Se a producido un error", error.message);
  }
}

// 8. Crea un blucle que intente transformar a float cada valor y capture y muestre los errores

let myArray = ["125", "abc", "45", "314", "hola"];

for (let i = 0; i < myArray.length; i++) {
  console.log("Intentando convertir:", myArray[i]);
  try {
    let arrayFinal = myArray[i].replace(",", ".");
    let number = parseFloat(arrayFinal);

    if (isNaN(number)) {
      throw new Error("No se puede convertir a número");
    }
    console.log("Convertido a número:", number.toFixed(1));
  } catch (error) {
    console.log("Error al convertir el valor:", myArray[i]);
  }
}

// 9. Crea una funcion que verifique si un objeto tiene una propiedad especifica y lance una excepcion personal

function verificarPropiedad(objeto, propiedad) {
  if (!objeto.hasOwnProperty(propiedad)) {
    throw new Error(`El objeto no contiene la propiedad: ${propiedad}`);
  }

  console.log(`La propiedad "${propiedad}" existe en el objeto.`);
}

try {
  const persona = { nombre: "Alberto", edad: 25 };
  verificarPropiedad(persona, "nombre");
  verificarPropiedad(persona, "direccion");
} catch (error) {
  console.error("Excepción capturada:", error.message);
}

// 10. Crea una funcion que realice reintentos en caso de error un maximo de 10

function ejecutarConReintentos(accion, maxIntentos = 10) {
  let intentos = 0;

  while (intentos < maxIntentos) {
    try {
      intentos++;
      console.log(`Intento #${intentos}`);

      accion();
      console.log("Acción completada con éxito.");
      break;
    } catch (error) {
      console.log(`Error en intento #${intentos}: ${error.message}`);
      if (intentos === maxIntentos) {
        console.log("Se alcanzó el máximo de intentos. Abortando.");
      }
    }
  }
}

ejecutarConReintentos(() => {
  if (Math.random() < 0.7) {
    throw new Error("Fallo aleatorio");
  }
  console.log("¡Éxito!");
});

//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $botonSiguiente = document.querySelector("#siguiente");
const $botonMostrarResultados = document.querySelector("#mostrar-resultados");

$botonSiguiente.onclick = function () {
  const cantidadIngresada = Number(
    document.querySelector("#ingreso-cantidad-numeros").value
  );

  ocultarIngresoPrincipal();
  mostrarInputsNumeros(cantidadIngresada);

  return false;
};

$botonMostrarResultados.onclick = function () {
  guardarNumerosIngresados();
  mostrarResultados();
};

function ocultarIngresoPrincipal() {
  document.querySelector("#ingreso-principal").className = "oculto";
}

function mostrarInputsNumeros(cantidadIngresada) {
  const $listaNumeros = document.querySelector("#lista-numeros");

  for (let i = 0; i < cantidadIngresada; i++) {
    mostrarBotonMostrarResultados();

    const $numeroAIngresar = document.createElement("li");
    const $input = document.createElement("input");

    $input.type = "number";
    $input.className = "numeros-ingresados";

    $numeroAIngresar.appendChild($input);

    $listaNumeros.appendChild($numeroAIngresar);
  }
}

function guardarNumerosIngresados() {
  const numerosIngresados = document.querySelectorAll(".numeros-ingresados");
  const arrayNumerosIngresados = [];
  for (let i = 0; i < numerosIngresados.length; i++) {
    arrayNumerosIngresados.push(Number(numerosIngresados[i].value));
  }

  calcular(arrayNumerosIngresados);
}

function mostrarBotonMostrarResultados() {
  $botonMostrarResultados.className = "";
}

function mostrarResultados() {
  document.querySelector("#resultados").className = "";
}

function calcular(arreglo) {
  calcularMasChico(arreglo);
  calcularMasGrande(arreglo);
  calcularPromedio(arreglo);
  calcularMasRepetido(arreglo);
}

function calcularMasChico(arreglo) {
  let masChico = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] < masChico) {
      masChico = arreglo[i];
    }
  }
  return masChico;
}

function calcularMasGrande(arreglo) {
  let masGrande = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > masGrande) {
      masGrande = arreglo[i];
    }
  }
  return masGrande;
}

function calcularPromedio (arreglo) {
  let acum = 0;
  let promedio;

  for (let i = 0; i < arreglo.length; i++) {
    acum += arreglo[i];
  }

  promedio = (acum / arreglo.length);
  return promedio;

}

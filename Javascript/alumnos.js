const numTarjetas = parseInt(prompt("Ingrese el número de tarjetas de datos (alumnos):"));

// Variables para almacenar los resultados
let promedioMatematicas = 0;
let promedioFisica = 0;
let promedioProgramacion = 0;
let aprobadosMatematicas = 0;
let aprobadosFisica = 0;
let aprobadosProgramacion = 0;
let aplazadosMatematicas = 0;
let aplazadosFisica = 0;
let aplazadosProgramacion = 0;
let aprobaronTodas = 0;
let aprobaronUnaSola = 0;
let aprobaronDos = 0;
let notaMaximaMatematicas = 0;
let notaMaximaFisica = 0;
let notaMaximaProgramacion = 0;

// Leer las tarjetas de datos de los alumnos
for (let i = 1; i <= numTarjetas; i++) {
  console.log(`Tarjeta de datos del alumno ${i}:`);
  
  // Leer los datos de la tarjeta
  const cedula = prompt("Ingrese el número de cédula de identidad del alumno:");
  const nombre = prompt("Ingrese el nombre del alumno:");
  const notaMatematicas = parseFloat(prompt("Ingrese la nota de matemáticas:"));
  const notaFisica = parseFloat(prompt("Ingrese la nota de física:"));
  const notaProgramacion = parseFloat(prompt("Ingrese la nota de programación:"));

  // Calcular el promedio de cada materia
  promedioMatematicas += notaMatematicas;
  promedioFisica += notaFisica;
  promedioProgramacion += notaProgramacion;

  // Calcular el número de alumnos aprobados y aplazados en cada materia
  if (notaMatematicas >= 5) {
    aprobadosMatematicas++;
  } else {
    aplazadosMatematicas++;
  }

  if (notaFisica >= 5) {
    aprobadosFisica++;
  } else {
    aplazadosFisica++;
  }

  if (notaProgramacion >= 5) {
    aprobadosProgramacion++;
  } else {
    aplazadosProgramacion++;
  }

  // Calcular el número de alumnos que aprobaron todas las materias
  if (notaMatematicas >= 5 && notaFisica >= 5 && notaProgramacion >= 5) {
    aprobaronTodas++;
  }

  // Calcular el número de alumnos que aprobaron una sola materia
  if ((notaMatematicas >= 5 && notaFisica < 5 && notaProgramacion < 5) ||
      (notaMatematicas < 5 && notaFisica >= 5 && notaProgramacion < 5) ||
      (notaMatematicas < 5 && notaFisica < 5 && notaProgramacion >= 5)) {
    aprobaronUnaSola++;
  }

  // Calcular el número de alumnos que aprobaron dos materias
  if ((notaMatematicas >= 5 && notaFisica >= 5 && notaProgramacion < 5) ||
      (notaMatematicas >= 5 && notaFisica < 5 && notaProgramacion >= 5) ||
      (notaMatematicas < 5 && notaFisica >= 5 && notaProgramacion >= 5)) {
    aprobaronDos++;
  }

  // Calcular la nota máxima en cada materia
  if (notaMatematicas > notaMaximaMatematicas) {
    notaMaximaMatematicas = notaMatematicas;
  }

  if (notaFisica > notaMaximaFisica) {
    notaMaximaFisica = notaFisica;
  }

  if (notaProgramacion > notaMaximaProgramacion) {
    notaMaximaProgramacion = notaProgramacion;
  }
}

// Calcular el promedio de cada materia
promedioMatematicas /= numTarjetas;
promedioFisica /= numTarjetas;
promedioProgramacion /= numTarjetas;

// Imprimir los resultados
console.log(`Promedio de Matemáticas: ${promedioMatematicas.toFixed(2)}`);
console.log(`Promedio de Física: ${promedioFisica.toFixed(2)}`);
console.log(`Promedio de Programación: ${promedioProgramacion.toFixed(2)}`);
console.log(`Alumnos aprobados en Matemáticas: ${aprobadosMatematicas}`);
console.log(`Alumnos aprobados en Física: ${aprobadosFisica}`);
console.log(`Alumnos aprobados en Programación: ${aprobadosProgramacion}`);
console.log(`Alumnos aplazados en Matemáticas: ${aplazadosMatematicas}`);
console.log(`Alumnos aplazados en Física: ${aplazadosFisica}`);
console.log(`Alumnos aplazados en Programación: ${aplazadosProgramacion}`);
console.log(`Alumnos que aprobaron todas las materias: ${aprobaronTodas}`);
console.log(`Alumnos que aprobaron una sola materia: ${aprobaronUnaSola}`);
console.log(`Alumnos que aprobaron dos materias: ${aprobaronDos}`);
console.log(`Nota máxima en Matemáticas: ${notaMaximaMatematicas}`);
console.log(`Nota máxima en Física: ${notaMaximaFisica}`);
console.log(`Nota máxima en Programación: ${notaMaximaProgramacion}`);

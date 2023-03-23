// Pedimos los datos del empleado
const cedula = parseInt(prompt("Ingrese la cedula: "));
let nombre = prompt("Ingrese nombre: ");
let apellido = prompt("Ingrese apellido: ");
const horasDiurnas = parseInt(prompt("Ingrese la cantidad de horas diurnas trabajadas: "));

const horasVespertinas = parseInt(prompt("Ingrese la cantidad de horas vespertinas trabajadas: "));
const horasNocturnas = parseInt(prompt("Ingrese la cantidad de horas nocturnas trabajadas: "));

// Definimos el costo por hora para cada turno
const costoHoraDiurna = 675;
const costoHoraVespertina = 700;
const costoHoraNocturna = 956.23;

// Calculamos el salario bruto
const salarioBruto = (horasDiurnas * costoHoraDiurna) + (horasVespertinas * costoHoraVespertina) + (horasNocturnas * costoHoraNocturna);

// Calculamos los descuentos
let descuentoAhorroHabitacional = 0;
let descuentoSeguroSocial = 0;

if (salarioBruto < 85000) {
  descuentoAhorroHabitacional = salarioBruto * 0.0015;
  descuentoSeguroSocial = salarioBruto * 0.002;
} else if (salarioBruto > 150000) {
  descuentoAhorroHabitacional = salarioBruto * 0.003;
  descuentoSeguroSocial = salarioBruto * 0.0025;
}

// Calculamos el salario neto y quincenal
const salarioNeto = salarioBruto - descuentoAhorroHabitacional - descuentoSeguroSocial;
const salarioQuincenal = salarioNeto / 2;

// Imprimimos los resultados
document.write("Calculadora de sueldo quincenal<br>")
document.write("<br> Cedula: " ,cedula , "<br>")
document.write("Nombre: ", nombre , "<br>")
document.write("Apellido: ", apellido , "<br>")

document.write(`El salario bruto es: $${salarioBruto.toFixed(2)}`);
document.write(`<br>El descuento de ahorro habitacional es: $${descuentoAhorroHabitacional.toFixed(2)}`);
document.write(`<br>El descuento de seguro social es: $${descuentoSeguroSocial.toFixed(2)}`);
document.write(`<br>El salario neto es: $${salarioNeto.toFixed(2)}`);
document.write(`<br>El salario quincenal es: $${salarioQuincenal.toFixed(2)}`);


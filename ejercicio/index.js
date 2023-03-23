
function calcularSueldoQuincenal() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var cedula = document.getElementById("cedula").value;
  var salario = parseFloat(document.getElementById("salario").value);
  // Calcular el sueldo quincenal sin deducciones
  var sueldoQuincenal = salario / 2;

  // Calcular los descuentos correspondientes
  var ahorroHabitacional = 0;
  var seguroSocial = 0;
  if (salario < 85000) {
      ahorroHabitacional = salario * 0.001;
      seguroSocial = salario * 0.0015;
  } else if (salario < 150000) {
      ahorroHabitacional = salario * 0.0015;
      seguroSocial = salario * 0.002;
  } else {
      ahorroHabitacional = salario * 0.003;
      seguroSocial = salario * 0.0025;
  }

  // Calcular el sueldo quincenal con deducciones
  var sueldoQuincenalConDeducciones = sueldoQuincenal - ahorroHabitacional - seguroSocial;


  // Hacer referencia a los elementos HTML y mostrar los resultados
  document.getElementById("nombreCompleto").innerHTML = nombre + " " + apellido;
  document.getElementById("cedulaMostrada").innerHTML = cedula;
  document.getElementById("sueldoQuincenalCalculado").innerHTML = sueldoQuincenal.toFixed(2);
  document.getElementById("ahorroHabitacionalCalculado").innerHTML = ahorroHabitacional.toFixed(2);
  document.getElementById("seguroSocialCalculado").innerHTML = seguroSocial.toFixed(2);
  document.getElementById("sueldoQuincenalConDeduccionesCalculado").innerHTML = sueldoQuincenalConDeducciones.toFixed(2);
  }

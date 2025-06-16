var edadAna,edadMaria,diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;

edadAna = 34;
edadMaria = 28;
yearActual = 2025;
diferenciaEdad= edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;

yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log("año en que nacio Ana:" +yearAna); 
console.log("año en que nacio Maria:" +yearMaria); //+ para concatenar la variable con el texto
console.log(yearActual *5);
console.log (yearActual /2);
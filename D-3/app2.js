var nombre="kat";
var edad= 12;

if (edad<12){
    console.log(nombre+" es un niño");
}else if (edad>11 && edad<18){
    console.log(nombre+" es un adolecente");
}else if (edad>17 && edad<60){
    console.log(nombre+ " es un adulto");
}else if(edad>60 && edad <150){
    console.log(nombre+" es un anciano");
}else {
    console.log("Error, no creo que exista una persona de esa edad");
} 
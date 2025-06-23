//for
//1.-
for (var x=1; x<=10; x++){
    console.log("El contador va en "+x)
}

//2.-
for (var x=10; x>=1; x--){
    console.log("El contador va en "+x)
}

//3.-
for (var x=1; x<=20; x++){
    if (x%2 ===0) //--------------------> x tine que serr divisible por dos y el resto tiene que ser 0
        console.log(x)
}

//4
let suma = 0;

for (let x = 1; x <= 5; x++) {
    suma += x;
}
console.log("La suma es: " + suma);
function sumar(numA,numB) {
    return numA + numB;
}




let numA = 30;
let numB = 20;
let numC = 77;


let res = sumar(numA,numB);
let res1 = sumar(numA,numC);
let res2 = sumar(numB,numC);
let res3 = sumar(numA,numB,numC);

console.log(res);
console.log(res1);
console.log(res2);
console.log(res3);

console.log("El resultado de la suma de los dos numeros numA y numB es :"),res;
console.log("El resultado de la suma de los tras numeros numA y numC es :"),res1;
console.log("El resultado de la suma de los tras numeros numB y numC es :"),res2;
console.log("El resultado de la suma de los tras numeros numA y numB y numC es :"),res3;



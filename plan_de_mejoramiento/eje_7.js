

let p = Number(prompt("cuantas personas van a sacar el imc"))
let array=[]

for(let i=1;i<=p;i++){
let k = Number(prompt("cuantos kilogramos pesa"))
let e = Number(prompt("cual es su estatura metros cuadrados"))

var imc = k/e;
array.push(imc)
console.log("\nsu imc es igual a"+array)
}

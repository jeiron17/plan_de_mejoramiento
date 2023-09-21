

var a = Number(9999)
let n = Number(prompt("digite un numero"))


for(let i=10;i<=n;i++){
    var c = n%2;
    
}

if(n<=100 && c==0){
    console.log(n,"el regalo corresponde a un niño")
}

if(n<=100 && !c==0){
    console.log(n+"el regalo corresponde a una niña")
}

if(n>=100 && c==0){
    console.log(n+"el regalo es para un hombre")
}

if(n>=100 && !c==0){
    console.log(n+"el regalo es para una mujer")
}
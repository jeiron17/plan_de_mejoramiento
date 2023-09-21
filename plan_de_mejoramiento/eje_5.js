let n = Number(prompt("digite un numero"))
let d = Number(prompt("digite un numero"))

var x = 2*d
var z = n%x
var v = n%d

if(z==0){
    alert(2)
}
if(v==0){
    alert(1)
}

if(!z==0 && !v==0){
    alert(0)
}
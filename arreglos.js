const comida=[
    "trigrillo",
    "bolon  mixto",
    "pizza",
    "chaulafan",
    "hamburguesa",
    function(){
        return"Bandera";
    }
]
//comida[0]="yogurt";
//console.log(comida)

comida["x"]="Parrillada";
const desayunos=[...comida];
desayunos[3]="yogurt"
console.log(comida[4])
//console.log(desayunos)
//const unionComidas=[...comida,...desayunos];
//console.log(unionComidas)
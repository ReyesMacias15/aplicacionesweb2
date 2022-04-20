function operacion(n1,n2,operador){
    switch (operador) {
        case "+":
            return n1+n2;
        case "-":
            return n1-n2;
        case "*":
            return n1*n2;
        case "/":
            return n1/n2;
           
        default:0
            break;
    }
}

function saludar(nombre){
    console.log("Hola",nombre)
}
exports.module={
    saludar
//    iva:12
}
var valor = parseInt(2)
var pos, neg, par, imp = 0

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

switch(valor){
    case 0:
        if (valor > 0) {
            pos++;
        }
        break
    case 1:
        if (valor < 0) {
            neg++;
        }
        break
    case 2:
        if (valor % 2 == 0) {
            par++;
        }
        break
    default:
        if (valor % 2 == 1) {
            imp++;
        }
        break
}

console.log(par + " pares")
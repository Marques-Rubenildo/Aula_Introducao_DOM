var vel = 85
var cMult = (vel - 60) * 10 //para cada quilômetro que o motorista passar acima do limite de velocidade, este será multiplicado por dez para retornar o valor total da multa.

console.log(`Sua velocidade foi registrada como ${vel}km/h`);

//Analisando os dados registrados pelo sistema para verificar se o motorista ultrapassou o limite de velocidade.
if (vel > 60) {
    console.log(`Você ultrapassou o limite de velocidade que é de 60km/h.`);
    console.log(`De acordo com o regulamento estadual de trânsito, você será multado em R$${cMult.toFixed(2)}`);
} else {
    console.log('Fique tranquilo, sua velocidade está dentro do limite proposto pela lei estadual de trânsito, não esqueça dop cinto de segurança e dirija sempre com cuidado!');
}
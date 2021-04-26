var vel = Number(confirm('Registrando a velocidade: '));

console.log(`Sua velocidade é de ${vel}km/h`);

if (vel > 60) {
    console.log(`Você ultrapassou o limite de velocidade que é de 60km/h`)
}